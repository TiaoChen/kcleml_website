import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>KC</span>
            <span className={styles.logoText}>LEML</span>
          </div>
          <p>Advancing knowledge, leadership, and excellence through education and community engagement.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">▶</a>
          </div>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <h4>Organisation</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#team">Our Team</Link></li>
              <li><Link href="/about#mission">Mission & Vision</Link></li>
              <li><Link href="/about#partners">Partners</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/news#forum">Community Forum</Link></li>
              <li><Link href="/newsletter">Newsletter Archive</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Get Involved</h4>
            <ul>
              <li><Link href="/newsletter">Subscribe</Link></li>
              <li><Link href="/careers">Volunteer</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/contact#donate">Support Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} KCLEML. All rights reserved.</p>
        <div className={styles.legal}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}
