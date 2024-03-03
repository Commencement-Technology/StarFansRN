import { Instance, SnapshotIn, applySnapshot, t, types } from "mobx-state-tree";

export const CharacterEntity = t
  .model({
    birth_year: types.string,
    eye_color: types.string,
    gender: types.string,
    hair_color: types.string,
    height: types.string,
    id: types.number,
    isFavorite: types.optional(types.boolean, false),
    mass: types.string,
    name: types.string,
    skin_color: types.string,
    species: types.array(types.string)
  })
  .actions((self) => ({
    setFavorite: (isFavorite: boolean): void => {
      applySnapshot(self, { ...self, isFavorite });
    }
  }));

export type ICharacterEntity = Instance<typeof CharacterEntity>;

export type ICharacterEntityIn = SnapshotIn<typeof CharacterEntity>;
