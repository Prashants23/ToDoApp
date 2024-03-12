import { createStyleSheet } from "react-native-unistyles";
import { scale } from "~/utils/scale.utils";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    container: (safeAreaTop) => ({
      flex: 1,
      backgroundColor: colors.white,
      top: safeAreaTop,
    }),
    subContainer: {
      flex: 1,
      // justifyContent: "center",
      paddingVertical: scale(40),
      paddingHorizontal: scale(20),
    },
    welcomeTextContainer: {
      width: "60%",
    },
    welcomeTextStyle: {
      fontSize: scale(12),
      color: colors.black,
    },
    welcomeTextMessageStyle: {
      fontSize: scale(18),
      fontWeight: "bold",
      marginVertical: scale(2),
      color: colors.black,
    },
    dateContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: scale(5),
      gap: scale(12),
    },
    headerTitle: {
      fontSize: scale(18),
      color: colors.gray800,
    },

    taskContainer: {
      marginTop: scale(10),
    },
    taskSectionTitle: {
      fontSize: scale(16),
      marginBottom: scale(10),
      fontWeight: "bold",
      color: colors.gray800,
    },

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

    taskCardContainer: {
      marginVertical: scale(15),
      height: scale(580),
      paddingBottom: scale(80),
      justifyContent: "space-between",
    },
    contentContainer: {
      paddingBottom: scale(108),
    },
  };
});
