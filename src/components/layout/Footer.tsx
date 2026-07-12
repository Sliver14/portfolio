import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO } from "@/constants";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="flex items-center gap-2.5 text-xl font-bold tracking-tighter text-gradient">
            <Image src="/insight-logo.png" width={24} height={24} alt="InsightNovaTech Logo" className="w-6 h-6 object-contain" />
            <span>InsightNovaTech<span className="text-primary">.</span></span>
          </Link>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Building the future of SaaS
          </p>
        </div>

        <div className="flex items-center gap-6">
          {CONTACT_INFO.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {social.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} InsightNovaTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
