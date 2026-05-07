"use client";

import { PROJECTS } from "@/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code2, ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-20">
      <Section className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Full <span className="text-gradient">Catalog</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Exploring the complete archive of SaaS products, marketplaces, and personal brand experiences.
            </p>
          </div>
          <Badge variant="outline" className="h-fit py-2 px-4 border-white/10">
            {PROJECTS.length} PROJECTS TOTAL
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group h-full">
              <Card className="h-full bg-white/[0.02] border-white/5 overflow-hidden rounded-3xl hover:border-primary/30 transition-all p-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="aspect-video rounded-xl bg-muted overflow-hidden relative border border-white/5">
                     <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px] bg-white/5 border-white/5">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-8">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-full hover:bg-primary/10 hover:text-primary"
                    onClick={() => project.links.live && window.open(project.links.live, '_blank')}
                  >
                    Live <ExternalLink className="ml-2 w-3 h-3" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="rounded-full hover:bg-primary/10 hover:text-primary"
                    onClick={() => project.links.github && window.open(project.links.github, '_blank')}
                  >
                    Repo <Code2 className="ml-2 w-3 h-3" />
                  </Button>
                  <div className="flex-1" />
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
