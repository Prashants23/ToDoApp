export type AuthStackParams = {
  LaunchScreen: undefined;
  EnterNameScreen: undefined;
};
export type MainStackParams = {
  HomeScreen: undefined;
  CreateEditTaskScreen: {
    taskId: string;
    dateMap: string;
  };
  ViewAllTasksScreen: undefined;
};
