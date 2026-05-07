"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Projects = () => {
  const flagship = PROJECTS.find((p) => p.id === "gym-pilot-pro");
  const others = PROJECTS.filter((p) => p.id !== "gym-pilot-pro");

  return (
    <Section id="projects" className="space-y-32">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <Badge variant="outline" className="mb-4">PROJECTS</Badge>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Selected <span className="text-gradient">Architectures</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          A collection of high-performance SaaS platforms and modern web applications.
        </p>
      </div>

      {/* Flagship Project */}
      {flagship && (
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          <Card className="relative overflow-hidden bg-background/50 border-white/10 rounded-[2rem] p-8 md:p-12 lg:flex gap-12 items-center">
            <div className="lg:w-1/2 space-y-8">
              <Badge className="bg-primary/20 text-primary border-primary/30 py-1 px-4 text-xs font-bold uppercase tracking-widest">
                Flagship SaaS
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold">{flagship.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {flagship.longDescription}
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {flagship.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="rounded-full px-8 shadow-glow">
                  Live Preview <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="rounded-full px-8 border-white/10">
                  <Code2 className="mr-2 w-4 h-4" /> Source
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 mt-12 lg:mt-0 relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-muted group-hover:border-primary/50 transition-colors">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                  <span className="text-muted-foreground/20 font-bold text-4xl italic">Video Showcase</span>
               </div>
               {/* Video would go here */}
            </div>
          </Card>
        </div>
      )}

      {/* Other Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {others.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <Card className="h-full bg-background/50 border-white/5 overflow-hidden rounded-3xl hover:border-white/20 transition-all p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="aspect-video rounded-xl bg-muted overflow-hidden relative border border-white/5">
                   <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent flex items-center justify-center">
                     <span className="text-muted-foreground/10 font-bold">{project.title}</span>
                   </div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-[10px] bg-white/5">{tag}</Badge>
                    ))}
                  </div>
                  <h4 className="text-2xl font-bold">{project.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <Button variant="link" className="p-0 text-primary hover:text-primary/80 h-auto">
                  Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                </Button>
                <div className="flex-1" />
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5">
                  <Code2 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
