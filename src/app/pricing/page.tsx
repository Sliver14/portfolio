"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Zap, Shield, Rocket, Settings, Globe, Smartphone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { useState, useEffect } from "react";

const websitePlans = [
  {
    title: "Starter Websites",
    priceNGN: 80000,
    description: "Perfect for landing pages, brand showcases, event registrations and simple business websites.",
    features: [
      "Up to 3 pages",
      "Responsive design",
      "Contact & lead forms",
      "WhatsApp & social integration",
      "Basic SEO configurations",
      "Production deployment",
    ],
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    popular: false,
  },
  {
    title: "Business Websites",
    priceNGN: 200000,
    description: "Professional multi-page websites designed for companies, brands and growing businesses.",
    features: [
      "5–8 custom pages",
      "Premium UI/UX layout",
      "SEO & speed optimization",
      "Analytics & tracking setup",
      "Lead generation & CRM integrations",
      "Interactive animations",
    ],
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    popular: true,
  },
  {
    title: "Custom Business Systems",
    priceNGN: 500000,
    description: "Powerful bespoke web platforms built to automate and power your business operations.",
    features: [
      "Secure user authentication",
      "Interactive admin dashboard",
      "Relational database integration",
      "Third-party API connections",
      "Role-based access controls",
      "Automation & cron workflows",
    ],
    icon: <Settings className="w-5 h-5 text-purple-400" />,
    popular: false,
  },
  {
    title: "Enterprise SaaS Platforms",
    priceNGN: 800000,
    description: "Tailored complex software platforms built for heavy scaling and advanced logic.",
    features: [
      "Bespoke modular dashboards",
      "Real-time analytics & reporting",
      "Workflow & email automation",
      "Advanced CRM & ERP integrations",
      "Multi-gateway payment systems",
      "High-availability architecture",
    ],
    details: "Examples: Real estate directories, LMS platforms, bespoke booking/reservations, inventory control engines, healthcare portals, etc.",
    icon: <Shield className="w-5 h-5 text-red-400" />,
    popular: false,
  },
];

const mobilePlans = [
  {
    title: "MVP / Prototype Apps",
    priceNGN: 300000,
    features: [
      "3–5 interactive screens",
      "Standard user onboarding",
      "RESTful API integration",
      "Instant push notifications",
      "Cross-platform support (iOS & Android)",
    ],
    icon: <Smartphone className="w-5 h-5 text-sky-400" />,
  },
  {
    title: "Standard Mobile SaaS",
    priceNGN: 800000,
    features: [
      "Complete client dashboards",
      "Mobile payment processing",
      "Bespoke admin console",
      "Automated notification triggers",
      "In-app search & activity feeds",
    ],
    icon: <Rocket className="w-5 h-5 text-indigo-400" />,
  },
  {
    title: "Enterprise Mobile Apps",
    priceNGN: 1500000,
    features: [
      "Offline sync capabilities",
      "Complex REST/GraphQL APIs",
      "Biometric security features",
      "Enterprise relational backend",
      "Multi-tenant application models",
    ],
    icon: <Shield className="w-5 h-5 text-amber-400" />,
  },
];

const maintenancePlans = [
  {
    title: "Basic Maintenance",
    priceNGN: 20000,
    period: "/mo",
    features: ["Bimonthly bug fixes", "Core dependency security patches", "Minor content & text updates"],
  },
  {
    title: "Standard Maintenance",
    priceNGN: 50000,
    period: "/mo",
    features: ["Everything in Basic", "Real-time performance metrics", "Biweekly updates & minor design upgrades"],
  },
  {
    title: "Premium Engineering Support",
    priceNGN: 100000,
    period: "/mo",
    features: ["Priority ticket handling", "Continuous feature development", "SaaS consulting hours", "Daily performance audits"],
  },
];

const addOns = [
  { name: "Extra Website Page", priceNGN: 15000 },
  { name: "Backend API Layer Expansion", priceNGN: 100000 },
  { name: "Payment Gateway Integration", priceNGN: 75000 },
  { name: "Multi-factor Authentication", priceNGN: 75000 },
  { name: "Admin Dashboard Control Panel", priceNGN: 150000 },
  { name: "Headless CMS Integration", priceNGN: 75000 },
  { name: "Transactional Email Automation", priceNGN: 50000 },
  { name: "WhatsApp Business API Setup", priceNGN: 30000 },
  { name: "Cloud Hosting & CI/CD Setup", priceNGN: 30000 },
  { name: "Custom Domain & Workspace Email", priceNGN: 20000 },
  { name: "Full-page SEO Audit & Setup", priceNGN: 50000 },
  { name: "Speed & Performance Auditing", priceNGN: 50000 },
  { name: "Push Notification Suite Setup", priceNGN: 50000 },
  { name: "App Store & Google Play Console Submission", priceNGN: 75000 },
];

export default function PricingPage() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("USD");

  useEffect(() => {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const isWestAfrican = 
        timeZone.includes("Lagos") || 
        timeZone.includes("Africa/Lagos") || 
        timeZone.includes("Africa/Accra") || 
        timeZone.includes("Africa/Nairobi") ||
        timeZone.includes("Africa/Johannesburg");
      
      if (isWestAfrican) {
        setCurrency("NGN");
      } else {
        setCurrency("USD");
      }
    } catch (e) {
      setCurrency("USD");
    }
  }, []);

  const formatPrice = (ngnVal: number, period: string = "") => {
    if (currency === "NGN") {
      return `₦${ngnVal.toLocaleString()}${period}`;
    } else {
      const usdVal = Math.round(ngnVal / 1500);
      return `$${usdVal.toLocaleString()}${period}`;
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <Section className="relative z-10 pt-32">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4">PRICING & PLANS</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Website & <span className="text-gradient">Mobile App</span> Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Transparent pricing based on project scope, features, and complexity.
            Every project is unique, so the figures below represent starting prices.
            A tailored quote will be provided after understanding your requirements.
          </motion.p>
        </div>

        {/* Currency Switcher Toggle */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
            <button
              onClick={() => setCurrency("NGN")}
              className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                currency === "NGN"
                  ? "bg-primary text-black shadow-glow"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              NGN (₦)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                currency === "USD"
                  ? "bg-primary text-black shadow-glow"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Website Plans */}
        <div className="space-y-12 mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-2xl font-bold tracking-tight text-white uppercase">Website Development</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websitePlans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className={`h-full bg-card/50 border-white/10 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden ${plan.popular ? 'border-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.3)]' : ''}`}>
                   {plan.popular && (
                     <div className="absolute top-0 right-0">
                       <div className="bg-primary text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                         <Sparkles className="w-3 h-3" /> POPULAR
                       </div>
                     </div>
                   )}
                  <CardHeader>
                    <div className="mb-4">{plan.icon}</div>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary mt-2">
                      {formatPrice(plan.priceNGN)}
                    </div>
                    <CardDescription className="mt-2 text-xs h-12 line-clamp-3">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {plan.details && (
                      <p className="text-[10px] text-muted-foreground/60 italic leading-relaxed pt-4 border-t border-white/5">
                        {plan.details}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Plans */}
        <div className="space-y-12 mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <h2 className="text-2xl font-bold tracking-tight text-white uppercase">Mobile App Development</h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mobilePlans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full bg-card/50 border-white/10 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{plan.icon}</div>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary mt-2">
                      Starting from {formatPrice(plan.priceNGN)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add-ons and Maintenance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          {/* Add-on Services Table */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-white uppercase mb-8">Add-on Services</h2>
            <div className="glass rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5 border-b border-white/10">
                    <th className="p-4 text-sm font-semibold text-white">Service</th>
                    <th className="p-4 text-sm font-semibold text-white">Starting From</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {addOns.map((service) => (
                    <tr key={service.name} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-sm text-muted-foreground">{service.name}</td>
                      <td className="p-4 text-sm font-medium text-primary">
                        {formatPrice(service.priceNGN)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Maintenance Plans */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white uppercase mb-8">Maintenance</h2>
            <div className="space-y-6">
              {maintenancePlans.map((plan, i) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="bg-card/50 border-white/10">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{plan.title}</CardTitle>
                        <span className="text-primary font-bold">
                          {formatPrice(plan.priceNGN, plan.period)}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold tracking-tight text-white uppercase mb-8 text-center">How We Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Discovery & Consultation",
              "Requirements & Proposal",
              "50% Deposit",
              "Design & Development",
              "Testing & Review",
              "Launch & Support"
            ].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass p-4 rounded-xl flex flex-col items-center text-center gap-3 group hover:border-primary/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {i + 1}
                </div>
                <span className="text-[10px] md:text-xs font-medium text-muted-foreground uppercase tracking-wider">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary to-accent-foreground p-8 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Need Something Custom?</h2>
            <p className="text-white/80 text-lg">
              Every project is different. Whether you&apos;re building a startup, internal business tool, 
              marketplace, AI product, SaaS platform, or mobile app, we&apos;ll provide a solution tailored to your goals.
            </p>
            <div className="pt-4">
              <Link href="/#contact">
                <Button size="lg" variant="secondary" className="rounded-full px-12 h-14 text-lg font-bold hover:scale-105 transition-transform bg-white text-black border-none">
                  Request a Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <footer className="mt-24 text-center text-muted-foreground text-sm max-w-2xl mx-auto">
          <p>
            Pricing serves as a guide only. Final quotations are based on project 
            requirements, integrations, timeline, and complexity.
          </p>
        </footer>
      </Section>
    </div>
  );
}
