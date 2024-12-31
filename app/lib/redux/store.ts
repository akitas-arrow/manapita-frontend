import { configureStore } from "@reduxjs/toolkit";
import { hiraganaQuizReducer } from "./hiraganaQuizSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      hiraganaQuiz: hiraganaQuizReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
