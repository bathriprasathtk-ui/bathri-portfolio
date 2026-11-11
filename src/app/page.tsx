"use client";

import { useState, type CSSProperties, type PointerEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  Binary,
  ChevronDown,
  Command,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  Orbit,
  Shield,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Atlas Enterprise OS",
    type: "ENTERPRISE INTELLIGENCE",
    status: "IN DEVELOPMENT",
    description:
      "An AI-powered operating system for organizations — connecting institutional memory, semantic search, intelligent agents and automated workflows.",
    stack: ["Next.js", "TypeScript", "Supabase", "AI"],
    link: "https://github.com/bathriprasathtk-ui/atlas-enterprise-os",
    mark: "AT",
  },
  {
    number: "02",
    name: "Semantic RAG Router",
    type: "MODEL ROUTING / COST INTELLIGENCE",
    status: "DEPLOYED",
    description:
      "A local-first retrieval system that checks semantic cache, retrieves relevant context and scores query difficulty before choosing whether a model call is needed.",
    stack: ["Python", "Qdrant", "RAG", "Gemini API"],
    link: "",
    mark: "R/",
  },
  {
    number: "03",
    name: "BizWise AI",
    type: "BUSINESS DECISION SYSTEM",
    status: "PROJECT",
    description:
      "An AI business decision assistant that turns revenue, expenses and customer metrics into practical insights and next-step recommendations.",
    stack: ["AI", "Python", "Analytics"],
    link: "",
    mark: "BW",
  },
];

const skillGroups = [
  { name: "INTERFACE", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"] },
  { name: "ENGINEERING", items: ["Python", "Java", "C++", "Node.js", "REST APIs"] },
  { name: "INTELLIGENCE", items: ["RAG", "Qdrant", "Gemini API", "AI Systems", "Semantic Search"] },
  { name: "INFRASTRUCTURE", items: ["Supabase", "SQL", "Git / GitHub", "Docker", "CI / CD"] },
];

const awards = [
  { title: "AWS Foundations", file: "/certificates/AWS.pdf", issuer: "AMAZON WEB SERVICES" },
  { title: "Introduction to Generative AI Studio", file: "/certificates/google.pdf", issuer: "GOOGLE" },
  { title: "Strategic Planning in the AI Age", file: "/certificates/strategic.pdf", issuer: "HP LIFE" },
  { title: "First AI Agent with Python", file: "/certificates/ai-agent.pdf", issuer: "FREE ACADEMY" },
  { title: "How AI Systems Are Built", file: "/certificates/autonexa.pdf", issuer: "AUTONEXA" },
  { title: "Data Science for Beginners", file: "/certificates/Data-Science-Beginners.pdf", issuer: "BOARD INFINITY" },
];

function ReactorScene({
  mode,
  onModeChange,
}: {
  mode: "reactor" | "cave";
  onModeChange: (mode: "reactor" | "cave") => void;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 10 });
  }

  return (
    <div className="scene-shell">
      <div className="scene-topline">
        <span><span className="live-dot" /> PRIVATE SYSTEM / ONLINE</span>
        <span>SECTOR 07 — INDIA</span>
      </div>

      <div
        className={`hybrid-scene ${mode === "cave" ? "scene-cave" : "scene-reactor"}`}
        onPointerMove={handlePointerMove}
        onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ "--tilt-x": `${tilt.x}deg`, "--tilt-y": `${tilt.y}deg` } as CSSProperties}
      >
        <div className="scene-grid" />
        <div className="cave-architecture">
          <div className="cave-wall wall-left" />
          <div className="cave-wall wall-right" />
          <div className="cave-ceiling" />
          <div className="cave-floor" />
          <div className="cave-monolith">
            <span>WAYNE</span>
            <small>RESEARCH DIVISION</small>
          </div>
          <div className="cave-console console-left"><i /><i /><i /><i /></div>
          <div className="cave-console console-right"><i /><i /><i /></div>
        </div>

        <div className="reactor-object">
          <div className="reactor-shadow" />
          <div className="reactor-halo" />
          <div className="reactor-disc disc-outer">
            <div className="disc-ticks" />
          </div>
          <div className="reactor-disc disc-middle">
            <div className="reactor-blades">
              {Array.from({ length: 8 }).map((_, index) => (
                <span key={index} style={{ "--blade": index } as CSSProperties} />
              ))}
            </div>
          </div>
          <div className="reactor-disc disc-inner">
            <div className="reactor-lens"><Zap size={28} strokeWidth={1.25} /></div>
          </div>
          <div className="reactor-core-label">BTK</div>
        </div>

        <div className="scene-readout readout-left">
          <span>CORE SIGNATURE</span><strong>BTK / 001</strong>
          <span className="readout-rule" />
          <span>POWER STATE</span><strong className="readout-live">NOMINAL</strong>
        </div>
        <div className="scene-readout readout-right">
          <span>TACTICAL NETWORK</span><strong>CONNECTED</strong>
          <span className="readout-rule" />
          <span>INTELLIGENCE</span><strong>ACTIVE</strong>
        </div>
        <div className="scene-crosshair crosshair-one" />
        <div className="scene-crosshair crosshair-two" />
      </div>

      <div className="scene-controls">
        <div className="scene-tabs" role="group" aria-label="Scene mode">
          <button className={mode === "reactor" ? "selected" : ""} onClick={() => onModeChange("reactor")}>
            <Orbit size={13} /> REACTOR
          </button>
          <button className={mode === "cave" ? "selected" : ""} onClick={() => onModeChange("cave")}>
            <Command size={13} /> THE CAVE
          </button>
        </div>
        <span className="scene-hint">MOVE POINTER TO INSPECT</span>
      </div>
    </div>
  );
}

function SectionIntro({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="section-intro">
      <span className="section-index">{index}</span>
      <div className="section-intro-copy">
        <p className="micro-label">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sceneMode, setSceneMode] = useState<"reactor" | "cave">("reactor");
  const [activeGroup, setActiveGroup] = useState(0);
  const [expandedProject, setExpandedProject] = useState("01");

  const nav = [
    ["PROFILE", "#profile"],
    ["CAPABILITIES", "#capabilities"],
    ["WORK", "#work"],
    ["ARCHIVE", "#archive"],
  ];

  return (
    <main className="wayne-portfolio">
      <div className="ambient-glow glow-top" />
      <div className="ambient-glow glow-bottom" />

      <header className="wayne-header">
        <a href="#top" className="wordmark" aria-label="Bathri home">
          <span className="wordmark-emblem">B<span>.</span></span>
          <span className="wordmark-name">BATHRI PRASATH <i>TK</i></span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>

        <a className="header-contact" href="mailto:bathriprasathtk@gmail.com">
          LET'S CONNECT <ArrowUpRight size={14} />
        </a>

        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav className="mobile-drawer" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {nav.map(([label, href]) => (
              <a href={href} key={label} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={16} /></a>
            ))}
            <a href="mailto:bathriprasathtk@gmail.com" onClick={() => setMenuOpen(false)}>CONTACT <Mail size={16} /></a>
          </motion.nav>
        )}
      </AnimatePresence>

      <section className="opening" id="top">
        <div className="opening-copy">
          <motion.div className="availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>
            <span className="live-dot" /> INDEPENDENT MIND. CONTINUOUSLY BUILDING.
          </motion.div>
          <motion.p className="opening-pretitle" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }}>
            SOFTWARE ENGINEERING <span>—</span> APPLIED INTELLIGENCE
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }}>
            Quietly<br /><span>building</span><br />what's next<span className="title-period">.</span>
          </motion.h1>
          <motion.p className="opening-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }}>
            I'm Bathri — an IT student and developer exploring the space between thoughtful software, intelligent systems and useful products.
          </motion.p>
          <motion.div className="opening-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}>
            <a href="#work" className="primary-link">EXPLORE SELECTED WORK <ArrowDownRight size={16} /></a>
            <a href="#profile" className="secondary-link">A LITTLE ABOUT ME</a>
          </motion.div>
          <div className="opening-footnote"><span>01 / 04</span><span>PERSONAL TECHNOLOGY OFFICE</span></div>
        </div>

        <motion.div className="opening-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .25 }}>
          <ReactorScene mode={sceneMode} onModeChange={setSceneMode} />
        </motion.div>
        <div className="vertical-note">DESIGNING WITH INTENT <span>·</span> BUILDING WITH PURPOSE</div>
      </section>

      <div className="manifesto-strip">
        <span>LESS NOISE.</span><span className="manifesto-line" /><span>MORE INTENTION.</span><span className="manifesto-line" /><span>BETTER SYSTEMS.</span>
      </div>

      <section className="profile section-wrap" id="profile">
        <SectionIntro index="01" eyebrow="PERSONAL DOSSIER / OPEN FILE" title="A mind for systems. A bias for making." />
        <div className="profile-grid">
          <div className="profile-lead">
            <span className="dossier-stamp"><Shield size={14} /> PERSONAL FILE / 001</span>
            <p>Curiosity is the starting point. <em>Building is the answer.</em></p>
          </div>
          <div className="profile-details">
            <p>I'm Bathri Prasath TK, pursuing a B.Sc. in Information Technology at KPR College of Arts Science and Research.</p>
            <p>I enjoy working across full-stack development and AI — understanding how products fit together, how data moves through systems, and how an idea becomes something people can actually use.</p>
            <div className="dossier-facts">
              <div><span>FOCUS</span><strong>FULL-STACK / AI SYSTEMS</strong></div>
              <div><span>EDUCATION</span><strong>B.SC INFORMATION TECHNOLOGY</strong></div>
              <div><span>LOCATION</span><strong>TAMIL NADU, INDIA</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="capabilities section-wrap" id="capabilities">
        <SectionIntro index="02" eyebrow="CAPABILITY MATRIX / SELECT A DIVISION" title="A practical toolkit, built over time." />
        <div className="capability-layout">
          <div className="capability-selector" role="tablist" aria-label="Skill categories">
            {skillGroups.map((group, index) => (
              <button key={group.name} role="tab" aria-selected={activeGroup === index} className={activeGroup === index ? "active" : ""} onClick={() => setActiveGroup(index)}>
                <span>0{index + 1}</span>{group.name}<ArrowUpRight size={15} />
              </button>
            ))}
          </div>
          <div className="capability-panel" role="tabpanel">
            <div className="panel-topline"><span>TECHNICAL DIVISION / 0{activeGroup + 1}</span><span><AudioLines size={14} /> SYSTEM READY</span></div>
            <h3>{skillGroups[activeGroup].name.toLowerCase()}<span>_stack</span></h3>
            <div className="capability-tags">
              {skillGroups[activeGroup].items.map((item, index) => (
                <motion.span key={item} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }}>{item}</motion.span>
              ))}
            </div>
            <div className="panel-foot"><span>SELECTED KNOWLEDGE AREA</span><Binary size={17} /></div>
          </div>
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <SectionIntro index="03" eyebrow="SELECTED WORK / ENGINEERING LOG" title="Built to solve something real." />
        <div className="work-list">
          {projects.map((project) => {
            const open = expandedProject === project.number;
            return (
              <article className={`work-entry ${open ? "expanded" : ""}`} key={project.number}>
                <button className="work-trigger" onClick={() => setExpandedProject(open ? "" : project.number)} aria-expanded={open}>
                  <span className="work-number">{project.number}</span>
                  <span className="work-title-wrap"><small>{project.type}</small><strong>{project.name}</strong></span>
                  <span className="work-status">{project.status}</span>
                  <span className="work-toggle"><ChevronDown size={18} /></span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div className="work-details" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .3 }}>
                      <div className="work-monogram">{project.mark}</div>
                      <div className="work-description">
                        <p>{project.description}</p>
                        <div className="work-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                        {project.link ? <a href={project.link} target="_blank" rel="noreferrer" className="work-link">VIEW REPOSITORY <ExternalLink size={14} /></a> : <span className="work-link muted-link"><LockKeyhole size={13} /> DETAILS AVAILABLE ON REQUEST</span>}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </section>

      <section className="education section-wrap" id="education">
        <SectionIntro index="04" eyebrow="THE FOUNDATION / EDUCATION" title="Still learning. Always building." />
        <div className="education-record">
          <div className="education-date">2025 <span>—</span> 2028</div>
          <div className="education-main"><span>UNDERGRADUATE DEGREE</span><h3>Bachelor of Science</h3><p>Information Technology · KPR College of Arts Science and Research</p></div>
          <div className="education-grade"><span>CGPA</span><strong>8.52</strong></div>
        </div>
      </section>

      <section className="archive section-wrap" id="archive">
        <SectionIntro index="05" eyebrow="LEARNING ARCHIVE / VERIFIED FILES" title="Proof of curiosity." />
        <div className="archive-list">
          {awards.map((award, index) => (
            <a className="archive-row" href={award.file} target="_blank" rel="noreferrer" key={award.title}>
              <span className="archive-index">0{index + 1}</span>
              <span className="archive-name">{award.title}<small>{award.issuer}</small></span>
              <span className="archive-open">OPEN FILE <ArrowUpRight size={15} /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-orbit"><div /><div /><div /></div>
        <div className="contact-content">
          <p className="micro-label"><Sparkles size={13} /> OPEN CHANNEL / 001</p>
          <h2>Have a good<br /><span>problem to solve?</span></h2>
          <p className="contact-copy">I'm always interested in thoughtful collaborations, ambitious ideas and meaningful engineering challenges.</p>
          <a href="mailto:bathriprasathtk@gmail.com" className="contact-cta">START A CONVERSATION <ArrowUpRight size={17} /></a>
          <div className="social-links">
            <a href="https://github.com/bathriprasathtk-ui" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB</a>
            <a href="https://www.linkedin.com/in/bathri-prasath-tk-b41b73377/" target="_blank" rel="noreferrer"><Linkedin size={16} /> LINKEDIN</a>
            <a href="mailto:bathriprasathtk@gmail.com"><Mail size={16} /> EMAIL</a>
          </div>
        </div>
      </section>

      <footer className="wayne-footer">
        <a href="#top" className="footer-mark">B<span>.</span>TK</a>
        <span>BUILT WITH CURIOSITY. REFINED WITH INTENTION.</span>
        <span>© 2026 BATHRI PRASATH TK</span>
      </footer>
    </main>
  );
}
