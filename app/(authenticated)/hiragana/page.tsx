import Link from "next/link";
import { fetchSubjectCategories } from "../../functions/apis/subject";
import { CardList } from "@/app/components/CardList";
import { Button } from "@/app/components/Button";
import { PageTitle } from "@/app/components/PageTitle";

export default async function Hiragana() {
  const response = await fetchSubjectCategories(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/subject/ひらがな`
  );

  return (
    <>
      <PageTitle>もんだいのじゃんるをえらんでね</PageTitle>
      <CardList>
        {response?.category.map((c) => (
          <Button asChild key={c} size={"xl"} variant={"outline"}>
            <Link href={`/hiragana/quiz?category=${c}`}>{c}</Link>
          </Button>
        ))}
      </CardList>
      <div className="mt-10 mx-auto w-1/3">
        <Button variant="secondary" size="lg" asChild className="w-full">
          <Link href="/subject">もどる</Link>
        </Button>
      </div>
    </>
  );
}
