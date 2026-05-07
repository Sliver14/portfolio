import Link from "next/link";
import { CONTACT_INFO } from "@/constants";

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-tighter text-gradient">
            SYLVER<span className="text-primary">.</span>
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
          © {new Date().getFullYear()} Sylver. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
