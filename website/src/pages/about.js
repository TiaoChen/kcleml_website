import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/About.module.css'

const team = [
  { name: 'Dr. Amara Kofi', role: 'Executive Director', bio: 'With over 20 years in community development and education, Dr. Kofi leads our global strategy and vision.' },
  { name: 'Emmanuel Lartey', role: 'Director of Programmes', bio: 'Emmanuel brings extensive experience in programme design and impact measurement across Sub-Saharan Africa.' },
  { name: 'Madeleine Chen', role: 'Head of Partnerships', bio: 'Madeleine cultivates strategic alliances with international NGOs, governments, and academic institutions.' },
  { name: 'Kwame Mensah', role: 'Community Engagement Lead', bio: 'Kwame spearheads our grassroots initiatives and volunteer coordination across all chapters.' },
  { name: 'Fatima Al-Rashid', role: 'Research Director', bio: 'Fatima oversees our knowledge production and dissemination, ensuring evidence-based programme development.' },
  { name: 'Nadia Osei', role: 'Communications Manager', bio: 'Nadia shapes our narrative and brand, ensuring our story reaches and resonates with diverse audiences.' },
]

const values = [
  { icon: '⚡', title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we do.' },
  { icon: '🌱', title: 'Integrity', desc: 'We act with transparency, honesty, and accountability at all times.' },
  { icon: '🤝', title: 'Inclusion', desc: 'We celebrate diversity and strive to ensure no voice goes unheard.' },
  { icon: '🔭', title: 'Innovation', desc: 'We embrace creative thinking and bold approaches to complex challenges.' },
]

export default function About() {
  return (
    <Layout title="About | KCLEML" description="Learn about KCLEML's mission, team, and values.">
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.pageHeroInner}>
          <p className="section-label">Our Story</p>
          <h1>About KCLEML</h1>
          <p className={styles.heroSub}>A decade of purpose-driven impact across communities worldwide.</p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission} id="mission">
        <div className="container">
          <div className={styles.missionGrid}>
            <div>
              <p className="section-label">Our Mission</p>
              <h2 className="section-title">Why We Exist</h2>
              <div className="divider" />
              <p>KCLEML was founded on the belief that sustainable change begins with empowered individuals and connected communities. Our mission is to cultivate knowledge, foster community, develop leadership, and pursue excellence in all that we undertake.</p>
              <p style={{marginTop:'1rem'}}>We work with governments, civil society, academic institutions, and grassroots organizations to create lasting impact at every level of society.</p>
            </div>
            <div>
              <p className="section-label">Our Vision</p>
              <h2 className="section-title">Where We're Going</h2>
              <div className="divider" />
              <p>A world where every individual has access to the tools, networks, and opportunities they need to reach their full potential and contribute meaningfully to their community.</p>
              <p style={{marginTop:'1rem'}}>By 2030, we aim to have directly impacted over 100,000 individuals through our programmes, research, and advocacy efforts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <p className="section-label">What Guides Us</p>
          <h2 className="section-title">Our Core Values</h2>
          <div className="divider" />
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.team} id="team">
        <div className="container">
          <p className="section-label">The People Behind KCLEML</p>
          <h2 className="section-title">Meet Our Team</h2>
          <div className="divider" />
          <div className={styles.teamGrid}>
            {team.map((m, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.avatar}>
                  <span>{m.name.charAt(0)}</span>
                </div>
                <h3>{m.name}</h3>
                <span className={styles.role}>{m.role}</span>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className={styles.partners} id="partners">
        <div className="container">
          <p className="section-label">Collaborators</p>
          <h2 className="section-title">Our Partners</h2>
          <div className="divider" />
          <div className={styles.partnerGrid}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className={styles.partnerLogo}>
                Partner {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>Ready to Get Involved?</h2>
          <p>Explore opportunities to join, volunteer, or partner with KCLEML.</p>
          <div className={styles.ctaBtns}>
            <Link href="/careers" className={styles.btnGold}>View Careers</Link>
            <Link href="/contact" className={styles.btnWhite}>Contact Us</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
