import { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Newsletter.module.css'

const archives = [
  { month: 'February 2026', title: 'Conference Season Kicks Off + Youth Programme Highlights', tags: ['Events', 'Youth'], size: '8 min read' },
  { month: 'January 2026', title: 'New Year, New Partnerships — 2026 Strategy Preview', tags: ['Strategy', 'Partnerships'], size: '6 min read' },
  { month: 'December 2025', title: 'Year in Review: Our 2025 Impact at a Glance', tags: ['Annual', 'Impact'], size: '10 min read' },
  { month: 'November 2025', title: 'Spotlight: West Africa Community Leaders Summit', tags: ['Events', 'Community'], size: '7 min read' },
  { month: 'October 2025', title: 'Research Focus: Education Equity Findings & Next Steps', tags: ['Research'], size: '9 min read' },
  { month: 'September 2025', title: 'Member Stories & Autumn Programme Launch', tags: ['Members', 'Programmes'], size: '5 min read' },
]

const preferences = [
  'News & Announcements',
  'Events & Programmes',
  'Research & Publications',
  'Career Opportunities',
  'Community Forum Digest',
  'Partnership Updates',
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [selectedPrefs, setSelectedPrefs] = useState([])
  const [frequency, setFrequency] = useState('monthly')
  const [submitted, setSubmitted] = useState(false)

  const togglePref = (pref) => {
    setSelectedPrefs(prev =>
      prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <Layout title="Newsletter | KCLEML" description="Subscribe to the KCLEML newsletter for news, insights, and updates.">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className="section-label">Stay in the Loop</p>
          <h1>The KCLEML Newsletter</h1>
          <p>Curated updates, insights, and community highlights — delivered to your inbox. Join over 3,000 subscribers worldwide.</p>
        </div>
      </section>

      {/* Subscribe Form */}
      <section className={styles.subscribeSection}>
        <div className={styles.subscribeGrid}>
          <div className={styles.subscribeLeft}>
            <p className="section-label">Subscribe</p>
            <h2 className="section-title">Get Updates That Matter</h2>
            <div className="divider" />
            <div className={styles.benefitList}>
              {[
                { icon: '📣', text: 'First access to major announcements and events' },
                { icon: '📖', text: 'Curated research and knowledge resources' },
                { icon: '🌍', text: 'Stories from our community worldwide' },
                { icon: '🔔', text: 'Career and volunteer opportunities' },
              ].map((b, i) => (
                <div key={i} className={styles.benefit}>
                  <span>{b.icon}</span>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>

            <div className={styles.socialProof}>
              <div className={styles.avatarStack}>
                {['A','B','C','D','E'].map((l,i) => (
                  <div key={i} className={styles.miniAvatar} style={{left: i*28+'px'}}>{l}</div>
                ))}
              </div>
              <p>Join <strong>3,200+</strong> subscribers from <strong>40+ countries</strong></p>
            </div>
          </div>

          <div className={styles.formBox}>
            {submitted ? (
              <div className={styles.successBox}>
                <span className={styles.successIcon}>✓</span>
                <h3>You're subscribed!</h3>
                <p>Welcome to the KCLEML community, {name || 'friend'}. Check your inbox for a confirmation email.</p>
                <button onClick={() => setSubmitted(false)} className={styles.resetBtn}>Subscribe Another Email</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3>Subscribe to Our Newsletter</h3>

                <div className={styles.formGroup}>
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>I'm interested in...</label>
                  <div className={styles.prefGrid}>
                    {preferences.map(p => (
                      <button
                        key={p}
                        type="button"
                        className={`${styles.prefTag} ${selectedPrefs.includes(p) ? styles.prefActive : ''}`}
                        onClick={() => togglePref(p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Frequency</label>
                  <div className={styles.freqToggle}>
                    {['weekly', 'monthly', 'quarterly'].map(f => (
                      <button
                        key={f}
                        type="button"
                        className={`${styles.freqBtn} ${frequency === f ? styles.freqActive : ''}`}
                        onClick={() => setFrequency(f)}
                      >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Subscribe Now →
                </button>
                <p className={styles.disclaimer}>No spam, ever. Unsubscribe at any time.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className={styles.archive}>
        <div className="container">
          <p className="section-label">Past Issues</p>
          <h2 className="section-title">Newsletter Archive</h2>
          <div className="divider" />

          <div className={styles.archiveGrid}>
            {archives.map((a, i) => (
              <div key={i} className={styles.archiveCard}>
                <div className={styles.archiveMeta}>
                  <span className={styles.archiveMonth}>{a.month}</span>
                  <span className={styles.archiveSize}>{a.size}</span>
                </div>
                <h3>{a.title}</h3>
                <div className={styles.archiveTags}>
                  {a.tags.map((t, j) => (
                    <span key={j} className={styles.tag}>{t}</span>
                  ))}
                </div>
                <button className={styles.viewIssue}>Read Issue →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini CTA */}
      <section className={styles.miniCta}>
        <div className={styles.miniCtaInner}>
          <h2>Already a Subscriber?</h2>
          <p>Manage your preferences, update your email, or unsubscribe at any time using the link in any of our emails.</p>
          <a href="mailto:newsletter@kcleml.org" className={styles.manageBtn}>Contact Newsletter Team</a>
        </div>
      </section>
    </Layout>
  )
}
