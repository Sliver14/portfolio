import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Sylver Portfolio",
  description: "A comprehensive showcase of all products and applications built by Sylver.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
