import { COLORS } from "@constants/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  box: {
    backgroundColor: COLORS.main,
    borderRadius: 9,
    height: 18,
    width: 18
  },
  wrapper: {
    alignItems: "center",
    height: 24,

    justifyContent: "center",
    overflow: "hidden",
    width: 24
  }
});
