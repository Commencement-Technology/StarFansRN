import styles from "./styles";
import React, { useEffect } from "react";
import { BlurMask, Canvas, Path, Skia } from "@shopify/react-native-skia";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from "react-native-reanimated";
import { COLORS } from "@constants/styles";
import { View } from "react-native";

const svg = Skia.Path.MakeFromSVGString(
  `M25 13C25 15.7141 24.0799 18.3481 22.39 20.4718C20.7 22.5956 18.34 24.0838 15.6953 24.6934C13.0505 25.303 10.2772 24.998 7.82809 23.8283C5.379 22.6585 3.39879 20.6931 2.21073 18.2528C1.02268 15.8125 0.696965 13.0416 1.28676 10.3923C1.87656 7.74306 3.34702 5.37199 5.45811 3.6662C7.56919 1.96041 10.1962 1.02064 12.9102 1.00034C15.6242 0.980028 18.265 1.88037 20.4014 3.55439`
)?.offset(4, 4)!;

const Loader = (): React.ReactNode => {
  const rotate = useSharedValue("0deg");
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: rotate.value
      }
    ]
  }));

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming("360deg", { duration: 1000 }),
      Infinity
    );
  }, []);

  return (
    <View style={styles.wrapper}>
      <Animated.View style={animatedStyle}>
        <Canvas style={styles.loader}>
          <Path
            path={svg}
            color={COLORS.yellow}
            style={"stroke"}
            strokeWidth={3}
          />
          <BlurMask blur={2} style="solid" />
        </Canvas>
      </Animated.View>
    </View>
  );
};

export default Loader;
