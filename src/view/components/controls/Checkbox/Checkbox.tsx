import styles from "./styles";
import { BlurMask, Canvas, Path, Skia } from "@shopify/react-native-skia";
import { COLORS } from "@constants/styles";
import React, { useCallback, useEffect, useState } from "react";
import { GestureResponderEvent, TouchableOpacity, ViewProps } from "react-native";
import RNReactNativeHapticFeedback from "react-native-haptic-feedback";

type Props = ViewProps & {
  color?: string;
  checked: boolean;
  onChange?: (checked: Props["checked"]) => void;
};
const svg = Skia.Path.MakeFromSVGString(
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
)?.offset(2, 2);

const Checkbox: React.FC<Props> = ({ color, ...props }: Props) => {
  const [checked, setChecked] = useState<Props["checked"]>(props.checked);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const onPress = useCallback(
    (event: GestureResponderEvent) => {
      event.preventDefault()
      const _checked = !checked;
      setChecked(_checked);
      RNReactNativeHapticFeedback.trigger("impactLight");
      if (props.onChange) {
        props.onChange(_checked);
      }
    },
    [checked, props]
  );

  return (
    <TouchableOpacity
      hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
      activeOpacity={1}
      style={[props.style, styles.wrapper]}
      onPress={onPress}
    >
      <Canvas style={{ height: 28, width: 28 }}>
        <Path
          path={svg}
          color={COLORS.danger}
          style={checked ? "fill" : "stroke"}
          strokeWidth={1}
        />

        <BlurMask blur={2} style="solid" />
      </Canvas>
    </TouchableOpacity>
  );
};

Checkbox.defaultProps = {
  color: COLORS.main
};

export default Checkbox;
