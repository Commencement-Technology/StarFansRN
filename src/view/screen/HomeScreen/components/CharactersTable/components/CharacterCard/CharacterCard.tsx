import styles from "./styles";
import { COLUMNS, Columns } from "../../types";
import Card from "@components/card/BlurCard";
import Checkbox from "@components/controls/Checkbox/Checkbox";
import Text from "@components/typo/Text/Text";
import { ICharacterEntity } from "@domain/entities/character";
import React, { useCallback } from "react";
import { TouchableOpacity, View, ViewProps } from "react-native";
import { FadeIn, FadeOut } from "react-native-reanimated";
import { observer } from "mobx-react";

type Props = ViewProps & {
  character: ICharacterEntity;
  onHeartPress: (id: ICharacterEntity["id"]) => void;
  onPress: (id: ICharacterEntity["id"]) => void;
};

const CharacterCard = observer(
  ({ character, onHeartPress, onPress }: Props): JSX.Element => {
    const handleOnHeartPress = useCallback(
      () => onHeartPress(character.id),
      []
    );

    const handleOnPress = useCallback(() => {
      onPress(character.id);
    }, []);

    const getStyleByColumn = useCallback(
      (column: COLUMNS) => ({ flex: Columns[column].size }),
      []
    );

    return (
      <TouchableOpacity onPress={handleOnPress}>
        <Card style={[styles.wrapper]} entering={FadeIn} exiting={FadeOut}>
          <View style={[styles.checkbox, getStyleByColumn(COLUMNS.FAVORITES)]}>
            <Checkbox
              onChange={handleOnHeartPress}
              checked={character.isFavorite}
            />
          </View>

          <Text
            type="t7"
            numberOfLines={1}
            style={[styles.text, getStyleByColumn(COLUMNS.NAME)]}
          >
            {character.name}
          </Text>

          <Text
            type="t7"
            numberOfLines={1}
            style={[styles.text, getStyleByColumn(COLUMNS.GENDER)]}
          >
            {character.gender}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
);

export default CharacterCard;
