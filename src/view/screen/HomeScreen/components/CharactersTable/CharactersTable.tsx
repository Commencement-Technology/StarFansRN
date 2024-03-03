import CharacterCard from "./components/CharacterCard/CharacterCard";
import styles from "./styles";
import CharacterTableFooter from "./components/CharacterTableFooter/CharacterTableFooter";
import CharacterTableHeader from "./components/CharacterTableHeader/CharacterTableHeader";
import { RootStackParamList } from "../../../../navigation/types";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import React, { useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SCREENS } from "@constants/screens";
import { StackNavigationProp } from "@react-navigation/stack";
import { charactersStore } from "@domain/stores/characters";
import { ICharacterEntity } from "@domain/entities/character";
import { View } from "react-native";
import Animated from "react-native-reanimated";

const CharactersTable = observer(() => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, SCREENS.HOME>>();
  const insets = useSafeAreaInsets();

  const handleOnPress = useCallback((id: ICharacterEntity["id"]): void => {
    navigation.navigate(SCREENS.CHARACTER, { characterId: id });
  }, []);

  const handleOnHeartPress = useCallback((id: ICharacterEntity["id"]): void => {
    charactersStore.toggleFavorite(id);
  }, []);

  return (
    <View style={styles.wrapper}>
      <CharacterTableHeader />

      <Animated.FlatList
        showsVerticalScrollIndicator={false}
        data={charactersStore.charactersList}
        style={styles.container}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={[{ paddingBottom: insets.bottom }]}
        refreshing={false}
        renderItem={({ item }) => (
          <CharacterCard
            key={item.id.toString()}
            character={item}
            onHeartPress={handleOnHeartPress}
            onPress={handleOnPress}
          />
        )}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={3}
        onEndReachedThreshold={0.1}
        onEndReached={charactersStore.fetchCharacters}
        ListFooterComponent={CharacterTableFooter}
      />
    </View>
  );
});

export default CharactersTable;
