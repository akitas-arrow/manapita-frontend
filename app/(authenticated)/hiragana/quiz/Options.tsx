"use client";

import { Button } from "@/app/components/Button";
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
    <div className="grid grid-cols-3 gap-5">
      {options.map((option, index) => (
        <Button
          variant={option.label === answer ? "outline" : "wrong"}
          key={index}
          size="lg"
          onClick={() => onSelectOption(index)}
          disabled={option.isClicked}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
