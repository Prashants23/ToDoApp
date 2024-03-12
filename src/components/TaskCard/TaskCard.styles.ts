import { createStyleSheet } from "react-native-unistyles";
import { scale } from "~/utils/scale.utils";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    container: {
      flexDirection: "row",
      padding: 20,
      marginBottom: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#ccc",
      alignItems: "center",
      width: "90%",
    },
    toggleButton: {
      position: "absolute",
      top: 10,
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
      fontSize: 16,
      color: "#555",
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
      color: "#fff",
      fontWeight: "bold",
    },
  };
});
