"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#2a2924]"
          : "bg-transparent"
      }`}
    >
      <Link href="#" className="font-display font-extrabold text-lg tracking-wide text-[#f5f2ed]">
        RCZ<span className="text-accent">.</span>
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        {["#skills", "#pricing", "#consult", "#contact"].map((href, i) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[#8a8780] text-sm font-normal tracking-wide hover:text-[#f5f2ed] transition-colors duration-200"
            >
              {["Expertise", "Services", "1:1 Session", "Contact"][i]}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="bg-accent text-[#0a0a0a] font-display font-bold text-xs tracking-widest px-5 py-2.5 rounded hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5"
      >
        Get Started
      </Link>
    </nav>
  );
}
