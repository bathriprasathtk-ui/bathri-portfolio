"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  ExternalLink,
  Mail,
  Menu,
  Terminal,
  X,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
const skills = [
  { name: "Next.js", type: "Framework" },
  { name: "React", type: "Frontend" },
  { name: "TypeScript", type: "Language" },
  { name: "JavaScript", type: "Language" },
  { name: "Tailwind CSS", type: "UI" },
  { name: "Supabase", type: "Backend" },
  { name: "Python", type: "Language" },
  { name: "C++", type: "Language" },
  { name: "SQL", type: "Database" },
  { name: "Git / GitHub", type: "Tools" },
  { name: "AI Systems", type: "AI" },
  { name: "REST APIs", type: "Backend" },
];

const projects = [
  {
    number: "01",
    title: "Atlas Enterprise OS",
    category: "AI · Enterprise Systems",
    description:
      "A next-generation enterprise operating system built around organizational memory. Atlas brings knowledge, semantic search, workflow automation, and intelligent agents into one connected workspace.",
    stack: ["Next.js", "TypeScript", "Supabase", "AI"],
    featured: true,
  },
  {
    number: "02",
    title: "BizWise AI",
    category: "AI · Business Intelligence",
    description:
      "An AI-powered business intelligence platform focused on helping businesses turn information into clearer insights, smarter decisions, and practical next steps.",
    stack: ["Next.js", "TypeScript", "AI", "Supabase"],
    featured: false,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* AMBIENT BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#f5c518]/[0.045] blur-[140px]" />

        <div className="absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#f5c518]/[0.025] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#050505_90%)]" />
      </div>

      {/* NAVBAR */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-5 pt-5 md:px-8">
          <nav className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3 backdrop-blur-xl md:px-5">
            <a
              href="#home"
              className="group flex items-center gap-3"
              onClick={closeMenu}
            >
            <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image
              src="/logo.png"
              alt="Bathri Prasath TK logo"
              fill
              priority
              sizes="40px"
              className="object-cover"
            />
            </div>

              <div className="hidden sm:block">
                <p className="text-sm font-semibold tracking-wide">
                  BATHRI PRASATH TK
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                  Full-Stack Developer
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {["About", "Skills", "Projects", "Education", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-xs uppercase tracking-[0.18em] text-zinc-500 transition hover:text-white"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <div className="hidden items-center gap-4 md:flex">
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5c518]" />
                Available
              </span>

              <a
                href="#contact"
                className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#f5c518]"
              >
                Let&apos;s Talk
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 rounded-2xl border border-white/[0.08] bg-[#090909]/95 p-4 backdrop-blur-xl md:hidden"
            >
              {["About", "Skills", "Projects", "Education", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="block border-b border-white/[0.06] px-3 py-4 text-sm text-zinc-300 last:border-0"
                  >
                    {item}
                  </a>
                )
              )}
            </motion.div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-5 pb-20 pt-32 md:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
          {/* HERO COPY */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f5c518] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f5c518]" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:text-[11px]">
                Designing. Building. Evolving.
              </span>
            </div>

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#f5c518]">
              Full-Stack Developer · AI Enthusiast
            </p>

            <h1 className="max-w-5xl text-[clamp(3.7rem,9vw,8.5rem)] font-black leading-[0.82] tracking-[-0.07em]">
              BATHRI
              <br />
              <span className="text-zinc-500">PRASATH</span>
              <span className="text-[#f5c518]"> TK</span>
            </h1>

            <div className="mt-9 max-w-2xl border-l border-[#f5c518]/40 pl-5">
              <p className="text-base leading-7 text-zinc-400 md:text-lg">
                I&apos;m a BSc IT student and aspiring Full-Stack Developer
                building modern web applications and exploring what happens
                when software meets artificial intelligence.
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-600 md:text-base">
                I&apos;m interested in turning ambitious ideas into useful
                products — from the interface people see to the systems
                working behind it.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-3 rounded-xl bg-[#f5c518] px-5 py-3.5 text-sm font-bold text-black transition hover:translate-y-[-2px]"
              >
                Explore My Work
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-zinc-200 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Start a Conversation
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 text-xs text-zinc-600">
              <a
                href="https://github.com/bathriprasathtk-ui"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                GITHUB ↗
              </a>

              <span>•</span>

              <a
                href="https://www.linkedin.com/in/bathri-prasath-tk-b41b73377/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                LINKEDIN ↗
              </a>

              <span>•</span>

              <span>INDIA</span>
            </div>
          </motion.div>

          {/* DEVELOPER COMMAND CENTER */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-10 rounded-full bg-[#f5c518]/[0.035] blur-[80px]" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-5 shadow-2xl">
              {/* TOP BAR */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal size={13} className="text-[#f5c518]" />

                  <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-500">
                    Developer Command Center
                  </span>
                </div>

                <span className="font-mono text-[9px] text-zinc-700">
                  BTK-01
                </span>
              </div>

              {/* TERMINAL */}
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#070707]">
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(245,197,24,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,.4) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative p-6">
                  <div className="mb-7 flex items-center gap-2 border-b border-white/[0.06] pb-4">
                    <span className="h-2 w-2 rounded-full bg-[#f5c518]" />
                    <span className="font-mono text-[10px] text-zinc-600">
                      system.profile
                    </span>
                  </div>

                  <div className="space-y-6 font-mono">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                        identity
                      </p>
                      <p className="mt-2 text-sm text-zinc-200">
                        <span className="text-[#f5c518]">&gt;</span>{" "}
                        BATHRI_PRASATH_TK
                      </p>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                        primary_focus
                      </p>

                      <div className="mt-2 space-y-1.5 text-sm text-zinc-400">
                        <p>
                          <span className="text-[#f5c518]">&gt;</span>{" "}
                          full_stack_development
                        </p>
                        <p>
                          <span className="text-[#f5c518]">&gt;</span>{" "}
                          ai_powered_applications
                        </p>
                        <p>
                          <span className="text-[#f5c518]">&gt;</span>{" "}
                          product_building
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                        currently_building
                      </p>

                      <p className="mt-2 text-sm text-zinc-300">
                        <span className="text-[#f5c518]">&gt;</span> Atlas
                        Enterprise OS
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                        <p className="text-[8px] uppercase tracking-[0.18em] text-zinc-700">
                          stack
                        </p>
                        <p className="mt-2 text-[11px] text-zinc-400">
                          Next.js · TS
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                        <p className="text-[8px] uppercase tracking-[0.18em] text-zinc-700">
                          status
                        </p>
                        <p className="mt-2 flex items-center gap-2 text-[11px] text-zinc-400">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5c518]" />
                          building
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SYSTEM FOOTER */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  ["01", "BUILD"],
                  ["02", "LEARN"],
                  ["03", "EVOLVE"],
                ].map(([num, text]) => (
                  <div
                    key={num}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"
                  >
                    <p className="font-mono text-[9px] text-[#f5c518]">
                      {num}
                    </p>

                    <p className="mt-2 text-[9px] font-medium tracking-wider text-zinc-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-zinc-600 md:flex"
        >
          Scroll
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/[0.06] px-5 py-28 md:px-8 md:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#f5c518]">
              01 / About
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              I&apos;m not just
              <br />
              <span className="text-zinc-600">learning code.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <p className="text-xl leading-9 text-zinc-300 md:text-2xl">
              I&apos;m learning how to turn an idea into something people can
              actually use.
            </p>

            <p className="mt-7 leading-8 text-zinc-500">
              I&apos;m currently pursuing a BSc in Information Technology while
              building my skills across frontend development, backend systems,
              databases, and artificial intelligence.
            </p>

            <p className="mt-5 leading-8 text-zinc-600">
              What interests me most is the space between an idea and a
              finished product — designing the interface, connecting the
              systems, solving the problems, and continuously improving what I
              build.
            </p>

            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "BUILD WITH PURPOSE",
                "LEARN BY BUILDING",
                "THINK SYSTEMS",
                "KEEP EVOLVING",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] px-4 py-2 text-[9px] tracking-[0.2em] text-zinc-500"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/[0.06] px-5 py-28 md:px-8 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#f5c518]">
                02 / Technology
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
                The tools
                <br />
                <span className="text-zinc-600">behind the work.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-zinc-600">
              A growing toolkit across modern frontend development, backend
              systems, databases, programming, and AI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition duration-300 hover:border-[#f5c518]/30 hover:bg-[#f5c518]/[0.035]"
              >
                <div className="absolute right-[-20px] top-[-20px] h-20 w-20 rounded-full bg-[#f5c518]/0 blur-xl transition group-hover:bg-[#f5c518]/10" />

                <p className="relative text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                  {skill.type}
                </p>

                <p className="relative mt-7 text-sm font-semibold text-zinc-200 md:text-base">
                  {skill.name}
                </p>

                <div className="mt-4 h-px w-0 bg-[#f5c518] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/[0.06] px-5 py-28 md:px-8 md:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f5c518]">
              03 / Selected Work
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-bold tracking-[-0.05em] md:text-7xl">
              I build ideas
              <br />
              into <span className="text-zinc-600">working systems.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-600 md:text-base">
              These are the products currently shaping how I think about
              software, AI, interfaces, and real-world problem solving.
            </p>
          </div>

          <div className="space-y-5">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] ${
                  project.featured ? "min-h-[500px]" : "min-h-[430px]"
                }`}
              >
                <div className="absolute inset-0">
                  <div className="absolute right-[-10%] top-[-25%] h-[500px] w-[500px] rounded-full bg-[#f5c518]/[0.045] blur-[100px] transition duration-700 group-hover:bg-[#f5c518]/[0.09]" />

                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)",
                      backgroundSize: "60px 60px",
                    }}
                  />
                </div>

                <div className="relative grid h-full min-h-[inherit] gap-10 p-7 md:p-12 lg:grid-cols-[1fr_.65fr]">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-[#f5c518]">
                          {project.number}
                        </span>

                        <span className="h-px w-10 bg-white/10" />

                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="mt-12 max-w-xl text-4xl font-bold tracking-[-0.05em] md:text-6xl">
                        {project.title}
                      </h3>

                      <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/[0.08] bg-black/20 px-3 py-1.5 text-[10px] text-zinc-500"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative flex min-h-[260px] items-center justify-center lg:min-h-0">
                    <div className="relative h-56 w-full max-w-md rounded-2xl border border-white/[0.08] bg-black/50 p-4 shadow-2xl transition duration-700 group-hover:scale-[1.02]">
                      <div className="flex gap-1.5 border-b border-white/[0.06] pb-3">
                        <span className="h-2 w-2 rounded-full bg-white/10" />
                        <span className="h-2 w-2 rounded-full bg-white/10" />
                        <span className="h-2 w-2 rounded-full bg-white/10" />
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="h-2 w-1/3 rounded bg-[#f5c518]/30" />
                        <div className="h-2 w-2/3 rounded bg-white/[0.08]" />

                        <div className="grid grid-cols-3 gap-2 pt-4">
                          <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                          <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                          <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                        </div>

                        <div className="h-2 w-1/2 rounded bg-white/[0.06]" />
                      </div>

                      <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5c518] text-black">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section
        id="education"
        className="border-t border-white/[0.06] px-5 py-28 md:px-8 md:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#f5c518]">
              04 / Education
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] md:text-6xl">
              Learning
              <br />
              <span className="text-zinc-600">in public.</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute bottom-0 left-[5px] top-0 w-px bg-white/[0.08]" />

            <div className="relative pl-10">
              <span className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-[#f5c518] bg-[#050505]" />

              <p className="text-xs uppercase tracking-[0.25em] text-[#f5c518]">
                2025 — 2028
              </p>

              <h3 className="mt-5 text-2xl font-bold md:text-3xl">
                BSc Information Technology
              </h3>

              <p className="mt-3 text-zinc-500">
                KPR College of Arts Science and Research
              </p>

              <p className="mt-7 max-w-2xl leading-7 text-zinc-600">
                Studying the fundamentals of software development, databases,
                programming, algorithms, and information technology while
                building practical experience through personal projects and
                modern development technologies.
              </p>

              <div className="mt-8 grid gap-2 sm:grid-cols-3">
                {["Software", "Systems", "AI"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                  >
                    <Check size={14} className="text-[#f5c518]" />

                    <p className="mt-4 text-xs text-zinc-500">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
<section className="border-t border-white/[0.06] px-5 py-28 md:px-8 md:py-36">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#f5c518]">
          05 / Certifications
        </p>

        <h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-[-0.05em] md:text-6xl">
          Learning,
          <br />
          <span className="text-zinc-600">documented.</span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-zinc-600">
        A collection of certifications and learning milestones across cloud
        computing, artificial intelligence, Python, data science, and
        strategic thinking.
      </p>
    </div>

    <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {[
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
      ].map((certificate, index) => (
        <motion.a
          key={certificate.number}
          href={certificate.file}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
          className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#f5c518]/30 hover:bg-[#f5c518]/[0.025]"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute right-[-50px] top-[-50px] h-32 w-32 rounded-full bg-[#f5c518]/0 blur-3xl transition duration-500 group-hover:bg-[#f5c518]/10" />

          {/* Top row */}
          <div className="relative flex items-center justify-between">
            <span className="font-mono text-[10px] text-[#f5c518]">
              {certificate.number}
            </span>

            <ArrowUpRight
              size={17}
              className="text-zinc-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f5c518]"
            />
          </div>

          {/* Provider */}
          <div className="relative mt-10">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
              {certificate.provider}
            </p>

            <h3 className="mt-4 min-h-[56px] text-xl font-semibold leading-7 tracking-[-0.025em] text-zinc-200">
              {certificate.title}
            </h3>

            <p className="mt-3 min-h-[42px] text-xs leading-5 text-zinc-600">
              {certificate.subtitle}
            </p>
          </div>

          {/* Bottom */}
          <div className="relative mt-8 flex items-center justify-between border-t border-white/[0.06] pt-4">
            <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-700">
              {certificate.date}
            </span>

            <span className="text-[9px] uppercase tracking-[0.18em] text-zinc-700 transition group-hover:text-[#f5c518]">
              View Certificate
            </span>
          </div>
        </motion.a>
      ))}
    </div>

    {/* Verification note */}
    <div className="mt-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-zinc-700">
      <span className="h-1.5 w-1.5 rounded-full bg-[#f5c518]" />
      Click any certificate to view the original document
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative border-t border-white/[0.06] px-5 py-28 md:px-8 md:py-40"
      >
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5c518]/[0.04] blur-[120px]" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-5xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#f5c518]">
            06 / Contact
          </p>

          <h2 className="mt-7 text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-[-0.07em]">
            HAVE AN IDEA?
            <br />
            <span className="text-zinc-600">LET&apos;S BUILD IT.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-zinc-500 md:text-base">
            Whether it&apos;s a project, collaboration, opportunity, or just a
            conversation about technology — I&apos;d be happy to hear from you.
          </p>

          <a
            href="mailto:bathriprasathtk@gmail.com"
            className="group mx-auto mt-9 flex w-fit items-center gap-4 rounded-xl bg-[#f5c518] px-6 py-4 text-sm font-bold text-black transition hover:translate-y-[-2px]"
          >
            <Mail size={18} />
            bathriprasathtk@gmail.com

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-[10px] uppercase tracking-[0.2em] text-zinc-700 sm:flex-row">
          <p>© 2026 BATHRI PRASATH TK</p>

          <div className="flex gap-5">
            <a
              href="https://github.com/bathriprasathtk-ui"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/bathri-prasath-tk-b41b73377/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-300"
            >
              LinkedIn
            </a>

            <a
              href="#home"
              className="flex items-center gap-1 transition hover:text-zinc-300"
            >
              Back to top
              <ChevronRight size={11} className="-rotate-90" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}