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
    const subject = `New R3 Risk Solutions Website Lead - ${
      form.company || form.name || "Website Inquiry"
    }`;

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

    return `mailto:mdrosser123@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const update = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  return (
    <div className="min-h-screen scroll-smooth overflow-hidden bg-[#020203] text-white selection:bg-red-500/40 selection:text-white">
      <div className="pointer-events-none fixed inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
      <div className="pointer-events-none fixed -right-44 top-24 h-[520px] w-[520px] rounded-full bg-red-600/25 blur-[120px]" />
      <div className="pointer-events-none fixed -left-40 top-[32rem] h-[380px] w-[380px] rounded-full bg-zinc-300/10 blur-[110px]" />
      <div className="pointer-events-none fixed bottom-0 left-1/2 h-[340px] w-[720px] -translate-x-1/2 rounded-full bg-red-950/15 blur-[120px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="R3 Risk Solutions"
              className="h-12 w-auto rounded-sm object-contain md:h-14"
            />
          </a>

          <div className="hidden items-center gap-7 text-sm font-bold text-zinc-300 lg:flex">
            {quickLinks.map(([label, href]) => (
              <a key={label} href={href} className="hover:text-white">
                {label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-red-500 to-red-900 px-5 py-3 text-sm font-black shadow-[0_18px_40px_rgba(239,17,29,.32)]"
          >
            Request Review
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        <section
          id="home"
          className="mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl scroll-mt-28 items-center gap-12 px-5 py-14 lg:grid-cols-1"
        >
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/35 bg-red-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-300"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_22px_rgba(239,17,29,.95)]" />
              Founder-led EHS + workers’ comp risk advisory
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-[2.9rem] font-black leading-[0.92] tracking-[-0.08em] text-white md:text-6xl lg:text-[5.25rem]"
            >
              Reduce workplace injuries before they become expensive business problems.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl"
            >
              R3 Risk Solutions helps small and mid-sized manufacturing, construction, and service organizations reduce workers’ compensation costs, improve return-to-work outcomes, and strengthen operational safety performance.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-red-500 to-red-900 px-6 py-4 font-black shadow-[0_18px_44px_rgba(239,17,29,.35)]"
              >
                Request Complimentary Risk Review
              </a>
              <a
                href="#programs"
                className="rounded-full border border-white/15 bg-white/[0.05] px-6 py-4 font-black backdrop-blur transition hover:border-red-500/40"
              >
                Explore Programs
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
              {quickLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-extrabold text-zinc-300 transition hover:border-red-500/40 hover:text-white"
                >
                  {label} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </motion.div>

            <motion.div variants={stagger} className="mt-10 grid gap-4 md:grid-cols-3">
              <StatCard
                icon={Activity}
                value="$1B+"
                label="Weekly direct workers’ comp costs for disabling workplace injuries, based on Maurice’s business-case source material."
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
        <Contact form={form} update={update} mailto={mailto} />
      </main>

      <footer className="relative z-10 mx-auto grid max-w-7xl gap-4 border-t border-white/10 px-5 py-10 text-zinc-500">
        <img src={logo} alt="R3 Risk Solutions" className="h-12 w-auto" />
        <p>
          Workers’ comp, EHS, safety, claims management, and operational risk advisory for growing businesses.
        </p>
        <span>© 2026 R3 Risk Solutions. All rights reserved.</span>
      </footer>
    </div>
  );
}
