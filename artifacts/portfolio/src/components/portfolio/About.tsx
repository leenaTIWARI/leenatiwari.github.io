import { motion } from "framer-motion";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="Who I am" title="About Me">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center"
      >
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          I'm <span className="text-foreground font-semibold">Leena Tiwari</span>, a Software Development Engineer focused on
          <span className="text-primary"> React, Python, Java, APIs</span>, and scalable product development.
          I enjoy solving DSA problems, building startups, and creating impactful user experiences.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-10">
          {[
            { k: "3+", v: "Projects Built" },
            { k: "500+", v: "DSA Problems" },
            { k: "B.Tech", v: "CSE (AI/ML)" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.k}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}