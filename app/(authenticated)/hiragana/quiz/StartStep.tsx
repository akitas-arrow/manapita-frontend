"use client";

import { PageTitle } from "@/app/components/PageTitle";
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
    <>
      <PageTitle>{categoryName}</PageTitle>
      <div className="w-1/3 mx-auto grid gap-4">
        <Button onClick={handleStart} size="lg">
          すたーと
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/hiragana">もどる</Link>
        </Button>
      </div>
    </>
  );
};
