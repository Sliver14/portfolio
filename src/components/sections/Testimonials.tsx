"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">TESTIMONIALS</Badge>
        <h2 className="text-4xl font-bold tracking-tight mb-6">
          Voices of <span className="text-gradient">Success</span>
        </h2>
        <p className="text-muted-foreground">
          What founders and product leaders say about working together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="p-8 bg-white/[0.02] border-white/5 rounded-3xl relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10" />
              <div className="relative z-10">
                <p className="text-lg text-muted-foreground mb-8 italic">
                  &quot;{t.text}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
