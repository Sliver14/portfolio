"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

export const VideoShowcase = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
        {/* Placeholder for video background */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-20" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Badge className="bg-primary/20 text-primary border-primary/30">CINEMATIC SHOWCASE</Badge>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter">
            GymPilotPro <br />
            <span className="text-muted-foreground italic font-light">In Motion.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Building the future of gym management through AI-driven automation and cinematic user experiences.
          </p>
          
          <div className="relative inline-block group">
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-24 h-24 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm cursor-pointer group-hover:scale-110 transition-transform">
               <Play className="w-8 h-8 fill-primary text-primary" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
