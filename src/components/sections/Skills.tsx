"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <Section id="skills" className="relative">
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">STACK</Badge>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          The <span className="text-gradient">Arsenal</span>
        </h2>
        <p className="text-muted-foreground">
          A modern, battle-tested tech stack for building scalable digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div
            key={idx}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
          >
            <h3 className="text-xl font-bold mb-6 group-hover:text-primary transition-colors">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <motion.div key={skill} variants={item}>
                  <Badge
                    variant="secondary"
                    className="bg-background border border-white/5 text-muted-foreground hover:text-white hover:border-primary/50 transition-all cursor-default py-1.5 px-3"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
