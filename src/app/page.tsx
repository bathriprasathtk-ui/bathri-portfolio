
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const gold = "#D6AD58";

const skills = [
  { name: "Next.js", type: "FRAMEWORK" },
  { name: "React", type: "FRONTEND" },
  { name: "TypeScript", type: "LANGUAGE" },
  { name: "JavaScript", type: "LANGUAGE" },
  { name: "Tailwind CSS", type: "UI" },
  { name: "Supabase", type: "BACKEND" },
  { name: "Python", type: "LANGUAGE" },
  { name: "C++", type: "LANGUAGE" },
  { name: "SQL", type: "DATABASE" },
  { name: "Git / GitHub", type: "TOOLS" },
  { name: "AI Systems", type: "AI" },
  { name: "REST APIs", type: "BACKEND" },
];

const projects = [
  {
    number: "01",
    title: "Atlas Enterprise OS",
    category: "AI · ENTERPRISE SYSTEMS",
    description:
      "A next-generation enterprise operating system built around organizational memory. Atlas brings knowledge, semantic search, workflow automation, and intelligent agents into one connected workspace.",
    stack: ["Next.js", "TypeScript", "Supabase", "AI"],
    status: "IN DEVELOPMENT",
    featured: true,
    url: "https://github.com/bathriprasathtk-ui/atlas-enterprise-os",
  },
  {
    number: "02",
    title: "BizWise AI",
    category: "AI · BUSINESS INTELLIGENCE",
    description:
      "An AI-powered business intelligence platform focused on helping businesses turn information into clearer insights, smarter decisions, and practical next steps.",
    stack: ["Next.js", "TypeScript", "AI", "Supabase"],
    status: "PROJECT",
    featured: false,
    url: "",
  },
];

const certificates = [
  {
    number: "01",
    provider: "AWS",
    title: "AWS Foundations",
    subtitle: "Getting Started with the AWS Cloud Essentials",
    date: "SEPTEMBER 10, 2026",
    file: "/certificates/AWS.pdf",
  },
  {
    number: "02",
    provider: "GOOGLE",
    title: "Introduction to Generative AI Studio",
    subtitle: "Generative AI",
    date: "SEPTEMBER 10, 2026",
    file: "/certificates/google.pdf",
  },
  {
    number: "03",
    provider: "HP LIFE",
    title: "Strategic Planning in the AI Age",
    subtitle: "AI-driven strategic planning",
    date: "SEPTEMBER 10, 2026",
    file: "/certificates/strategic.pdf",
  },
  {
    number: "04",
    provider: "FREEACADEMY.AI",
    title: "First AI Agent Python",
    subtitle: "7 lessons · Final exam passed",
    date: "SEPTEMBER 9, 2026",
    file: "/certificates/ai-agent.pdf",
  },
  {
    number: "05",
    provider: "AUTONEXA AI",
    title: "How AI Systems Are Built",
    subtitle: "Hardware, Models & Training · Score 10/10",
    date: "SEPTEMBER 9, 2026",
    file: "/certificates/autonexa.pdf",
  },
  {
    number: "06",
    provider: "BOARD INFINITY",
    title: "Data Science for Beginners",
    subtitle: "Foundational data science course",
    date: "SEPTEMBER 8, 2026",
    file: "/certificates/Data-Science-Beginners.pdf",
  },
];

const technologies = [
  { name: "REACT", angle: 0 },
  { name: "PYTHON", angle: 60 },
  { name: "AI", angle: 120 },
  { name: "NEXT.JS", angle: 180 },
  { name: "SQL", angle: 240 },
  { name: "TYPESCRIPT", angle: 300 },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="section-label">
      <span>{number}</span>
      <span className="label-line" />
      {children}
    </p>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTech, setActiveTech] = useState("REACT");

  const navItems = ["About", "Skills", "Projects", "Education", "Contact"];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="home" className="portfolio-shell">
      {/* AMBIENT BACKGROUND */}
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-glow ambient-glow-one" />
        <div className="ambient-glow ambient-glow-two" />
        <div className="ambient-grid" />
        <div className="ambient-grain" />
      </div>

      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-logo">
              <Image
                src="/logo.png"
                alt="Bathri Prasath TK"
                fill
                priority
                sizes="42px"
                className="object-cover"
              />
            </span>
            <span className="brand-copy">
              <strong>BATHRI PRASATH TK</strong>
              <small>DEVELOPER · BUILDER · CREATOR</small>
            </span>
          </a>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <span className="availability">
              <span />
              AVAILABLE
            </span>
            <a href="#contact" className="nav-cta">
              LET&apos;S TALK <ArrowUpRight size={14} />
            </a>
          </div>

          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item} <ArrowUpRight size={15} />
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" />
              DESIGNING · BUILDING · EVOLVING
            </div>

            <p className="hero-role">
              FULL-STACK DEVELOPER <span>·</span> AI ENTHUSIAST
            </p>

            <h1 className="hero-title">
              BATHRI
              <br />
              <span>PRASATH</span>
              <em>TK.</em>
            </h1>

            <div className="hero-description">
              <span className="gold-rule" />
              <div>
                <p>
                  I build digital experiences where thoughtful design meets
                  intelligent technology.
                </p>
                <p className="muted-copy">
                  A BSc IT student exploring full-stack development, AI systems,
                  and the process of turning ambitious ideas into useful
                  products.
                </p>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="gold-button">
                EXPLORE MY WORK <ArrowUpRight size={17} />
              </a>
              <a href="#contact" className="outline-button">
                START A CONVERSATION
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/bathriprasathtk-ui"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={15} /> GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/bathri-prasath-tk-b41b73377/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={15} /> LINKEDIN
              </a>
              <span>INDIA</span>
            </div>
          </motion.div>

          {/* LIVING CENTERPIECE */}
          <motion.div
            className="core-stage"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="core-caption">
              <span>01 — SIGNATURE OBJECT</span>
              <span>BTK / DIGITAL IDENTITY</span>
            </div>

            <div className="golden-core">
              <div className="core-halo halo-one" />
              <div className="core-halo halo-two" />
              <div className="core-halo halo-three" />

              <div className="core-orbit orbit-one">
                <span />
              </div>
              <div className="core-orbit orbit-two">
                <span />
              </div>
              <div className="core-orbit orbit-three">
                <span />
              </div>

              <div className="core-structure">
                <div className="core-facet facet-one" />
                <div className="core-facet facet-two" />
                <div className="core-facet facet-three" />
                <div className="core-center">
                  <span>BTK</span>
                  <small>EST. 2026</small>
                </div>
              </div>

              <div className="core-sparks">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    style={{ "--spark-index": i } as React.CSSProperties}
                  />
                ))}
              </div>

              {technologies.map((tech) => (
                <button
                  key={tech.name}
                  className={`tech-node ${
                    activeTech === tech.name ? "active" : ""
                  }`}
                  style={{ "--node-angle": `${tech.angle}deg` } as React.CSSProperties}
                  onClick={() => setActiveTech(tech.name)}
                  aria-label={`Select ${tech.name}`}
                  aria-pressed={activeTech === tech.name}
                >
                  <span>{tech.name}</span>
                </button>
              ))}
            </div>

            <div className="core-readout">
              <div>
                <span className="readout-label">CURRENT SIGNAL</span>
                <strong>{activeTech}</strong>
              </div>
              <div className="signal-indicator">
                <span />
                SYSTEM ACTIVE
              </div>
            </div>

            <p className="core-footnote">
              A MIND IN CONSTANT CONSTRUCTION.
            </p>
          </motion.div>
        </div>

        <a href="#about" className="scroll-cue">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
        <span className="hero-index">01 / 07</span>
      </section>

      {/* ABOUT */}
      <section id="about" className="content-section about-section">
        <div className="section-grid">
          <Reveal>
            <SectionLabel number="01">THE PERSON</SectionLabel>
            <h2 className="section-heading">
              MORE THAN
              <br />
              <span>LINES OF CODE.</span>
            </h2>
          </Reveal>

          <Reveal className="about-content">
            <p className="large-statement">
              I&apos;m learning how to turn an idea into something people can
              actually use.
            </p>
            <p>
              I&apos;m currently pursuing a BSc in Information Technology while
              building my skills across frontend development, backend systems,
              databases, and artificial intelligence.
            </p>
            <p>
              What interests me most is the space between an idea and a
              finished product — designing the interface, connecting the
              systems, solving the problems, and continuously improving what I
              build.
            </p>

            <div className="principles">
              {["BUILD WITH PURPOSE", "LEARN BY BUILDING", "THINK SYSTEMS", "KEEP EVOLVING"].map(
                (item, index) => (
                  <span key={item}>
                    <i>0{index + 1}</i> {item}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="content-section skills-section">
        <div className="section-topline">
          <div>
            <SectionLabel number="02">THE TOOLKIT</SectionLabel>
            <h2 className="section-heading">
              TECHNOLOGY
              <br />
              <span>IN MY HANDS.</span>
            </h2>
          </div>
          <p className="section-aside">
            A growing toolkit across modern frontend development, backend
            systems, databases, programming, and AI.
          </p>
        </div>

        <div className="skills-constellation">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-piece"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
            >
              <span className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <small>{skill.type}</small>
                <strong>{skill.name}</strong>
              </div>
              <ArrowUpRight size={16} className="skill-arrow" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="content-section projects-section">
        <div className="section-topline">
          <div>
            <SectionLabel number="03">SELECTED WORK</SectionLabel>
            <h2 className="section-heading">
              IDEAS INTO
              <br />
              <span>WORKING SYSTEMS.</span>
            </h2>
          </div>
          <p className="section-aside">
            Projects shaping how I think about software, AI, interfaces, and
            real-world problem solving.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              className={`project-piece ${
                project.featured ? "featured-project" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >
              <div className="project-visual">
                <div className="project-visual-top">
                  <span>BTK / PROJECT {project.number}</span>
                  <span>{project.status}</span>
                </div>
                <div className="project-art">
                  <div className="project-art-ring ring-a" />
                  <div className="project-art-ring ring-b" />
                  <div className="project-art-ring ring-c" />
                  <div className="project-art-core">
                    <span>{project.number}</span>
                  </div>
                  <div className="project-art-label">
                    {project.featured ? "ATLAS / MEMORY ENGINE" : "BIZWISE / INSIGHTS"}
                  </div>
                </div>
                <div className="project-visual-bottom">
                  <span>DESIGN / ENGINEERING / IDEAS</span>
                  <span>0{project.number}</span>
                </div>
              </div>

              <div className="project-details">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    EXPLORE PROJECT <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <span className="project-link project-link-muted">
                    PROJECT DETAILS COMING SOON
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="content-section education-section">
        <div className="section-grid">
          <Reveal>
            <SectionLabel number="04">EDUCATION</SectionLabel>
            <h2 className="section-heading">
              LEARNING
              <br />
              <span>IN MOTION.</span>
            </h2>
          </Reveal>

          <Reveal className="education-card">
            <div className="education-year">2025 — 2028</div>
            <h3>BSc Information Technology</h3>
            <p className="education-college">
              KPR College of Arts Science and Research
            </p>
            <p className="education-description">
              Studying the fundamentals of software development, databases,
              programming, algorithms, and information technology while
              building practical experience through personal projects and
              modern development technologies.
            </p>
            <div className="education-focus">
              {["SOFTWARE", "SYSTEMS", "AI"].map((item) => (
                <span key={item}>
                  <Check size={14} /> {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="content-section certification-section">
        <div className="section-topline">
          <div>
            <SectionLabel number="05">CERTIFICATIONS</SectionLabel>
            <h2 className="section-heading">
              LEARNING,
              <br />
              <span>DOCUMENTED.</span>
            </h2>
          </div>
          <p className="section-aside">
            Learning milestones across cloud computing, artificial
            intelligence, Python, data science, and strategic thinking.
          </p>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <motion.a
              key={certificate.number}
              href={certificate.file}
              target="_blank"
              rel="noreferrer"
              className="certificate-piece"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.045 }}
            >
              <div className="certificate-top">
                <span>{certificate.number}</span>
                <ArrowUpRight size={18} />
              </div>
              <div className="certificate-content">
                <small>{certificate.provider}</small>
                <h3>{certificate.title}</h3>
                <p>{certificate.subtitle}</p>
              </div>
              <div className="certificate-bottom">
                <span>{certificate.date}</span>
                <span>VIEW ↗</span>
              </div>
            </motion.a>
          ))}
        </div>
        <p className="certificate-note">
          <span /> SELECT A CERTIFICATE TO VIEW THE ORIGINAL DOCUMENT
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-ambient" />
        <Reveal className="contact-inner">
          <SectionLabel number="06">THE NEXT CHAPTER</SectionLabel>
          <p className="contact-pretitle">HAVE SOMETHING IN MIND?</p>
          <h2>
            LET&apos;S MAKE
            <br />
            <span>IT REAL.</span>
          </h2>
          <p className="contact-description">
            Whether it&apos;s a project, collaboration, opportunity, or just a
            conversation about technology — I&apos;d be happy to hear from you.
          </p>
          <a
            href="mailto:bathriprasathtk@gmail.com"
            className="contact-button"
          >
            <Mail size={18} />
            bathriprasathtk@gmail.com
            <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-brand">
          <strong>BTK<span>.</span></strong>
          <small>BUILT WITH INTENTION.</small>
        </div>
        <p>© 2026 BATHRI PRASATH TK</p>
        <div className="footer-links">
          <a
            href="https://github.com/bathriprasathtk-ui"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/bathri-prasath-tk-b41b73377/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a href="#home">
            BACK TO TOP <ChevronRight size={13} className="-rotate-90" />
          </a>
        </div>
      </footer>
    </main>
  );
}
