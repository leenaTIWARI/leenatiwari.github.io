import { useState } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's Build Together">
      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <div className="lg:col-span-2 space-y-4">
          {[
            { Icon: Mail, label: "Email", value: "leena.tiwari@example.com", href: "mailto:leena.tiwari@example.com" },
            { Icon: Github, label: "GitHub", value: "github.com/leenatiwari", href: "https://github.com" },
            { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/leenatiwari", href: "https://linkedin.com" },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--neon-blue)]/30 to-[var(--neon-purple)]/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon size={18} />
              </div>
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="text-sm text-foreground truncate">{value}</div>
              </div>
            </a>
          ))}
        </div>

        <form onSubmit={submit} className="lg:col-span-3 glass rounded-3xl p-8 space-y-4">
          <div>
            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Name</label>
            <input
              type="text"
              value={form.name}
              maxLength={100}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
            <input
              type="email"
              value={form.email}
              maxLength={255}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Message</label>
            <textarea
              rows={5}
              value={form.message}
              maxLength={1000}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-2 w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
              placeholder="Tell me about your project or opportunity..."
              required
            />
          </div>
          <button
            type="submit"
            className="btn-glow w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]"
          >
            <Send size={16} /> {sent ? "Message Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </Section>
  );
}