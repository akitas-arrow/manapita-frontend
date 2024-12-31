"use client";

import { nextQuiz } from "@/app/lib/redux/hiraganaQuizSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  categoryName: string;
};

export const NextQuestion = ({ categoryName }: Props) => {
  const hireganaQuiz = useAppSelector((state) => state.hiraganaQuiz);
  const nextQuizIndex = hireganaQuiz.currentQuestionIndex + 1;
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const next = (nextQuestionId: string) => {
    const nextPathName = pathname
      .split("/")
      .toSpliced(-2, 2, nextQuestionId)
      .join("/");
    dispatch(nextQuiz());
    router.push(`${nextPathName}/?category=${categoryName}`);
  };

  const onClickNext = () => {
    const nextQuestion = hireganaQuiz.questionIds[nextQuizIndex];
    if (nextQuestion) {
      next(nextQuestion);
    } else {
      router.push(`/hiragana/quiz/result/?category=${categoryName}`);
    }
  };

  return <button onClick={onClickNext}>つぎへ</button>;
};
