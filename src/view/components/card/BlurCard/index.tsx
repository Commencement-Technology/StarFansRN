import styles from "./styles";
import React from "react";
import { View, ViewProps } from "react-native";
import Animated, { AnimateProps } from "react-native-reanimated";

type Props = AnimateProps<ViewProps> & {
  children?: React.ReactNode;
};

const Card: React.FC<Props> = ({ ...props }) => (
  <Animated.View {...props} style={[styles.wrapper, props.style]}>
    {props.children}

    <View
      style={[
        styles.background,
        { backgroundColor: "rgba(255, 255, 255, 0.12)" }
      ]}
    />
  </Animated.View>
);

export default Card;
