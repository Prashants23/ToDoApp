import { createStyleSheet } from "react-native-unistyles";
import { scale } from "~/utils/scale.utils";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    container: {
      flexDirection: "row",
      padding: 20,
      marginBottom: 10,
      borderRadius: 10,
      borderWidth: 0.7,
      borderColor: colors.gray300,
      width: scale(150),
      height: scale(160),
      backgroundColor: colors.white,
    },
    toggleButton: {
      position: "absolute",
      top: 20,
      right: 10,
    },
    content: {
      flex: 1,
    },
    editButton: {
      position: "absolute",
      top: 10,
      right: 40,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      color: colors.black100,
    },
    deleteButton: {
      backgroundColor: "#ff6347",
      justifyContent: "center",
      alignItems: "center",
      width: scale(100),
      height: 90,
      // padding: 20,
      borderRadius: 10,
    },
    deleteButtonText: {
      color: colors.white,
      fontWeight: "bold",
    },
    categoryButton: {
      padding: scale(5),
      borderRadius: scale(8),
      marginRight: scale(10),
      marginBottom: scale(10),
      width: scale(60),
      elevation: 4,
      backgroundColor: colors.lightBlue,
    },
    categoryText: {
      fontSize: scale(10),
      color: colors.white,
      textAlign: "center",
    },
  };
});
