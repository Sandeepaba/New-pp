import './Skills.css'

const skills = [
  'React JS', 'JavaScript', 'HTML5', 'CSS3',
  'Node JS', 'Express JS', 'MongoDB', 'Git & GitHub',
  'Responsive Design', 'REST API', 'Redux Toolkit', 'Vite',
]

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="section-label">What I Know</div>
      <div className="section-title">My <span>Skills</span></div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>{skill}</div>
        ))}
      </div>
    </section>
  )
}

export default Skills
