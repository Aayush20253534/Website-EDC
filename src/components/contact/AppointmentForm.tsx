"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { WhatsAppGlyph } from "@/components/layout/Header";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

/**
 * Appointment request form.
 *
 * There is no backend on this site, and pretending otherwise would silently
 * drop enquiries. Instead the form composes the message and hands it to
 * WhatsApp — which is where this clinic's patients actually message from,
 * and which gives the patient a copy of what they sent. Nothing is posted
 * anywhere, and no analytics or third party sees these fields.
 */
export function AppointmentForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    when: "",
    message: "",
  });

  const canSubmit = form.name.trim().length > 1 && form.phone.trim().length >= 7;

  function compose() {
    const lines = [
      "Hello Eclectic Dental Care, I'd like to request an appointment.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
    ];
    if (form.treatment) lines.push(`Treatment: ${form.treatment}`);
    if (form.when.trim()) lines.push(`Preferred time: ${form.when.trim()}`);
    if (form.message.trim()) lines.push("", `Details: ${form.message.trim()}`);
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(compose())}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Your name"
          required
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="Full name"
          autoComplete="name"
        />
        <Field
          label="Phone number"
          required
          type="tel"
          value={form.phone}
          onChange={(v) => setForm({ ...form, phone: v })}
          placeholder="10-digit mobile"
          autoComplete="tel"
          inputMode="tel"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="treatment" className="eyebrow block text-muted">
            Treatment (optional)
          </label>
          <select
            id="treatment"
            value={form.treatment}
            onChange={(e) => setForm({ ...form, treatment: e.target.value })}
            className="mt-2.5 h-12 w-full rounded-xl border border-line-input bg-ivory px-3.5 text-[0.9375rem] text-cocoa transition-colors focus:border-brick"
          >
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="General check-up">General check-up</option>
            <option value="Dental emergency">Dental emergency</option>
          </select>
        </div>

        <Field
          label="Preferred day / time (optional)"
          value={form.when}
          onChange={(v) => setForm({ ...form, when: v })}
          placeholder="e.g. Saturday evening"
        />
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block text-muted">
          What is going on? (optional)
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Describe the problem, or what you would like to change about your smile."
          className="mt-2.5 w-full resize-y rounded-xl border border-line-input bg-ivory px-3.5 py-3 text-[0.9375rem] leading-relaxed text-cocoa placeholder:text-faint transition-colors focus:border-brick"
        />
      </div>

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
        <motion.button
          type="submit"
          disabled={!canSubmit}
          whileTap={canSubmit ? { scale: 0.98 } : undefined}
          className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-espresso px-8 text-[0.9375rem] font-semibold text-ivory transition-all duration-300 hover:bg-cocoa disabled:cursor-not-allowed disabled:opacity-45"
        >
          <WhatsAppGlyph className="h-[18px] w-[18px]" />
          Send on WhatsApp
        </motion.button>

        <p className="text-xs leading-relaxed text-muted">
          Opens WhatsApp with your message ready to send.
          <br className="hidden sm:block" /> Prefer to talk?{" "}
          <a href={`tel:${site.phone}`} className="font-semibold text-brick">
            Call {site.phoneDisplay}
          </a>
        </p>
      </div>

      {sent && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className="rounded-xl bg-success-bg px-4 py-3.5 text-sm text-success"
        >
          WhatsApp should have opened in a new tab with your details. If it did
          not, call us on {site.phoneDisplay} and we will book you in.
        </motion.p>
      )}
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  autoComplete,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "tel" | "text" | "email";
}) {
  const id = label.toLowerCase().replace(/[^a-z]+/g, "-");
  return (
    <div>
      <label htmlFor={id} className="eyebrow block text-muted">
        {label}
        {required && <span className="ml-1 text-terracotta">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2.5 h-12 w-full rounded-xl border border-line-input bg-ivory px-3.5 text-[0.9375rem] text-cocoa placeholder:text-faint transition-colors focus:border-brick"
      />
    </div>
  );
}
