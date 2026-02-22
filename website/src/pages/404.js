import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/404.module.css'

export default function NotFound() {
  return (
    <Layout title="404 | KCLEML">
      <div className={styles.page}>
        <p className="section-label">Page Not Found</p>
        <h1>404</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/" className={styles.btn}>← Back to Home</Link>
      </div>
    </Layout>
  )
}
