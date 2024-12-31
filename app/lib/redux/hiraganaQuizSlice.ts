import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type HiraganaQuizType = {
  questionIds: string[];
  currentQuestionIndex: number;
  wrongAnswerCount: number;
};

const initialState: HiraganaQuizType = {
  questionIds: [],
  currentQuestionIndex: 0,
  wrongAnswerCount: 0,
};

type SetQuestionIdsAction = PayloadAction<HiraganaQuizType["questionIds"]>;

export const hiraganaQuizSlice = createSlice({
  name: "hiraganaQuiz",
  initialState,
  reducers: {
    nextQuiz: (state) => {
      state.currentQuestionIndex++;
    },
    setQuestionIds: (state, action: SetQuestionIdsAction) => {
      state.questionIds = action.payload;
    },
    setWrongAnswerCount: (state) => {
      state.wrongAnswerCount++;
    },
  },
});

export const { nextQuiz, setQuestionIds, setWrongAnswerCount } =
  hiraganaQuizSlice.actions;
export const hiraganaQuizReducer = hiraganaQuizSlice.reducer;
