import { SCREENS } from "@constants/screens";
import { ICharacterEntity } from "@domain/entities/character";

export type RootStackParamList = {
  [SCREENS.HOME]: undefined;
  [SCREENS.CHARACTER]: { characterId: ICharacterEntity["id"] };
};
