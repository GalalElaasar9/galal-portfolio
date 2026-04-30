import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@galal.dev", label: "Email" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary tracking-widest uppercase">Contact</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">Let's build something</h2>
          <p className="mt-3 text-muted-foreground">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-[var(--shadow-card)] space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <FloatingInput name="name" label="Name" required />
            <FloatingInput name="email" type="email" label="Email" required />
          </div>
          <FloatingTextarea name="message" label="Message" required />
          <button
            type="submit"
            disabled={sending}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-[var(--shadow-elegant)] hover:translate-y-[-2px] transition-transform disabled:opacity-60"
          >
            {sending ? "Sending..." : "Send Message"}
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.form>

        <div className="mt-10 flex justify-center gap-4">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              whileHover={{ y: -4, scale: 1.08 }}
              className="h-11 w-11 grid place-items-center rounded-full border border-border bg-card hover:border-primary hover:text-primary transition-colors"
            >
              <s.icon className="h-4.5 w-4.5" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingInput({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="relative block">
      <input
        name={name}
        type={type}
        required={required}
        placeholder=" "
        className="peer w-full rounded-xl border border-border bg-background px-4 pt-5 pb-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
      <span className="pointer-events-none absolute left-4 top-3.5 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary">
        {label}
      </span>
    </label>
  );
}

function FloatingTextarea({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="relative block">
      <textarea
        name={name}
        required={required}
        placeholder=" "
        rows={5}
        className="peer w-full rounded-xl border border-border bg-background px-4 pt-5 pb-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
      />
      <span className="pointer-events-none absolute left-4 top-3.5 text-xs text-muted-foreground transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-primary">
        {label}
      </span>
    </label>
  );
}
