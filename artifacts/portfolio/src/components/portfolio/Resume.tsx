import { Download } from "lucide-react";
import { Section } from "./Section";

export function Resume() {
  return (
    <Section id="resume" eyebrow="My experience" title="Resume">
      <div className="glass rounded-3xl p-10 md:p-14 max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Get the full picture — education, experience, projects and skills, all in one PDF.
        </p>
        <a
          href="/Leena_Tiwari_Resume_SDE.pdf"
          download="Leena_Tiwari_Resume_SDE.pdf"
          className="btn-glow inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-primary-foreground bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]"
        >
          <Download size={18} /> Download Resume
        </a>
      </div>
    </Section>
  );
}
