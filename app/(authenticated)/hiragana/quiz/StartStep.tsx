"use client";

import { PageTitle } from "@/app/components/PageTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  handleStart: () => void;
  categoryName: string;
};

export const StartStep = ({ handleStart, categoryName }: Props) => {
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
