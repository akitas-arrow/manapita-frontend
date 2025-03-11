import Image from "next/image";
import { Options } from "./Options";
import {
  fetchQuestion,
  PostData,
  postResult,
} from "@/app/functions/apisClient/question";
import useSWR from "swr";
import { useState } from "react";
import useSWRMutation from "swr/mutation";
import { TypographyParagraph } from "@/components/ui/typography";
import { Button } from "@/app/components/Button";
import { PageLoader } from "@/app/components/PageLoader";
import { Loader } from "@/app/components/Loader";

const generateOptions = (options: string[]) => {
  return options.map((option) => ({ label: option, isClicked: false }));
};

type Props = {
  categoryName: string;
  currentQuestionId: string;
  setWrongAnswerCount: () => void;
  next: () => void;
};

export default function QuizStep({
  categoryName,
  currentQuestionId,
  setWrongAnswerCount,
  next,
}: Props) {
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isLoadingImg, setIsLoadingImg] = useState<boolean>(true);
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
      setWrongAnswerCount();
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
    setIsLoadingImg(true);
    next();
  };

  const onLoadingComplete = () => {
    setIsLoadingImg(false);
  };

  if (isLoading || !quiz) {
    return <PageLoader />;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <TypographyParagraph
        className={isCorrect ? "text-center animate-bounce" : "text-center"}
      >
        {isCorrect ? "せいかい 🎉" : `この${categoryName}のなまえは？`}
      </TypographyParagraph>
      <div className="w-[360px] h-[240px] mx-auto relative">
        {isLoadingImg && <ImageLoader />}
        <Image
          src={quiz.question.image_url}
          alt={categoryName}
          className="object-contain"
          fill={true}
          sizes="360px"
          onLoad={onLoadingComplete}
        />
      </div>

      {isCorrect ? (
        <>
          <TypographyParagraph className="text-center">
            {quiz.question.answer}
          </TypographyParagraph>
          <Button className="w-1/3 mx-auto" size="lg" onClick={nextQuestion}>
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

const ImageLoader = () => {
  return (
    <>
      <Loader className="w-[80px] h-full place-self-center" />
    </>
  );
};
