"use client";

import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import { fetchQuestions } from "@/app/functions/apisClient/question";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { StartStep } from "./StartStep";
import QuizStep from "./QuizStep";
import ResultStep from "./ResultStep";
import { PageLoader } from "@/app/components/PageLoader";

export default function Quiz() {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params).toString();
  const hiraganaQuiz = useAppSelector((state) => state.hiraganaQuiz);

  const { data: questions, isLoading } = useSWR(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/question?${searchParams}`,
    fetchQuestions
  );

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="container sm mx-auto my-4">
      {hiraganaQuiz.step === "start" && (
        <StartStep
          questionIds={questions?.question_ids ?? []}
          categoryName={questions?.category ?? ""}
        />
      )}
      {hiraganaQuiz.step === "quiz" && (
        <QuizStep
          categoryName={questions?.category ?? ""}
          currentQuestionId={
            hiraganaQuiz.questionIds[hiraganaQuiz.currentQuestionIndex]
          }
        />
      )}
      {hiraganaQuiz.step === "result" && <ResultStep />}
    </div>
  );
}
