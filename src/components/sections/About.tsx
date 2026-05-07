"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Zap, Code2, Rocket, BrainCircuit } from "lucide-react";
import Image from "next/image";

export const About = () => {
  const highlights = [
    { icon: <Zap className="w-5 h-5 text-yellow-400" />, text: "Full-Stack Engineering" },
    { icon: <Code2 className="w-5 h-5 text-blue-400" />, text: "SaaS Architecture" },
    { icon: <BrainCircuit className="w-5 h-5 text-purple-400" />, text: "AI Integrations" },
    { icon: <Rocket className="w-5 h-5 text-green-400" />, text: "Product Strategy" },
  ];

  return (
    <Section id="about" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            THE STORY
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Building digital ecosystems <br />
            <span className="text-muted-foreground">with precision and intent.</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              My journey started with a simple question: How can we make software feel more human?
              Today, I build scalable SaaS products that solve real-world problems.
            </p>
            <p>
              As a founder and engineer, I bridge the gap between complex backend architectures and
              cinematic frontend experiences. I don&apos;t just write code; I build products that people
              love to use.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02]"
              >
                {h.icon}
                <span className="text-sm font-medium">{h.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center relative">
            <Image
              src="/sylver_portrait.png"
              alt="Sylver Portrait"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            />
            {/* Overlay for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay pointer-events-none" />
          </div>
          
          {/* Floating Metric Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl max-w-[200px] z-20"
          >
            <p className="text-3xl font-bold text-gradient">50+</p>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Clients Scaled Globally
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
