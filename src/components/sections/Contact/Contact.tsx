/**
 * Contact Section Component
 * 
 * WHAT IT DOES:
 * Provides a working form and direct contact card for recruiters or visitors to send
 * a direct message to Dhruv Mahajan (dhruvmahajan5174@gmail.com).
 * Simulates a retro terminal interface for the form inputs.
 * 
 * HOW IT CONNECTS TO OTHER FILES:
 * - Reads `config.profile.email` (dhruvmahajan5174@gmail.com) and `config.profile.phone`.
 * - Uses `process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` for Web3Forms email delivery.
 * - Provides immediate mailto fallback directly to dhruvmahajan5174@gmail.com if service key is missing or encounters issues.
 */
"use client";

import React, { useState } from "react";
import { usePortfolioConfig } from "@/context/PortfolioConfigContext";
import Card from "@/components/ui/Card";
import { playClickSound, playXpSound } from "@/utils/soundManager";
import { Send, Mail, User, Copy, Check, AlertCircle, Phone, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const { config } = usePortfolioConfig();
  const targetEmail = config.profile.email || "dhruvmahajan5174@gmail.com";
  const targetPhone = config.profile.phone || "+91 9858048963";

  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);

  // Copy email to clipboard
  const handleCopyEmail = () => {
    playClickSound();
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(targetEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Direct mailto link fallback
  const triggerMailtoFallback = (senderName?: string, senderEmail?: string, senderMsg?: string) => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${senderName || ""}\nEmail: ${senderEmail || ""}\n\nMessage:\n${senderMsg || ""}`
    );
    window.location.href = `mailto:${targetEmail}?subject=${subject}&body=${body}`;
  };

  // Form Submit Handler
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    playClickSound();
    setSending(true);
    setErrorStatus(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    // If no access key is configured, immediately offer direct email client fallback
    if (!accessKey) {
      setSending(false);
      setErrorStatus(
        "Web3Forms Access Key is not configured yet. Opening your email app to transmit directly to " + targetEmail
      );
      setTimeout(() => {
        triggerMailtoFallback(name, email, message);
      }, 800);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Transmission from ${name}`,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSending(false);
        setSuccess(true);
        setErrorStatus(null);
        playXpSound();

        // Spawn diamond cyan confetti!
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#7df9ff", "#50c878", "#9d4edd", "#ffd700"]
        });

        // Reset fields
        setName("");
        setEmail("");
        setMessage("");

        // Fade alert after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      } else {
        throw new Error(result.message || "Failed to transmit message");
      }
    } catch (error: any) {
      console.error(error);
      setSending(false);
      setErrorStatus(
        error.message || "Transmission failed. You can send your message directly via email."
      );
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0a0a0a] text-white">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffd700 1px, transparent 1px)`,
          backgroundSize: "25px 25px"
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <h2 className="font-pixel text-[12px] uppercase tracking-wider text-emerald mb-2">
            // COMMUNICATION_LINK
          </h2>
          <h1 className="font-mono text-3xl md:text-5xl font-extrabold tracking-tight">
            Establish Secure Connection
          </h1>
          <p className="font-mono text-xs text-gray-400 mt-2">
            Direct frequency: <span className="text-emerald">{targetEmail}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto w-full">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 space-y-4">
            <Card rarity="epic" className="p-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <h3 className="font-pixel text-[11px] text-emerald tracking-wider flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  DIRECT_TRANSMISSION
                </h3>
                <p className="font-sans text-xs text-gray-400 leading-relaxed">
                  Have an opportunity, collaboration, or question? Send a message using the form or reach out directly to my primary email.
                </p>

                {/* Email Display & Actions */}
                <div className="p-3 bg-black/60 border border-emerald/20 rounded-lg space-y-2">
                  <span className="font-mono text-[10px] text-gray-500 uppercase block">Destination Mailbox</span>
                  <div className="font-mono text-xs sm:text-sm text-emerald break-all font-semibold">
                    {targetEmail}
                  </div>
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={handleCopyEmail}
                      type="button"
                      className="flex-1 py-1.5 px-3 bg-emerald/10 hover:bg-emerald/20 border border-emerald/40 text-emerald rounded text-[10px] font-mono flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? "COPIED!" : "COPY EMAIL"}</span>
                    </button>
                    <a
                      href={`mailto:${targetEmail}?subject=Portfolio%20Inquiry`}
                      onClick={() => playClickSound()}
                      className="flex-1 py-1.5 px-3 bg-[#070b0c] hover:bg-emerald/10 border border-emerald/30 text-gray-300 hover:text-emerald rounded text-[10px] font-mono flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>OPEN CLIENT</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phone / Signal Display */}
                {targetPhone && (
                  <div className="p-3 bg-black/60 border border-emerald/20 rounded-lg">
                    <span className="font-mono text-[10px] text-gray-500 uppercase block">Phone / Signal</span>
                    <a
                      href={`tel:${targetPhone.replace(/\s+/g, "")}`}
                      className="font-mono text-xs sm:text-sm text-gray-300 hover:text-emerald transition-colors flex items-center gap-2 mt-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald" />
                      <span>{targetPhone}</span>
                    </a>
                  </div>
                )}

                {/* Location / Status badge */}
                <div className="p-3 bg-black/60 border border-emerald/10 rounded-lg flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-500">SYSTEM STATUS:</span>
                  <span className="text-emerald flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                    OPEN FOR ROLES
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Glassmorphic Inquiry Form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Card rarity="common" className="p-6 md:p-8 flex flex-col justify-between h-full">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <h3 className="font-pixel text-[10px] text-emerald tracking-wider mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  TRANSMISSION_FORM.json
                </h3>

                {/* Name field */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-gray-500 uppercase">Sender ID</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-black/40 border border-emerald/20 focus:border-emerald rounded-lg text-sm font-sans text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-gray-500 uppercase">Sender Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      required
                      placeholder="recruiter@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 bg-black/40 border border-emerald/20 focus:border-emerald rounded-lg text-sm font-sans text-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label className="font-mono text-[10px] text-gray-500 uppercase">Inquiry Specs</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Enter mission description details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-4 bg-black/40 border border-emerald/20 focus:border-emerald rounded-lg text-sm font-sans text-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 font-pixel text-[10px] tracking-wider text-black bg-emerald hover:bg-cyan-glow border-2 border-black rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-[4px_4px_0_#000] active:translate-y-0.5 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{sending ? "TRANSMITTING..." : "SEND TRANSMISSION"}</span>
                </button>
              </form>

              {/* Status Alert notices */}
              {success && (
                <div className="mt-6 p-4 bg-emerald/10 border border-emerald/30 text-emerald text-xs font-mono rounded-lg flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald animate-ping" />
                  <span>Transmission delivered! Thank you for reaching out.</span>
                </div>
              )}

              {errorStatus && (
                <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono rounded-lg space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{errorStatus}</span>
                  </div>
                  <button
                    onClick={() => triggerMailtoFallback(name, email, message)}
                    className="mt-2 text-[11px] underline text-emerald hover:text-cyan-glow block font-mono"
                  >
                    Click here to send message directly via {targetEmail}
                  </button>
                </div>
              )}
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
