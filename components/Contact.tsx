"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  "1:1 Strategy Session ($100)",
  "US LLC + EIN Formation ($500)",
  "Starter Plan ($1,500/mo)",
  "Growth Plan ($3,500/mo)",
  "Elite Plan ($7,000+/mo)",
  "Custom / Not Sure Yet",
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.fallback) {
        // Open mailto as fallback
        const subject = encodeURIComponent(`[RCZ Capital] New inquiry — ${formData.service}`);
        const body = encodeURIComponent(
          `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:info@rczcapital.com?subject=${subject}&body=${body}`;
      }

      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", company: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 px-8 md:px-12" ref={ref}>
      <div className="fade-in mb-10">
        <p className="text-accent text-xs font-medium tracking-widest uppercase mb-3">Contact</p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight">
          Let&apos;s talk growth
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Info */}
        <div className="fade-in">
          <h3 className="font-display font-bold text-2xl mb-3">Ready to scale on TikTok?</h3>
          <p className="text-[#8a8780] text-sm leading-relaxed mb-8">
            Fill out the form and we&apos;ll get back to you within 24 hours. Tell us about your
            brand, your goals, and what you&apos;re struggling with — we&apos;ll figure out the best
            path forward together.
          </p>
          <div className="flex flex-col gap-4">
            {[
              { icon: "✉️", label: "Email", value: "info@rczcapital.com" },
              { icon: "⏱️", label: "Response time", value: "Within 24 hours" },
              { icon: "🌎", label: "Based in", value: "USA — Remote worldwide" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-3 items-center bg-card-bg border border-card-border rounded-lg px-5 py-4"
              >
                <div className="w-9 h-9 bg-[rgba(200,255,0,0.1)] rounded-md flex items-center justify-center text-base flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-[#8a8780] mb-0.5 tracking-wide">{item.label}</p>
                  <p className="text-sm font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="fade-in bg-card-bg border border-card-border rounded-2xl p-8 md:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-[#8a8780] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium tracking-widest uppercase text-[#8a8780] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Smith"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest uppercase text-[#8a8780] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest uppercase text-[#8a8780] mb-2">
                Company / Brand
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your brand name"
              />
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest uppercase text-[#8a8780] mb-2">
                Service Interested In
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select a service...</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium tracking-widest uppercase text-[#8a8780] mb-2">
                Tell us about your goals
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="What are you selling? Current ad spend? Biggest challenge?"
                required
                style={{ resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-accent text-[#0a0a0a] font-display font-bold text-sm tracking-widest rounded-md hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-accent bg-[rgba(200,255,0,0.1)] rounded-md py-3">
                ✓ Message sent! We&apos;ll be in touch within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400 bg-[rgba(255,80,80,0.1)] rounded-md py-3">
                Something went wrong. Please email us directly at info@rczcapital.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
