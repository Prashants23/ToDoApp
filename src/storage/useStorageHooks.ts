import { useMMKVObject, MMKV } from "react-native-mmkv";

import { AuthDetails, TodoList } from "~/types/storage.type";

import { STORAGE_KEYS } from "./index";

export const useAuthStorage = () => {
  return useMMKVObject<AuthDetails>(STORAGE_KEYS.AUTH_DETAILS);
};

export const useTodoDataStorage = () => {
  return useMMKVObject<TodoList>(STORAGE_KEYS.TODO_LIST_DATA);
};
