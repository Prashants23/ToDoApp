import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ViewStyle, TextStyle } from "react-native";
import { useStyles } from "react-native-unistyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styleSheet } from "./Header.style";

/**
 * The props for the Header component.
 */
interface HeaderProps {
  /**
   * A function that will be called when the back button is pressed.
   */
  onPressBack?: () => void;
  /**
   * The name of the screen to display in the header.
   */
  screenName?: string;
  transparent?: boolean;
  overrideStyles?: {
    container?: ViewStyle;
    title?: TextStyle;
  };
  leftButton?: boolean;
}

const Header = ({
  onPressBack,
  screenName,
  transparent,
  overrideStyles,
  leftButton,
}: HeaderProps) => {
  const navigation = useNavigation();

  const {
    styles,
    theme: { colors },
  } = useStyles(styleSheet);

  // If any override backPress function is passed, use that, otherwise use the default back handler
  const backHandler = () => {
    if (typeof onPressBack === "function") {
      onPressBack();
      return;
    }
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: transparent ? colors.transparent : colors.white,
          borderBottomWidth: transparent ? 0 : 1,
        },
        overrideStyles?.container,
      ]}
    >
      {leftButton && (
        <TouchableOpacity
          onPress={backHandler}
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
        >
          <Ionicons name="arrow-back" size={32} color="black" />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, overrideStyles.title]}>{screenName}</Text>
    </View>
  );
};

export default Header;
