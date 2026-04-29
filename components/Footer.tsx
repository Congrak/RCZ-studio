import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050504] border-t border-card-border px-8 md:px-12 py-12">
      <div className="flex flex-wrap justify-between items-start gap-8">
        <div>
          <Link href="#" className="font-display font-extrabold text-base tracking-wide text-[#f5f2ed] mb-3 block">
            RCZ<span className="text-accent">.</span>
          </Link>
          <p className="text-xs text-[#8a8780] max-w-[260px] leading-relaxed">
            Full-stack TikTok marketing agency. Ads, Shop, tracking, dev — everything
            your brand needs to grow.
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          {[
            { href: "#skills", label: "Expertise" },
            { href: "#pricing", label: "Services" },
            { href: "#consult", label: "1:1 Session" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#8a8780] text-sm hover:text-[#f5f2ed] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-card-border flex flex-wrap justify-between items-center gap-4">
        <p className="text-xs text-[#5a5854]">
          © {new Date().getFullYear()} RCZ Capital LLC. All rights reserved. This website is owned and operated by RCZ Capital LLC.
        </p>
        <p className="text-xs text-[#5a5854]">info@rczcapital.com</p>
      </div>
    </footer>
  );
}
