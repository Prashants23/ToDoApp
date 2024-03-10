import { MMKV } from "react-native-mmkv";

import { AuthDetails } from "~/types/storage.type";

export const safeJsonParse = <T>(str: string) => {
  try {
    const jsonValue: T = JSON.parse(str);

    return jsonValue;
  } catch {
    return undefined;
  }
};

const storage = new MMKV();

export const STORAGE_KEYS = {
  AUTH_DETAILS: "authDetails",
} as const;

const StorageManager = {
  getData(): AuthDetails["tokens"] | null {
    const authDetails = storage.getString(STORAGE_KEYS.AUTH_DETAILS);
    return authDetails ? safeJsonParse<AuthDetails>(authDetails).tokens : null;
  },
  clearStorage() {
    storage.clearAll();
  },
};

export default StorageManager;
