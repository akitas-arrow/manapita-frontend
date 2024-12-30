import Link from "next/link";
import { fetchSubjectCategories } from "../../functions/apis/subject";

export default async function Hiragana() {
  const response = await fetchSubjectCategories(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/subject/ひらがな`
  );

  return (
    <div>
      {response?.category.map((c) => (
        <Link href={`/hiragana/quiz?category=${c}`} key={c}>
          {c}
        </Link>
      ))}
    </div>
  );
}
