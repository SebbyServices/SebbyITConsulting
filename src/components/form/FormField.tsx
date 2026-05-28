import type { ReactNode } from "react";

type FormFieldProps = {
  label: string;
  children: ReactNode;
  error?: string;
};

export function FormField({ label, children, error }: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-text mb-2">
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs text-amber mt-1">{error}</p>
      )}
    </div>
  );
}
