import styles from "./styles";
import HeaderRow from "./components/CharacterTableHeaderRow/CharacterTableHeaderRow";
import { COLUMNS } from "../../types";
import { View } from "react-native";
import React from "react";
import { BlurMask, Canvas, Path, Skia } from "@shopify/react-native-skia";
import { COLORS } from "@constants/styles";
import Text from "@components/typo/Text/Text";

const svg = Skia.Path.MakeFromSVGString(
  "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
)?.offset(2, 2)!;

const CharacterTableHeader = (): React.ReactNode => (
  <View style={styles.wrapper}>
    <HeaderRow column={COLUMNS.FAVORITES}>
      <Canvas style={{ height: 28, width: 28 }}>
        <Path path={svg} color={COLORS.white} style={"fill"} strokeWidth={1} />

        <BlurMask blur={2} style="solid" />
      </Canvas>
    </HeaderRow>

    <HeaderRow column={COLUMNS.NAME}>
      <Text type="t6">Name</Text>
    </HeaderRow>

    <HeaderRow column={COLUMNS.GENDER} withoutBorder>
      <Text type="t6">Gender</Text>
    </HeaderRow>
  </View>
);

export default CharacterTableHeader;
