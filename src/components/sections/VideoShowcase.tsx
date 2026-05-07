"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/constants";
import { Play, Pause, X } from "lucide-react";

export const VideoShowcase = () => {
  const flagship = PROJECTS.find((p) => p.id === "gym-pilot-pro");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Poster/Video Container */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isPlaying ? "opacity-100 scale-100" : "opacity-40 scale-105"
          }`}
        >
          <source src={flagship?.video} type="video/mp4" />
        </video>
        
        {/* Gradient overlays that fade out when playing */}
        <div className={`absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 transition-opacity duration-1000 ${isPlaying ? "opacity-0" : "opacity-100"}`} />
        <div className={`absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000 ${isPlaying ? "opacity-0" : "opacity-100"}`} />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <AnimatePresence mode="wait">
          {!isPlaying ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
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
                  onClick={togglePlay}
                  className="relative group flex items-center justify-center"
                >
                  <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-24 h-24 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm cursor-pointer transition-all">
                    <Play className="w-8 h-8 fill-primary text-primary ml-1" />
                  </div>
                  <span className="absolute -bottom-10 text-[10px] uppercase tracking-[0.3em] text-white/40 group-hover:text-white/80 transition-colors">
                    Click to play
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="controls"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* Overlay controls when playing */}
              <div className="fixed bottom-10 right-10 z-50 flex gap-4 pointer-events-auto">
                 <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                    title="Pause"
                  >
                    <Pause className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                        setIsPlaying(false);
                      }
                    }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                    title="Close"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isPlaying && <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />}
    </section>
  );
};
