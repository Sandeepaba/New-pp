import { useState } from 'react'
import './HireModal.css'
import './Contact.css'

// ─── UPDATE THESE ───────────────────────────────────────────────────────────
const YOUR_EMAIL = 'sandeepyadav@example.com'
const YOUR_WHATSAPP = '919876543210'
// ────────────────────────────────────────────────────────────────────────────

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const HireModal = ({ onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ type: '', msg: '' })

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const showStatus = (type, msg) => {
    setStatus({ type, msg })
    setTimeout(() => setStatus({ type: '', msg: '' }), 5000)
  }

  const handleSubmit = () => {
    const { name, email, phone, message } = form
    if (!name || !email || !phone || !message) {
      showStatus('error', 'Please fill all required fields')
      return
    }
    if (!validateEmail(email)) {
      showStatus('error', 'Please enter a valid email address')
      return
    }

    const subject = `Hire Me Request from ${name}`
    const body = `Name: ${name}
Email: ${email}
Phone: ${phone}

Project Details:
${message}`

    window.open(`mailto:${YOUR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank')
    showStatus('success', '✅ Email client opened! You can also tap WhatsApp below.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  const handleWhatsApp = () => {
    const text = `Hi Sandeep! I want to hire you.

*Name:* ${form.name || '(not filled)'}
*Email:* ${form.email || '(not filled)'}
*Phone:* ${form.phone || '(not filled)'}

*Project Details:* ${form.message || '(not filled)'}`

    window.open(`https://wa.me/${YOUR_WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank')
  }

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>Hire Me 🤝</h2>
        <p className="modal-subtitle">Tell me about your project — I'll respond within 24 hours!</p>

        <div className="form-group">
          <label>Your Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label>Phone / WhatsApp *</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
        </div>
        <div className="form-group">
          <label>Project Details *</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Describe what you need..." />
        </div>

        <div className="submit-row">
          <button className="btn-submit" onClick={handleSubmit}>Send Enquiry 📨</button>
          <button className="btn-wa" onClick={handleWhatsApp}>💬 WhatsApp</button>
        </div>

        {status.msg && (
          <div className={`form-status ${status.type}`}>{status.msg}</div>
        )}
      </div>
    </div>
  )
}

export default HireModal
