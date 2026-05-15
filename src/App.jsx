import { motion } from "framer-motion";
import {
  Activity,
  AlertTriangle,
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
  ArrowRight
} from "lucide-react";

const logo = "/assets/r3-logo.jpg";
const headshot = "/assets/maurice-headshot.png";

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
    <div className={`glow-card ${className}`}>
      <div className="glow-card-orb" />
      <div className="glow-card-shine" />
      <div className="glow-card-content">{children}</div>
    </div>
  );
}

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="page-header"
    >
      <p className="eyebrow-text">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </motion.div>
  );
}

function StatCard({ value, label, icon: Icon }) {
  return (
    <motion.div variants={fadeUp}>
      <GlowCard className="stat-card">
        <div className="icon-box">
          <Icon />
        </div>
        <strong>{value}</strong>
        <p>{label}</p>
      </GlowCard>
    </motion.div>
  );
}

function ProgramCard({ tier, title, range, description, items, featured }) {
  return (
    <motion.div variants={fadeUp} className={`program-card ${featured ? "featured" : ""}`}>
      {featured && (
        <div className="featured-pill">
          <Sparkles />
          Most Practical
        </div>
      )}
      <p className="tier">{tier}</p>
      <h3>{title}</h3>
      <strong className="range">{range}</strong>
      <p className="description">{description}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <CheckCircle2 />
            {item}
          </li>
        ))}
      </ul>
      <a href="#contact" className="details-link">
        Request details <ArrowRight />
      </a>
    </motion.div>
  );
}

function ServiceTile({ icon: Icon, title, body }) {
  return (
    <motion.div variants={fadeUp} className="service-tile">
      <div className="icon-box">
        <Icon />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="site">
      <div className="grid-bg" />
      <div className="red-orb top" />
      <div className="red-orb bottom" />

      <header className="site-header">
        <nav>
          <a href="#home" className="brand" aria-label="R3 Risk Solutions home">
            <img src={logo} alt="R3 Risk Solutions" />
          </a>

          <div className="nav-links">
            {quickLinks.map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">
            Request Review
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="hero-copy">
            <motion.div variants={fadeUp} className="hero-pill">
              <span />
              Founder-led EHS + workers’ comp advisory
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Reduce workplace injuries before they become expensive business problems.
            </motion.h1>

            <motion.p variants={fadeUp}>
              R3 Risk Solutions helps small and mid-sized manufacturing, construction, and service organizations reduce workers’
              compensation costs, improve return-to-work outcomes, and strengthen operational safety performance.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-actions">
              <a className="primary-button" href="#contact">Request Complimentary Risk Review</a>
              <a className="secondary-button" href="#programs">Explore Programs</a>
            </motion.div>

            <motion.div variants={fadeUp} className="quick-link-row">
              {quickLinks.map(([label, href]) => (
                <a key={label} href={href}>
                  {label}
                  <ArrowRight />
                </a>
              ))}
            </motion.div>

            <motion.div variants={stagger} className="stats-grid">
              <StatCard
                icon={Activity}
                value="$1B+"
                label="Weekly direct workers’ comp costs for disabling workplace injuries, based on business-case source material."
              />
              <StatCard
                icon={Target}
                value="$43K"
                label="Average medically consulted workplace injury cost cited in the supporting materials."
              />
              <StatCard
                icon={LineChart}
                value="$10K+"
                label="Potential annual savings cited from preventing just half of workplace injuries."
              />
            </motion.div>
          </motion.div>
        </section>

        <SectionChips />
        <BusinessCase />
        <ValueStatement />
        <Programs />
        <Services />
        <About />
        <Contact />
      </main>

      <footer className="footer">
        <img src={logo} alt="R3 Risk Solutions" />
        <p>Workers’ comp, EHS, safety, claims management, and operational risk advisory for growing businesses.</p>
        <span>© 2026 R3 Risk Solutions. All rights reserved.</span>
      </footer>
    </div>
  );
}

function SectionChips() {
  const chips = [
    "Workplace Injury Reduction",
    "Claims Management Support",
    "Return-to-Work Programs",
    "OSHA Compliance Support",
    "Leadership Coaching",
    "Operational Safety Performance",
  ];

  return (
    <section className="chips">
      {chips.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </section>
  );
}

function BusinessCase() {
  return (
    <section id="business-case" className="section">
      <PageHeader
        eyebrow="Business Case"
        title="The real cost of a workplace injury is bigger than the claim."
        subtitle="Most workplace injuries are preventable. The real cost is not just the claim. It is lost productivity, turnover, legal exposure, morale, reputation damage, delayed operations, overtime, and operational disruption."
      />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="business-grid">
        <motion.article variants={fadeUp} className="reality-card">
          <AlertTriangle />
          <p>Operational Reality</p>
          <h3>A 10-person business losing one injured employee for six months effectively loses 10% of its workforce.</h3>
          <span>
            For small and mid-sized companies, one injury can disrupt production, slow service, create replacement labor needs,
            and increase pressure on the rest of the team.
          </span>
        </motion.article>

        <StatCard icon={Activity} value="$1B+" label="Direct workers’ comp costs per week for disabling workplace injuries." />
        <StatCard icon={Target} value="$43K" label="Average medically consulted workplace injury cost from supporting materials." />
        <StatCard icon={Building2} value="Less margin" label="Small businesses have fewer resources to absorb injuries, claims, and premium increases." />
        <StatCard icon={TrendingDown} value="$10K+" label="Possible annual savings cited from preventing a portion of workplace injuries." />
      </motion.div>

      <div className="support-grid">
        <GlowCard>
          <MapPinned className="support-icon" />
          <h3>Operational disruption</h3>
          <p>Injuries can slow production, increase overtime, and force leaders into reactive problem solving.</p>
        </GlowCard>
        <GlowCard>
          <BarChart3 className="support-icon" />
          <h3>Premium pressure</h3>
          <p>Repeat claims and poor incident response can increase cost exposure and reduce business flexibility.</p>
        </GlowCard>
        <GlowCard>
          <Users className="support-icon" />
          <h3>Workforce strain</h3>
          <p>Morale, productivity, staffing, and employee confidence can all be affected by preventable injuries.</p>
        </GlowCard>
      </div>
    </section>
  );
}

function ValueStatement() {
  return (
    <section className="section">
      <div className="value-panel">
        <p className="eyebrow-text">R3 Value Statement</p>
        <h2>The goal is not just safety compliance. It is business protection.</h2>
        <p>
          R3 helps businesses reduce injuries, lower claims costs, minimize operational disruption, protect employees, and improve
          overall business performance.
        </p>

        <div className="value-grid">
          {[
            ["Prevent costly events before they happen", "Do not wait for an OSHA citation, lawsuit, or major injury."],
            ["Improve claim response from day one", "Reduce confusion, delays, and avoidable lost workdays."],
            ["Strengthen safety culture", "Build accountability with supervisors, leaders, and frontline teams."],
          ].map(([title, body]) => (
            <GlowCard key={title}>
              <strong>{title}</strong>
              <span>{body}</span>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="section">
      <PageHeader
        eyebrow="Programs"
        title="Professional EHS and workers’ compensation support without a full-time safety manager."
        subtitle="Choose a level of support based on the maturity, complexity, and risk profile of the business."
      />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger} className="program-grid">
        <ProgramCard
          tier="Tier 1"
          title="Foundation Risk Program"
          range="$750 – $1,500/month"
          description="Essential claims and risk support for small businesses without dedicated safety leadership."
          items={["Initial workers’ compensation program review", "OSHA and workplace risk assessment", "Monthly safety walkthrough or inspection", "Incident and injury review support", "Return-to-work guidance", "OSHA log support and review", "Quarterly trend review"]}
        />
        <ProgramCard
          tier="Tier 2"
          title="Operational Risk Reduction Program"
          range="$1,750 – $3,500/month"
          description="Advanced claims management and incident prevention for businesses with rising workers’ comp costs."
          featured
          items={["Everything in Tier 1", "Active workers’ compensation claim management support", "Injury trend analysis and reporting", "Monthly on-site safety engagement sessions", "Return-to-work and modified duty program management", "Root cause analysis and incident investigation leadership", "Leadership safety KPI reporting dashboard"]}
        />
        <ProgramCard
          tier="Tier 3"
          title="Enterprise Risk & Safety Partnership"
          range="$4,000 – $8,500+/month"
          description="Fractional EHS Director and strategic risk partner support for high-risk or growing organizations."
          items={["Everything in Tier 2", "Fractional EHS Director support", "Annual EHS strategic roadmap", "EMR reduction strategy support", "OSHA audit readiness and inspection support", "Insurance renewal support", "Executive KPI and claims analytics reporting"]}
        />
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section">
      <PageHeader
        eyebrow="Services"
        title="Practical support for the injury types, behaviors, and systems that drive cost."
        subtitle="R3 turns safety and claims complexity into specific services business owners can understand, buy, and act on."
      />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={stagger} className="services-grid">
        <ServiceTile icon={AlertTriangle} title="Slips, Trips & Falls" body="Reduce common incident patterns through practical awareness and frontline controls." />
        <ServiceTile icon={HardHat} title="Material Handling" body="Address strain, lifting, ergonomics, and movement risks that create repeat injuries." />
        <ServiceTile icon={ClipboardCheck} title="OSHA Support" body="Improve readiness, documentation, inspections, and compliance confidence." />
        <ServiceTile icon={FileWarning} title="Incident Investigation" body="Identify root causes and prevent repeat injuries through structured reviews." />
        <ServiceTile icon={ShieldCheck} title="Return-to-Work" body="Reduce lost workdays and support modified duty planning after incidents." />
        <ServiceTile icon={Users} title="Supervisor Coaching" body="Equip frontline leaders to respond consistently and drive accountability." />
        <ServiceTile icon={TrendingDown} title="Claims Cost Control" body="Spot cost drivers and improve claims response from the beginning." />
        <ServiceTile icon={Building2} title="Safety Leadership" body="Build practical operating rhythms that support a stronger safety culture." />
      </motion.div>

      <div className="addon-grid">
        {["OSHA Mock Audit", "Incident Investigation", "Written Safety Programs", "Forklift Training", "Site Risk Assessments", "Litigation Support", "Expert Witness Support", "Safety Leadership Workshops"].map((service) => (
          <GlowCard key={service}>
            <ClipboardList className="support-icon" />
            <h3>{service}</h3>
            <p>Available as targeted add-on support outside monthly retainers.</p>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about-section">
      <PageHeader
        eyebrow="About"
        title="20+ years of EHS leadership across manufacturing, operations, and service organizations."
        subtitle="R3 Risk Solutions brings executive-level safety, risk, and workers’ compensation experience to businesses that need practical guidance without adding a full-time internal team."
      />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={fadeUp} className="about-card">
        <div className="about-photo-wrap">
          <img src={headshot} alt="Maurice Rosser" />
        </div>

        <div className="about-copy">
          <h3>About Maurice Rosser</h3>
          <p>
            Maurice Rosser leads R3 Risk Solutions with a practical, operational approach to workplace safety, risk reduction,
            and workers’ compensation strategy. The mission is simple: help companies reduce preventable incidents and improve
            long-term business performance.
          </p>
          <p>
            R3 supports OSHA readiness, return-to-work planning, claims cost control, incident investigation, supervisor coaching,
            and leadership-level safety advisory for small and mid-sized businesses.
          </p>

          <div className="tag-row">
            {["CSP-Level Advisory", "Workers’ Comp Support", "OSHA Readiness", "Return-to-Work Strategy", "Executive EHS Leadership"].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="impact-row">
            <div><UserCheck /><strong>Executive EHS</strong><span>Leadership-level advisory</span></div>
            <div><ShieldCheck /><strong>Risk Reduction</strong><span>Claims and injury prevention</span></div>
            <div><Activity /><strong>Operational Impact</strong><span>Performance-driven safety</span></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  const email = "mailto:mdrosser123@gmail.com?subject=R3%20Risk%20Solutions%20Risk%20Review%20Request";

  return (
    <section id="contact" className="section contact-section">
      <div>
        <p className="eyebrow-text">Complimentary Review</p>
        <h2>Start with a workplace risk and workers’ compensation review.</h2>
        <p>
          R3 typically starts with a short workers’ comp cost review focused on loss history, claims patterns, current approach,
          and practical opportunities to reduce costs and disruption.
        </p>

        <div className="contact-points">
          <GlowCard><strong>Best for</strong><span>Manufacturing, construction, service, and operational businesses.</span></GlowCard>
          <GlowCard><strong>Goal</strong><span>Lower premiums, fewer disruptions, and more control over overall risk.</span></GlowCard>
          <GlowCard><strong>Next step</strong><span>A focused 15–20 minute conversation to identify possible opportunities.</span></GlowCard>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-card-header">
          <img src={logo} alt="R3 Risk Solutions" />
          <span>Risk Review Request</span>
        </div>

        <p>
          Ready to identify preventable risk and workers’ comp opportunities?
        </p>

        <a href={email} className="primary-button">Request Review</a>

        <small>This opens a clean email to Maurice at mdrosser123@gmail.com.</small>
      </div>
    </section>
  );
}
