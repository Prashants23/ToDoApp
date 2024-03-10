import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthStackNavigator from "./AuthStackNavigator";
import MainStackNavigator from "./MainStackNavigator";
import { navigationRef } from "~/utils/navigator.utils";
import { useAuthStorage } from "~/storage/useStorageHooks";

SplashScreen.preventAutoHideAsync();

const AppNavigator = () => {
  // const isAuthenticated = false; // will be fetched from asyncstorage
  const [authDetails] = useAuthStorage();

  const { isAuthenticated = false } = authDetails || {};
  const onLayoutRootView = useCallback(async () => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer ref={navigationRef}>
        {!isAuthenticated ? <AuthStackNavigator /> : <MainStackNavigator />}
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default AppNavigator;
