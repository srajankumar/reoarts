import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex z-50 text-white min-h-[80px] w-full rounded-md border border-secondary/10 bg-[#0d0d0d] px-3 py-2 text-sm ring-offset-[#0d0d0d] placeholder:text-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/80 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
