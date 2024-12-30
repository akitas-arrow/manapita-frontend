import Link from "next/link";
import { fetchSubject } from "./fetcher";

export default async function Subject() {
  const response = await fetchSubject(
    "https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/subject"
  );

  return (
    <div>
      {response?.subject.map((s) => (
        <Link href={`/subject/${s}`} key={s}>
          {s}
        </Link>
      ))}
    </div>
  );
}
