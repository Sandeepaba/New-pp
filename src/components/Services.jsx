import './Services.css'

const services = [
  { icon: '⚡', title: 'Frontend Development', desc: 'Responsive, performant React.js websites with clean code and pixel-perfect UI.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'Beautiful, modern interfaces tailored to your brand and user experience goals.' },
  { icon: '🔧', title: 'Full Stack Development', desc: 'End-to-end web apps with Node.js, Express, and MongoDB backend integration.' },
  { icon: '🚀', title: 'Website Optimization', desc: 'Speed, SEO, and performance improvements to boost your website rankings.' },
]

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="section-label">What I Offer</div>
      <div className="section-title">My <span>Services</span></div>

      <div className="svc-grid">
        {services.map((svc, i) => (
          <div className="svc-card" key={i}>
            <div className="svc-icon">{svc.icon}</div>
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
