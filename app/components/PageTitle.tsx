import { TypographyH1 } from "@/components/ui/typography";
import { ComponentProps } from "react";

export const PageTitle = ({
  children,
}: ComponentProps<typeof TypographyH1>) => {
  return (
    <TypographyH1 className="mb-12 mx-auto w-fit">{children}</TypographyH1>
  );
};
