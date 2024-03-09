import { scale } from "./../../utils/scale.utils";
import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ colors, fonts }) => {
  return {
    pressableContainer: (disabled) => ({
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      height: scale(50),
      borderRadius: 15,
      backgroundColor: colors.lightBlue400,
      ...(disabled && { backgroundColor: colors.gray400 }),
    }),
    btnTextStyle: {
      fontSize: scale(18),
      color: colors.white,
    },
  };
});

export default styleSheet;
