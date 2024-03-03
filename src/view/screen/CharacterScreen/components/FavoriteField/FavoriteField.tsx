import styles from "./styles";
import { View } from "react-native";
import React from "react";
import { ICharacterEntity } from "@domain/entities/character";
import { charactersStore } from "@domain/stores/characters";
import { observer } from "mobx-react";
import Checkbox from "@components/controls/Checkbox/Checkbox";
import Text from "@components/typo/Text/Text";

type Props = { character: ICharacterEntity };

const FavoriteField = observer(({ character }: Props) => {
  const handleToggleFavorite = () => {
    charactersStore.toggleFavorite(character.id);
  };
  return (
    <View style={styles.wrapper}>
      <Text type="t6">Favorite:</Text>

      <Checkbox
        onChange={handleToggleFavorite}
        checked={character.isFavorite}
      />
    </View>
  );
});

export default FavoriteField;
