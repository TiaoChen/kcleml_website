import { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Layout title="Contact | KCLEML" description="Get in touch with the KCLEML team.">
      <section className={styles.pageHero}>
        <div className={styles.heroInner}>
          <p className="section-label">We'd Love to Hear From You</p>
          <h1>Contact Us</h1>
          <p>Whether you have a question, partnership enquiry, or just want to say hello — we're here.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          {/* Left: Info */}
          <div className={styles.infoCol}>
            <h2>Get In Touch</h2>
            <div className="divider" />

            <div className={styles.infoItems}>
              {[
                { icon: '📧', label: 'General Enquiries', value: 'info@kcleml.org' },
                { icon: '💼', label: 'Careers', value: 'careers@kcleml.org' },
                { icon: '🤝', label: 'Partnerships', value: 'partnerships@kcleml.org' },
                { icon: '📰', label: 'Newsletter', value: 'newsletter@kcleml.org' },
                { icon: '📍', label: 'Head Office', value: '12 Independence Ave, Accra, Ghana' },
                { icon: '📞', label: 'Phone', value: '+233 30 000 0000' },
              ].map((item, i) => (
                <div key={i} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <div>
                    <p className={styles.infoLabel}>{item.label}</p>
                    <p className={styles.infoValue}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.officeHours}>
              <h4>Office Hours</h4>
              <p>Monday – Friday: 8:00 AM – 5:00 PM GMT</p>
              <p>We aim to respond within 2 business days.</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.successBox}>
                <span className={styles.checkIcon}>✓</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. A member of our team will respond to you within 2 business days.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',subject:'',message:'' }) }} className={styles.resetBtn}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3>Send Us a Message</h3>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Your Name *</label>
                    <input type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Full name" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address *</label>
                    <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="your@email.com" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Subject *</label>
                  <select value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} required>
                    <option value="">Select a subject...</option>
                    <option>General Enquiry</option>
                    <option>Partnership Proposal</option>
                    <option>Careers / Volunteering</option>
                    <option>Newsletter</option>
                    <option>Press / Media</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Message *</label>
                  <textarea rows={6} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us how we can help..." required />
                </div>

                <button type="submit" className={styles.submitBtn}>Send Message →</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
