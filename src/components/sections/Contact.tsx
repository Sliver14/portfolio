"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <Badge variant="outline" className="mb-4">CONTACT</Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Let&apos;s build <br />
            <span className="text-gradient">something legendary.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-md">
            Whether you have a fully-fledged SaaS idea or just a spark of inspiration, let&apos;s talk about how we can scale it.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Email</p>
                    <p className="font-medium">hello@yourportfolio.com</p>
                </div>
            </div>
            <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Social</p>
                    <p className="font-medium">@yourusername</p>
                </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-widest ml-1">Name</label>
                <Input placeholder="John Doe" className="bg-background/50 border-white/10 rounded-xl h-12 focus:border-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-widest ml-1">Email</label>
                <Input placeholder="john@example.com" type="email" className="bg-background/50 border-white/10 rounded-xl h-12 focus:border-primary/50" />
              </div>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-widest ml-1">Message</label>
                <Textarea placeholder="Tell me about your project..." className="bg-background/50 border-white/10 rounded-xl min-h-[150px] focus:border-primary/50" />
            </div>
            <Button className="w-full h-14 rounded-xl text-lg font-bold shadow-glow group">
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};
