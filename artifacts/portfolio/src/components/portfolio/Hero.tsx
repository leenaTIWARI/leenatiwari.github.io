import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Download, Briefcase, ArrowRight } from "lucide-react";
import leenaImg from "@/assets/leena.jpg";

const phrases = [
  "Software Development Engineer",
  "Full Stack Developer",
  "Problem Solver",
];

function useTyping() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return text;
}

export function Hero() {
  const typed = useTyping();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Floating blobs */}
      <div className="blob w-[400px] h-[400px] bg-[var(--neon-blue)] top-20 -left-20" />
      <div className="blob w-[500px] h-[500px] bg-[var(--neon-purple)] bottom-0 right-0" style={{ animationDelay: "2s" }} />
      <div className="blob w-[300px] h-[300px] bg-[var(--neon-cyan)] top-1/2 left-1/3" style={{ animationDelay: "4s" }} />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.1 }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for opportunities
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-4">
            Hi, I'm <span className="text-gradient">Leena</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-mono mb-6 min-h-[2rem]">
            <span className="cursor-blink">{typed}</span>
          </p>
          <p className="text-base md:text-lg text-muted-foreground/90 max-w-xl mb-8 leading-relaxed">
            B.Tech CSE (AI/ML) student passionate about building scalable software,
            modern web apps, and solving real-world problems with code.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a href="#contact" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)]">
              <Briefcase size={16} /> Hire Me
            </a>
            <a href="#projects" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass text-foreground hover:text-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="#resume" className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass text-foreground">
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="flex items-center gap-4">
            {[
              { Icon: Github, href: "https://github.com/leenaTIWARI", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
              { Icon: Mail, href: "mailto:123lina250805@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full"
              style={{ background: "conic-gradient(from 0deg, var(--neon-cyan), var(--neon-blue), var(--neon-purple), var(--neon-cyan))", filter: "blur(20px)", opacity: 0.6 }}
            />
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden glow-ring">
              <img src={leenaImg} alt="Leena Tiwari" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}