import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex text-white h-10 w-full rounded-md border border-secondary/10 bg-[#0d0d0d] px-3 py-2 text-sm ring-offset-[#0d0d0d] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
