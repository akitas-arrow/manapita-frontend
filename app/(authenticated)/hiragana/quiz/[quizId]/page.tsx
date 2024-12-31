import { fetchQuestion } from "@/app/functions/apis/question";
import Image from "next/image";
import { Options } from "./Options";

const generateOptions = (options: string[]) => {
  return options.map((option) => ({ label: option, isClicked: false }));
};

export default async function QuizDetail({
  params,
  searchParams,
}: {
  params: { quizId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response = await fetchQuestion(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/question/${params.quizId}?category=${searchParams.category}`
  );

  return (
    <div>
      <p>{`この${response?.category}のなまえは？`}</p>
      <Image
        src={response?.question.image_url ?? ""}
        alt={response?.category ?? ""}
        width={360}
        height={240}
      />
      <Options
        defalutOptions={generateOptions(response?.question.options ?? [])}
        answer={response?.question.answer ?? ""}
        categoryName={response?.category ?? ""}
      />
    </div>
  );
}
