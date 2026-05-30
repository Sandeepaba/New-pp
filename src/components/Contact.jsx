import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ─── YOUR DETAILS ───────────────────────────────────────────────────────────
const YOUR_EMAIL = 'sandeepyadav08y@gmail.com'
const YOUR_WHATSAPP = '917620444374'

// EmailJS Credentials
const SERVICE_ID = 'service_ct3p0ol'
const TEMPLATE_ID = 'template_5oykdml' // Replace with your Template ID
const PUBLIC_KEY = '8n3Xp4LFY3HLZiGgw'
// ────────────────────────────────────────────────────────────────────────────

const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })

  const [status, setStatus] = useState({
    type: '',
    msg: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const showStatus = (type, msg) => {
    setStatus({ type, msg })

    setTimeout(() => {
      setStatus({ type: '', msg: '' })
    }, 5000)
  }

  const handleSubmit = async () => {
    const { name, email, phone, message } = form

    if (!name || !email || !phone || !message) {
      showStatus('error', 'Please fill all required fields (*)')
      return
    }

    if (!validateEmail(email)) {
      showStatus('error', 'Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          company: form.company,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          budget: form.budget,
          message: form.message,
        },
        PUBLIC_KEY
      )

      showStatus('success', '✅ Message sent successfully!')

      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      })
    } catch (error) {
      console.log(error)
      showStatus('error', '❌ Failed to send message')
    }

    setLoading(false)
  }

  const handleWhatsApp = () => {
    const text = `Hi Sandeep! I'm interested in working with you.

*Name:* ${form.name || '(not filled)'}
*Email:* ${form.email || '(not filled)'}
*Service:* ${form.service || '(not filled)'}
*Budget:* ${form.budget || '(not filled)'}

*Message:* ${form.message || '(not filled)'}`

    window.open(
      `https://wa.me/${YOUR_WHATSAPP}?text=${encodeURIComponent(text)}`,
      '_blank'
    )
  }

  return (
    <section className="contact" id="contact">
      <div className="section-label">Get In Touch</div>

      <div className="section-title">
        Contact <span>Me</span>
      </div>

      <div className="contact-wrapper">
        {/* Left Side */}
        <div className="contact-info">
          <h3>Let's work together</h3>

          <p>
            I’m excited about opportunities where I can contribute my frontend
            development skills, collaborate with teams, and grow in a positive
            work culture. I adapt quickly, work well with teams, and always
            focus on delivering quality work and professional results.
          </p>

          <div className="contact-item">
            <div className="contact-icon">📧</div>

            <div className="contact-item-text">
              <span>Email</span>
              <span>{YOUR_EMAIL}</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📱</div>

            <div className="contact-item-text">
              <span>WhatsApp / Phone</span>
              <span>+{YOUR_WHATSAPP}</span>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>

            <div className="contact-item-text">
              <span>Location</span>
              <span>India — Remote / Onsite</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-box">
          <div className="form-row">
            <div className="form-group">
              <label>Your Name *</label>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
              />
            </div>

            <div className="form-group">
              <label>Company / Organization</label>

              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Acme Corp"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email Address *</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
              />
            </div>

            <div className="form-group">
              <label>Mobile Number *</label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Service Needed</label>

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Select a service...</option>
              <option>Frontend Development</option>
              <option>Full Stack Development</option>
              <option>UI/UX Design</option>
              <option>Website Optimization</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Budget Range</label>

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
            >
              <option value="">Select budget...</option>
              <option>Under ₹10,000</option>
              <option>₹10,000 – ₹30,000</option>
              <option>₹30,000 – ₹1,00,000</option>
              <option>₹1,00,000+</option>
              <option>Let's discuss</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message *</label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Describe your project or requirement..."
            />
          </div>

          <div className="submit-row">
            <button
              className="btn-submit"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message 📨'}
            </button>

            <button className="btn-wa" onClick={handleWhatsApp}>
              💬 WhatsApp
            </button>
          </div>

          {status.msg && (
            <div className={`form-status ${status.type}`}>
              {status.msg}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact