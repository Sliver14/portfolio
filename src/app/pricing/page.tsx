"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Zap, Shield, Rocket, Settings, Globe, Smartphone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const websitePlans = [
  {
    title: "Starter Websites",
    price: "₦80,000",
    description: "Perfect for landing pages, portfolios, event registrations and simple business websites.",
    features: [
      "Up to 3 pages",
      "Responsive design",
      "Contact forms",
      "WhatsApp integration",
      "Basic SEO",
      "Deployment",
    ],
    icon: <Zap className="w-5 h-5 text-green-400" />,
    color: "green",
  },
  {
    title: "Business Websites",
    price: "₦200,000",
    description: "Professional websites for companies, brands and growing businesses.",
    features: [
      "5–8 pages",
      "Modern UI/UX",
      "SEO ready",
      "Performance optimization",
      "Analytics setup",
      "Lead generation forms",
    ],
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    color: "blue",
    popular: true,
  },
  {
    title: "Custom Business Systems",
    price: "₦500,000",
    description: "Powerful web applications built around your business operations.",
    features: [
      "Authentication",
      "Admin dashboard",
      "Database integration",
      "APIs",
      "Role-based access",
      "Automation workflows",
    ],
    icon: <Settings className="w-5 h-5 text-purple-400" />,
    color: "purple",
  },
  {
    title: "Enterprise Platforms",
    price: "₦800,000",
    description: "Tailored platforms designed for complex industries and organisations.",
    features: [
      "Custom dashboards",
      "Reporting & analytics",
      "Workflow automation",
      "CRM integrations",
      "Payment systems",
      "Scalable architecture",
    ],
    details: "Examples: Property listing platforms, LMS, CRMs, booking systems, inventory systems, healthcare portals and more.",
    icon: <Shield className="w-5 h-5 text-red-400" />,
    color: "red",
  },
];

const mobilePlans = [
  {
    title: "MVP / Simple Apps",
    price: "₦300,000",
    features: [
      "3–5 screens",
      "User authentication",
      "API integration",
      "Push notifications",
      "Cross-platform support",
    ],
    icon: <Smartphone className="w-5 h-5 text-sky-400" />,
  },
  {
    title: "Standard Apps",
    price: "₦800,000",
    features: [
      "User dashboards",
      "Payments",
      "Admin panel",
      "Notifications",
      "Analytics",
    ],
    icon: <Rocket className="w-5 h-5 text-indigo-400" />,
  },
  {
    title: "Enterprise Apps",
    price: "₦1,500,000",
    features: [
      "Offline support",
      "Complex APIs",
      "Advanced security",
      "Scalable backend",
      "Multi-role systems",
    ],
    icon: <Shield className="w-5 h-5 text-amber-400" />,
  },
];

const maintenancePlans = [
  {
    title: "Basic",
    price: "₦20,000/mo",
    features: ["Bug fixes", "Security updates", "Minor content updates"],
  },
  {
    title: "Standard",
    price: "₦50,000/mo",
    features: ["Everything in Basic", "Performance monitoring", "Regular updates", "Small improvements"],
  },
  {
    title: "Premium",
    price: "₦100,000+/mo",
    features: ["Priority support", "Feature enhancements", "Technical consulting", "Continuous optimization"],
  },
];

const addOns = [
  { name: "Extra Website Page", price: "₦15,000" },
  { name: "Backend/API Development", price: "₦100,000" },
  { name: "Payment Gateway Integration", price: "₦75,000" },
  { name: "Authentication System", price: "₦75,000" },
  { name: "Admin Dashboard", price: "₦150,000" },
  { name: "Blog/CMS", price: "₦75,000" },
  { name: "Email Automation", price: "₦50,000" },
  { name: "WhatsApp Integration", price: "₦30,000" },
  { name: "Hosting & Deployment", price: "₦30,000" },
  { name: "Domain & Email Setup", price: "₦20,000" },
  { name: "SEO Optimization", price: "₦50,000" },
  { name: "Performance Optimization", price: "₦50,000" },
  { name: "Push Notifications", price: "₦50,000" },
  { name: "Play Store / App Store Publishing", price: "₦75,000" },
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <Section className="relative z-10 pt-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
                <Card className={`h-full bg-card/50 border-white/10 hover:border-primary/40 transition-all duration-300 relative group overflow-hidden ${plan.popular ? 'neon-border' : ''}`}>
                   {plan.popular && (
                     <div className="absolute top-0 right-0">
                       <div className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                         <Sparkles className="w-3 h-3" /> POPULAR
                       </div>
                     </div>
                   )}
                  <CardHeader>
                    <div className="mb-4">{plan.icon}</div>
                    <CardTitle className="text-xl">{plan.title}</CardTitle>
                    <div className="text-2xl font-bold text-primary mt-2">{plan.price}</div>
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
                    <div className="text-2xl font-bold text-primary mt-2">Starting from {plan.price}</div>
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
                      <td className="p-4 text-sm font-medium text-primary">{service.price}</td>
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
                        <span className="text-primary font-bold">{plan.price}</span>
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
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary to-blue-600 p-8 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-noise opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Need Something Custom?</h2>
            <p className="text-white/80 text-lg">
              Every project is different. Whether you&apos;re building a startup, internal business tool, 
              marketplace, AI product, SaaS platform, or mobile app, I&apos;ll provide a solution tailored to your goals.
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
