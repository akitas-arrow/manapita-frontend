"use client";

import { resetQuiz } from "@/app/lib/redux/hiraganaQuizSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import Link from "next/link";

type Props = {
  categoryName: string;
};

export default function ResultStep({ categoryName }: Props) {
  const dispatch = useAppDispatch();
  const hiraganaQuiz = useAppSelector((state) => state.hiraganaQuiz);
  const onClickReset = () => {
    dispatch(resetQuiz());
  };

  return (
    <div>
      {hiraganaQuiz.wrongAnswerCount === 0 ? (
        <PerfectScore />
      ) : hiraganaQuiz.wrongAnswerCount <= 3 ? (
        <GreatScore />
      ) : hiraganaQuiz.wrongAnswerCount <= 6 ? (
        <GoodScore />
      ) : (
        <FightingScore />
      )}
      <p>まちがえたもんだいのかず：{hiraganaQuiz.wrongAnswerCount}</p>
      <button onClick={onClickReset}>もういっかい</button>
      <Link href={`/hiragana`}>とじる</Link>
    </div>
  );
}

const PerfectScore = () => {
  return (
    <div>
      <p>かんぺき！</p>
    </div>
  );
};

const GreatScore = () => {
  return (
    <div>
      <p>すごい！</p>
    </div>
  );
};

const GoodScore = () => {
  return (
    <div>
      <p>そのちょうし！</p>
    </div>
  );
};

const FightingScore = () => {
  return (
    <div>
      <p>がんばれ！</p>
    </div>
  );
};
