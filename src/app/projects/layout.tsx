import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Catalog | InsightNovaTech",
  description: "A comprehensive showcase of client work, SaaS platforms, and software architectures built by InsightNovaTech.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
