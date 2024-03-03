import styles from "./styles";
import { COLORS } from "@constants/styles";
import React, { forwardRef } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";

export type TextProps = RNTextProps & {
  type: keyof typeof styles;
  color?: keyof typeof COLORS;
};

const Text: React.FunctionComponent<TextProps> = forwardRef<RNText, TextProps>(
  ({ color = "white", ...props }, ref) => (
    <RNText
      {...props}
      ref={ref}
      style={[
        styles[props.type],
        { color: COLORS[color], flexShrink: 1 },
        props.style
      ]}
    />
  )
);

export default Text;
