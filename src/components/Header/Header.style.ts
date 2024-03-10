import { createStyleSheet } from "react-native-unistyles";
import { scale } from "~/utils/scale.utils";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    container: {
      height: scale(48),
      paddingHorizontal: scale(20),
      alignItems: "center",
      flexDirection: "row",
      borderBottomColor: colors.gray200,
      borderBottomWidth: 1,
    },

    title: {
      // marginLeft: scale(12),
      fontWeight: "bold",
      fontSize: scale(20),
      color: colors.black,
      // width: scale(190),
      width: "100%",
      textAlign: "center",
    },
  };
});
