import Link from "next/link";
import { fetchSubjectCategories } from "../../functions/apis/subject";
import { CardButton, CardList } from "@/app/components/Card";
import { TypographyH1 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default async function Hiragana() {
  const response = await fetchSubjectCategories(
    `https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/subject/ひらがな`
  );

  return (
    <div className="container md mx-auto mt-4">
      <div className="grid grid-cols-1 gap-4">
        <TypographyH1 className="text-center">
          もんだいのじゃんるをえらんでね
        </TypographyH1>
        <CardList>
          {response?.category.map((c) => (
            <CardButton asChild key={c}>
              <Link href={`/hiragana/quiz?category=${c}`}>{c}</Link>
            </CardButton>
          ))}
        </CardList>
        <Button variant="ghost" size="lg" asChild>
          <Link href="/subject">もどる</Link>
        </Button>
      </div>
    </div>
  );
}
