import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | InsightNovaTech",
  description: "Transparent pricing for custom software, website, and mobile app development services by InsightNovaTech.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
