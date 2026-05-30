import './Projects.css'

const projects = [
  {
    title: 'DevPrep — Interview Preparation Platform',
    desc: 'Modern React.js platform for technical interview preparation with categorized cheat sheets, 200+ Q&A, bookmarks, animations, and responsive UI.',
    tags: ['React JS', 'JavaScript', 'Responsive UI'],
    link: '#',
  },

  {
    title: 'AI Expense Tracker Dashboard',
    desc: 'Responsive AI Expense Tracker Dashboard with expense analytics, interactive charts, and category management features.',
    tags: ['React', 'Charts', 'Dashboard'],
    link: '#',
  },

  {
    title: 'Insurance CRM Dashboard',
    desc: 'CRM-based insurance sales dashboard with role-based authentication, quote workflows, API integrations, and lead management system.',
    tags: ['React', 'Redux Toolkit', 'REST API'],
    link: '#',
  },

  {
    title: 'Stroke Solution Website',
    desc: 'Professional agency website for showcasing services, portfolio projects, business solutions, and client contact management.',
    tags: ['React', 'CSS3', 'EmailJS'],
    link: '#',
  },
]

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="section-label">My Work</div>

      <div className="section-title">
        Recent <span>Projects</span>
      </div>

      <div className="proj-grid">
        {projects.map((project, i) => (
          <div className="proj-card" key={i}>
            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="proj-tags">
              {project.tags.map(tag => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <button
              className="proj-btn"
              onClick={() => window.open(project.link, '_blank')}
            >
              View Project
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects