"use client";

import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import { fetchQuestions } from "@/app/functions/apisClient/question";
import { StartStep } from "./StartStep";
import QuizStep from "./QuizStep";
import ResultStep from "./ResultStep";
import { PageLoader } from "@/app/components/PageLoader";
import { useHiraganaQuiz } from "./hooks/useHiraganaQuiz";

export default function Quiz() {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params).toString();
  const { state, dispatch } = useHiraganaQuiz();

  const {
    data: questions,
    isLoading,
    mutate,
  } = useSWR(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/question?${searchParams}`,
    fetchQuestions
  );

  const handleStart = () => {
    dispatch({ type: "NEXT_STEP", payload: questions?.question_ids ?? [] });
  };

  const setWrongAnswerCount = () => {
    dispatch({ type: "SET_WRONG_ANSWER_COUNT" });
  };

  const next = () => {
    dispatch({ type: "NEXT_STEP" });
  };

  const resetQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
  };

  const onMutate = () => {
    mutate();
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      {state.step === "start" && (
        <StartStep
          handleStart={handleStart}
          categoryName={questions?.category ?? ""}
        />
      )}
      {state.step === "quiz" && (
        <QuizStep
          categoryName={questions?.category ?? ""}
          currentQuestionId={state.questionIds[state.currentQuestionIndex]}
          setWrongAnswerCount={setWrongAnswerCount}
          next={next}
        />
      )}
      {state.step === "result" && (
        <ResultStep
          resetQuiz={resetQuiz}
          wrongAnswerCount={state.wrongAnswerCount}
          onMutate={onMutate}
        />
      )}
    </>
  );
}
