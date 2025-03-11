import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90 active:bg-primary-dull",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-primary bg-background text-primary shadow-sm hover:bg-primary-pale active:bg-primary-pale active:text-primary-dull active:border-primary-dull",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:bg-secondary-dull",
        ghost: "hover:bg-secondary/80 active:bg-secondary-dull",
        link: "text-primary underline-offset-4 hover:underline",
        wrong:
          "border border-primary bg-background text-primary shadow-sm hover:bg-primary-pale active:bg-primary-pale active:text-primary-dull active:border-primary-dull disabled:border-destructive-dull disabled:text-destructive-dull",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-16 rounded-md px-8 text-xl",
        xl: "h-40 rounded-md px-8 text-2xl",
        icon: "h-9 w-9",
      },
      animate: {
        wrong: "animate-wrongOption",
        none: "",
      },
      isDisabled: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "wrong",
        isDisabled: true,
        class:
          "animate-wrongOption pointer-events-none before:absolute before:w-[95px] before:bg-destructive/20 before:h-[11px] before:rounded-full before:rotate-45 after:absolute after:h-[95px] after:bg-destructive/20 after:w-[11px] after:rounded-full after:rotate-45",
      },
      {
        variant: [
          "default",
          "destructive",
          "ghost",
          "link",
          "outline",
          "secondary",
        ],
        isDisabled: true,
        class: "pointer-events-none opacity-50",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      animate: "none",
      isDisabled: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, disabled = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className, isDisabled: disabled })
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
