// import { create } from "zustand";
// import { MMKV } from "react-native-mmkv";

// const useTodoStore = create((set) => {
//   const storage = new MMKV();
//   return {
//     todos: JSON.parse(storage.getString("todoListData") || "null") || [],

//     addTodo: (todo) =>
//       set((state) => {
//         const updatedTodos = { ...state.todo, ...todo };
//         storage.set("todoListData", JSON.stringify(updatedTodos));
//         return { todos: updatedTodos };
//       }),

//     updateTodo: (updatedTodo) =>
//       set(() => {
//         storage.set("todoListData", JSON.stringify(updatedTodo));
//         return { todos: updatedTodo };
//       }),

//     deleteTodo: (dateMap, taskId) =>
//       set((state) => {
//         const updatedTodo = {
//           todo: {
//             ...state.todos.todo,
//             [dateMap]: state?.todos.todo?.[dateMap]?.filter(
//               (task) => task.taskId !== taskId
//             ),
//           },
//         };
//         storage.set("todoListData", JSON.stringify(updatedTodo));
//         return { todos: updatedTodo };
//       }),

//     markComplete: (dateMap, taskId, newStatus) =>
//       set((state) => {
//         const newDataSet = state?.todos?.todo?.[dateMap]?.map((task) => {
//           if (task.taskId === taskId) {
//             return {
//               ...task,
//               status: newStatus,
//             };
//           }
//           return task;
//         });
//         const updatedTodo = {
//           todo: {
//             ...state.todos.todo,
//             [dateMap]: newDataSet,
//           },
//         };
//         storage.set("todoListData", JSON.stringify(updatedTodo));
//         return { todos: updatedTodo };
//       }),

//     clearTodos: () =>
//       set(() => {
//         storage.set("todoListData", "");
//         return { todos: {} };
//       }),
//   };
// });

// export default useTodoStore;

import { create, SetState } from "zustand";
import { MMKV } from "react-native-mmkv";

interface Todo {
  taskId: string;
  name: string;
  category: string;
  date: string;
  status: boolean;
  description?: string;
}

interface TodoStoreState {
  todos: Record<string, Todo[]>;
  addTodo: (todo: Record<string, Todo[]>) => void;
  updateTodo: (updatedTodo: Record<string, Todo[]>) => void;
  deleteTodo: (dateMap: string, taskId: string) => void;
  markComplete: (dateMap: string, taskId: string, newStatus: boolean) => void;
  clearTodos: () => void;
}

const useTodoStore = create<TodoStoreState>((set: SetState<TodoStoreState>) => {
  const storage = new MMKV();

  const initialState =
    JSON.parse(storage.getString("todoListData") || "null") || {};

  return {
    todos: initialState,

    addTodo: (todo) => {
      const updatedTodos = { ...initialState, ...todo };
      storage.set("todoListData", JSON.stringify(updatedTodos));
      set({ todos: updatedTodos });
    },

    updateTodo: (updatedTodo) => {
      storage.set("todoListData", JSON.stringify(updatedTodo));
      set({ todos: updatedTodo });
    },

    deleteTodo: (dateMap, taskId) => {
      const updatedTodo = {
        ...initialState,
        [dateMap]: (initialState[dateMap] || []).filter(
          (task) => task.taskId !== taskId
        ),
      };
      storage.set("todoListData", JSON.stringify(updatedTodo));
      set({ todos: updatedTodo });
    },

    markComplete: (dateMap, taskId, newStatus) => {
      const newDataSet = (initialState[dateMap] || []).map((task) => {
        if (task.taskId === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
      const updatedTodo = { ...initialState, [dateMap]: newDataSet };
      storage.set("todoListData", JSON.stringify(updatedTodo));
      set({ todos: updatedTodo });
    },

    clearTodos: () => {
      storage.set("todoListData", "");
      set({ todos: {} });
    },
  };
});

export default useTodoStore;
