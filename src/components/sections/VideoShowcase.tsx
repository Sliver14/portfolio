"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants";

export const VideoShowcase = () => {
  const flagship = PROJECTS.find((p) => p.id === "gym-pilot-pro");

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          <source src={flagship?.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1">
            CINEMATIC EXPERIENCE
          </Badge>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white">
            GymPilotPro <br />
            <span className="text-muted-foreground italic font-extralight">In Motion.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-light tracking-wide">
            Witness the future of fitness management. A seamless blend of AI intelligence and
            world-class product engineering.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pt-12"
          >
            <div className="inline-block px-8 py-4 border border-white/10 glass rounded-full text-sm font-medium tracking-widest uppercase text-white/80 hover:bg-white/5 transition-colors cursor-pointer">
              Building the future
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
