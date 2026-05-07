import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <About />
      <Projects />
      <VideoShowcase />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
}
