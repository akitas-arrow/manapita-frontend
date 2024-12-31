"use client";

import { setWrongAnswerCount } from "@/app/lib/redux/hiraganaQuizSlice";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type Option = {
  label: string;
  isClicked: boolean;
};

type Props = {
  defalutOptions: Option[];
  categoryName: string;
  answer: string;
};

export const Options = ({ defalutOptions, categoryName, answer }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [options, setOptions] = useState<Option[]>(defalutOptions);
  const dispatch = useAppDispatch();

  const selectWrongOptions = (index: number) => {
    const newOptions = options.map((option, i) => {
      if (i === index) {
        return { ...option, isClicked: true };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const selectCorrectOption = () => {
    const isHasWrongOption = options.some((option) => option.isClicked);
    if (isHasWrongOption) {
      dispatch(setWrongAnswerCount());
    }

    router.push(`${pathname}/correct?category=${categoryName}`);
  };

  const onSelectOption = (index: number) => {
    if (options[index].label === answer) {
      selectCorrectOption();
    } else {
      selectWrongOptions(index);
    }
  };

  return (
    <div>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelectOption(index)}
          disabled={option.isClicked}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
