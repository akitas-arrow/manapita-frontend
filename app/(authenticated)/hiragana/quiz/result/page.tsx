"use client";

import { useAppSelector } from "@/app/lib/redux/hooks";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function QuestionResult() {
  const pathname = usePathname();
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params);
  const categoryName = searchParams.get("category");
  const hiraganaQuiz = useAppSelector((state) => state.hiraganaQuiz);

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
      <Link href={`/hiragana/quiz?category=${categoryName ?? ""}`}>
        もういっかい
      </Link>
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
