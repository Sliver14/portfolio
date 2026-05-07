"use client";

import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

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

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
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

  // Mouse tracking motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Foreground tilt transforms - disabled on mobile
  const rotateX = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-15, 15]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-30, 30]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [-30, 30]);

  // Background parallax layers - disabled on mobile
  const bgTranslateX1 = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [-50, 50]);
  const bgTranslateY1 = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [-50, 50]);
  
  const bgTranslateX2 = useTransform(smoothX, [-0.5, 0.5], isMobile ? [0, 0] : [70, -70]);
  const bgTranslateY2 = useTransform(smoothY, [-0.5, 0.5], isMobile ? [0, 0] : [70, -70]);

  const gridScale = useTransform(smoothY, [-0.5, 0.5], isMobile ? [1, 1] : [1.05, 1.15]);

  // "Finger Pointer" Spotlight Transform
  const spotlightBg = useTransform(
    [smoothX, smoothY],
    ([x, y]) => {
      if (isMobile) return "radial-gradient(400px circle at 50% 50%, var(--primary), transparent 40%)";
      const px = (Number(x) + 0.5) * 100;
      const py = (Number(y) + 0.5) * 100;
      return `radial-gradient(150px circle at ${px}% ${py}%, var(--primary), transparent 100%), 
              radial-gradient(400px circle at ${px}% ${py}%, var(--primary), transparent 40%)`;
    }
  );

  // Magnetic Spotlight Dot Transforms
  const dotLeft = useTransform([smoothX], ([x]) => isMobile ? "50%" : `${(Number(x) + 0.5) * 100}%`);
  const dotTop = useTransform([smoothY], ([y]) => isMobile ? "50%" : `${(Number(y) + 0.5) * 100}%`);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 ${!isMobile ? 'perspective-1000' : ''}`}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Animated Grid */}
        <motion.div 
          style={{ 
            x: bgTranslateX1, 
            y: bgTranslateY1,
            scale: gridScale,
          }}
          className="absolute inset-0 bg-grid opacity-20" 
        />
        
        {/* Focused "Finger Pointer" Effect - Static on mobile */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: spotlightBg,
            opacity: mounted ? 0.3 : 0,
          }}
        />

        {/* Magnetic Spotlight Dot - Hidden or Static on mobile */}
        {!isMobile && (
          <motion.div
            className="absolute w-4 h-4 bg-primary rounded-full blur-sm"
            style={{
              left: dotLeft,
              top: dotTop,
              translateX: "-50%",
              translateY: "-50%",
              opacity: mounted ? 1 : 0,
            }}
          />
        )}

        {/* Floating Orbs */}
        <motion.div
          style={{ x: bgTranslateX1, y: bgTranslateY1 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ x: bgTranslateX2, y: bgTranslateY2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"
        />

        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
        
        <ParticleField />
      </div>

      {/* Main Content */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: !isMobile ? "preserve-3d" : "flat",
          opacity: mounted ? 1 : 0,
        }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto transition-opacity duration-500"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: mounted ? 1 : 0, scale: mounted ? 1 : 0.9 }}
          transition={{ duration: 0.5 }}
          style={{ transform: !isMobile ? "translateZ(50px)" : "none" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AVAILABLE FOR NEW PROJECTS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ transform: !isMobile ? "translateZ(80px)" : "none" }}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] relative"
        >
          Engineering <span className="text-gradient">Products</span> That <br />{" "}
          <span className="italic font-light">Scale</span> The Future
          
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
          style={{ transform: !isMobile ? "translateZ(40px)" : "none" }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto backdrop-blur-[2px]"
        >
          Full-Stack Developer, SaaS Founder, and Product Engineer. Specializing in high-performance
          applications and AI-driven ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ transform: !isMobile ? "translateZ(60px)" : "none" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/projects">
            <Button size="lg" className="rounded-full px-8 h-12 text-md shadow-glow group relative overflow-hidden">
              <span className="cursor-pointer relative z-10 flex items-center">
                View Projects
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
              Let&apos;s Build
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
