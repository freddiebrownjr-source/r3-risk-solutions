const logo = "/assets/r3-logo.jpg";
const headshot = "/assets/maurice-headshot.png";

export default function App() {
  return (
    <main className="site">
      <header className="nav">
        <a href="#home" className="brand">
          <img src={logo} alt="R3 Risk Solutions" />
        </a>

        <nav className="links">
          <a href="#business-case">Business Case</a>
          <a href="#programs">Programs</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </nav>

        <a className="cta" href="mailto:mdrosser123@gmail.com?subject=R3%20Risk%20Solutions%20Risk%20Review%20Request">
          Request Review
        </a>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <div className="eyebrow">
            <span></span>
            Founder-led EHS + workers’ comp risk advisory
          </div>

          <h1>Reduce workplace injuries before they become expensive business problems.</h1>

          <p>
            R3 Risk Solutions helps small and mid-sized manufacturing, construction, and service organizations
            reduce workers’ compensation costs, improve return-to-work outcomes, and strengthen operational
            safety performance.
          </p>

          <div className="actions">
            <a className="primary" href="mailto:mdrosser123@gmail.com?subject=R3%20Risk%20Solutions%20Risk%20Review%20Request">
              Request Complimentary Risk Review
            </a>
            <a className="secondary" href="#programs">
              Explore Programs
            </a>
          </div>
        </div>
      </section>

      <section id="business-case" className="section">
        <p className="sectionEyebrow">Business Case</p>
        <h2>The real cost of a workplace injury is bigger than the claim.</h2>
        <p>
          Preventable workplace injuries can create lost productivity, overtime, premium pressure,
          morale issues, compliance exposure, and operational disruption.
        </p>

        <div className="cards">
          <div className="card"><strong>$1B+</strong><span>Weekly direct workers’ comp costs for disabling workplace injuries.</span></div>
          <div className="card"><strong>$43K</strong><span>Average medically consulted workplace injury cost cited in supporting materials.</span></div>
          <div className="card"><strong>$10K+</strong><span>Potential annual savings from preventing even a portion of workplace injuries.</span></div>
        </div>
      </section>

      <section id="programs" className="section">
        <p className="sectionEyebrow">Programs</p>
        <h2>Professional EHS and workers’ compensation support without a full-time safety manager.</h2>

        <div className="programGrid">
          <div className="program">
            <p>Tier 1</p>
            <h3>Foundation Risk Program</h3>
            <span>$750 – $1,500/month</span>
            <ul>
              <li>Initial workers’ compensation review</li>
              <li>Workplace risk assessment</li>
              <li>Return-to-work guidance</li>
            </ul>
          </div>

          <div className="program featured">
            <p>Tier 2</p>
            <h3>Operational Risk Reduction Program</h3>
            <span>$1,750 – $3,500/month</span>
            <ul>
              <li>Claims management support</li>
              <li>Incident investigation support</li>
              <li>Leadership KPI reporting</li>
            </ul>
          </div>

          <div className="program">
            <p>Tier 3</p>
            <h3>Enterprise Risk & Safety Partnership</h3>
            <span>$4,000 – $8,500+/month</span>
            <ul>
              <li>Fractional EHS Director support</li>
              <li>Annual EHS roadmap</li>
              <li>Executive reporting</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <p className="sectionEyebrow">Services</p>
        <h2>Practical support for the risks that drive cost.</h2>
        <div className="serviceGrid">
          {["Slips, Trips & Falls", "Material Handling", "OSHA Support", "Incident Investigation", "Return-to-Work", "Supervisor Coaching", "Claims Cost Control", "Safety Leadership"].map((service) => (
            <div className="service" key={service}>{service}</div>
          ))}
        </div>
      </section>

      <section id="about" className="aboutSection">
        <div className="aboutCard">
          <img src={headshot} alt="Maurice Rosser" />

          <div>
            <h2>About Maurice Rosser</h2>

            <p>
              Maurice Rosser leads R3 Risk Solutions with a practical, operational approach to workplace safety,
              risk reduction, and workers’ compensation strategy. The mission is simple: help companies reduce
              preventable incidents and improve long-term business performance.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <img src={logo} alt="R3 Risk Solutions" />
        <p>Workers’ comp, EHS, safety, claims management, and operational risk advisory for growing businesses.</p>
        <span>© 2026 R3 Risk Solutions. All rights reserved.</span>
      </footer>
    </main>
  );
}
