import { useReducer } from "react";

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

type HiraganaQuizAction =
  | { type: "NEXT_STEP"; payload?: string[] }
  | { type: "SET_WRONG_ANSWER_COUNT" }
  | { type: "RESET_QUIZ" };

const hiraganaQuizReducer = (
  state: HiraganaQuizType,
  action: HiraganaQuizAction
): HiraganaQuizType => {
  switch (action.type) {
    case "NEXT_STEP":
      if (
        state.step === "start" &&
        action.payload &&
        action.payload.length > 0
      ) {
        return {
          ...state,
          step: "quiz",
          questionIds: action.payload,
        };
      } else if (state.currentQuestionIndex < state.questionIds.length - 1) {
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
        };
      } else {
        return {
          ...state,
          step: "result",
        };
      }

    case "SET_WRONG_ANSWER_COUNT":
      return {
        ...state,
        wrongAnswerCount: state.wrongAnswerCount + 1,
      };

    case "RESET_QUIZ":
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

const useHiraganaQuiz = () => {
  const [state, dispatch] = useReducer(hiraganaQuizReducer, initialState);

  return { state, dispatch };
};

export { useHiraganaQuiz };
