import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React from "react";
import { useStyles } from "react-native-unistyles";
import styleSheet from "./Button.style";

const Button = ({
  style,
  title,
  onPress,
  textStyle,
}: {
  title: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}) => {
  const { styles } = useStyles(styleSheet);
  return (
    <TouchableOpacity style={[styles.btnStyle, style]} onPress={onPress}>
      <Text style={[styles.btnTextStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
