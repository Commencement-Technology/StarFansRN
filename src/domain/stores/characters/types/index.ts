import { ICharacterEntity } from "@domain/entities/character";
import { HydrateStore } from "@domain/stores/types/HydrateStore";

export declare class ICharactersStore extends HydrateStore {
  public get charactersList(): ICharacterEntity[];

  public toggleFavorite(id: ICharacterEntity["id"]): void;

  public clearFavorites(): void;
}
