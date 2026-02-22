import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/news', label: 'News & Forum' },
    { href: '/careers', label: 'Careers' },
    { href: '/newsletter', label: 'Newsletter' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>KC</span>
          <span className={styles.logoText}>LEML</span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(l => (
            <li key={l.href}>
              <Link href={l.href} className={styles.link} onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/newsletter" className={styles.cta} onClick={() => setMenuOpen(false)}>
              Subscribe
            </Link>
          </li>
        </ul>

        <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={menuOpen ? styles.barTop : ''}></span>
          <span className={menuOpen ? styles.barMid : ''}></span>
          <span className={menuOpen ? styles.barBot : ''}></span>
        </button>
      </div>
    </nav>
  )
}
