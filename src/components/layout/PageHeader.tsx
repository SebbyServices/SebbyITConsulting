import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

type PageHeaderProps = {
  eyebrow?: string;
  h1: string;
  sub?: string;
  children?: ReactNode;
};

// Top band for inner pages: soft surface background, left-aligned heading.
export function PageHeader({ eyebrow, h1, sub, children }: PageHeaderProps) {
  return (
    <section className="bg-surface border-b border-line pt-32 pb-16 md:pt-40 md:pb-20">
      <Container className="space-y-8">
        <SectionHeading eyebrow={eyebrow} h1={h1} sub={sub} align="left" />
        {children}
      </Container>
    </section>
  );
}
