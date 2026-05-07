"use client";

import { useActionState, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/actions/contact";

export const Contact = () => {
  const [state, action, isPending] = useActionState(submitContactForm, null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (state?.success) {
      setIsSuccess(true);
      const timer = setTimeout(() => setIsSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

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
            <a 
              href="mailto:silverchristopher12@gmail.com" 
              className="flex items-center gap-4 group cursor-pointer"
            >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Email</p>
                    <p className="font-medium">silverchristopher12@gmail.com</p>
                </div>
            </a>
            
            <a 
              href="https://wa.me/2348135971304" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 group cursor-pointer"
            >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">WhatsApp</p>
                    <p className="font-medium">+234 813 597 1304</p>
                </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-8 md:p-12 rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-2xl relative overflow-hidden"
        >
          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-muted-foreground">
                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsSuccess(false)}
                className="mt-4"
              >
                Send another message
              </Button>
            </motion.div>
          ) : (
            <form action={action} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-widest ml-1">Name</label>
                  <Input 
                    name="name"
                    required
                    placeholder="John Doe" 
                    className="bg-background/50 border-white/10 rounded-xl h-12 focus:border-primary/50" 
                  />
                  {typeof state?.error === 'object' && state.error?.name && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {state.error.name[0]}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-widest ml-1">Email</label>
                  <Input 
                    name="email"
                    type="email" 
                    required
                    placeholder="john@example.com" 
                    className="bg-background/50 border-white/10 rounded-xl h-12 focus:border-primary/50" 
                  />
                  {typeof state?.error === 'object' && state.error?.email && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {state.error.email[0]}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-widest ml-1">Message</label>
                  <Textarea 
                    name="message"
                    required
                    placeholder="Tell me about your project..." 
                    className="bg-background/50 border-white/10 rounded-xl min-h-[150px] focus:border-primary/50" 
                  />
                  {typeof state?.error === 'object' && state.error?.message && (
                    <p className="text-xs text-destructive flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {state.error.message[0]}
                    </p>
                  )}
              </div>
              
              {typeof state?.error === 'string' && (
                <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {state.error}
                </div>
              )}

              <Button 
                type="submit"
                disabled={isPending}
                className="w-full h-14 rounded-xl text-lg font-bold shadow-glow group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                  {isPending ? "Sending..." : "Send Message"}
                  {!isPending && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
};
