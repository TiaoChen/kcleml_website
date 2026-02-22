import { useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/News.module.css'

const categories = ['All', 'Announcements', 'Community', 'Partnership', 'Events', 'Research']

const allNews = [
  { id: 1, category: 'Announcements', date: 'Feb 15, 2026', title: 'KCLEML Annual Conference 2026 — Registration Now Open', excerpt: 'Join us for three days of workshops, keynote sessions, and networking with leaders from across the region.', readTime: '3 min read' },
  { id: 2, category: 'Partnership', date: 'Jan 28, 2026', title: 'New Strategic Alliance with Global Education Network', excerpt: 'We are proud to announce a landmark partnership that will expand our reach to 15 new countries.', readTime: '4 min read' },
  { id: 3, category: 'Community', date: 'Jan 10, 2026', title: 'Youth Leadership Programme — Applications Open for 2026 Cohort', excerpt: 'Applications are now open for our flagship leadership development initiative for youth aged 18–30.', readTime: '2 min read' },
  { id: 4, category: 'Research', date: 'Dec 22, 2025', title: 'New Research Brief: Education Equity in Sub-Saharan Africa', excerpt: 'Our Research Director releases a comprehensive brief exploring systemic barriers and evidence-based solutions.', readTime: '6 min read' },
  { id: 5, category: 'Events', date: 'Dec 5, 2025', title: 'Highlights from the West Africa Community Leaders Summit', excerpt: 'Over 200 community leaders gathered to share best practices and forge collaborative action plans.', readTime: '5 min read' },
  { id: 6, category: 'Announcements', date: 'Nov 18, 2025', title: 'KCLEML Receives the Excellence in Impact Award 2025', excerpt: 'We are honoured to be recognized for our contribution to education and community empowerment.', readTime: '2 min read' },
]

const forumPosts = [
  { id: 1, author: 'Akosua B.', avatar: 'A', category: 'Discussion', date: '2 hours ago', title: 'How are chapters adapting their leadership programmes post-pandemic?', replies: 14, views: 203 },
  { id: 2, author: 'David M.', avatar: 'D', category: 'Question', date: '5 hours ago', title: 'Resources for youth facilitation in rural settings?', replies: 7, views: 88 },
  { id: 3, author: 'Priya S.', avatar: 'P', category: 'Idea', date: '1 day ago', title: 'Proposal: Monthly virtual networking for members across chapters', replies: 22, views: 315 },
  { id: 4, author: 'Henri L.', avatar: 'H', category: 'Discussion', date: '2 days ago', title: 'Reflections on our annual report — key takeaways', replies: 9, views: 142 },
  { id: 5, author: 'Chiamaka E.', avatar: 'C', category: 'Announcement', date: '3 days ago', title: 'New mentorship matching portal is live — beta testers needed!', replies: 31, views: 489 },
]

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeTab, setActiveTab] = useState('news')
  const [newPost, setNewPost] = useState({ title: '', body: '' })
  const [postSubmitted, setPostSubmitted] = useState(false)

  const filteredNews = activeCategory === 'All'
    ? allNews
    : allNews.filter(n => n.category === activeCategory)

  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (newPost.title.trim()) {
      setPostSubmitted(true)
      setTimeout(() => { setPostSubmitted(false); setNewPost({ title: '', body: '' }) }, 3000)
    }
  }

  return (
    <Layout title="News & Forum | KCLEML" description="Latest news, updates and community forum.">
      {/* Hero */}
      <section className={styles.pageHero}>
        <div className={styles.heroInner}>
          <p className="section-label">Stay Informed & Connected</p>
          <h1>News & Community Forum</h1>
          <p>Read our latest updates, share ideas, and engage with the KCLEML community.</p>
        </div>
      </section>

      {/* Tabs */}
      <div className={styles.tabs}>
        <div className={styles.tabInner}>
          <button
            className={`${styles.tab} ${activeTab === 'news' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('news')}
          >
            📰 News & Updates
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'forum' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('forum')}
          >
            💬 Community Forum
          </button>
        </div>
      </div>

      {/* NEWS TAB */}
      {activeTab === 'news' && (
        <section className={styles.newsSection}>
          <div className={styles.filterBar}>
            {categories.map(c => (
              <button
                key={c}
                className={`${styles.filter} ${activeCategory === c ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className={styles.newsGrid}>
            {filteredNews.map(n => (
              <article key={n.id} className={styles.newsCard}>
                <div className={styles.cardImg}>
                  <div className={styles.imgPlaceholder}>
                    <span className={styles.imgCategory}>{n.category}</span>
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.catBadge}>{n.category}</span>
                    <span className={styles.cardDate}>{n.date}</span>
                    <span className={styles.readTime}>{n.readTime}</span>
                  </div>
                  <h3>{n.title}</h3>
                  <p>{n.excerpt}</p>
                  <button className={styles.readMore}>Read Full Story →</button>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className={styles.empty}>No articles in this category yet.</div>
          )}
        </section>
      )}

      {/* FORUM TAB */}
      {activeTab === 'forum' && (
        <section className={styles.forumSection} id="forum">
          <div className={styles.forumLayout}>
            {/* Left: Post List */}
            <div className={styles.forumMain}>
              <div className={styles.forumHeader}>
                <h2>Recent Discussions</h2>
                <button className={styles.newPostBtn} onClick={() => document.getElementById('new-post').scrollIntoView({ behavior: 'smooth' })}>
                  + New Post
                </button>
              </div>

              <div className={styles.postList}>
                {forumPosts.map(post => (
                  <div key={post.id} className={styles.postItem}>
                    <div className={styles.postAvatar}>{post.avatar}</div>
                    <div className={styles.postContent}>
                      <div className={styles.postMeta}>
                        <span className={`${styles.postCategory} ${styles[`cat${post.category}`]}`}>{post.category}</span>
                        <span className={styles.postAuthor}>{post.author}</span>
                        <span className={styles.postDate}>{post.date}</span>
                      </div>
                      <h3 className={styles.postTitle}>{post.title}</h3>
                      <div className={styles.postStats}>
                        <span>💬 {post.replies} replies</span>
                        <span>👁 {post.views} views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: New Post Form */}
            <div className={styles.forumSidebar}>
              <div className={styles.newPostBox} id="new-post">
                <h3>Start a Discussion</h3>
                <p>Share ideas, ask questions, or spark conversation with our community.</p>
                {postSubmitted ? (
                  <div className={styles.successMsg}>✅ Your post has been submitted for moderation!</div>
                ) : (
                  <form onSubmit={handlePostSubmit} className={styles.postForm}>
                    <label>Your Name</label>
                    <input type="text" placeholder="e.g. Kwame A." required />
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" required />
                    <label>Post Title</label>
                    <input
                      type="text"
                      placeholder="What would you like to discuss?"
                      value={newPost.title}
                      onChange={e => setNewPost({ ...newPost, title: e.target.value })}
                      required
                    />
                    <label>Message</label>
                    <textarea
                      placeholder="Share your thoughts..."
                      rows={5}
                      value={newPost.body}
                      onChange={e => setNewPost({ ...newPost, body: e.target.value })}
                      required
                    />
                    <button type="submit" className={styles.submitBtn}>Post Discussion</button>
                  </form>
                )}
              </div>

              <div className={styles.forumRules}>
                <h4>Community Guidelines</h4>
                <ul>
                  <li>Be respectful and constructive</li>
                  <li>Stay on topic and relevant</li>
                  <li>No spam or self-promotion</li>
                  <li>Cite sources where applicable</li>
                  <li>Posts are moderated before publishing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
