
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Atom,
  Cpu,
  Database,
  Mail,
  Menu,
  X,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    name: "ATLAS",
    subtitle: "ENTERPRISE INTELLIGENCE",
    description:
      "An AI-powered enterprise operating system built around organizational memory, semantic search, intelligent agents and workflow automation.",
    stack: ["Next.js", "TypeScript", "Supabase", "AI"],
    status: "IN DEVELOPMENT",
    icon: Cpu,
    accent: "cyan",
    url: "https://github.com/bathriprasathtk-ui/atlas-enterprise-os",
  },
  {
    id: "02",
    name: "RAG ROUTER",
    subtitle: "SEMANTIC CACHING ENGINE",
    description:
      "A local-first RAG service that combines semantic caching, vector retrieval and query difficulty scoring to reduce unnecessary model calls.",
    stack: ["Python", "Qdrant", "RAG", "Gemini API"],
    status: "DEPLOYED",
    icon: Database,
    accent: "violet",
    url: "",
  },
  {
    id: "03",
    name: "BIZWISE AI",
    subtitle: "BUSINESS DECISION SYSTEM",
    description:
      "An AI business advisor that analyses revenue, expenses and customer metrics to generate practical recommendations for small businesses.",
    stack: ["AI", "Python", "Business Analytics"],
    status: "PROJECT",
    icon: Terminal,
    accent: "gold",
    url: "",
  },
];

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript",
  "Python", "Java", "C++", "Tailwind CSS",
  "Supabase", "SQL", "Git", "AI Systems",
  "RAG", "REST APIs", "Qdrant", "Node.js",
];

const certificates = [
  "AWS Foundations",
  "Google Introduction to Generative AI Studio",
  "HP LIFE — Strategic Planning in the AI Age",
  "First AI Agent with Python",
  "How AI Systems Are Built",
  "Data Science for Beginners",
];

function Reactor() {
  return (
    <div className="reactor-wrap" aria-label="Animated reactor-inspired artwork">
      <div className="reactor-aura" />
      <div className="reactor-ring ring-one" />
      <div className="reactor-ring ring-two" />
      <div className="reactor-ring ring-three" />
      <div className="reactor-core">
        <div className="core-inner">
          <Zap size={36} strokeWidth={1.2} />
        </div>
      </div>
      <div className="reactor-orbit orbit-one" />
      <div className="reactor-orbit orbit-two" />
      <span className="reactor-label label-top">ARC / 01</span>
      <span className="reactor-label label-bottom">POWER SYSTEM ONLINE</span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  number,
}: {
  eyebrow: string;
  title: string;
  number: string;
}) {
  return (
    <div className="section-heading">
      <span className="section-number">{number} /</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState("AI Systems");

  const navItems = [
    ["ABOUT", "#about"],
    ["SYSTEMS", "#systems"],
    ["PROJECTS", "#projects"],
    ["CONTACT", "#contact"],
  ];

  return (
    <main className="dark-intelligence">
      <div className="ambient ambient-cyan" />
      <div className="ambient ambient-violet" />
      <div className="noise-overlay" />

      <header className="site-header">
        <a href="#home" className="brand">
          <span className="brand-mark">B.</span>
          <span>BATHRI<span className="brand-muted"> / TK</span></span>
        </a>

        <nav className="desktop-nav">
          {navItems.map(([label, href]) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </nav>

        <a className="header-status" href="#contact">
          <span className="status-dot" />
          AVAILABLE FOR OPPORTUNITIES
        </a>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}<ArrowUpRight size={16} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      <section className="hero" id="home">
        <div className="hero-copy">
          <motion.div
            className="hero-kicker"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="kicker-line" />
            ENGINEERING THE NEXT POSSIBILITY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            THINK
            <span className="hero-outline">BEYOND.</span>
            <span className="hero-name">BATHRI PRASATH TK</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Developer. Builder. Technology enthusiast.
            I create intelligent digital experiences at the intersection
            of software engineering and artificial intelligence.
          </motion.p>

          <div className="hero-actions">
            <a href="#projects" className="button-primary">
              EXPLORE MY WORK <ArrowUpRight size={17} />
            </a>
            <a href="#about" className="button-ghost">
              DISCOVER MY STORY <ArrowDown size={16} />
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN INDIA</span>
            <span>FULL-STACK DEVELOPMENT</span>
            <span>AI / SYSTEMS</span>
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Reactor />
          <div className="visual-coordinate coordinate-one">
            <span>CORE TEMP</span><strong>STABLE</strong>
          </div>
          <div className="visual-coordinate coordinate-two">
            <span>ENERGY OUTPUT</span><strong>100%</strong>
          </div>
        </motion.div>

        <div className="hero-index">
          <span>01</span>
          <span className="index-line" />
          <span>INTRODUCTION</span>
        </div>
      </section>

      <section className="ticker">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <div className="ticker-content" key={i}>
              <span>BUILD</span><Zap size={16} />
              <span>INVENT</span><Atom size={16} />
              <span>ENGINEER</span><Zap size={16} />
              <span>IMAGINE</span><Atom size={16} />
              <span>BUILD</span><Zap size={16} />
              <span>INVENT</span><Atom size={16} />
            </div>
          ))}
        </div>
      </section>

      <section className="about section-shell" id="about">
        <SectionHeading
          number="01"
          eyebrow="THE PERSON BEHIND THE SYSTEM"
          title="Not here to follow. Here to build."
        />

        <div className="about-grid">
          <div className="about-statement">
            <p>
              I believe technology should do more than work.
              It should <span>change what is possible.</span>
            </p>
          </div>
          <div className="about-detail">
            <p>
              I'm Bathri Prasath TK, an Information Technology student
              passionate about full-stack development, artificial
              intelligence and building useful products.
            </p>
            <p>
              My focus is on turning ambitious ideas into practical
              systems — from intelligent applications to AI-powered
              platforms.
            </p>
            <div className="identity-line">
              <span>IDENTITY</span>
              <strong>BUILDER OF DIGITAL SYSTEMS</strong>
            </div>
            <div className="identity-line">
              <span>EDUCATION</span>
              <strong>B.SC INFORMATION TECHNOLOGY</strong>
            </div>
            <div className="identity-line">
              <span>INSTITUTION</span>
              <strong>KPR COLLEGE OF ARTS SCIENCE AND RESEARCH</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="systems section-shell" id="systems">
        <SectionHeading
          number="02"
          eyebrow="THE TECHNOLOGY UNIVERSE"
          title="Tools are my instruments."
        />

        <div className="systems-layout">
          <div className="systems-intro">
            <span className="system-icon"><Cpu size={26} /></span>
            <p>THE ENGINEERING STACK</p>
            <h3>Explore the technologies behind my work.</h3>
            <span className="systems-hint">SELECT A TECHNOLOGY TO INSPECT</span>
          </div>

          <div className="skill-universe">
            {skills.map((skill, index) => (
              <button
                key={skill}
                className={`skill-node ${activeSkill === skill ? "active" : ""}`}
                style={{ "--i": index } as React.CSSProperties}
                onClick={() => setActiveSkill(skill)}
              >
                <span className="skill-node-dot" />
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div className="selected-skill">
          <span>SELECTED MODULE</span>
          <strong>{activeSkill}</strong>
          <span className="module-status">● MODULE IDENTIFIED</span>
        </div>
      </section>

      <section className="projects section-shell" id="projects">
        <SectionHeading
          number="03"
          eyebrow="SELECTED ENGINEERING WORK"
          title="Ideas turned into systems."
        />

        <div className="project-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article
                className={`project-card project-${project.accent}`}
                key={project.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
              >
                <div className="project-topline">
                  <span>PROJECT / {project.id}</span>
                  <span className="project-status">
                    <span className="status-dot" /> {project.status}
                  </span>
                </div>

                <div className="project-body">
                  <div className="project-art">
                    <div className="project-art-grid" />
                    <div className="project-art-ring">
                      <Icon size={46} strokeWidth={1} />
                    </div>
                    <span className="art-code">SYSTEM_{project.id}</span>
                  </div>

                  <div className="project-info">
                    <p className="eyebrow">{project.subtitle}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.stack.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                        EXPLORE PROJECT <ArrowUpRight size={17} />
                      </a>
                    ) : (
                      <span className="project-link project-private">
                        PROJECT DETAILS AVAILABLE ON REQUEST
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="education section-shell" id="education">
        <SectionHeading
          number="04"
          eyebrow="THE FOUNDATION"
          title="Learning is part of the mission."
        />

        <div className="education-card">
          <div className="education-year">2025 — 2028</div>
          <div>
            <span className="eyebrow">UNDERGRADUATE EDUCATION</span>
            <h3>B.Sc Information Technology</h3>
            <p>KPR College of Arts Science and Research</p>
          </div>
          <div className="education-score">
            <span>CGPA</span>
            <strong>8.52</strong>
          </div>
        </div>
      </section>

      <section className="certificates section-shell" id="certificates">
        <SectionHeading
          number="05"
          eyebrow="ACHIEVEMENTS & LEARNING"
          title="Knowledge collected. Skills developed."
        />

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <div className="certificate-item" key={certificate}>
              <span className="certificate-number">0{index + 1}</span>
              <Shield size={20} />
              <strong>{certificate}</strong>
              <span className="certificate-arrow"><ArrowUpRight size={16} /></span>
            </div>
          ))}
        </div>
        <p className="certificate-note">
          CERTIFICATE FILES CAN BE CONNECTED TO EACH ITEM WHEN VERIFIED.
        </p>
      </section>

      <section className="contact section-shell" id="contact">
        <div className="contact-overline">
          <span className="status-dot" /> END OF TRANSMISSION? NOT YET.
        </div>
        <h2>
          HAVE AN IDEA?
          <span>LET'S BUILD IT.</span>
        </h2>
        <p>
          Have a project, opportunity or interesting problem?
          Let's connect and create something meaningful.
        </p>

        <a href="mailto:bathriprasathtk@gmail.com" className="contact-button">
          INITIATE CONNECTION <ArrowUpRight size={19} />
        </a>

        <div className="contact-links">
          <a href="https://github.com/bathriprasathtk-ui" target="_blank" rel="noreferrer">
            <FaGithub size={18} /> GITHUB
          </a>
          <a href="https://www.linkedin.com/in/bathri-prasath-tk-b41b73377/" target="_blank" rel="noreferrer">
            <FaLinkedin size={18} /> LINKEDIN
          </a>
          <a href="mailto:bathriprasathtk@gmail.com">
            <Mail size={18} /> EMAIL
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#home" className="footer-brand">BATHRI<span> / TK</span></a>
        <span>DESIGNED TO THINK DIFFERENTLY.</span>
        <span>© 2026 BATHRI PRASATH TK</span>
      </footer>
    </main>
  );
}
