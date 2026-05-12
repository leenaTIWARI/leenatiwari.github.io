import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Layout, Server, Database, Wrench, Brain } from "lucide-react";

const groups = [
  { Icon: Code, title: "Languages", items: ["Python", "Java", "JavaScript", "C", "SQL"] },
  { Icon: Layout, title: "Frontend", items: ["React.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { Icon: Server, title: "Backend", items: ["Node.js", "Express.js", "Flask", "REST APIs"] },
  { Icon: Database, title: "Database", items: ["MySQL", "SQLite"] },
  { Icon: Wrench, title: "Tools", items: ["Git", "GitHub", "VS Code", "Postman"] },
  { Icon: Brain, title: "Other", items: ["DSA", "OOP", "DBMS"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills & Stack">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 group hover:border-primary/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-blue)]/30 to-[var(--neon-purple)]/30 flex items-center justify-center text-primary">
                <g.Icon size={18} />
              </div>
              <h3 className="font-display text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span key={item} className="px-3 py-1 text-xs rounded-full font-mono bg-secondary/40 text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}