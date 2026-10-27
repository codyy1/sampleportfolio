"use client";

import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Github,
  Linkedin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SpotlightCard } from "@/components/SpotlightCard";
import { useToast } from "@/components/Toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website_hp: "", // Honeypot field
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    showToast("Email address copied to clipboard!", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      const err = "Please fill out all required fields.";
      setErrorMessage(err);
      showToast(err, "error");
      return;
    }

    // Basic email pattern validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus("error");
      const err = "Please enter a valid email address.";
      setErrorMessage(err);
      showToast(err, "error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "", website_hp: "" });
      showToast("Message transmitted successfully!", "success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setStatus("error");
      setErrorMessage(msg);
      showToast(msg, "error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="mt-2 text-base text-zinc-400">
            Have a project in mind, an architectural challenge, or an opportunity? Reach out directly
            or drop a note below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct contact info & socials */}
          <div className="lg:col-span-5 space-y-6">
            <SpotlightCard glowColor="cyan" className="p-6 md:p-8 space-y-6">
              <h3 className="text-xl font-bold text-zinc-100">Contact Details</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                I am usually responsive within 24 hours. Feel free to copy my direct email or connect
                on developer networks.
              </p>

              {/* Copy Email Box */}
              <div className="p-4 rounded-lg bg-zinc-950/80 border border-zinc-800 space-y-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-mono text-zinc-200 truncate">
                    {portfolioData.personal.email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/60 rounded-lg transition-colors flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Status */}
              <div className="space-y-3 pt-2 text-sm text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{portfolioData.personal.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>{portfolioData.personal.availabilityStatus}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-800 flex items-center gap-3">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors flex-1 justify-center min-h-[44px] cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors flex-1 justify-center min-h-[44px] cursor-pointer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <SpotlightCard glowColor="indigo" className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-zinc-100 mb-6">Send a Message</h3>

              {status === "success" ? (
                <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-zinc-100">Message Received!</h4>
                  <p className="text-sm text-zinc-300">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-4 py-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 bg-emerald-950/60 border border-emerald-800/80 rounded-lg min-h-[44px] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field (hidden from legitimate users) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_hp">Leave this field blank</label>
                    <input
                      id="website_hp"
                      type="text"
                      name="website_hp"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website_hp}
                      onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3.5 rounded-lg bg-rose-950/40 border border-rose-800/60 flex items-center gap-3 text-xs text-rose-300">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Elena Rostova"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-base sm:text-sm transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-base sm:text-sm transition-colors min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-zinc-300 mb-1.5"
                    >
                      Message / Project Details <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, team, or inquiry..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-base sm:text-sm transition-colors resize-y min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-zinc-950 bg-zinc-100 hover:bg-white disabled:opacity-50 transition-colors shadow-sm min-h-[44px] cursor-pointer"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
