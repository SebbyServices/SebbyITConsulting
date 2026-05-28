import type { ReactNode } from "react";
import { forwardRef } from "react";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-teal text-white hover:bg-teal/90 transition-colors",
  secondary: "border border-white/20 text-white hover:bg-white/5 transition-colors",
  ghost: "text-teal hover:bg-teal/10 transition-colors",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "button" | "a";
  href?: string;
  to?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps & React.HTMLAttributes<HTMLElement>>(
  (
    {
      variant = "primary",
      size = "md",
      as = "button",
      href,
      children,
      className,
      type = "button",
      onClick,
      ...props
    }: ButtonProps & React.HTMLAttributes<HTMLElement>,
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:ring-offset-2 focus:ring-offset-bg",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (as === "a" && href) {
      return (
        <a
          href={href}
          className={baseStyles}
          ref={ref as React.Ref<HTMLAnchorElement>}
          onClick={onClick as any}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        type={type as any}
        className={baseStyles}
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick as any}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
