// // import React, { useState } from "react";
// // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// // import { Swipeable } from "react-native-gesture-handler";
// // import Animated, {
// //   Easing,
// //   useSharedValue,
// //   useAnimatedStyle,
// //   withTiming,
// // } from "react-native-reanimated";

// // const TaskCard = ({ title, description, initialState, onDelete }) => {
// //   const [completed, setCompleted] = useState(initialState === "completed");

// //   const bgColor = useSharedValue(completed ? "#e6e6e6" : "#fff");

// //   const animatedStyle = useAnimatedStyle(() => {
// //     return {
// //       backgroundColor: bgColor.value,
// //     };
// //   });

// //   const toggleTaskState = () => {
// //     setCompleted(!completed);
// //     bgColor.value = withTiming(completed ? "#fff" : "#e6e6e6", {
// //       duration: 500,
// //       easing: Easing.linear,
// //     });
// //   };

// //   const renderRightActions = () => (
// //     <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
// //       <Text style={styles.deleteButtonText}>Delete</Text>
// //     </TouchableOpacity>
// //   );

// //   return (
// //     <Swipeable
// //       renderRightActions={renderRightActions}
// //       overshootRight={true}
// //       onSwipeableRightOpen={onDelete}
// //     >
// //       <Animated.View style={[styles.container, animatedStyle]}>
// //         <TouchableOpacity onPress={toggleTaskState}>
// //           <Text style={styles.title}>{title}</Text>
// //           <Text style={styles.description}>{description}</Text>
// //         </TouchableOpacity>
// //       </Animated.View>
// //     </Swipeable>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     marginBottom: 10,
// //     borderRadius: 10,
// //     borderWidth: 1,
// //     borderColor: "#ccc",
// //   },
// //   title: {
// //     fontSize: 18,
// //     fontWeight: "bold",
// //     marginBottom: 5,
// //   },
// //   description: {
// //     fontSize: 16,
// //     color: "#555",
// //   },
// //   deleteButton: {
// //     backgroundColor: "#ff6347",
// //     justifyContent: "center",
// //     alignItems: "center",
// //     width: 100,
// //     borderRadius: 10,
// //   },
// //   deleteButtonText: {
// //     color: "#fff",
// //     fontWeight: "bold",
// //   },
// // });

// // export default TaskCard;

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import { Swipeable } from "react-native-gesture-handler";
// import Animated, {
//   Easing,
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from "react-native-reanimated";
// // import Icon from 'react-native-vector-icons/FontAwesome';
// import Ionicons from "@expo/vector-icons/Ionicons";

// const TaskCard = ({ title, description, initialState, onDelete }) => {
//   const [completed, setCompleted] = useState(initialState === "completed");

//   const bgColor = useSharedValue(completed ? "#e6e6e6" : "#fff");

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       backgroundColor: bgColor.value,
//     };
//   });

//   const toggleTaskState = () => {
//     setCompleted(!completed);
//     bgColor.value = withTiming(completed ? "#fff" : "#e6e6e6", {
//       duration: 500,
//       easing: Easing.linear,
//     });
//   };

//   const renderRightActions = () => (
//     <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
//       <Text style={styles.deleteButtonText}>Delete</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <Swipeable
//       renderRightActions={renderRightActions}
//       overshootRight={false}
//       onSwipeableRightOpen={onDelete}
//     >
//       <Animated.View style={[styles.container, animatedStyle]}>
//         <TouchableOpacity onPress={toggleTaskState} style={styles.toggleButton}>
//           <Ionicons
//             name={
//               completed ? "checkmark-done-circle" : "checkmark-circle-outline"
//             }
//             size={24}
//             color={completed ? "green" : "#ccc"}
//           />
//         </TouchableOpacity>
//         <View style={styles.content}>
//           <TouchableOpacity onPress={() => console.log("Edit pressed")}>
//             <Ionicons
//               name="pencil"
//               size={20}
//               color="#333"
//               style={styles.editIcon}
//             />
//           </TouchableOpacity>
//           <Text style={styles.title}>{title}</Text>
//           <Text
//             numberOfLines={2}
//             ellipsizeMode="tail"
//             style={styles.description}
//           >
//             {description}
//           </Text>
//         </View>
//       </Animated.View>
//     </Swipeable>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     padding: 20,
//     marginBottom: 10,
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     alignItems: "center",
//   },
//   toggleButton: {
//     marginRight: 10,
//   },
//   content: {
//     flex: 1,
//   },
//   editIcon: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 16,
//     color: "#555",
//   },
//   deleteButton: {
//     backgroundColor: "#ff6347",
//     justifyContent: "center",
//     alignItems: "center",
//     width: 100,
//     borderRadius: 10,
//   },
//   deleteButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
// });

// export default TaskCard;

import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useStyles } from "react-native-unistyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { styleSheet } from "./TaskCard.styles";

const TaskCard = ({ title, description, initialState, onDelete }) => {
  const [completed, setCompleted] = useState(initialState === "completed");

  const { styles } = useStyles(styleSheet);
  const bgColor = useSharedValue(completed ? "#e6e6e6" : "#fff");

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: bgColor.value,
    };
  });

  const toggleTaskState = () => {
    setCompleted(!completed);
    bgColor.value = withTiming(completed ? "#fff" : "#e6e6e6", {
      duration: 500,
      easing: Easing.linear,
    });
  };

  const renderRightActions = () => (
    <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
      <Text style={styles.deleteButtonText}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      // overshootRight={false}
      onSwipeableRightOpen={onDelete}
    >
      <Animated.View style={[styles.container, animatedStyle]}>
        <TouchableOpacity onPress={toggleTaskState} style={styles.toggleButton}>
          <Ionicons
            name={completed ? "checkmark-done-circle" : "checkbox-outline"}
            size={24}
            color={completed ? "green" : "#ccc"}
          />
        </TouchableOpacity>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => console.log("Edit pressed")}
            style={styles.editButton}
          >
            <Ionicons
              name="pencil"
              size={20}
              color="#333"
              // style={styles.editIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
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
