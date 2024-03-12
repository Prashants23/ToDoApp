import { useStyles } from "react-native-unistyles";
import IonIcon from "@expo/vector-icons/Entypo";
import { TouchableOpacity, View } from "react-native";
import { navigationRef } from "~/utils/navigator.utils";
import { styleSheet } from "./FloatingBtn.style";

const FloatingButton = () => {
  const {
    styles,
    theme: { colors },
  } = useStyles(styleSheet);
  return (
    <View style={styles.floatingBtnContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigationRef.current.navigate("CreateEditTaskScreen")}
      >
        <IonIcon name="plus" size={30} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;
