import Image from "next/image";
import { Options } from "./Options";
import {
  fetchQuestion,
  PostData,
  postResult,
} from "@/app/functions/apisClient/question";
import useSWR from "swr";
import { useState } from "react";
import { useAppDispatch } from "@/app/lib/redux/hooks";
import {
  nextStep,
  setWrongAnswerCount,
} from "@/app/lib/redux/hiraganaQuizSlice";
import useSWRMutation from "swr/mutation";
import { TypographyParagraph } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const generateOptions = (options: string[]) => {
  return options.map((option) => ({ label: option, isClicked: false }));
};

type Props = {
  categoryName: string;
  currentQuestionId: string;
};

export default function QuizStep({ categoryName, currentQuestionId }: Props) {
  const dispatch = useAppDispatch();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const { data: quiz, isLoading } = useSWR(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/question/${currentQuestionId}?category=${categoryName}`,
    fetchQuestion
  );

  const onSuccess = () => {
    setIsCorrect(true);
  };

  const { trigger } = useSWRMutation(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/result`,
    postResult,
    { throwOnError: false, onSuccess }
  );

  const selectCorrectOption = (hasWrongOption: boolean) => {
    if (hasWrongOption) {
      dispatch(setWrongAnswerCount());
    }
    const postData: PostData = {
      category: categoryName,
      is_wrong: hasWrongOption,
      question_id: currentQuestionId,
    };
    trigger(postData);
  };

  const nextQuestion = () => {
    setIsCorrect(false);
    dispatch(nextStep());
  };

  if (isLoading || !quiz) {
    return <p>よみこみちゅう</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <TypographyParagraph className="text-center">
        {isCorrect ? "せいかい！" : `この${categoryName}のなまえは？`}
      </TypographyParagraph>
      <div className="w-[360px] h-[240px] mx-auto relative">
        <Image
          src={quiz.question.image_url}
          alt={categoryName}
          className="object-contain"
          fill={true}
          sizes="360px"
        />
      </div>
      {isCorrect ? (
        <>
          <TypographyParagraph className="text-center">
            {quiz.question.answer}
          </TypographyParagraph>
          <Button
            variant="outline"
            className="w-1/3 mx-auto"
            onClick={nextQuestion}
          >
            つぎへ
          </Button>
        </>
      ) : (
        <Options
          defalutOptions={generateOptions(quiz.question.options)}
          answer={quiz.question.answer}
          selectCorrectOption={selectCorrectOption}
        />
      )}
    </div>
  );
}
