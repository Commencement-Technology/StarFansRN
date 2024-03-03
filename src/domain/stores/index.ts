import { ICharactersStore } from "./characters/types";
import { charactersStore } from "@domain/stores/characters";

export interface IMainStore {
  charactersStore: ICharactersStore;
}

const mainStore: IMainStore = {
  charactersStore
};

export default mainStore;
