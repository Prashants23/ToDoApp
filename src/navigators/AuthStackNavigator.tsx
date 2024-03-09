import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { LaunchScreen, EnterNameScreen } from "~/screens";
import { AuthStackParams } from "~/types/navigator.types";

const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AUTH_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_right",
};

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={AUTH_STACK_SCREEN_OPTIONS}>
      <AuthStack.Screen name="LaunchScreen" component={LaunchScreen} />
      <AuthStack.Screen name="NameInputScreen" component={EnterNameScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
