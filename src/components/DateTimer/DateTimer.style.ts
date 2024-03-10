import { scale } from "./../../utils/scale.utils";
import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    text: {
      fontSize: scale(14),
      fontWeight: "500",
      color: colors.black100,
    },
  };
});
