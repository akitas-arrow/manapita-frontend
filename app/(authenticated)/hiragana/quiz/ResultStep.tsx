"use client";

import { resetQuiz } from "@/app/lib/redux/hiraganaQuizSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import Image from "next/image";
import Link from "next/link";

export default function ResultStep() {
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
      <Image src="/perfect.jpg" alt="かんぺき" width={100} height={100} />
    </div>
  );
};

const GreatScore = () => {
  return (
    <div>
      <p>すごい！</p>
      <Image src="/great.jpg" alt="かんぺき" width={100} height={100} />
    </div>
  );
};

const GoodScore = () => {
  return (
    <div>
      <p>そのちょうし！</p>
      <Image src="/good.jpg" alt="かんぺき" width={100} height={100} />
    </div>
  );
};

const FightingScore = () => {
  return (
    <div>
      <p>がんばれ！</p>
      <Image src="/fight.jpg" alt="かんぺき" width={100} height={100} />
    </div>
  );
};
