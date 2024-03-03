import React from "react";
import { BlurMask, Canvas, Text, useFont } from "@shopify/react-native-skia";
import { COLORS } from "@constants/styles";

type Props = { fontSize?: number; text: string };

const Title = ({ text, fontSize = 20 }: Props): React.ReactNode => {
  const font = useFont(
    require("@assets/fonts/Stellar/Starjedi.ttf"),
    fontSize + 2
  );
  return (
    <Canvas style={{ flex: 1, height: fontSize + 2 }}>
      <Text
        x={0}
        y={fontSize}
        color={COLORS.yellow}
        text={text}
        font={font}
        strokeWidth={1.7}
        style={"stroke"}
      />
      <BlurMask blur={2} style="solid" />
    </Canvas>
  );
};

export default Title;
