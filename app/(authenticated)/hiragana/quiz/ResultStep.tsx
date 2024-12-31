"use client";

import { resetQuiz } from "@/app/lib/redux/hiraganaQuizSlice";
import { useAppDispatch, useAppSelector } from "@/app/lib/redux/hooks";
import { Button } from "@/components/ui/button";
import { TypographyParagraph } from "@/components/ui/typography";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResultStep() {
  const dispatch = useAppDispatch();
  const hiraganaQuiz = useAppSelector((state) => state.hiraganaQuiz);
  const router = useRouter();
  const onClickReset = () => {
    dispatch(resetQuiz());
  };
  const backToSelectCategory = () => {
    dispatch(resetQuiz());
    router.push("/hiragana");
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {hiraganaQuiz.wrongAnswerCount === 0 ? (
        <PerfectScore />
      ) : hiraganaQuiz.wrongAnswerCount <= 3 ? (
        <GreatScore />
      ) : hiraganaQuiz.wrongAnswerCount <= 6 ? (
        <GoodScore />
      ) : (
        <FightingScore />
      )}
      <TypographyParagraph className="text-center">
        まちがえたもんだいのかず：{hiraganaQuiz.wrongAnswerCount}
      </TypographyParagraph>
      <Button
        variant="outline"
        className="w-1/3 mx-auto"
        onClick={onClickReset}
      >
        もういっかい
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="w-1/3 mx-auto"
        onClick={backToSelectCategory}
      >
        とじる
      </Button>
    </div>
  );
}

const PerfectScore = () => {
  return (
    <>
      <TypographyParagraph className="text-center">
        かんぺき！
      </TypographyParagraph>
      <div className="w-[360px] h-[240px] mx-auto relative">
        <Image
          src="/perfect.jpg"
          alt="かんぺき"
          fill={true}
          sizes="360px"
          className="object-contain"
        />
      </div>
    </>
  );
};

const GreatScore = () => {
  return (
    <>
      <TypographyParagraph className="text-center">
        すごい！
      </TypographyParagraph>
      <div className="w-[360px] h-[240px] mx-auto relative">
        <Image
          src="/great.jpg"
          alt="かんぺき"
          fill={true}
          sizes="360px"
          className="object-contain"
        />
      </div>
    </>
  );
};

const GoodScore = () => {
  return (
    <>
      <TypographyParagraph className="text-center">
        そのちょうし！
      </TypographyParagraph>
      <div className="w-[360px] h-[240px] mx-auto relative">
        <Image
          src="/good.jpg"
          alt="かんぺき"
          fill={true}
          sizes="360px"
          className="object-contain"
        />
      </div>
    </>
  );
};

const FightingScore = () => {
  return (
    <>
      <TypographyParagraph className="text-center">
        がんばれ！
      </TypographyParagraph>
      <div className="w-[360px] h-[240px] mx-auto relative">
        <Image
          src="/fight.jpg"
          alt="かんぺき"
          fill={true}
          sizes="360px"
          className="object-contain"
        />
      </div>
    </>
  );
};
