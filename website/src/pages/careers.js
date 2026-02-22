import { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Careers.module.css'

const openings = [
  {
    id: 1,
    title: 'Programme Officer — Youth Leadership',
    type: 'Full-Time',
    location: 'Accra, Ghana',
    department: 'Programmes',
    closing: 'March 31, 2026',
    description: 'Support the design, implementation and monitoring of our flagship youth leadership initiatives across West Africa.',
    requirements: ['Degree in Social Sciences, Development Studies or related field', '3+ years experience in programme management', 'Fluency in English; French an advantage', 'Willingness to travel regionally'],
  },
  {
    id: 2,
    title: 'Communications & Media Specialist',
    type: 'Full-Time',
    location: 'Remote',
    department: 'Communications',
    closing: 'March 15, 2026',
    description: 'Lead our content strategy, social media presence, and media relations to amplify KCLEML\'s voice and impact.',
    requirements: ['Degree in Communications, Journalism, or Marketing', '2+ years in a communications role', 'Strong writing and editing skills', 'Experience with video production a plus'],
  },
  {
    id: 3,
    title: 'Finance & Grants Administrator',
    type: 'Full-Time',
    location: 'Lagos, Nigeria',
    department: 'Finance',
    closing: 'April 5, 2026',
    description: 'Oversee financial reporting, grant compliance, and budget management for a portfolio of international donor-funded projects.',
    requirements: ['Degree in Finance, Accounting or related field', 'CPA/ACCA qualification preferred', '4+ years grants management experience', 'Proficiency in QuickBooks or similar'],
  },
  {
    id: 4,
    title: 'Research & Knowledge Management Intern',
    type: 'Internship',
    location: 'Remote',
    department: 'Research',
    closing: 'February 28, 2026',
    description: 'Support the Research team with data collection, literature reviews, and production of knowledge products and briefs.',
    requirements: ['Currently enrolled in Masters programme', 'Strong research and analytical skills', 'Proficiency in qualitative/quantitative methods', 'Available for minimum 6 months'],
  },
  {
    id: 5,
    title: 'Volunteer — Community Liaison',
    type: 'Volunteer',
    location: 'Multiple Locations',
    department: 'Community Engagement',
    closing: 'Rolling',
    description: 'Represent KCLEML at the community level, facilitating local events, outreach, and feedback collection.',
    requirements: ['Commitment of 8–12 hours per month', 'Strong interpersonal skills', 'Connection to target community', 'Basic digital literacy'],
  },
]

const filters = ['All', 'Full-Time', 'Internship', 'Volunteer']

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedJob, setSelectedJob] = useState(null)
  const [appForm, setAppForm] = useState({ name: '', email: '', motivation: '' })
  const [submitted, setSubmitted] = useState(false)

  const filtered = activeFilter === 'All' ? openings : openings.filter(o => o.type === activeFilter)

  const handleApply = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setSelectedJob(null); setAppForm({ name: '', email: '', motivation: '' }) }, 3500)
  }

  return (
    <Layout title="Careers | KCLEML" description="Join the KCLEML team — open positions, internships, and volunteer opportunities.">
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroInner}>
          <p className="section-label">Join Our Team</p>
          <h1>Careers at KCLEML</h1>
          <p>We're looking for passionate, driven individuals to help us create lasting change. Explore open positions, internships, and volunteer opportunities below.</p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className={styles.why}>
        <div className="container">
          <div className={styles.whyGrid}>
            {[
              { icon: '🌍', title: 'Global Impact', desc: 'Work on initiatives that span continents and reach thousands of lives.' },
              { icon: '📈', title: 'Growth Culture', desc: 'We invest in our people through training, mentorship, and opportunities.' },
              { icon: '🏠', title: 'Flexible Working', desc: 'Many roles offer remote or hybrid arrangements to suit your life.' },
              { icon: '🤝', title: 'Diverse Team', desc: 'Join a team of 35+ professionals from over 12 countries.' },
            ].map((w, i) => (
              <div key={i} className={styles.whyCard}>
                <span>{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className={styles.listings}>
        <div className="container">
          <div className={styles.listingsHeader}>
            <div>
              <p className="section-label">Current Openings</p>
              <h2 className="section-title">Open Positions</h2>
              <div className="divider" />
            </div>
            <div className={styles.filterBar}>
              {filters.map(f => (
                <button
                  key={f}
                  className={`${styles.filter} ${activeFilter === f ? styles.filterActive : ''}`}
                  onClick={() => setActiveFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.jobList}>
            {filtered.map(job => (
              <div key={job.id} className={styles.jobCard}>
                <div className={styles.jobLeft}>
                  <div className={styles.jobMeta}>
                    <span className={`${styles.jobType} ${styles[job.type.replace('-', '')]}`}>{job.type}</span>
                    <span className={styles.dept}>{job.department}</span>
                  </div>
                  <h3>{job.title}</h3>
                  <div className={styles.jobDetails}>
                    <span>📍 {job.location}</span>
                    <span>⏰ Closes: {job.closing}</span>
                  </div>
                  <p>{job.description}</p>
                </div>
                <div className={styles.jobRight}>
                  <button className={styles.applyBtn} onClick={() => setSelectedJob(job)}>Apply Now</button>
                  <button className={styles.detailBtn} onClick={() => setSelectedJob(job)}>View Details</button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && <div className={styles.empty}>No openings in this category currently.</div>}
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className={styles.modalOverlay} onClick={(e) => e.target === e.currentTarget && setSelectedJob(null)}>
          <div className={styles.modal}>
            <button className={styles.modalClose} onClick={() => setSelectedJob(null)}>✕</button>
            
            {!submitted ? (
              <>
                <div className={styles.modalHeader}>
                  <span className={`${styles.jobType} ${styles[selectedJob.type.replace('-', '')]}`}>{selectedJob.type}</span>
                  <h2>{selectedJob.title}</h2>
                  <div className={styles.jobDetails} style={{marginTop:'0.5rem'}}>
                    <span>📍 {selectedJob.location}</span>
                    <span>⏰ Closes: {selectedJob.closing}</span>
                  </div>
                </div>

                <div className={styles.modalBody}>
                  <div className={styles.modalLeft}>
                    <h4>Role Description</h4>
                    <p>{selectedJob.description}</p>
                    <h4 style={{marginTop:'1.5rem'}}>Requirements</h4>
                    <ul>
                      {selectedJob.requirements.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>

                  <div className={styles.modalRight}>
                    <h4>Apply for this Role</h4>
                    <form onSubmit={handleApply} className={styles.appForm}>
                      <div>
                        <label>Full Name *</label>
                        <input type="text" value={appForm.name} onChange={e => setAppForm({...appForm, name: e.target.value})} required placeholder="Your full name" />
                      </div>
                      <div>
                        <label>Email Address *</label>
                        <input type="email" value={appForm.email} onChange={e => setAppForm({...appForm, email: e.target.value})} required placeholder="your@email.com" />
                      </div>
                      <div>
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+1 234 567 8900" />
                      </div>
                      <div>
                        <label>Cover Letter / Motivation *</label>
                        <textarea rows={5} value={appForm.motivation} onChange={e => setAppForm({...appForm, motivation: e.target.value})} required placeholder="Tell us why you're the right fit..." />
                      </div>
                      <div>
                        <label>CV / Resume (link or paste)</label>
                        <input type="text" placeholder="https://drive.google.com/... or LinkedIn URL" />
                      </div>
                      <button type="submit" className={styles.submitBtn}>Submit Application</button>
                    </form>
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.thankYou}>
                <span className={styles.checkMark}>✓</span>
                <h2>Application Received!</h2>
                <p>Thank you for applying for <strong>{selectedJob.title}</strong>. Our team will review your application and be in touch within 2–3 weeks.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spontaneous */}
      <section className={styles.spontaneous}>
        <div className={styles.spoInner}>
          <h2>Don't See the Right Role?</h2>
          <p>We're always interested in connecting with talented, passionate individuals. Send us your CV and we'll keep you in mind for future opportunities.</p>
          <a href="mailto:careers@kcleml.org" className={styles.mailBtn}>Send Spontaneous Application</a>
        </div>
      </section>
    </Layout>
  )
}
