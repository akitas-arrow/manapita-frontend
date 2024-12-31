import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { start } from "repl";

export type HiraganaQuizType = {
  questionIds: string[];
  currentQuestionIndex: number;
  wrongAnswerCount: number;
  step: "start" | "quiz" | "result";
};

const initialState: HiraganaQuizType = {
  questionIds: [],
  currentQuestionIndex: 0,
  wrongAnswerCount: 0,
  step: "start",
};

type SetQuestionIdsAction = PayloadAction<
  HiraganaQuizType["questionIds"] | undefined
>;

export const hiraganaQuizSlice = createSlice({
  name: "hiraganaQuiz",
  initialState,
  reducers: {
    nextStep: (state, action: SetQuestionIdsAction) => {
      if (
        state.step === "start" &&
        action.payload &&
        action.payload.length > 0
      ) {
        state.step = "quiz";
        state.questionIds = action.payload;
      } else if (state.currentQuestionIndex < state.questionIds.length - 1) {
        state.currentQuestionIndex++;
      } else {
        state.step = "result";
      }
    },
    setWrongAnswerCount: (state) => {
      state.wrongAnswerCount++;
    },
    resetQuiz: (state) => {
      state.step = "start";
      state.currentQuestionIndex = 0;
      state.wrongAnswerCount = 0;
      state.questionIds = [];
    },
  },
});

export const { nextStep, setWrongAnswerCount, resetQuiz } =
  hiraganaQuizSlice.actions;
export const hiraganaQuizReducer = hiraganaQuizSlice.reducer;
