import { createStyleSheet } from "react-native-unistyles";
import { scale } from "~/utils/scale.utils";

export const styleSheet = createStyleSheet(({ colors }) => {
  return {
    rootContainer: {
      flex: 1,
      paddingTop: scale(30),
      backgroundColor: colors.white,
    },
    scrollContainer: {
      flexGrow: 1,
      paddingBottom: 20, // Adjust this value as needed
    },
    container: {
      paddingVertical: scale(10),
      backgroundColor: colors.white,
      paddingHorizontal: scale(20),
    },
    sectionContainer: {
      marginBottom: scale(20),
    },
    titleLabel: {
      marginVertical: scale(5),
    },
    heading: {
      fontSize: scale(16),
      fontWeight: "bold",
      color: colors.gray800,
      marginBottom: 10,
      textAlign: "center",
    },
    textInput: {
      padding: 10,
      borderRadius: scale(8),
      backgroundColor: colors.gray500,
    },
    categorySection: {
      marginBottom: scale(10),
    },
    sectionTitle: {
      fontSize: scale(16),
      color: colors.gray800,
      fontWeight: "bold",
      marginBottom: scale(12),
    },
    categoryRow: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    categoryButton: {
      padding: scale(8),
      borderRadius: scale(8),
      marginRight: scale(10),
      marginBottom: scale(10),
      backgroundColor: "#eee",
    },
    selectedCategory: {
      backgroundColor: colors.lightBlue,
    },
    categoryText: {
      fontSize: scale(12),
      color: colors.gray400,
    },
    selectedCategoryText: {
      color: colors.white,
    },
    datePicker: {
      marginBottom: scale(10),
    },
    descriptionInput: {
      padding: scale(10),
      marginBottom: scale(10),
      borderRadius: scale(8),
      textAlignVertical: "top",
      backgroundColor: colors.gray500,
    },
    errorText: {
      color: "red",
      marginBottom: scale(10),
    },
    createButton: {
      backgroundColor: colors.lightBlue,
      width: "100%",
      borderRadius: 8,
      alignItems: "center",
    },
    createButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    editBtn: {
      backgroundColor: colors.gray200,
      paddingVertical: scale(5),
      paddingHorizontal: scale(8),
      borderRadius: 5,
      zIndex: 999,
    },
    actionBtnContainer: {
      position: "absolute",
      top: 10,
      right: 20,
      flexDirection: "row",
      gap: 4,
    },
  };
});
