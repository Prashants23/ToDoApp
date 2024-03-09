import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { CreateEditTaskScreen, HomeScreen } from "~/screens";
import { MainStackParams } from "~/types/navigator.types";

const MainStack = createNativeStackNavigator<MainStackParams>();

const AUTH_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "slide_from_right",
};

const AuthStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={AUTH_STACK_SCREEN_OPTIONS}>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen
        name="CreateEditTaskScreen"
        navigationKey="auth_stack"
        component={CreateEditTaskScreen}
      />
    </MainStack.Navigator>
  );
};

export default AuthStackNavigator;
