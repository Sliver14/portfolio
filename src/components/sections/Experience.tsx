"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const Experience = () => {
  return (
    <Section id="experience">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <Badge variant="outline" className="mb-4">MINDSET</Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-6">
            Building with <br />
            <span className="text-gradient">Precision</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            My career is defined by building products from the ground up. I thrive in the intersection of business logic and technical execution.
          </p>
          
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Products Launched</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <p className="text-2xl font-bold text-white">100k+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Lines of Clean Code</p>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 space-y-8">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="p-8 bg-background/50 border-white/5 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-black italic">{idx + 1}</span>
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 max-w-xl">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
