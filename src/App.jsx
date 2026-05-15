
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileWarning,
  HardHat,
  LineChart,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  UserCheck,
  Users,
} from "lucide-react";

const logo = "/assets/r3-logo.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.075 } },
};

const quickLinks = [
  ["Business Case", "#business-case"],
  ["Programs", "#programs"],
  ["Services", "#services"],
  ["About", "#about"],
];

function GlowCard({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] shadow-2xl backdrop-blur-xl ${className}`}>
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-red-600/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }} variants={fadeUp} className="mx-auto mb-10 max-w-4xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-[0.96] tracking-[-0.065em] text-white md:text-5xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">{subtitle}</p>}
    </motion.div>
  );
}

function StatCard({ value, label, icon: Icon }) {
  return (
    <motion.div variants={fadeUp}>
      <GlowCard className="group h-full p-5 transition duration-300 hover:-translate-y-1 hover:border-red-500/40">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-500">
          <Icon className="h-5 w-5" />
        </div>
        <div className="text-3xl font-black tracking-[-0.07em] text-white">{value}</div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{label}</p>
      </GlowCard>
    </motion.div>
  );
}

function ProgramCard({ tier, title, range, description, items, featured }) {
  return (
    <motion.div variants={fadeUp} className={`relative flex min-h-[560px] flex-col overflow-hidden rounded-[2rem] border p-6 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-2 ${featured ? "border-red-500/55 bg-[radial-gradient(circle_at_80%_0%,rgba(239,17,29,.34),transparent_38%),linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.06))]" : "border-white/10 bg-white/[0.055]"}`}>
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-red-600/20 blur-3xl" />
      <div className="relative z-10">
        {featured && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-900 px-3 py-1 text-xs font-black uppercase tracking-wider text-white shadow-lg">
            <Sparkles className="h-3.5 w-3.5" /> Most Practical
          </div>
        )}
        <div className="mb-5">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">{tier}</p>
          <h3 className="mt-3 text-2xl font-black leading-[1] tracking-[-0.055em] text-white">{title}</h3>
          <p className="mt-4 text-lg font-black tracking-[-0.03em] text-white">{range}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
        </div>
        <ul className="space-y-3 text-sm text-zinc-300">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <a href="#contact" className="relative z-10 mt-auto inline-flex items-center gap-2 pt-8 font-black text-white">
        Request details <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

function ServiceTile({ icon: Icon, title, body }) {
  return (
    <motion.div variants={fadeUp} className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-500/45 hover:bg-white/[0.085]">
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-600/15 blur-3xl" />
      <div className="relative z-10">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/30 bg-red-500/10 text-red-500">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-black tracking-[-0.035em] text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{body}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    industry: "",
    concern: "",
    phone: "",
    email: "",
    details: "",
  });

  const mailto = useMemo(() => {
    const subject = `New R3 Risk Solutions Website Lead - ${form.company || form.name || "Website Inquiry"}`;
    const body = [
      "New R3 Risk Solutions Website Lead",
      "",
      "CONTACT INFORMATION",
      `Name: ${form.name || "Not provided"}`,
      `Company: ${form.company || "Not provided"}`,
      `Email: ${form.email || "Not provided"}`,
      `Phone: ${form.phone || "Not provided"}`,
      "",
      "BUSINESS DETAILS",
      `Industry: ${form.industry || "Not provided"}`,
      `Biggest Concern: ${form.concern || "Not provided"}`,
      "",
      "ADDITIONAL DETAILS",
      form.details || "Not provided",
      "",
      "Suggested next step:",
      "Follow up to schedule a 15-20 minute complimentary workplace risk and workers' compensation review.",
      "",
      "Submitted from the R3 Risk Solutions website.",
    ].join("\n");
    return `mailto:mdrosser123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  return (
    <div className="min-h-screen scroll-smooth overflow-hidden bg-[#020203] text-white selection:bg-red-500/40 selection:text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
      <div className="pointer-events-none fixed -right-44 top-24 h-[520px] w-[520px] rounded-full bg-red-600/25 blur-[120px]" />
      <div className="pointer-events-none fixed -left-40 top-[32rem] h-[380px] w-[380px] rounded-full bg-zinc-300/10 blur-[110px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="R3 Risk Solutions" className="h-12 w-auto rounded-sm object-contain md:h-14" />
          </a>
          <div className="hidden items-center gap-7 text-sm font-bold text-zinc-300 lg:flex">
            {quickLinks.map(([label, href]) => (
              <a key={label} href={href} className="hover:text-white">{label}</a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-red-500 to-red-900 px-5 py-3 text-sm font-black shadow-[0_18px_40px_rgba(239,17,29,.32)]">
            Request Review
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl scroll-mt-28 items-center px-5 py-16 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl">
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/35 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-300">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_22px_rgba(239,17,29,.95)]" />
              Founder-led EHS + workers’ comp advisory
            </motion.div>
            <motion.h1 variants={fadeUp} className="max-w-5xl text-[3.2rem] font-black leading-[0.92] tracking-[-0.08em] text-white md:text-7xl lg:text-[6.2rem]">
              Reduce workplace injuries before they become expensive business problems.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              R3 Risk Solutions helps small and mid-sized manufacturing, construction, and service organizations reduce workers’ compensation costs, improve return-to-work outcomes, and strengthen operational safety performance.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-gradient-to-r from-red-500 to-red-900 px-6 py-4 font-black shadow-[0_18px_44px_rgba(239,17,29,.35)]">
                Request Complimentary Risk Review
              </a>
              <a href="#programs" className="rounded-full border border-white/15 bg-white/[0.05] px-6 py-4 font-black backdrop-blur transition hover:border-red-500/40">
                Explore Programs
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              {quickLinks.map(([label, href]) => (
                <a key={label} href={href} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-extrabold text-zinc-300 transition hover:border-red-500/40 hover:text-white">
                  {label} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </motion.div>
            <motion.div variants={stagger} className="mt-10 grid gap-4 md:grid-cols-3">
              <StatCard icon={Activity} value="$1B+" label="Weekly direct workers’ comp costs for disabling workplace injuries, based on the business-case source material." />
              <StatCard icon={Target} value="$43K" label="Average medically consulted workplace injury cost cited in the supporting materials." />
              <StatCard icon={LineChart} value="$10K+" label="Potential annual savings cited from preventing just half of workplace injuries." />
            </motion.div>
          </motion.div>
        </section>

        <SectionChips />
        <BusinessCase />
        <ValueStatement />
        <Programs />
        <Services />
        <About />
        <Contact form={form} update={update} mailto={mailto} />
      </main>

      <footer className="relative z-10 mx-auto grid max-w-7xl gap-4 border-t border-white/10 px-5 py-10 text-zinc-500">
        <img src={logo} alt="R3 Risk Solutions" className="h-12 w-auto" />
        <p>Workers’ comp, EHS, safety, claims management, and operational risk advisory for growing businesses.</p>
        <span>© 2026 R3 Risk Solutions. All rights reserved.</span>
      </footer>
    </div>
  );
}

function SectionChips() {
  return (
    <section className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-5 pb-10">
      {["Workplace Injury Reduction", "Claims Management Support", "Return-to-Work Programs", "OSHA Compliance Support", "Leadership Coaching", "Operational Safety Performance"].map((item) => (
        <span key={item} className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-extrabold text-zinc-300">{item}</span>
      ))}
    </section>
  );
}

function BusinessCase() {
  return (
    <section id="business-case" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 md:py-24">
      <PageHeader eyebrow="Business Case" title="The real cost of a workplace injury is bigger than the claim." subtitle="Most workplace injuries are preventable. The real cost is not just the claim. It is lost productivity, turnover, legal exposure, morale, reputation damage, delayed operations, overtime, and operational disruption." />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger} className="grid gap-5 lg:grid-cols-[1.18fr_.82fr_.82fr]">
        <motion.article variants={fadeUp} className="flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[2.25rem] border border-white/15 bg-[radial-gradient(circle_at_78%_15%,rgba(240,17,29,.32),transparent_36%),linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.04))] p-7 shadow-2xl lg:row-span-2">
          <AlertTriangle className="mb-7 h-12 w-12 text-red-500" />
          <p className="text-xs font-black uppercase tracking-[0.18em] text-red-500">Operational Reality</p>
          <h3 className="mt-4 text-3xl font-black leading-[0.98] tracking-[-0.06em] md:text-4xl">A 10-person business losing one injured employee for six months effectively loses 10% of its workforce.</h3>
          <p className="mt-5 text-zinc-300">For small and mid-sized companies, one injury can disrupt production, slow service, create replacement labor needs, and increase pressure on the rest of the team.</p>
        </motion.article>
        <StatCard icon={Activity} value="$1B+" label="Direct workers’ comp costs per week for disabling workplace injuries." />
        <StatCard icon={Target} value="$43K" label="Average medically consulted workplace injury cost from supporting materials." />
        <StatCard icon={Building2} value="Less margin" label="Small businesses have fewer resources to absorb injuries, claims, and premium increases." />
        <StatCard icon={TrendingDown} value="$10K+" label="Possible annual savings cited from preventing a portion of workplace injuries." />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-8 grid gap-5 md:grid-cols-3">
        <GlowCard className="p-6"><MapPinned className="mb-4 h-7 w-7 text-red-500" /><h3 className="text-xl font-black">Operational disruption</h3><p className="mt-2 text-sm text-zinc-400">Injuries can slow production, increase overtime, and force leaders into reactive problem solving.</p></GlowCard>
        <GlowCard className="p-6"><BarChart3 className="mb-4 h-7 w-7 text-red-500" /><h3 className="text-xl font-black">Premium pressure</h3><p className="mt-2 text-sm text-zinc-400">Repeat claims and poor incident response can increase cost exposure and reduce business flexibility.</p></GlowCard>
        <GlowCard className="p-6"><Users className="mb-4 h-7 w-7 text-red-500" /><h3 className="text-xl font-black">Workforce strain</h3><p className="mt-2 text-sm text-zinc-400">Morale, productivity, staffing, and employee confidence can all be affected by preventable injuries.</p></GlowCard>
      </motion.div>
    </section>
  );
}

function ValueStatement() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[2.4rem] border border-white/20 bg-[radial-gradient(circle_at_82%_18%,rgba(240,17,29,.26),transparent_36%),linear-gradient(145deg,rgba(255,255,255,.11),rgba(255,255,255,.04))] p-7 shadow-2xl md:p-10">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">R3 Value Statement</p>
        <h2 className="mt-4 max-w-5xl text-3xl font-black leading-[0.96] tracking-[-0.065em] md:text-5xl">The goal is not just safety compliance. It is business protection.</h2>
        <p className="mt-5 max-w-4xl text-base text-zinc-300 md:text-lg">R3 helps businesses reduce injuries, lower claims costs, minimize operational disruption, protect employees, and improve overall business performance.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[["Prevent costly events before they happen", "Do not wait for an OSHA citation, lawsuit, or major injury."], ["Improve claim response from day one", "Reduce confusion, delays, and avoidable lost workdays."], ["Strengthen safety culture", "Build accountability with supervisors, leaders, and frontline teams."]].map(([title, body]) => (
            <GlowCard key={title} className="p-6"><strong className="block text-white">{title}</strong><span className="mt-2 block text-sm leading-relaxed text-zinc-400">{body}</span></GlowCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 md:py-24">
      <PageHeader eyebrow="Programs" title="Professional EHS and workers’ compensation support without a full-time safety manager." subtitle="Choose a level of support based on the maturity, complexity, and risk profile of the business." />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-5 lg:grid-cols-3">
        <ProgramCard tier="Tier 1" title="Foundation Risk Program" range="$750 – $1,500/month" description="Essential claims and risk support for small businesses without dedicated safety leadership." items={["Initial workers’ compensation program review", "OSHA and workplace risk assessment", "Monthly safety walkthrough or inspection", "Incident and injury review support", "Return-to-work guidance", "OSHA log support and review", "Quarterly trend review"]} />
        <ProgramCard tier="Tier 2" title="Operational Risk Reduction Program" range="$1,750 – $3,500/month" description="Advanced claims management and incident prevention for businesses with rising workers’ comp costs." featured items={["Everything in Tier 1", "Active workers’ compensation claim management support", "Injury trend analysis and reporting", "Monthly on-site safety engagement sessions", "Return-to-work and modified duty program management", "Root cause analysis and incident investigation leadership", "Leadership safety KPI reporting dashboard"]} />
        <ProgramCard tier="Tier 3" title="Enterprise Risk & Safety Partnership" range="$4,000 – $8,500+/month" description="Fractional EHS Director and strategic risk partner support for high-risk or growing organizations." items={["Everything in Tier 2", "Fractional EHS Director support", "Annual EHS strategic roadmap", "EMR reduction strategy support", "OSHA audit readiness and inspection support", "Insurance renewal support", "Executive KPI and claims analytics reporting"]} />
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 md:py-24">
      <PageHeader eyebrow="Services" title="Practical support for the injury types, behaviors, and systems that drive cost." subtitle="R3 turns safety and claims complexity into specific services business owners can understand, buy, and act on." />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <ServiceTile icon={AlertTriangle} title="Slips, Trips & Falls" body="Reduce common incident patterns through practical awareness and frontline controls." />
        <ServiceTile icon={HardHat} title="Material Handling" body="Address strain, lifting, ergonomics, and movement risks that create repeat injuries." />
        <ServiceTile icon={ClipboardCheck} title="OSHA Support" body="Improve readiness, documentation, inspections, and compliance confidence." />
        <ServiceTile icon={FileWarning} title="Incident Investigation" body="Identify root causes and prevent repeat injuries through structured reviews." />
        <ServiceTile icon={ShieldCheck} title="Return-to-Work" body="Reduce lost workdays and support modified duty planning after incidents." />
        <ServiceTile icon={Users} title="Supervisor Coaching" body="Equip frontline leaders to respond consistently and drive accountability." />
        <ServiceTile icon={TrendingDown} title="Claims Cost Control" body="Spot cost drivers and improve claims response from the beginning." />
        <ServiceTile icon={Building2} title="Safety Leadership" body="Build practical operating rhythms that support a stronger safety culture." />
      </motion.div>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {["OSHA Mock Audit", "Incident Investigation", "Written Safety Programs", "Forklift Training", "Site Risk Assessments", "Litigation Support", "Expert Witness Support", "Safety Leadership Workshops"].map((service) => (
          <GlowCard key={service} className="p-5"><ClipboardList className="mb-4 h-6 w-6 text-red-500" /><h3 className="text-lg font-black tracking-[-0.035em]">{service}</h3><p className="mt-2 text-sm text-zinc-400">Available as targeted add-on support outside monthly retainers.</p></GlowCard>
        ))}
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-20 md:py-24">
      <PageHeader eyebrow="About" title="20+ years of EHS leadership across manufacturing, operations, and service organizations." subtitle="R3 Risk Solutions brings executive-level safety, risk, and workers’ compensation experience to businesses that need practical guidance without adding a full-time internal team." />
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <GlowCard className="p-7 md:p-9">
          <p className="text-lg leading-relaxed text-zinc-300">
            R3 Risk Solutions specializes in workplace safety strategy, workers’ compensation reduction, risk management, regulatory compliance, and building proactive safety cultures that improve operational performance while reducing business risk and insurance costs.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            The company supports OSHA readiness, return-to-work planning, claims cost control, incident investigation, supervisor coaching, and leadership-level safety advisory for small and mid-sized businesses.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["CSP-Level Advisory", "Workers’ Comp Support", "OSHA Readiness", "Return-to-Work Strategy", "Executive EHS Leadership"].map((tag) => (
              <span key={tag} className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm font-extrabold text-zinc-300">{tag}</span>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div><UserCheck className="mb-3 h-6 w-6 text-red-500" /><strong>Executive EHS</strong><span className="mt-1 block text-sm text-zinc-400">Leadership-level advisory</span></div>
            <div><ShieldCheck className="mb-3 h-6 w-6 text-red-500" /><strong>Risk Reduction</strong><span className="mt-1 block text-sm text-zinc-400">Claims and injury prevention</span></div>
            <div><Activity className="mb-3 h-6 w-6 text-red-500" /><strong>Operational Impact</strong><span className="mt-1 block text-sm text-zinc-400">Performance-driven safety</span></div>
          </div>
        </GlowCard>
      </motion.div>
    </section>
  );
}

function Contact({ form, update, mailto }) {
  return (
    <section id="contact" className="mx-auto grid max-w-7xl scroll-mt-28 gap-10 px-5 py-20 md:py-24 lg:grid-cols-[.92fr_1.08fr]">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-red-500">Complimentary Review</p>
        <h2 className="mt-4 text-3xl font-black leading-[0.96] tracking-[-0.065em] md:text-5xl">Start with a workplace risk and workers’ compensation review.</h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-300">R3 typically starts with a short workers’ comp cost review focused on loss history, claims patterns, current approach, and practical opportunities to reduce costs and disruption.</p>
        <div className="mt-8 grid gap-4">
          {[["Best for", "Manufacturing, construction, service, and operational businesses."], ["Goal", "Lower premiums, fewer disruptions, and more control over overall risk."], ["Next step", "A focused 15–20 minute conversation to identify possible opportunities."]].map(([title, body]) => (
            <GlowCard key={title} className="p-5"><strong>{title}</strong><span className="mt-1 block text-sm text-zinc-400">{body}</span></GlowCard>
          ))}
        </div>
      </motion.div>
      <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur" onSubmit={(event) => { event.preventDefault(); window.location.href = mailto; }}>
        <div className="mb-7 flex items-center justify-between gap-5 border-b border-white/10 pb-5">
          <img src={logo} alt="R3 Risk Solutions" className="h-12 w-auto" />
          <span className="text-xs font-black uppercase tracking-[0.16em] text-zinc-500">Risk Review Request</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold">Name<input value={form.name} onChange={update("name")} required className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-500" placeholder="Your name" /></label>
          <label className="grid gap-2 text-sm font-bold">Company<input value={form.company} onChange={update("company")} required className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-500" placeholder="Company name" /></label>
          <label className="grid gap-2 text-sm font-bold">Industry<select value={form.industry} onChange={update("industry")} required className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-500"><option value="">Select industry</option><option>Manufacturing</option><option>Construction</option><option>Service Organization</option><option>Transportation / Logistics</option><option>Warehouse / Distribution</option><option>Other</option></select></label>
          <label className="grid gap-2 text-sm font-bold">Biggest Concern<select value={form.concern} onChange={update("concern")} required className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-500"><option value="">Select one</option><option>Rising workers’ comp costs</option><option>Repeat injuries</option><option>Return-to-work challenges</option><option>OSHA compliance support</option><option>Need safety leadership support</option><option>Claims management support</option></select></label>
          <label className="grid gap-2 text-sm font-bold">Phone<input value={form.phone} onChange={update("phone")} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-500" placeholder="Phone number" /></label>
          <label className="grid gap-2 text-sm font-bold">Email<input type="email" value={form.email} onChange={update("email")} required className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-500" placeholder="name@email.com" /></label>
        </div>
        <label className="mt-4 grid gap-2 text-sm font-bold">Additional Details<textarea value={form.details} onChange={update("details")} rows={5} className="resize-y rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-red-500" placeholder="Share anything helpful about your workforce, claims history, safety concerns, or current challenges." /></label>
        <button className="mt-6 w-full rounded-full bg-gradient-to-r from-red-500 to-red-900 px-6 py-4 font-black shadow-[0_18px_44px_rgba(239,17,29,.35)]" type="submit">Request Review</button>
        <p className="mt-4 text-xs leading-relaxed text-zinc-500">This form opens a clean, legible email to Maurice at mdrosser123@gmail.com.</p>
      </motion.form>
    </section>
  );
}
