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
    iconStyle: {
      backgroundColor: colors.gray500,
      marginRight: scale(10),
      paddingHorizontal: scale(3),
      paddingVertical: scale(4),
      borderRadius: scale(8),
      justifyContent: "center",
      alignItems: "center",
    },

    title: {
      fontWeight: "bold",
      fontSize: scale(16),
      color: colors.gray800,
      width: "80%",
      textAlign: "center",
    },
  };
});
