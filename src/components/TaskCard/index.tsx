import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useStyles } from "react-native-unistyles";
import Ionicons from "@expo/vector-icons/MaterialIcons";
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
  const {
    styles,
    theme: { colors },
  } = useStyles(styleSheet);

  const bgColor = useDerivedValue(() => {
    return withTiming(initialState ? colors.lightBlue : colors.white, {
      duration: 500,
      easing: Easing.linear,
    });
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: bgColor.value,
    };
  });

  const toggleTaskState = () => {
    onStatusToggle(!initialState);
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
        <TouchableOpacity
          onPress={toggleTaskState}
          style={styles.toggleButton}
          hitSlop={{ bottom: 10, top: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name={initialState ? "check-circle" : "circle"}
            size={24}
            color={initialState ? colors.white : colors.gray800}
          />
        </TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
          <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={[styles.title, initialState && styles.doneTask]}
          >
            {name}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[styles.description, initialState && styles.doneTask]}
          >
            {description}
          </Text>
        </View>
      </Animated.View>
    </Swipeable>
  );
};

export default TaskCard;
