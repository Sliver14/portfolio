import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Sylver Dev",
  description: "Transparent pricing for website and mobile app development services.",
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
