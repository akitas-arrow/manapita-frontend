import { ComponentProps } from "react";

export const CardList = ({ children, ...props }: ComponentProps<"div">) => {
  return (
    <div className="grid grid-cols-3 gap-10" {...props}>
      {children}
    </div>
  );
};
