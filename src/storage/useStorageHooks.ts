import { useMMKVObject } from "react-native-mmkv";

import { AuthDetails } from "~/types/storage.type";

import { STORAGE_KEYS } from "./index";

export const useAuthStorage = () => {
  return useMMKVObject<AuthDetails>(STORAGE_KEYS.AUTH_DETAILS);
};
