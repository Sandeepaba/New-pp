import './Experience.css'

const experiences = [
  {
    dot: '🏢',
    company: 'Acko (Product-Based Company)',
    role: 'UI Engineer I',
    date: '2025 – Present',
    desc: 'Developed 15+ scalable, responsive frontend modules for a CRM-based insurance sales dashboard managing the complete policy lifecycle — from lead generation to policy purchase. Integrated 10+ RESTful APIs and third-party insurance provider APIs, reducing quote retrieval time by ~35%. Built end-to-end quote management workflows cutting agent processing time by 40%. Implemented authentication, session handling, and RBAC across 3 user role types. Built Excel-based bulk lead upload system reducing manual effort by 60%. Achieved 80%+ test coverage using Jest and React Testing Library.',
    tags: ['React.js', 'JavaScript', 'TypeScript', 'Redux Toolkit', 'CSS3', 'Jest', 'REST API', 'RBAC'],
  },
  {
    dot: '💼',
    company: 'Viaansh Insurance Brokers Pvt. Ltd. (BookMyInsurance)',
    role: 'Software Development Engineer I (SDE-I)',
    date: '2024 – 2025',
    desc: 'Developed and maintained 3 scalable web applications using React.js, improving page load performance by 30% via code splitting and lazy loading. Integrated third-party insurance APIs (Shriram, Tata) serving 3,000+ monthly active users. Built end-to-end insurance quote workflows reducing customer onboarding time by 25%. Built 20+ reusable frontend components reducing development time by ~35%. Maintained 75%+ test coverage using Jest on core modules.',
    tags: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Redux Toolkit', 'Jest', 'REST API', 'KYC APIs'],
  },
]

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="section-label">My Journey</div>
      <div className="section-title">Work <span>Experience</span></div>

      <div className="exp-timeline">
        {experiences.map((exp, i) => (
          <div className="exp-item" key={i}>
            <div className="exp-dot">{exp.dot}</div>
            <div className="exp-body">
              <div className="exp-company">{exp.company}</div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-date">{exp.date}</div>
              <div className="exp-desc">{exp.desc}</div>
              <div className="exp-tags">
                {exp.tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
