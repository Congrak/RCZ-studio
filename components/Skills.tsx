"use client";
import { useEffect, useRef } from "react";

const skills = [
  {
    icon: "🎯",
    title: "TikTok Shop",
    desc: "Full TikTok Shop setup, product listing optimization, affiliate strategy, and shop ads management.",
  },
  {
    icon: "⚡",
    title: "Smart+ & GMV Max",
    desc: "Advanced campaign types that most agencies haven't mastered. We maximize your revenue with automated bidding strategies.",
  },
  {
    icon: "📡",
    title: "Pixel & Data Source",
    desc: "Proper pixel implementation, Events API setup, and data source configuration for clean, accurate attribution.",
  },
  {
    icon: "📊",
    title: "MMP & SKAN",
    desc: "Mobile Measurement Partner integration (Appsflyer, Adjust) and SKAN postback configuration for iOS campaigns.",
  },
  {
    icon: "💻",
    title: "Full-Stack Dev",
    desc: "Custom tracking dashboards, landing pages, funnel builds, and integrations that most marketing agencies can't offer.",
  },
  {
    icon: "🏢",
    title: "US LLC Formation",
    desc: "We help international entrepreneurs open a compliant US LLC with EIN — everything you need to operate in the US market.",
  },
];

export default function Skills() {
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
      id="skills"
      className="py-16 px-8 md:px-12 bg-card-bg border-t border-b border-card-border"
      ref={ref}
    >
      <div className="fade-in mb-10">
        <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">Expertise</p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
          What sets us apart
        </h2>
        <p className="text-[#8a8780] font-light max-w-xl leading-relaxed">
          Most agencies run ads. We run the full system — from campaign strategy to tracking infrastructure.
        </p>
      </div>

      <div className="fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-card-border border border-card-border rounded-lg overflow-hidden">
        {skills.map((s) => (
          <div
            key={s.title}
            className="bg-card-bg p-8 hover:bg-[#1a1a17] transition-colors duration-200"
          >
            <div className="w-10 h-10 bg-[rgba(200,255,0,0.1)] border border-[rgba(200,255,0,0.2)] rounded-lg flex items-center justify-center text-lg mb-5">
              {s.icon}
            </div>
            <h3 className="font-display font-bold text-base mb-2">{s.title}</h3>
            <p className="text-sm text-[#8a8780] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
