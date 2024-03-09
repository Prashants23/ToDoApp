import { scale } from "./../../utils/scale.utils";
import { Dimensions, StyleSheet } from "react-native";
import { createStyleSheet } from "react-native-unistyles";
const { width: screenWidth } = Dimensions.get("screen");

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
    },
    subTitle: {
      fontSize: scale(14),
      fontFamily: fonts.primaryRegular,
      marginVertical: scale(8),
      textAlign: "center",
    },

    contentContainer: {
      marginVertical: scale(60),
    },

    btnStyle: {
      position: "absolute",
      bottom: scale(40),
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      height: scale(60),
      borderRadius: 15,
      backgroundColor: colors.lightBlue400,
    },
    btnTextStyle: {
      fontSize: scale(18),
      color: colors.white,
    },
  };
});

export default styleSheet;
