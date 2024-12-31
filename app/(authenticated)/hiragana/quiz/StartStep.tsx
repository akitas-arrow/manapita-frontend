"use client";

import { CardButton } from "@/app/components/Card";
import { nextStep } from "@/app/lib/redux/hiraganaQuizSlice";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography";
import Link from "next/link";

type Props = {
  questionIds: string[];
  categoryName: string;
};

export const StartStep = ({ questionIds, categoryName }: Props) => {
  const dispatch = useAppDispatch();

  const handleStart = () => {
    dispatch(nextStep(questionIds));
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <TypographyH1 className="text-center">{categoryName}</TypographyH1>
      <CardButton onClick={handleStart} className="w-1/3 mx-auto">
        すたーと
      </CardButton>
      <Button asChild variant="ghost" className="w-1/3 mx-auto">
        <Link href="/hiragana">もどる</Link>
      </Button>
    </div>
  );
};
