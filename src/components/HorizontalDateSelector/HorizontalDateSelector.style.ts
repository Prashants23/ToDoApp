import { createStyleSheet } from "react-native-unistyles";
import { scale } from "~/utils/scale.utils";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    container: {
      overflow: "hidden",
      backgroundColor: colors.gray500,
      borderRadius: 10,
      paddingHorizontal: scale(5),
    },
    contentContainer: {
      height: scale(75),
      overflow: "hidden",
      padding: scale(8),
    },
    monthControl: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: scale(5),
      borderBottomWidth: 0.5,
      borderBottomColor: colors.white,
    },
    monthButton: {
      padding: scale(5),
    },
    monthButtonText: {
      fontSize: scale(20),
    },
    currentMonth: {
      fontSize: scale(15),
    },
    dateItem: {
      paddingVertical: scale(8),
      margin: scale(4),
      width: scale(40),
      textAlign: "center",
      borderRadius: 10,
      backgroundColor: colors.white,
    },
    selected: {
      backgroundColor: colors.lightBlue,
    },
    dateText: {
      fontSize: scale(12),
      textAlign: "center",
    },
    selectedDateText: {
      textAlign: "center",
      color: colors.white,
      fontWeight: "700",
    },
  };
});
