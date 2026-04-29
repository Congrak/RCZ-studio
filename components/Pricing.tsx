"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const plans = [
  {
    tier: "Starter",
    price: "$1,500",
    period: "/ mo",
    desc: "$500–2k ad budget · 1 ad account",
    features: [
      "TikTok Ads campaign management",
      "Pixel install & basic event tracking",
      "Creative briefs & ad copy",
      "Bi-weekly performance reports",
      "Monthly strategy call",
    ],
    featured: false,
  },
  {
    tier: "Growth",
    price: "$3,500",
    period: "/ mo",
    desc: "$2k–15k ad budget · Full attribution stack",
    features: [
      "TikTok Shop + Smart+ / GMV Max",
      "Full pixel & data source setup",
      "MMP integration (Appsflyer / Adjust)",
      "SKAN configuration & postback",
      "Weekly reporting + strategy calls",
      "Creative direction & testing",
    ],
    featured: true,
  },
  {
    tier: "Elite",
    price: "$7,000+",
    period: "/ mo",
    desc: "High-budget brands · White-label available",
    features: [
      "Everything in Growth",
      "Custom tracking & reporting dashboard",
      "Attribution audit & full fix",
      "Multi-account management",
      "White-label for agencies",
      "Dedicated Slack channel",
      "Priority support",
    ],
    featured: false,
  },
];

export default function Pricing() {
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
    <section id="pricing" className="py-20 px-8 md:px-12" ref={ref}>
      <div className="fade-in mb-14">
        <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">
          Services & Pricing
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
          Built for serious brands
        </h2>
        <p className="text-[#8a8780] font-light max-w-xl leading-relaxed">
          Transparent pricing for TikTok management. Custom scopes — contact us for a tailored quote.
        </p>
      </div>

      <div className="fade-in grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.tier}
            className={`relative flex flex-col rounded-xl p-8 transition-all duration-200 hover:-translate-y-1 ${
              plan.featured
                ? "border-2 border-accent bg-gradient-to-br from-[#141412] to-[#1a1e0a]"
                : "border border-card-border bg-card-bg hover:border-[#3a3930]"
            }`}
          >
            {plan.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-[#0a0a0a] font-display font-bold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full">
                Most Popular
              </span>
            )}
            <p className="text-[#8a8780] text-xs font-medium tracking-widest uppercase mb-3">
              {plan.tier}
            </p>
            <p className="font-display font-extrabold text-4xl leading-none mb-1">
              {plan.price}{" "}
              <span className="text-base font-normal text-[#8a8780]">{plan.period}</span>
            </p>
            <p className="text-xs text-[#8a8780] mb-7 leading-relaxed">{plan.desc}</p>

            <ul className="flex-1 flex flex-col gap-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-gray-light items-start">
                  <span className="text-accent font-bold text-xs mt-0.5 flex-shrink-0">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className={`block text-center py-3 rounded-md font-display font-bold text-sm tracking-widest transition-all duration-200 ${
                plan.featured
                  ? "bg-accent text-[#0a0a0a] hover:bg-accent-dark"
                  : "border border-card-border text-[#f5f2ed] hover:border-accent hover:text-accent"
              }`}
            >
              Contact to Start
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
