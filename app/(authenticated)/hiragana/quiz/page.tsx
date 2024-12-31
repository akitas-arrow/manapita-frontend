import { fetchQuestions } from "../../../functions/apis/question";
import { StartButton } from "./StartButton";
import Link from "next/link";

export default async function Questions({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const response = await fetchQuestions(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/question?category=${searchParams.category}`
  );

  return (
    <div>
      {response?.category ?? ""}
      <Link href="/hiragana">もどる</Link>
      <StartButton questionIds={response?.question_ids ?? []} />
    </div>
  );
}
