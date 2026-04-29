"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setTimeout(() => el.classList.add("visible"), 100);
    }
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 md:px-12 pt-32 pb-16 relative overflow-hidden">
      <div className="hero-grid-bg" />
      <div
        className="absolute -top-1/5 -right-1/4 w-[600px] h-[600px] z-0"
        style={{
          background: "radial-gradient(circle, rgba(200,255,0,0.08) 0%, transparent 65%)",
        }}
      />

      <div ref={ref} className="fade-in relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.25)] text-accent text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <span className="dot-pulse" />
          TikTok Growth Partner
        </div>

        <h1 className="font-display font-extrabold leading-none tracking-tight mb-6 text-[clamp(3rem,7vw,5.5rem)]">
          Scale your brand on{" "}
          <em className="text-accent not-italic">TikTok</em> —{" "}
          the right way.
        </h1>

        <p className="text-[#8a8780] font-light text-lg max-w-xl leading-relaxed mb-10">
          Full-stack TikTok marketing: ads, TikTok Shop, Smart+, GMV Max, pixel
          tracking, MMP integration, and custom dev work — all under one roof.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="#pricing"
            className="inline-flex items-center gap-2 bg-accent text-[#0a0a0a] font-display font-bold text-sm tracking-widest px-8 py-4 rounded hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5"
          >
            View Services →
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center bg-transparent text-[#f5f2ed] font-display font-semibold text-sm tracking-widest px-8 py-4 rounded border border-[#2a2924] hover:border-[#8a8780] transition-all duration-200 hover:-translate-y-0.5"
          >
            Book a Call
          </Link>
        </div>

        <div className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-[#2a2924]">
          {[
            { num: "3+", label: "Years TikTok Ads" },
            { num: "Full", label: "Stack Developer" },
            { num: "US", label: "LLC Registered" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-extrabold text-3xl text-accent">
                {s.num}
              </div>
              <div className="text-xs text-[#8a8780] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
