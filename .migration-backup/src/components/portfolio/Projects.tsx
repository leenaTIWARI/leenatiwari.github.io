import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "StartupIQ",
    desc: "AI startup idea validation platform generating SWOT analysis, market research, monetization plans and MVP roadmap.",
    tech: ["React", "Flask", "SQLite", "JWT", "AI APIs"],
    gradient: "from-[var(--neon-blue)] to-[var(--neon-purple)]",
  },
  {
    title: "DevConnect",
    desc: "Developer networking platform with profiles, follow system and project showcase to connect builders worldwide.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    gradient: "from-[var(--neon-cyan)] to-[var(--neon-blue)]",
  },
  {
    title: "Portfolio Website",
    desc: "Modern animated personal portfolio with glassmorphism, motion design and recruiter-friendly UX.",
    tech: ["React", "Tailwind", "Framer Motion"],
    gradient: "from-[var(--neon-purple)] to-[var(--neon-cyan)]",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -8 }}
            className="glass rounded-2xl overflow-hidden group hover:border-primary/40 transition-all"
          >
            <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
              <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-3xl font-bold text-white/90 drop-shadow-lg">{p.title}</span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-secondary/40 text-primary/90 border border-border">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github size={14} /> Code
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}