import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStyles } from "react-native-unistyles";
import { styleSheet } from "./HomeScreen.style";
import { useAuthStorage } from "~/storage/useStorageHooks";
import {
  DateTimer,
  FloatingButton,
  HorizontalDateSelector,
  TaskCard,
} from "~/components";

import { navigationRef } from "~/utils/navigator.utils";
import useTodoStore from "~/hooks/zustandStore";
import moment from "moment";
import { scale } from "~/utils/scale.utils";

const HomeScreen = () => {
  const { top: safeAreaTop } = useSafeAreaInsets();
  const { todos, deleteTodo, markComplete } = useTodoStore() || {};
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const [authDetails] = useAuthStorage();
  const {
    tokens: { name },
  } = authDetails || {};

  const {
    styles,
    theme: { colors },
  } = useStyles(styleSheet);

  const formattedDate = moment(selectedDate).format("DD-MM-YYYY");

  return (
    <View style={styles.container(safeAreaTop)}>
      <View style={styles.subContainer}>
        <View style={styles.dateContainer}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeTextStyle}>Welcome {name}!</Text>
            <Text style={styles.welcomeTextMessageStyle}>
              Ready To Do Your Daily Tasks
            </Text>
          </View>
          <DateTimer />
        </View>
        <View style={styles.taskContainer}>
          <HorizontalDateSelector
            initialDate={new Date()}
            onDateSelected={setSelectedDate}
          />
          <View style={styles.taskCardContainer}>
            <Text style={styles.taskSectionTitle}>Tasks</Text>
            <FlatList
              data={todos?.todo?.[formattedDate] || []}
              ListEmptyComponent={() => (
                <View>
                  <Text>No items to display</Text>
                </View>
              )}
              renderItem={({ item }) => (
                <TaskItem
                  item={item}
                  formattedDate={formattedDate}
                  markComplete={markComplete}
                  deleteTodo={deleteTodo}
                />
              )}
              keyExtractor={(item) => item.taskId}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainer}
            />
          </View>
        </View>
        <FloatingButton />
      </View>
    </View>
  );
};

const TaskItem = ({ item, formattedDate, markComplete, deleteTodo }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigationRef.current.navigate("CreateEditTaskScreen", {
          taskId: item?.taskId,
          dateMap: formattedDate,
        })
      }
      style={{ marginRight: scale(8) }}
    >
      <TaskCard
        category={item.category.label}
        name={item.name}
        description={item.description}
        initialState={item.status}
        onDelete={() => deleteTodo(formattedDate, item.taskId)}
        onStatusToggle={(data) =>
          markComplete(formattedDate, item.taskId, data)
        }
      />
    </TouchableOpacity>
  );
};

export default HomeScreen;
