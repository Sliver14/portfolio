"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const ParticleField = () => {
  const [particles, setParticles] = useState<{ x: string; y: string; scale: number; opacity: number; duration: number; moveX: string }[]>([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      scale: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 10 + 10,
      moveX: (Math.random() - 0.5) * 20 + "%",
    }));
    setParticles(newParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          initial={{
            left: p.x,
            top: p.y,
            scale: p.scale,
            opacity: p.opacity,
          }}
          animate={{
            top: ["-10%", "110%"],
            left: [p.x, `calc(${p.x} + ${p.moveX})`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const TypewriterText = ({ text, delay = 150, start = true }: { text: string; delay?: number; start?: boolean }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (!start) return;
    let index = 0;
    setIsDone(false);

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayText(text.substring(0, index + 1));
        index++;
        if (index >= text.length) {
          clearInterval(interval);
          setIsDone(true);
        }
      }, delay);
      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(startTimeout);
  }, [text, delay, start]);

  return (
    <span className="inline-flex items-center">
      {displayText}
      <span className={`inline-block w-[3px] h-[0.9em] bg-primary ml-1 ${isDone ? "animate-pulse" : "opacity-100"}`} style={{ verticalAlign: "middle" }} />
    </span>
  );
};

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      className="relative h-[100vh] max-h-[100vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* Ambient Spotlight Effect */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(600px circle at 50% 50%, var(--primary), transparent 40%)",
            opacity: mounted ? 0.3 : 0,
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />

        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />

        <ParticleField />
      </div>

      {/* Main Content */}
      <motion.div
        style={{
          opacity: mounted ? 1 : 0,
        }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto transition-opacity duration-500"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.9 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary mb-4 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          NOW ACCEPTING NEW PROJECTS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 leading-[1.1] relative"
        >
          Helping Businesses <br />
          <span className="text-gradient italic font-light">
            <TypewriterText text="Grow with" start={mounted} />
          </span>{" "}
          <br />
          Custom Software & AI Solutions

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%]"
            animate={{ translateX: ["200%", "-200%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto backdrop-blur-[2px]"
        >
          We partner with startups, SMEs, and enterprises to create digital solutions that streamline
          operations, automate repetitive work, enhance customer experiences, and support long-term business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/projects">
            <Button size="lg" className="rounded-full px-8 h-12 text-md shadow-glow group relative overflow-hidden">
              <span className="cursor-pointer relative z-10 flex items-center">
                See How We Help
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="cursor-pointer rounded-full px-8 h-12 text-md border-white/10 hover:bg-white/10 transition-colors glass"
            >
              Start Scaling
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none border-b border-white/5" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/30 flex flex-col items-center gap-2 pointer-events-none"
      >
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
};
