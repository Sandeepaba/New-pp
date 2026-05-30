import './About.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-label">Who I Am</div>

      <div className="section-title">
        About <span>Me</span>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a React.js Frontend Developer and UI Engineer with 2+ years
            of experience building scalable, responsive, and modern web
            applications using React.js, JavaScript, TypeScript, Redux Toolkit,
            and REST APIs.
          </p>

          <p>
            I’ve worked on CRM dashboards, insurance platforms, realtime
            applications, admin panels, and frontend systems focused on
            performance optimization, authentication, reusable components,
            and smooth user experiences.
          </p>

          <p>
            I have hands-on experience integrating third-party APIs,
            role-based authentication systems, payment workflows,
            lead management systems, and responsive UI architectures
            for high-traffic business platforms.
          </p>

          <p>
            Currently working as a UI Engineer and actively exploring
            opportunities where I can contribute, collaborate with teams,
            and grow in a strong engineering culture.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>

          <div className="stat-card">
            <div className="stat-num">20+</div>
            <div className="stat-label">Reusable Components</div>
          </div>

          <div className="stat-card">
            <div className="stat-num">5000+</div>
            <div className="stat-label">Leads Managed / Month</div>
          </div>

          <div className="stat-card">
            <div className="stat-num">15+</div>
            <div className="stat-label">Frontend Modules Built</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About