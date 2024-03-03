import styles from "./styles";
import { RootStackParamList } from "../../../../navigation/types";
import Row from "@components/block/Row/Row";
import { Icon } from "@components/typo/Icon/Icon";
import { COLORS } from "@constants/styles";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "@constants/screens";
import { StackNavigationProp } from "@react-navigation/stack";
import Title from "@components/typo/Title/Title";

const Header = (): JSX.Element => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, SCREENS.HOME>>();

  const onPress = () => {
    navigation.goBack();
  };

  return (
    <Row style={[styles.wrapper]}>
      <Row style={[styles.row]}>
        <Title text="info" />

        <TouchableOpacity
          onPress={onPress}
          hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
        >
          <Icon name="Close" color={COLORS.blueGray} />
        </TouchableOpacity>
      </Row>
    </Row>
  );
};

export default Header;
