import { fetchQuestions } from "../../../functions/apis/question";

export default async function Questions({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response = await fetchQuestions(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/question?category=${searchParams.category}`
  );

  console.log({ response });

  return <div>questions</div>;
}
