import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const stats = [
  { number: '500+', label: 'Members Worldwide' },
  { number: '12', label: 'Years of Excellence' },
  { number: '80+', label: 'Events Hosted' },
  { number: '30+', label: 'Partner Organisations' },
]

const programs = [
  {
    icon: '📚',
    title: 'Education & Research',
    desc: 'Supporting academic excellence through scholarships, research grants, and mentorship programmes.',
  },
  {
    icon: '🌐',
    title: 'Community Outreach',
    desc: 'Bridging gaps through grassroots initiatives, workshops, and regional partnerships.',
  },
  {
    icon: '🤝',
    title: 'Leadership Development',
    desc: 'Empowering the next generation of leaders with training, coaching, and networking.',
  },
  {
    icon: '💡',
    title: 'Innovation Hub',
    desc: 'Fostering creative thinking and entrepreneurship through incubation and support.',
  },
]

const latestNews = [
  {
    date: 'Feb 15, 2026',
    category: 'Announcement',
    title: 'KCLEML Annual Conference 2026 — Registration Now Open',
    excerpt: 'Join us for three days of workshops, keynote sessions, and networking with leaders from across the region.',
  },
  {
    date: 'Jan 28, 2026',
    category: 'Partnership',
    title: 'New Strategic Alliance with Global Education Network',
    excerpt: 'We are proud to announce a landmark partnership that will expand our reach to 15 new countries.',
  },
  {
    date: 'Jan 10, 2026',
    category: 'Community',
    title: 'Youth Leadership Programme — Applications Open for 2026 Cohort',
    excerpt: 'Applications are now open for our flagship leadership development initiative for youth aged 18–30.',
  },
]

export default function Home() {
  return (
    <Layout title="KCLEML — Knowledge, Community, Leadership, Excellence">
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroPill}>Est. 2012</span>
          <h1 className={styles.heroTitle}>
            Knowledge.<br />Community.<br />
            <em>Leadership.</em>
          </h1>
          <p className={styles.heroSub}>
            KCLEML is a forward-thinking organisation dedicated to empowering individuals and communities through education, mentorship, and strategic collaboration.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/about" className={styles.btnPrimary}>Discover Our Mission</Link>
            <Link href="/newsletter" className={styles.btnOutline}>Subscribe to Newsletter</Link>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        {stats.map((s, i) => (
          <div key={i} className={styles.stat}>
            <span className={styles.statNum}>{s.number}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* About Intro */}
      <section className={styles.intro}>
        <div className={styles.introGrid}>
          <div className={styles.introLeft}>
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">A Platform for Growth & Excellence</h2>
            <div className="divider" />
            <p>Since 2012, KCLEML has served as a nexus for passionate individuals committed to positive change. Our programmes span education, leadership, and community engagement — all guided by a singular purpose: to leave the world better than we found it.</p>
            <p style={{marginTop:'1rem'}}>We believe that every person holds the potential for excellence, and our role is to create the conditions in which that potential can flourish.</p>
            <Link href="/about" className={styles.btnSecondary}>Learn More →</Link>
          </div>
          <div className={styles.introRight}>
            <div className={styles.imgBox}>
              <div className={styles.imgPlaceholder}>
                <span>Organisation Photo</span>
              </div>
              <div className={styles.imgAccent} />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className={styles.programs}>
        <div className="container">
          <div className={styles.programsHeader}>
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Our Core Pillars</h2>
            <div className="divider" />
          </div>
          <div className={styles.programGrid}>
            {programs.map((p, i) => (
              <div key={i} className={styles.programCard}>
                <span className={styles.programIcon}>{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className={styles.newsSection}>
        <div className="container">
          <div className={styles.newsHeader}>
            <div>
              <p className="section-label">Stay Informed</p>
              <h2 className="section-title">Latest News</h2>
              <div className="divider" />
            </div>
            <Link href="/news" className={styles.viewAll}>View All News →</Link>
          </div>
          <div className={styles.newsGrid}>
            {latestNews.map((n, i) => (
              <article key={i} className={styles.newsCard}>
                <div className={styles.newsMeta}>
                  <span className={styles.newsCategory}>{n.category}</span>
                  <span className={styles.newsDate}>{n.date}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                <Link href="/news" className={styles.readMore}>Read More →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.newsletterCta}>
        <div className={styles.ctaInner}>
          <p className="section-label" style={{color: 'var(--gold)'}}>Stay Connected</p>
          <h2>Join Our Newsletter Community</h2>
          <p>Get the latest news, events, and insights from KCLEML delivered directly to your inbox. No spam — only what matters.</p>
          <div className={styles.ctaForm}>
            <input type="email" placeholder="Enter your email address" />
            <button type="button">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className={styles.careerTeaser}>
        <div className="container">
          <div className={styles.careerTeaserGrid}>
            <div>
              <p className="section-label">Work With Us</p>
              <h2 className="section-title">Shape the Future</h2>
              <div className="divider" />
              <p>Whether you're looking for employment, volunteer opportunities, or internships — KCLEML offers pathways for passionate, purpose-driven individuals to make a real difference.</p>
              <Link href="/careers" className={styles.btnSecondary} style={{marginTop:'1.5rem'}}>Explore Opportunities →</Link>
            </div>
            <div className={styles.careerStats}>
              <div className={styles.careerStat}>
                <span>5</span>
                <p>Open Positions</p>
              </div>
              <div className={styles.careerStat}>
                <span>12</span>
                <p>Volunteer Roles</p>
              </div>
              <div className={styles.careerStat}>
                <span>3</span>
                <p>Internship Slots</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
