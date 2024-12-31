"use client";

import { nextStep } from "@/app/lib/redux/hiraganaQuizSlice";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import Link from "next/link";

type Props = {
  questionIds: string[];
};

export const StartStep = ({ questionIds }: Props) => {
  const dispatch = useAppDispatch();

  const handleStart = () => {
    dispatch(nextStep(questionIds));
  };

  return (
    <>
      <button onClick={handleStart}>すたーと</button>
      <Link href="/hiragana">もどる</Link>
    </>
  );
};
