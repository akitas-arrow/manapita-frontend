import { ComponentProps } from "react";

export function TypographyH1({
  children,
  className = "",
  ...props
}: ComponentProps<"h1">) {
  return (
    <h1
      className={`scroll-m-20 text-3xl font-extrabold tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function TypographyParagraph({
  children,
  className = "",
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}
