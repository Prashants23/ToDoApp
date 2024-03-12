import { scale } from "./../../utils/scale.utils";
import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    container: {
      gap: scale(10),
      width: scale(100),
      paddingHorizontal: scale(10),
      paddingVertical: scale(10),
      backgroundColor: colors.gray100,
      borderRadius: 8,
      // elevation: 3,
    },
    text: {
      fontSize: scale(13),
      fontWeight: "500",
      color: colors.gray800,
    },
    textTitle: {
      color: colors.gray800,
      opacity: 0.7,
    },
  };
});
