import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useStyles } from "react-native-unistyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  Easing,
  useDerivedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { styleSheet } from "./TaskCard.styles";
import { TaskCardProps } from "./types";

const TaskCard = ({
  name,
  description,
  category,
  onStatusToggle,
  onDelete,
  initialState,
}: TaskCardProps) => {
  const { styles, theme } = useStyles(styleSheet);

  const bgColor = useDerivedValue(() => {
    return withTiming(
      initialState ? theme.colors.lightBlue : theme.colors.white,
      {
        duration: 500,
        easing: Easing.linear,
      }
    );
  });
  console.log("initi", initialState);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: bgColor.value,
    };
  });

  const toggleTaskState = () => {
    onStatusToggle(initialState === "pending");
  };

  const renderRightActions = () => (
    <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableRightOpen={onDelete}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <TouchableOpacity onPress={toggleTaskState} style={styles.toggleButton}>
          <Ionicons
            name={initialState ? "checkmark-done-circle" : "checkbox-outline"}
            size={24}
            color={initialState ? "green" : "#ccc"}
          />
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <Text ellipsizeMode="tail" numberOfLines={3} style={styles.title}>
            {name}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.description}
          >
            {description}
          </Text>
        </View>
      </Animated.View>
    </Swipeable>
  );
};

export default TaskCard;
