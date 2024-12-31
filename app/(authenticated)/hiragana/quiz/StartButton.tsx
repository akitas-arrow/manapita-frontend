"use client";

import { setQuestionIds } from "@/app/lib/redux/hiraganaQuizSlice";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  questionIds: string[];
};

export const StartButton = ({ questionIds }: Props) => {
  const pathname = usePathname();
  const params = useSearchParams();
  const searchParams = new URLSearchParams(params);
  const dispatch = useAppDispatch();

  const handleStart = () => {
    dispatch(setQuestionIds(questionIds));
  };

  return (
    <Link
      href={{
        pathname: `${pathname}/${questionIds[0] ?? ""}`,
        query: searchParams.toString(),
      }}
      onClick={handleStart}
    >
      すたーと
    </Link>
  );
};
