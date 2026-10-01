import type { ReactNode } from "react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "outlineInverse";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white shadow-sm hover:bg-brand-dark",
  secondary: "bg-white border border-line text-ink hover:border-brand/40 hover:text-brand",
  ghost: "text-brand hover:bg-brand-light",
  inverse: "bg-white text-ink hover:bg-brand-light",
  outlineInverse: "bg-white/10 text-white border border-white/25 hover:bg-white/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-base",
  lg: "px-7 py-4 text-base md:text-lg",
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
      "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/30",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    // Internal routes go through the router so navigation doesn't reload the page.
    if (as === "a" && href && href.startsWith("/") && !props.target) {
      return (
        <Link
          to={href}
          className={baseStyles}
          ref={ref as React.Ref<HTMLAnchorElement>}
          onClick={onClick as any}
          {...props}
        >
          {children}
        </Link>
      );
    }

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
