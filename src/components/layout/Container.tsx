import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={cn("max-w-content mx-auto px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
