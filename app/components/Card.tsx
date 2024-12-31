import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";

export const CardButton = ({
  children,
  className = "",
  ...props
}: ComponentProps<typeof Button>) => {
  return (
    <Button {...props} className={`h-32 ${className}`} variant="outline">
      {children}
    </Button>
  );
};

export const CardList = ({ children, ...props }: ComponentProps<"div">) => {
  return (
    <div className="grid grid-cols-3 gap-4" {...props}>
      {children}
    </div>
  );
};
