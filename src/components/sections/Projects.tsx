"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const Projects = () => {
  const flagship = PROJECTS.find((p) => p.id === "gym-pilot-pro");
  const featuredOthers = PROJECTS.filter((p) => p.id !== "gym-pilot-pro").slice(0, 2);

  return (
    <Section id="projects" className="space-y-24 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="outline" className="mb-4">PROJECTS</Badge>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Selected <span className="text-gradient">Architectures</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          A collection of high-performance SaaS platforms and modern web applications.
        </p>
      </div>

      {/* Flagship Project - Premium Split Layout */}
      {flagship && (
        <div className="group relative max-w-6xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur opacity-15 group-hover:opacity-30 transition duration-1000" />
          <Card className="relative overflow-hidden bg-background/50 border-white/10 rounded-[2rem] flex flex-col lg:flex-row items-stretch min-h-fit lg:min-h-[500px]">
            
            {/* Content Side - Left */}
            <div className="w-full lg:w-[50%] p-8 md:p-12 space-y-6 flex flex-col justify-center">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30 py-1 px-3 text-[10px] font-bold uppercase tracking-widest">
                  Flagship SaaS
                </Badge>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{flagship.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  {flagship.longDescription}
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {flagship.features.slice(0, 4).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="truncate">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  onClick={() => window.open('https://www.gympilotpro.com/', '_blank')}
                  className="hover:cursor-pointer rounded-full px-8 shadow-glow h-12"
                >
                  Live Preview <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  onClick={() => window.open('https://github.com/Sliver14/gympilotpro', '_blank')}
                  className="hover:cursor-pointer rounded-full px-8 border-white/10 h-12"
                >
                  <Code2 className="mr-2 w-4 h-4" /> Source
                </Button>
              </div>
            </div>

            {/* Media Side - Right (Contained & Rounded) */}
            <div className="w-full lg:w-[55%] relative min-h-[400px] lg:min-h-full p-4 md:p-8 lg:p-10 lg:pl-0 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden border border-white/10 bg-muted shadow-2xl group-hover:border-primary/40 transition-colors">
                <img
                  src={flagship.image}
                  alt={flagship.title}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Immersive Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent pointer-events-none" />
                
                {/* Interactive Glass Tag - Now inside the rounded frame */}
                <div className="absolute bottom-4 right-4 backdrop-blur-md bg-white/5 border border-white/10 px-3 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                  <p className="text-[9px] text-white font-medium tracking-[0.2em] uppercase">{flagship.tags[0]} + {flagship.tags[1]}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {featuredOthers.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            <Card className="h-full bg-background/50 border-white/5 overflow-hidden rounded-3xl hover:border-white/20 transition-all p-6 md:p-8 flex flex-col justify-between group/card">
              <div className="space-y-5">
                <div className="aspect-video rounded-xl bg-muted overflow-hidden relative border border-white/5">
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[9px] bg-white/5 px-2 py-0">{tag}</Badge>
                    ))}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold">{project.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-6">
                <Button variant="link" size="sm" className="p-0 text-primary hover:text-primary/80 h-auto text-xs">
                  Live <ArrowUpRight className="ml-1 w-3 h-3" />
                </Button>
                <div className="flex-1" />
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-white/5">
                  <Code2 className="w-3.5 h-3.5" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full hover:bg-white/5">
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/projects">
          <Button variant="outline" className="rounded-full px-10 h-12 text-base border-white/10 hover:bg-white/5 group">
            View Full Catalog
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Section>
  );
};
