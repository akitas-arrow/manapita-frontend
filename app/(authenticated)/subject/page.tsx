import Link from "next/link";
import { fetchSubject } from "../../functions/apis/subject";
import { CardList } from "@/app/components/CardList";
import { Button } from "@/app/components/Button";
import { PageTitle } from "@/app/components/PageTitle";

export default async function Subject() {
  const response = await fetchSubject(
    "https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/subject"
  );

  return (
    <>
      <PageTitle>なにであそぶ？</PageTitle>
      <CardList>
        {response?.subject.map((s) => (
          <Button key={s.value} asChild size="xl" variant="outline">
            <Link href={`/${s.value}`}>{s.label}</Link>
          </Button>
        ))}
      </CardList>
    </>
  );
}
