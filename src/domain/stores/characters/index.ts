import { ICharactersStore } from "./types";
import { HydrateStore } from "../types/HydrateStore";
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction
} from "mobx";

import { CharacterEntity, ICharacterEntity } from "@domain/entities/character";
import axios from "axios";
import { getSnapshot } from "mobx-state-tree";

export class CharactersStore extends HydrateStore implements ICharactersStore {
  public _characters = new Map<number, ICharacterEntity>([]);

  public _favorites = new Map<number, ICharacterEntity>();

  public loading = true;

  private nextUrl = "https://swapi.dev/api/people/?page=1";

  public constructor() {
    super("CharactersStore", [
      {
        deserialize: (value): any => {
          if (value instanceof Map)
            return new Map(
              Array.from(value).map(([id, character]) => [
                id,
                CharacterEntity.create(character)
              ])
            );
        },
        key: "_favorites",
        serialize: (value: Map<number, ICharacterEntity>): any =>
          Array.from(value).map(([id, character]) => [
            id,
            getSnapshot(character)
          ])
      }
    ]);
    makeObservable(this, {
      _characters: observable,
      _favorites: observable,

      charactersList: computed,

      clearFavorites: action,
      fetchCharacters: action,
      toggleFavorite: action
    });
  }

  public get charactersList(): ICharacterEntity[] {
    return Array.from(this._characters, ([_, character]) => character);
  }

  public get favoritesCounts(): {
    male: number;
    female: number;
    others: number;
  } {
    const favorites = Array.from(
      this._favorites,
      ([_, character]) => character
    );
    const male = favorites.filter((char) => char.gender === "male").length;
    const female = favorites.filter((char) => char.gender === "female").length;
    const others = favorites.length - male - female;

    return {
      female,
      male,
      others
    };
  }

  public fetchCharacters = async (): Promise<void> => {
    try {
      this.loading = true;
      // Stop sending requests if the list is completely loaded
      if (!this.nextUrl) return;

      const response = await axios.get(`${this.nextUrl}`);

      response.data.results.forEach((character) => {
        const id = Number(character.url.match(/\/(\d+)\/$/)?.[1]) ?? 0;

        runInAction(() => {
          const isFavorite = this._favorites?.has(id);
          this._characters.set(
            id,
            CharacterEntity.create({ ...character, id, isFavorite })
          );
        });
      });

      this.nextUrl = response.data.next;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.error(error);
    }
  };

  public toggleFavorite = (id: ICharacterEntity["id"]): void => {
    const character = this._characters.get(id);
    character?.setFavorite(!character.isFavorite);

    if (character?.isFavorite) {
      this._favorites.set(id, character);
    } else {
      this._favorites.delete(id);
    }
  };

  public clearFavorites = (): void => {
    this._favorites.forEach((fav) => {
      const character = this._characters.get(fav.id);
      character?.setFavorite(false);
    });
    this._favorites.clear();
  };
}

export const charactersStore = new CharactersStore();
