import styles from "./styles";
import Row from "@components/block/Row/Row";

import { SIZES } from "@constants/styles";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Button from "@components/controls/Button/Button";
import { charactersStore } from "@domain/stores/characters";
import Title from "@components/typo/Title/Title";

const Header = (): JSX.Element => {
  const insets = useSafeAreaInsets();

  const onPress = () => {
    charactersStore.clearFavorites();
  };

  return (
    <Row
      style={[
        styles.wrapper,
        {
          height: SIZES.HOME.HEADER + insets.top
        }
      ]}
    >
      <Row style={[styles.row, { paddingTop: insets.top }]}>
        <Title text="Star Fans" />

        <Button
          text="Reset"
          onPress={onPress}
          textOptions={{ color: "blueGray", type: "t9" }}
        />
      </Row>
    </Row>
  );
};

export default Header;
