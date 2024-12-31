import Link from "next/link";
import { fetchSubject } from "../../functions/apis/subject";
import { CardButton, CardList } from "@/app/components/Card";
import { TypographyH1 } from "@/components/ui/typography";

export default async function Subject() {
  const response = await fetchSubject(
    "https://d1e8m765cc.execute-api.ap-northeast-1.amazonaws.com/study/subject"
  );

  return (
    <div className="container md mx-auto mt-4">
      <div className="grid grid-cols-1 gap-4">
        <TypographyH1 className="text-center">なにであそぶ？</TypographyH1>
        <CardList>
          {response?.subject.map((s) => (
            <CardButton key={s.value} asChild>
              <Link href={`/${s.value}`}>{s.label}</Link>
            </CardButton>
          ))}
        </CardList>
      </div>
    </div>
  );
}
