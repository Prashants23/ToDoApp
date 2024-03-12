import { scale } from "./../../utils/scale.utils";
import { Dimensions, StyleSheet } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ colors, fonts }) => {
  return {
    screen: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      width: scale(244),
      height: scale(186),
    },
    title: {
      fontSize: scale(24),
      fontWeight: "bold",
      fontFamily: fonts.primaryBold,
      textAlign: "center",
      color: colors.black,
    },
    subTitle: {
      fontSize: scale(14),
      fontFamily: fonts.primaryRegular,
      marginVertical: scale(8),
      textAlign: "center",
      color: colors.black,
    },

    contentContainer: {
      marginVertical: scale(60),
    },

    btnStyle: {
      position: "absolute",
      bottom: scale(30),
      backgroundColor: colors.lightBlue,
    },
  };
});

export default styleSheet;
