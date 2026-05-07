"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants";
import { Play } from "lucide-react";

export const VideoShowcase = () => {
  const flagship = PROJECTS.find((p) => p.id === "gym-pilot-pro");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        // Attempt to enter native full screen
        if (videoRef.current.requestFullscreen) {
          await videoRef.current.requestFullscreen();
        } else if ((videoRef.current as any).webkitRequestFullscreen) {
          /* Safari */
          await (videoRef.current as any).webkitRequestFullscreen();
        } else if ((videoRef.current as any).msRequestFullscreen) {
          /* IE11 */
          await (videoRef.current as any).msRequestFullscreen();
        }
        
        videoRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Error attempting to enable full-screen mode:", err);
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsPlaying(false);
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Poster Container */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-1000"
          poster="/projects/gympilot-poster.jpg" // Added poster support
        >
          <source src={flagship?.video} type="video/mp4" />
        </video>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
          
          <div className="pt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePlay}
              className="relative group flex items-center justify-center"
            >
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-24 h-24 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm cursor-pointer transition-all">
                <Play className="w-8 h-8 fill-primary text-primary ml-1" />
              </div>
              <span className="absolute -bottom-10 text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white/80 transition-colors">
                Watch full screen
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
