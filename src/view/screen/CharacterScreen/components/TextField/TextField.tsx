import styles from "./styles";
import { View } from "react-native";
import React from "react";
import Text from "@components/typo/Text/Text";

type Props = { label: string; value: string };

const TextField = ({ label, value }: Props): React.ReactNode => (
  <View style={styles.wrapper}>
    <Text type="t6">{label}:</Text>
    <Text type="t5">{value}</Text>
  </View>
);

export default TextField;
