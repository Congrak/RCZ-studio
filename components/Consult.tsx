"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const includes = [
  "TikTok ads account audit",
  "Tracking & attribution review",
  "Campaign structure recommendations",
  "TikTok Shop setup guidance",
  "Actionable 30-day growth plan",
  "Recording of the session",
];

export default function Consult() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="consult"
      className="py-20 px-8 md:px-12 bg-card-bg border-t border-b border-card-border"
      ref={ref}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div className="fade-in">
          <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
            1:1 Strategy Session
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5">
            60 minutes.<br />Real answers.
          </h2>
          <p className="text-[#8a8780] font-light max-w-md leading-relaxed mb-8">
            Book a private 1-hour session with Rodrigo. Whether you need help with your
            TikTok strategy, tracking setup, or just don't know where to start — this
            call cuts through the noise.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-[#0a0a0a] font-display font-bold text-sm tracking-widest px-8 py-4 rounded hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5"
          >
            Book Your Session →
          </Link>

          {/* LLC Box */}
          <div className="mt-10 border border-[rgba(200,255,0,0.15)] bg-card-bg rounded-xl p-7 flex flex-wrap gap-6 items-center">
            <div className="font-display font-extrabold text-5xl text-accent whitespace-nowrap">
              $500
            </div>
            <div className="w-px h-16 bg-card-border flex-shrink-0 hidden sm:block" />
            <div>
              <h4 className="font-display font-bold text-base mb-2">US LLC + EIN Formation</h4>
              <p className="text-sm text-[#8a8780] leading-relaxed">
                We open your US LLC and get your EIN — everything you need to legally
                operate, invoice clients, and accept US payments. Flat fee, no surprises.
              </p>
            </div>
          </div>
        </div>

        {/* Right — visual card */}
        <div
          className="fade-in border border-[rgba(200,255,0,0.2)] rounded-2xl p-10"
          style={{ background: "linear-gradient(145deg, #1a1e0a, #141412)" }}
        >
          <div className="font-display font-extrabold text-6xl text-accent leading-none mb-2">
            $100
          </div>
          <p className="text-sm text-[#8a8780] mb-8">1-hour private strategy session</p>
          <ul className="flex flex-col gap-4">
            {includes.map((item) => (
              <li key={item} className="flex gap-3 items-center text-sm text-gray-light">
                <span className="text-accent font-bold flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
