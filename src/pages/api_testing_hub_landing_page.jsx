import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Braces,
  CheckCircle2,
  ChevronRight,
  FileText,
  GitBranch,
  Globe2,
  Layers3,
  Mail,
  Network,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Zap,
} from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const LOGO_SRC = "/assets/api-testing-logo.png";
const BANNER_SRC = "/assets/api-testing-banner.png";

const GITHUB_URL = "https://github.com/Huy4nh/API_Testing_Hub_Prototype.git";
const LINKEDIN_URL = "https://linkedin.com/in/huỳnh-nguyễn-huy-anh";
const EMAIL = "huynhnguyenhuyanh.work@gmail.com";

const navItems = ["Home", "Platform", "Workflow", "Architecture", "Contact"];
const sectionIds = ["home", "platform", "workflow", "architecture", "contact"];

const panelClass =
  "interactive-panel relative overflow-visible rounded-[2rem] border border-white/10 bg-[#001d31]/55 backdrop-blur-[2px]";

const cardClass =
  "interactive-card relative rounded-[1.5rem] border border-white/[0.08] bg-[#001e32]/60 backdrop-blur-[2px]";

const smallCardClass =
  "interactive-card relative rounded-2xl border border-white/[0.08] bg-[#001e32]/60 backdrop-blur-[2px]";

const darkCardClass =
  "interactive-card relative rounded-2xl border border-white/[0.08] bg-[#041f35]/70 backdrop-blur-[2px]";

const linkCardClass =
  "interactive-card flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/20 p-4 text-white/70 backdrop-blur-[2px]";

const painPoints = [
  "Manual test case writing takes too long.",
  "Test coverage depends on individual experience.",
  "Reports are inconsistent and hard to reuse.",
  "API execution and validation are disconnected.",
  "Chatbots alone cannot manage stateful engineering workflows.",
];

const capabilities = [
  {
    icon: Sparkles,
    title: "Natural Language Workflow Start",
    description:
      "Start API testing from plain language requests and turn intent into structured commands.",
  },
  {
    icon: Network,
    title: "Target & Scope Understanding",
    description:
      "Clarify target API, testing scope, required fields, and expected behavior before execution.",
  },
  {
    icon: Braces,
    title: "AI-assisted Test Case Generation",
    description:
      "Generate positive, missing-field, invalid-input, regression, and edge-case scenarios.",
  },
  {
    icon: ShieldCheck,
    title: "Human Review Before Execution",
    description:
      "Keep humans in control with review, edit, approve, cancel, finalize, and rerun states.",
  },
  {
    icon: Zap,
    title: "API Execution Engine",
    description:
      "Execute approved test cases against target APIs through a reusable workflow service.",
  },
  {
    icon: BadgeCheck,
    title: "Validation Engine",
    description:
      "Validate status codes, response structure, content rules, and expected behavior.",
  },
  {
    icon: FileText,
    title: "Artifact & Report Builder",
    description:
      "Generate draft, execution, validation, staged final, and finalized reports.",
  },
  {
    icon: RefreshCcw,
    title: "Rerun & Iteration",
    description:
      "Rerun workflows with updated instructions while preserving audit-friendly state.",
  },
];

const enterpriseCards = [
  [
    "Stable DTO Contract",
    "Standard request and response models for predictable integration across CLI, REST, Web, Bot, Dashboard, and SDK interfaces.",
  ],
  [
    "Read-only Status & Snapshot",
    "Inspect workflow status, snapshots, and artifacts without mutating workflow state.",
  ],
  [
    "Normalized Error Contract",
    "Recoverable responses with next actions instead of opaque failures.",
  ],
  [
    "Audit-friendly Workflow",
    "Workflow IDs, thread IDs, phase history, canonical commands, and artifact references for observability.",
  ],
  [
    "Future Platform Layer",
    "Ready for PostgreSQL, Redis/Celery, object storage, metrics, tracing, and policy engine expansion.",
  ],
];

const useCases = [
  "Backend API QA",
  "Regression Testing",
  "Internal API Validation",
  "Release Readiness",
  "Developer Productivity",
  "Enterprise API Governance",
];

const visionItems = [
  "Multi-step API interaction",
  "API capability matching",
  "Risk assessment before execution",
  "Human approval for sensitive actions",
  "Result verification",
  "Full audit trail",
  "Reuse of the existing review-to-execution service layer",
];

function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-100"
        autoPlay
        loop
        muted
        playsInline
        src={VIDEO_URL}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-[#00213a]/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,25,39,0.12),rgba(0,25,39,0.28))]" />
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div className="interactive-soft mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100/80 shadow-[0_0_24px_rgba(72,194,255,0.12)] backdrop-blur-md">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.8)]" />
      {children}
    </div>
  );
}

function CTAButton({ children, href, variant = "primary" }) {
  return (
    <a
      href={href}
      className={
        variant === "primary"
          ? "liquid-glass group inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium text-white transition duration-300 hover:scale-[1.04] hover:shadow-[0_0_32px_rgba(85,195,255,0.26)]"
          : "interactive-soft inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-3 text-sm font-medium text-white/80 transition duration-300 hover:scale-[1.04] hover:border-cyan-200/30 hover:text-white"
      }
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 150;
      const bottomReached =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;

      if (bottomReached) {
        setActiveSection("contact");
        ticking = false;
        return;
      }

      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const getSectionId = (item) =>
    item.toLowerCase() === "home" ? "home" : item.toLowerCase();

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);

    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#00253d]/35 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "home")}
          className="flex items-center gap-3"
        >
          <div className="liquid-glass flex h-11 w-11 items-center justify-center rounded-2xl p-2 transition duration-300 hover:scale-[1.06]">
            <img
              src={LOGO_SRC}
              alt="API Testing Hub signature logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="leading-none">
            <div
              className="text-2xl font-normal tracking-tight text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              API Testing Hub<sup className="ml-0.5 text-[10px]">®</sup>
            </div>
            <div className="mt-1 hidden text-[11px] uppercase tracking-[0.24em] text-cyan-100/50 sm:block">
              Workflow Intelligence
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const sectionId = getSectionId(item);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item}
                href={`#${sectionId}`}
                onClick={(event) => handleNavClick(event, sectionId)}
                className={`relative text-sm transition-all duration-300 hover:text-white ${
                  isActive ? "text-white" : "text-white/55"
                }`}
              >
                {item}

                <span
                  className={`absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.9)] transition-all duration-300 ${
                    isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="liquid-glass hidden rounded-full px-6 py-2.5 text-sm font-medium text-white transition duration-300 hover:scale-[1.04] md:inline-flex"
        >
          Contact Cooperation
        </a>
      </nav>
    </header>
  );
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl animate-fade-rise-delay-2 overflow-visible">
      <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />

      <div className={`${panelClass} p-3`}>
        <div className="rounded-[1.5rem] border border-white/[0.08] bg-black/25">
          <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-300/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
              <span className="h-3 w-3 rounded-full bg-green-300/80" />
            </div>

            <div className="interactive-soft rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">
              HeadlessWorkflowService / pending_review
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5 border-white/[0.08] p-5 lg:border-r">
              <div className={`${smallCardClass} bg-white/[0.04] p-5`}>
                <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan-100/50">
                  <TerminalSquare className="h-4 w-4" /> Natural language input
                </div>
                <p className="text-left font-mono text-sm leading-7 text-white/85">
                  “Test image generation API on staging, include positive, missing field, and invalid input cases.”
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {["positive", "missing_field", "invalid_input"].map((item) => (
                  <div key={item} className={`${darkCardClass} p-4 text-left`}>
                    <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-200" />
                    <div className="font-mono text-xs text-white/80">{item}</div>
                    <div className="mt-2 text-xs text-white/40">Generated case</div>
                  </div>
                ))}
              </div>

              <div className="interactive-card rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.05] p-4 text-left">
                <div className="mb-1 text-sm font-medium text-emerald-100">
                  Status: Ready for approval
                </div>
                <p className="text-sm text-white/50">
                  Human review required before API execution starts.
                </p>
              </div>
            </div>

            <div className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-left">
                  <div className="text-sm font-medium text-white">Artifacts</div>
                  <div className="text-xs text-white/45">Report-ready workflow outputs</div>
                </div>
                <FileText className="h-5 w-5 text-cyan-100/70" />
              </div>

              <div className="space-y-3">
                {[
                  ["draft_report_md", "Generated test plan", "Markdown"],
                  ["execution_report_json", "Structured execution result", "JSON"],
                  ["validation_report_json", "Response validation summary", "JSON"],
                  ["finalized_report_md", "Audit-friendly final report", "Markdown"],
                ].map(([title, desc, tag]) => (
                  <div
                    key={title}
                    className={`${smallCardClass} flex items-center justify-between p-4`}
                  >
                    <div className="text-left">
                      <div className="font-mono text-xs text-cyan-50">{title}</div>
                      <div className="mt-1 text-xs text-white/45">{desc}</div>
                    </div>
                    <span className="rounded-full border border-white/[0.08] px-3 py-1 text-[11px] text-white/50">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="interactive-card mt-5 rounded-2xl border border-cyan-200/10 bg-[#001929]/80 p-4 text-left font-mono text-xs leading-6 text-white/60">
                <span className="text-cyan-200">workflow_id</span>: wf_20260314_131748
                <br />
                <span className="text-cyan-200">phase</span>: pending_review
                <br />
                <span className="text-cyan-200">next_actions</span>: approve | edit | cancel | rerun
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-visible px-6 pt-32 pb-24 sm:px-8 lg:pt-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <SectionLabel>Enterprise AI workflow platform for API testing</SectionLabel>

        <h1
          className="mx-auto max-w-7xl animate-fade-rise text-5xl font-normal leading-[0.95] tracking-[-2.46px] text-white sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Build, run, and validate API workflows with an intelligent AI testing agent.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl animate-fade-rise-delay text-base leading-relaxed text-white/65 sm:text-lg">
          Turn API testing from a manual routine into an intelligent, auditable, enterprise-ready workflow. API Testing Agent helps engineering teams transform natural language requests into structured API test workflows — from test case generation to execution, validation, reporting, and rerun.
        </p>

        <div className="mt-10 flex animate-fade-rise-delay-2 flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href={`mailto:${EMAIL}?subject=Request%20a%20Demo%20-%20API%20Testing%20Hub`}>
            Request a Demo
          </CTAButton>
          <CTAButton href="#architecture" variant="secondary">
            View Technical Architecture
          </CTAButton>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="platform" className="relative overflow-visible px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <SectionLabel>Market problem</SectionLabel>
          <h2
            className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            API testing is still too manual, fragmented, and hard to scale.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Modern products depend on APIs, but many testing workflows are still scattered across manual scripts, Postman collections, ad-hoc checklists, and undocumented human decisions. That slows release cycles and makes quality inconsistent across teams.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {painPoints.map((point, index) => (
            <div key={point} className={`${cardClass} p-5`}>
              <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-200/10 text-sm font-medium text-cyan-50">
                {index + 1}
              </div>
              <p className="text-sm leading-6 text-white/70">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const steps = [
    "Natural Language Request",
    "Target Selection",
    "Scope Confirmation",
    "Test Case Review",
    "API Execution",
    "Validation",
    "Final Report",
    "Rerun / Finalize",
  ];

  return (
    <section id="workflow" className="relative overflow-visible px-6 py-24 sm:px-8">
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionLabel>Solution</SectionLabel>
            <h2
              className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              An AI workflow layer for API testing.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              API Testing Agent acts as a headless workflow service that understands user intent, routes the workflow, manages state, generates test cases, executes API calls, validates results, and produces structured artifacts.
            </p>
          </div>

          <div className={`${panelClass} p-4`}>
            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step} className={`${smallCardClass} group p-5`}>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-cyan-200/10 px-3 py-1 font-mono text-[11px] text-cyan-100">
                      0{index + 1}
                    </span>
                    {index < steps.length - 1 && (
                      <ChevronRight className="h-4 w-4 text-white/25 transition group-hover:text-cyan-100" />
                    )}
                  </div>
                  <div className="text-sm font-medium text-white/85">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreCapabilities() {
  return (
    <section className="relative overflow-visible px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Core capabilities</SectionLabel>
          <h2
            className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Everything your team needs to move from request to validated API report.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, description }) => (
            <div key={title} className={`${cardClass} p-6`}>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100/15 bg-cyan-200/10 text-cyan-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-medium text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeadlessMatters() {
  const interfaces = [
    "CLI",
    "REST API",
    "Web Chat",
    "Telegram Bot",
    "Admin Dashboard",
    "Internal SDK",
  ];

  const values = [
    "Faster integration",
    "Lower maintenance cost",
    "Easier product expansion",
    "Consistent behavior",
    "Microservice-ready architecture",
  ];

  return (
    <section className="relative overflow-visible px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Why headless matters</SectionLabel>
            <h2
              className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              One workflow core. Any interface.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              API Testing Agent is built around a reusable{" "}
              <code className="rounded-md bg-white/10 px-1.5 py-1 font-mono text-sm text-cyan-100">
                HeadlessWorkflowService
              </code>
              . Every interface can share the same workflow logic without duplicating business rules.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="interactive-soft rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-sm text-white/65 backdrop-blur-[2px]"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>

          <div className={`${panelClass} p-6`}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {interfaces.map((item) => (
                <div
                  key={item}
                  className={`${smallCardClass} bg-[#002239]/60 p-4 text-center text-sm text-white/75`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mx-auto my-5 h-12 w-px bg-gradient-to-b from-cyan-200/50 to-transparent" />

            <div className={`${cardClass} rounded-3xl border-cyan-100/20 bg-cyan-200/10 p-6 text-center`}>
              <Layers3 className="mx-auto mb-3 h-7 w-7 text-cyan-100" />
              <div className="font-mono text-sm text-cyan-50">HeadlessWorkflowService</div>
            </div>

            <div className="mx-auto my-5 h-12 w-px bg-gradient-to-b from-cyan-200/50 to-transparent" />

            <div className="grid gap-3 sm:grid-cols-4">
              {["Workflow Orchestrator", "Review", "Execution", "Validation / Report"].map(
                (item) => (
                  <div
                    key={item}
                    className={`${smallCardClass} bg-black/20 p-4 text-center text-xs text-white/55`}
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnterpriseReadiness() {
  return (
    <section className="relative overflow-visible px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Enterprise readiness</SectionLabel>
          <h2
            className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Designed for real engineering operations.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {enterpriseCards.map(([title, description]) => (
            <div key={title} className={`${cardClass} p-6`}>
              <ShieldCheck className="mb-5 h-6 w-6 text-cyan-100" />
              <h3 className="text-base font-medium text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section className="relative overflow-visible px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>Use cases</SectionLabel>
            <h2
              className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Use API Testing Agent across your engineering lifecycle.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((caseName) => (
              <div
                key={caseName}
                className={`${smallCardClass} flex items-center gap-4 p-5`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-200/10 text-cyan-100">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="font-medium text-white/80">{caseName}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="relative overflow-visible px-6 py-24 sm:px-8">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className={`${panelClass} grid gap-10 p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center`}>
          <div>
            <SectionLabel>Product vision</SectionLabel>
            <h2
              className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              From API Testing Agent to Autonomous API Operations.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/60">
              The next evolution is API Operations Agent: an intelligent operator that can safely interact with multiple APIs to retrieve data, execute workflows, and perform business actions based on user intent.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {visionItems.map((item) => (
              <div key={item} className={`${smallCardClass} bg-black/20 p-4 text-sm text-white/65`}>
                <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-100" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  const layers = [
    [
      "User Interface",
      "CLI, REST API, Swagger UI, Web Chat, Telegram Bot, Admin Dashboard, Internal SDK",
    ],
    ["Headless Workflow Service", "Reusable application service and workflow DTO contract"],
    ["Workflow Orchestrator", "Conversation router, workflow phase, canonical command, state machine"],
    ["Review Core", "Draft test cases, human-in-the-loop approval, edit, cancel, finalize"],
    ["Execution Engine", "Approved API calls, target API interaction, runtime result capture"],
    ["Validation Engine", "Status, schema, content, and behavior validation"],
    ["Report Builder", "Draft, execution, validation, staged final, and finalized reports"],
    ["Artifact Storage", "Report files, debug output, future database and object storage"],
  ];

  return (
    <section id="architecture" className="relative overflow-visible px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Architecture preview</SectionLabel>
          <h2
            className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Built on a modular workflow architecture.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            The platform separates interface, application service, workflow orchestration, core testing services, external API execution, and artifact storage into clear layers.
          </p>
        </div>

        <div className="mt-14 grid gap-3">
          {layers.map(([title, desc], index) => (
            <div
              key={title}
              className={`${smallCardClass} grid gap-4 p-5 md:grid-cols-[240px_1fr_80px] md:items-center`}
            >
              <div className="font-medium text-white">{title}</div>
              <div className="text-sm leading-6 text-white/55">{desc}</div>
              <div className="font-mono text-xs text-cyan-100/70 md:text-right">
                L{String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-visible px-6 py-24 sm:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/25 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <div className={`${panelClass} p-8 sm:p-12`}>
            <SectionLabel>Contact & cooperation</SectionLabel>
            <h2
              className="text-4xl font-normal leading-tight tracking-tight text-white sm:text-6xl"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Ready to make API testing intelligent, repeatable, and scalable?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Start with AI-assisted API testing today. Expand into autonomous API operations tomorrow. For partnership, demo requests, technical discussion, or collaboration, contact the project author directly.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={`mailto:${EMAIL}?subject=Request%20a%20Demo%20-%20API%20Testing%20Hub`}>
                Request a Demo
              </CTAButton>
              <CTAButton href={GITHUB_URL} variant="secondary">
                Explore GitHub
              </CTAButton>
            </div>
          </div>

          <div className={`${panelClass} p-6`}>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#eef7ff]">
              <img
                src={BANNER_SRC}
                alt="API Testing Hub banner"
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="mt-6 space-y-3">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className={linkCardClass}>
                <Globe2 className="h-5 w-5 text-cyan-100" />
                <div>
                  <div className="text-sm font-medium text-white">Huỳnh Nguyễn Huy Anh</div>
                  <div className="text-xs text-white/45">LinkedIn author signature</div>
                </div>
              </a>

              <a href={`mailto:${EMAIL}`} className={linkCardClass}>
                <Mail className="h-5 w-5 text-cyan-100" />
                <div>
                  <div className="text-sm font-medium text-white">{EMAIL}</div>
                  <div className="text-xs text-white/45">Partnership & cooperation email</div>
                </div>
              </a>

              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={linkCardClass}>
                <GitBranch className="h-5 w-5 text-cyan-100" />
                <div>
                  <div className="text-sm font-medium text-white">
                    API_Testing_Hub_Prototype
                  </div>
                  <div className="text-xs text-white/45">GitHub project repository</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} API Testing Hub. Built for intelligent API workflow operations.
        </div>
        <div className="flex items-center gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-white">
            LinkedIn
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={`mailto:${EMAIL}`} className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function APITestingHubLandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#001927] text-white antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --font-display: 'Instrument Serif', serif;
          --font-body: 'Inter', sans-serif;
          --background: 201 100% 13%;
          --foreground: 0 0% 100%;
          --muted-foreground: 240 4% 66%;
          --primary: 0 0% 100%;
          --primary-foreground: 0 0% 4%;
          --secondary: 0 0% 10%;
          --muted: 0 0% 10%;
          --accent: 0 0% 10%;
          --border: 0 0% 18%;
          --input: 0 0% 18%;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: var(--font-body);
          background: hsl(var(--background));
          color: hsl(var(--foreground));
        }

        section[id] {
          scroll-margin-top: 96px;
        }

        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.45) 0%,
            rgba(255,255,255,0.15) 20%,
            rgba(255,255,255,0) 40%,
            rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.15) 80%,
            rgba(255,255,255,0.45) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .interactive-panel {
          transform: translate3d(0, 0, 0) scale(1);
          will-change: transform, box-shadow, border-color, background;
          transition:
            transform 520ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 520ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 520ms cubic-bezier(0.22, 1, 0.36, 1),
            background 520ms cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.08),
            0 18px 45px rgba(0, 0, 0, 0.18);
        }

        .interactive-panel:hover {
          transform: translate3d(0, -10px, 0) scale(1.01);
          border-color: rgba(103, 232, 249, 0.34);
          background: rgba(0, 35, 58, 0.68);
          box-shadow:
            inset 0 1px 1px rgba(255, 255, 255, 0.12),
            0 34px 95px rgba(34, 211, 238, 0.16),
            0 18px 50px rgba(0, 0, 0, 0.34);
        }

        .interactive-card {
          transform: translate3d(0, 0, 0) scale(1);
          will-change: transform, box-shadow, border-color, background;
          transition:
            transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 320ms cubic-bezier(0.22, 1, 0.36, 1),
            background 320ms cubic-bezier(0.22, 1, 0.36, 1),
            color 320ms ease;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.14);
        }

        .interactive-card:hover {
          z-index: 20;
          transform: translate3d(0, -7px, 0) scale(1.022);
          border-color: rgba(103, 232, 249, 0.28);
          background: rgba(8, 34, 58, 0.9);
          box-shadow:
            0 22px 58px rgba(8, 47, 73, 0.48),
            0 0 0 1px rgba(103, 232, 249, 0.06);
        }

        .interactive-soft {
          transform: translate3d(0, 0, 0) scale(1);
          will-change: transform, box-shadow, border-color, background;
          transition:
            transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 280ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 280ms cubic-bezier(0.22, 1, 0.36, 1),
            background 280ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .interactive-soft:hover {
          transform: translate3d(0, -3px, 0) scale(1.02);
          border-color: rgba(103, 232, 249, 0.24);
          box-shadow: 0 14px 36px rgba(8, 47, 73, 0.3);
        }

        @keyframes fade-rise {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-rise {
          animation: fade-rise 0.8s ease-out both;
        }

        .animate-fade-rise-delay {
          animation: fade-rise 0.8s ease-out 0.2s both;
        }

        .animate-fade-rise-delay-2 {
          animation: fade-rise 0.8s ease-out 0.4s both;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }

          .interactive-panel:hover,
          .interactive-card:hover,
          .interactive-soft:hover {
            transform: none;
          }
        }
      `}</style>

      <GlobalBackground />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Problem />
        <WorkflowSection />
        <CoreCapabilities />
        <HeadlessMatters />
        <EnterpriseReadiness />
        <UseCases />
        <Vision />
        <Architecture />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}