"use client";

import { useAppDispatch } from "@/app/lib/redux/hooks";
import { useState } from "react";

type Option = {
  label: string;
  isClicked: boolean;
};

type Props = {
  defalutOptions: Option[];
  selectCorrectOption: (hasWrongOption: boolean) => void;
  answer: string;
};

export const Options = ({
  defalutOptions,
  answer,
  selectCorrectOption,
}: Props) => {
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

  const onSelectCorrectOption = () => {
    const isHasWrongOption = options.some((option) => option.isClicked);
    selectCorrectOption(isHasWrongOption);
  };

  const onSelectOption = (index: number) => {
    if (options[index].label === answer) {
      onSelectCorrectOption();
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
