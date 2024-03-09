import { scale } from "../../utils/scale.utils";
import { createStyleSheet } from "react-native-unistyles";

export const styleSheet = createStyleSheet(({ colors, fonts }) => {
  return {
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.white,
      paddingHorizontal: scale(20),
    },
    title: {
      fontSize: scale(24),
      fontWeight: "bold",
      fontFamily: fonts.primaryBold,
      textAlign: "center",
      marginBottom: scale(10),
    },
    subtitle: {
      fontSize: scale(14),
      fontFamily: fonts.primaryRegular,
      marginVertical: scale(8),
      textAlign: "center",
    },
    input: {
      width: "90%",
      height: scale(50),
      borderColor: colors.gray300,
      borderWidth: 1,
      marginBottom: scale(20),
      paddingHorizontal: scale(20),
      marginTop: scale(80),
      borderRadius: scale(15),
    },
    btnStyle: {
      marginVertical: scale(10),
      height: scale(50),
    },
    imageContainer: {
      width: scale(120),
      height: scale(120),
      marginVertical: scale(20),
    },
  };
});

export default styleSheet;
