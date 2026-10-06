import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";

const phoneRe = /^[+0-9 ()]{7,30}$/;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z
    .string()
    .trim()
    .max(30)
    .refine((v) => v === "" || phoneRe.test(v), "Please enter a valid phone number"),
  message: z.string().trim().min(5, "Tell us a little more").max(2000, "Message is too long"),
});

const registerSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().regex(phoneRe, "Please enter a valid phone number"),
  program: z.string().trim().min(1, "Please choose a program").max(120),
  notes: z.string().trim().max(1000, "Notes are too long"),
});

type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "program" | "notes", string>>;

const inputCls =
  "w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus-visible:ring-2 focus-visible:ring-primary/40 aria-[invalid=true]:border-destructive";

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-xs tracking-[0.15em] uppercase">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function errs(issues: z.ZodIssue[]): Errors {
  const e: Errors = {};
  for (const i of issues) e[String(i.path[0]) as keyof Errors] ??= i.message;
  return e;
}

export function ContactForm() {
  const [v, setV] = useState({ name: "", email: "", phone: "", message: "" });
  const [e, setE] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof v) => (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setV({ ...v, [k]: ev.target.value });

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const r = contactSchema.safeParse(v);
    if (!r.success) return setE(errs(r.error.issues));
    setE({});
    setBusy(true);
    const { error } = await supabase
      .from("contact_enquiries")
      .insert({ ...r.data, phone: r.data.phone || null });
    setBusy(false);
    if (error) return toast.error("Could not send your message. Please try again.");
    toast.success("Thanks! We'll get back to you shortly.");
    setV({ name: "", email: "", phone: "", message: "" });
  };

  const a = (k: keyof Errors) => ({
    id: `c-${k}`,
    "aria-invalid": !!e[k],
    "aria-describedby": e[k] ? `c-${k}-error` : undefined,
  });

  return (
    <form noValidate onSubmit={submit} className="mt-10 space-y-4" aria-label="Contact form">
      <Field id="c-name" label="Your name" error={e.name}>
        <input {...a("name")} value={v.name} onChange={set("name")} autoComplete="name" maxLength={100} className={inputCls} />
      </Field>
      <Field id="c-email" label="Email address" error={e.email}>
        <input {...a("email")} type="email" value={v.email} onChange={set("email")} autoComplete="email" maxLength={255} className={inputCls} />
      </Field>
      <Field id="c-phone" label="Phone (optional)" error={e.phone}>
        <input {...a("phone")} type="tel" value={v.phone} onChange={set("phone")} autoComplete="tel" maxLength={30} className={inputCls} />
      </Field>
      <Field id="c-message" label="What do you need?" error={e.message}>
        <textarea {...a("message")} rows={4} value={v.message} onChange={set("message")} maxLength={2000} className={inputCls} />
      </Field>
      <button
        disabled={busy}
        className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3 text-xs tracking-[0.2em] text-primary-foreground uppercase disabled:opacity-60"
      >
        {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        {busy ? "Sending" : "Send message"}
      </button>
    </form>
  );
}

export function TrainingRegisterForm({ programs }: { programs: string[] }) {
  const empty = { name: "", email: "", phone: "", program: "", notes: "" };
  const [v, setV] = useState(empty);
  const [e, setE] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const set = (k: keyof typeof v) =>
    (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setV({ ...v, [k]: ev.target.value });

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const r = registerSchema.safeParse(v);
    if (!r.success) return setE(errs(r.error.issues));
    setE({});
    setBusy(true);
    const { error } = await supabase
      .from("training_registrations")
      .insert({ ...r.data, notes: r.data.notes || null });
    setBusy(false);
    if (error) return toast.error("Could not register. Please try again.");
    toast.success("You're registered! We'll confirm your slot on WhatsApp.");
    setV(empty);
  };

  const a = (k: keyof Errors) => ({
    id: `r-${k}`,
    "aria-invalid": !!e[k],
    "aria-describedby": e[k] ? `r-${k}-error` : undefined,
  });

  return (
    <form noValidate onSubmit={submit} className="grid gap-4 md:grid-cols-2" aria-label="Training registration form">
      <Field id="r-name" label="Full name" error={e.name}>
        <input {...a("name")} value={v.name} onChange={set("name")} autoComplete="name" maxLength={100} className={inputCls} />
      </Field>
      <Field id="r-email" label="Email address" error={e.email}>
        <input {...a("email")} type="email" value={v.email} onChange={set("email")} autoComplete="email" maxLength={255} className={inputCls} />
      </Field>
      <Field id="r-phone" label="Phone / WhatsApp" error={e.phone}>
        <input {...a("phone")} type="tel" value={v.phone} onChange={set("phone")} autoComplete="tel" maxLength={30} className={inputCls} />
      </Field>
      <Field id="r-program" label="Program" error={e.program}>
        <select {...a("program")} value={v.program} onChange={set("program")} className={inputCls}>
          <option value="">Choose a program</option>
          {programs.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </Field>
      <div className="md:col-span-2">
        <Field id="r-notes" label="Anything we should know? (optional)" error={e.notes}>
          <textarea {...a("notes")} rows={3} value={v.notes} onChange={set("notes")} maxLength={1000} className={inputCls} />
        </Field>
      </div>
      <div className="md:col-span-2">
        <button
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-4 text-[11px] tracking-[0.2em] text-primary-foreground uppercase transition-transform duration-300 hover:scale-105 disabled:opacity-60"
        >
          {busy && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
          {busy ? "Submitting" : "Register now"}
        </button>
      </div>
    </form>
  );
}
