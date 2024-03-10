import { createStyleSheet } from "react-native-unistyles";
import { scale } from "~/utils/scale.utils";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    container: (safeAreaTop) => ({
      flex: 1,
      backgroundColor: colors.white,
      top: safeAreaTop,
      // paddingVertical: scale(50),
      // paddingHorizontal: scale(20),
    }),
    subContainer: {
      justifyContent: "center",
      paddingVertical: scale(20),
      paddingHorizontal: scale(20),
    },
    welcomeTextStyle: {
      fontSize: scale(18),
      fontWeight: "bold",
      color: colors.black,
    },
    dateContainer: {
      marginTop: scale(20),
      marginBottom: scale(5),
    },
    headerTitle: {
      fontSize: scale(18),
      color: colors.gray800,
    },
  };
});
