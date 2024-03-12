import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { ViewStyle, TextStyle } from "react-native";
import { useStyles } from "react-native-unistyles";
import Ionicons from "@expo/vector-icons/Entypo";
import { styleSheet } from "./Header.style";
interface HeaderProps {
  onPressBack?: () => void;

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
        // overrideStyles?.container,
      ]}
    >
      {leftButton && (
        <TouchableOpacity
          onPress={backHandler}
          style={styles.iconStyle}
          hitSlop={{
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          }}
        >
          <Ionicons name="chevron-left" size={20} color={colors.gray800} />
        </TouchableOpacity>
      )}
      <Text style={[styles.title, overrideStyles?.title]}>{screenName}</Text>
    </View>
  );
};

export default Header;
