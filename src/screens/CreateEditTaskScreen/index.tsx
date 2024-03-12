import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button, CategoryItem, HorizontalDateSelector } from "~/components";
import Header from "~/components/Header";
import useTodoStore from "~/hooks/zustandStore";
import { styleSheet } from "./CreateEditTaskScreen.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import { navigationRef } from "~/utils/navigator.utils";

const CATEGORY_OPTIONS = [
  { label: "Personal", value: "personal" },
  { label: "Work", value: "work" },
  { label: "Study", value: "study" },
  { label: "Health", value: "health" },
  { label: "Finance", value: "finance" },
  { label: "Other", value: "other" },
];

const CreateTask = ({ route }) => {
  const { taskId, dateMap } = route.params || {};
  const [taskName, setTaskName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_OPTIONS[0]);
  const [selectedDate, setSelectedDate] = useState(new Date(Date.now()));
  const [status, setStatus] = useState(false);
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const { addTodo, deleteTodo, todos, updateTodo } = useTodoStore() || {};
  const { styles } = useStyles(styleSheet);

  useEffect(() => {
    if (taskId) {
      const initialTaskData = todos?.todo?.[dateMap]?.find(
        (task) => task.taskId === taskId
      );
      setTaskName(initialTaskData?.name);
      setSelectedCategory(initialTaskData?.category);
      setSelectedDate(new Date(initialTaskData?.date));
      setDescription(initialTaskData?.description);
      setStatus(initialTaskData?.status);
    }
  }, [taskId]);

  const handleCreateTask = () => {
    setError(null);
    const trimmedTaskName = taskName.trim();
    if (!trimmedTaskName) {
      setError("Task name cannot be empty!");
      return;
    }
    if (trimmedTaskName.length > 50) {
      setError("Task name cannot be longer than 50 characters!");
      return;
    }

    const dateKey = moment(selectedDate).format("DD-MM-YYYY");
    const createdTask = {
      taskId: taskId || Date.now() + Math.random().toString(36).slice(2, 9),
      name: trimmedTaskName,
      category: selectedCategory,
      date: dateKey,
      status,
      description,
    };

    const updatedData = taskId
      ? todos?.todo?.[dateMap]?.map((task) =>
          task.taskId === taskId ? createdTask : task
        )
      : [...(todos?.todo?.[dateKey] || []), createdTask];

    const updatedTodo = {
      ...todos,
      todo: { ...todos?.todo, [dateKey]: updatedData },
    };

    if (taskId) updateTodo(updatedTodo);
    else addTodo(updatedTodo);

    navigationRef.current.goBack();
  };

  const handleEditTask = () => {
    setError(null); // Clear previous errors
    const trimmedTaskName = taskName.trim();
    if (!trimmedTaskName) {
      setError("Task name cannot be empty!");
      return;
    }
    if (trimmedTaskName.length > 50) {
      setError("Task name cannot be longer than 50 characters!");
      return;
    }

    const updatedData = todos?.todo?.[dateMap]?.map((task) => {
      if (task.taskId === taskId) {
        return {
          ...task,
          name: trimmedTaskName,
          category: selectedCategory,
          date: moment(selectedDate).format("DD-MM-YYYY"),
          status: status,
          description: description,
        };
      }
      return task;
    });

    const updatedTodo = {
      ...todos,
      todo: {
        ...todos.todo,
        [dateMap]: updatedData,
      },
    };
    updateTodo(updatedTodo);
    navigationRef.current.goBack();
  };

  const handleDeleteTask = () => {
    deleteTodo(dateMap, taskId);
    navigationRef.current.goBack();
  };

  const renderCategoryPicker = () => (
    <View style={styles.categorySection}>
      <Text style={styles.sectionTitle}>Category</Text>
      <FlatList
        data={CATEGORY_OPTIONS}
        numColumns={4}
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => (
          <CategoryItem
            setSelectedCategory={() => setSelectedCategory(item)}
            item={item}
            disabled={!((taskId && isEditing) || (!taskId && !isEditing))}
            styles={styles}
            selectedCategory={selectedCategory}
          />
        )}
      />
    </View>
  );

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.rootContainer}>
        <Header
          leftButton
          screenName={taskId ? "Edit Task" : "Create New Task"}
        />

        <View style={styles.container}>
          {taskId && (
            <View style={styles.actionBtnContainer}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={handleDeleteTask}
              >
                <Ionicons name={"trash"} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => setIsEditing(true)}
              >
                <Text>Edit</Text>
              </TouchableOpacity>
              {isEditing && (
                <TouchableOpacity
                  style={styles.editBtn}
                  onPress={() => setStatus((prev) => !prev)}
                >
                  <Text>Mark as {status ? "pending" : "complete"}</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Date</Text>
            <HorizontalDateSelector
              onDateSelected={setSelectedDate}
              initialDate={new Date()}
              disabled={taskId !== undefined}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Task Name</Text>
            {(taskId && isEditing) || (!taskId && !isEditing) ? (
              <TextInput
                style={styles.textInput}
                placeholder="Enter your task title"
                value={taskName}
                onChangeText={setTaskName}
              />
            ) : (
              <Text>{taskName}</Text>
            )}
          </View>
          {renderCategoryPicker()}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Description</Text>
            {(taskId && isEditing) || (!taskId && !isEditing) ? (
              <TextInput
                style={styles.descriptionInput}
                placeholder="Description (Optional)"
                multiline={true}
                numberOfLines={8}
                value={description}
                onChangeText={setDescription}
              />
            ) : (
              <Text>{description}</Text>
            )}
          </View>
          {error && <Text style={styles.errorText}>{error}</Text>}
          {(taskId && isEditing) || (!taskId && !isEditing) ? (
            <Button
              title={taskId && isEditing ? "Save Changes" : "Create Task"}
              onPress={taskId ? handleEditTask : handleCreateTask}
              style={styles.createButton}
            />
          ) : null}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CreateTask;
