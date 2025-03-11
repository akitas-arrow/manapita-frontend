"use client";

import { Button } from "@/app/components/Button";
import { TypographyParagraph } from "@/components/ui/typography";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  resetQuiz: () => void;
  wrongAnswerCount: number;
  onMutate: () => void;
};

export default function ResultStep({
  resetQuiz,
  wrongAnswerCount,
  onMutate,
}: Props) {
  const router = useRouter();

  const onClickReset = () => {
    resetQuiz();
    onMutate();
  };

  const backToSelectCategory = () => {
    router.push("/hiragana");
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {wrongAnswerCount === 0 ? (
        <PerfectScore />
      ) : wrongAnswerCount <= 3 ? (
        <GreatScore />
      ) : wrongAnswerCount <= 6 ? (
        <GoodScore />
      ) : (
        <FightingScore />
      )}
      <TypographyParagraph className="text-center">
        まちがえたもんだいのかず：{wrongAnswerCount}
      </TypographyParagraph>
      <Button size="lg" className="w-1/3 mx-auto" onClick={onClickReset}>
        もういっかい
      </Button>
      <Button
        variant="secondary"
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
