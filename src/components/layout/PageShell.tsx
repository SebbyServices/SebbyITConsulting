import { useEffect, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { content } from "../../content/en";

type PageShellProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export function PageShell({ children, title, description }: PageShellProps) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${content.meta.legalName}`
      : `${content.meta.siteName} | Remote Tech Support in Miami, English & Español`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description ?? content.meta.defaultDescription);
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col bg-bg text-text">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
