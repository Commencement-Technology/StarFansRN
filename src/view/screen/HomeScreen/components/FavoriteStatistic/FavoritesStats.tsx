import styles from "./styles";
import { View } from "react-native";
import React from "react";
import Counter from "@components/controls/Counter/Counter";
import { SIZES } from "@constants/styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Card from "@components/card/BlurCard";
import Text from "@components/typo/Text/Text";
import { observer } from "mobx-react";
import { charactersStore } from "@domain/stores/characters";

const FavoritesStats = observer((): React.ReactNode => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrapper,
        {
          paddingTop: SIZES.HOME.HEADER + insets.top
        }
      ]}
    >
      <Card style={styles.item}>
        <Counter count={charactersStore.favoritesCounts.female} />
        <Text type="t8">Female</Text>
      </Card>

      <Card style={styles.item}>
        <Counter count={charactersStore.favoritesCounts.male} />
        <Text type="t8">Male</Text>
      </Card>

      <Card style={styles.item}>
        <Counter count={charactersStore.favoritesCounts.others} />
        <Text type="t8">Others</Text>
      </Card>
    </View>
  );
});

export default FavoritesStats;
