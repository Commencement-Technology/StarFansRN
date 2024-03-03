import styles from "./styles";
import Text, { TextProps } from "@components/typo/Text/Text";

import React from "react";
import { TouchableOpacity, ViewProps } from "react-native";

type Props = ViewProps & {
  onPress?: () => void;
  text: string;
  textOptions: TextProps;
};

const Button = ({
  text,
  onPress,
  textOptions,
  style,
  ...props
}: Props): JSX.Element => (
  <TouchableOpacity
    {...props}
    style={[styles.wrapper, style]}
    onPress={onPress}
  >
    <Text color="white" type="t1" {...textOptions}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default Button;
