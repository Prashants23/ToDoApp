import { createStyleSheet } from "react-native-unistyles";
import { scale } from "~/utils/scale.utils";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    floatingBtnContainer: {
      position: "absolute",
      bottom: scale(60),
      right: scale(20),
    },
    button: {
      backgroundColor: colors.lightBlue,
      borderRadius: 50,
      width: scale(60),
      height: scale(60),
      justifyContent: "center",
      alignItems: "center",
      elevation: 5,
    },
  };
});
