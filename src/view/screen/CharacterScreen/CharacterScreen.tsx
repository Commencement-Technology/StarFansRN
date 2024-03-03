import Header from "./components/Header/Header";
import styles from "./styles";
import Field from "./components/TextField/TextField";
import FavoriteField from "./components/FavoriteField/FavoriteField";
import { RootStackParamList } from "../../navigation/types";
import BlurBox from "@components/box/BlurBox/BlurBox";
import React from "react";
import { ScrollView, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SCREENS } from "@constants/screens";
import { charactersStore } from "@domain/stores/characters";
import { observer } from "mobx-react";

const CharacterScreen = observer(
  ({
    navigation,
    route
  }: NativeStackScreenProps<
    RootStackParamList,
    SCREENS.CHARACTER,
    "MyStack"
  >): JSX.Element => {
    const character = charactersStore._characters.get(route.params.characterId);

    // Throw back if something wrong with character
    if (!character) {
      navigation.goBack();
      return <></>;
    }

    return (
      <BlurBox bottomBlur={false}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.wrapper}
          bounces={false}
        >
          <Header />

          <Field label="Name" value={character?.name} />
          <Field label="Birth Year" value={character?.birth_year} />
          <Field label="Gender" value={character?.gender} />
          <Field label="Height" value={character?.height} />
          <Field label="Mass" value={character?.mass} />
          <Field label="Hair Color" value={character?.hair_color} />
          <Field label="Eye Color" value={character?.eye_color} />
          <Field label="Skin Color" value={character?.skin_color} />

          <FavoriteField character={character} />

          <View style={styles.container}></View>
        </ScrollView>
      </BlurBox>
    );
  }
);
export default CharacterScreen;
