import { fetchQuestion } from "@/app/functions/apis/question";
import Image from "next/image";
import { NextQuestion } from "./NextQuestion";

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
      <p>せいかい！</p>
      <Image
        src={response?.question.image_url ?? ""}
        alt={response?.category ?? ""}
        width={360}
        height={240}
      />
      <p>{response?.question.answer ?? ""}</p>
      <NextQuestion
        categoryName={
          typeof searchParams.category === "string" ? searchParams.category : ""
        }
      />
    </div>
  );
}
