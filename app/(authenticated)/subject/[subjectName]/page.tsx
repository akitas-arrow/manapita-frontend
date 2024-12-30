import Link from "next/link";
import { fetchSubjectCategories } from "../fetcher";

export default async function SubjectDetail({
  params,
}: {
  params: Promise<{ subjectName: string }>;
}) {
  const response = await fetchSubjectCategories(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/subject/${
      (
        await params
      ).subjectName
    }`
  );

  return (
    <div>
      {response?.category.map((c) => (
        <Link href={`/question?category=${c}`} key={c}>
          {c}
        </Link>
      ))}
    </div>
  );
}
