"use client";

import useSWR from "swr";
import { useSearchParams } from "next/navigation";
import { fetchQuestions } from "@/app/functions/apisClient/question";
import { useAppSelector } from "@/app/lib/redux/hooks";
import { StartStep } from "./StartStep";
import QuizStep from "./QuizStep";
import ResultStep from "./ResultStep";

export default function Quiz() {
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params).toString();
  const hiraganaQuiz = useAppSelector((state) => state.hiraganaQuiz);

  const { data: questions } = useSWR(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/question?${searchParams}`,
    fetchQuestions
  );

  return (
    <div>
      {hiraganaQuiz.step === "start" && (
        <StartStep questionIds={questions?.question_ids ?? []} />
      )}
      {hiraganaQuiz.step === "quiz" && (
        <QuizStep
          categoryName={questions?.category ?? ""}
          currentQuestionId={
            hiraganaQuiz.questionIds[hiraganaQuiz.currentQuestionIndex]
          }
        />
      )}
      {hiraganaQuiz.step === "result" && (
        <ResultStep categoryName={questions?.category ?? ""} />
      )}
    </div>
  );
}
