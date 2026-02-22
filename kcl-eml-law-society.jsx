import { useState, useEffect } from "react";

const COLORS = {
  crimson: "#8B0000",
  gold: "#C9A84C",
  navy: "#0A1628",
  cream: "#F5F0E8",
  lightGold: "#E8D5A3",
  darkCrimson: "#5C0000",
  white: "#FFFFFF",
  grayText: "#6B7280",
};

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Source+Sans+3:wght@300;400;600&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Source Sans 3', sans-serif; background: #F5F0E8; color: #0A1628; }
  .nav { background: #0A1628; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 100; border-bottom: 2px solid #C9A84C; }
  .nav-logo { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 0; }
  .nav-crest { width: 40px; height: 40px; background: linear-gradient(135deg, #C9A84C, #E8D5A3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #0A1628; font-family: 'Playfair Display', serif; }
  .nav-title { font-family: 'Playfair Display', serif; font-size: 1rem; color: #fff; line-height: 1.2; }
  .nav-subtitle { font-size: 0.65rem; color: #C9A84C; letter-spacing: 0.15em; text-transform: uppercase; }
  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a { color: #CBD5E1; text-decoration: none; font-size: 0.85rem; letter-spacing: 0.05em; text-transform: uppercase; transition: color 0.2s; cursor: pointer; }
  .nav-links a:hover, .nav-links a.active { color: #C9A84C; }
  .hero { background: linear-gradient(160deg, #0A1628 0%, #1a2e4a 60%, #162240 100%); padding: 6rem 2rem; text-align: center; position: relative; overflow: hidden; }
  .hero::before { content: ''; position: absolute; top: -50%; left: -20%; width: 60%; height: 200%; background: radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%); pointer-events: none; }
  .hero::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, transparent, #C9A84C, transparent); }
  .hero-tag { display: inline-block; font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: #C9A84C; border: 1px solid rgba(201,168,76,0.4); padding: 0.3rem 1rem; margin-bottom: 1.5rem; }
  .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 6vw, 4.5rem); color: #fff; line-height: 1.1; margin-bottom: 0.5rem; }
  .hero h1 span { color: #C9A84C; font-style: italic; }
  .hero-sub { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; color: #94A3B8; margin-bottom: 2.5rem; font-style: italic; }
  .hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
  .btn-primary { background: #C9A84C; color: #0A1628; border: none; padding: 0.85rem 2rem; font-family: 'Source Sans 3', sans-serif; font-weight: 600; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
  .btn-primary:hover { background: #E8D5A3; transform: translateY(-1px); }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
  .btn-outline { background: transparent; color: #fff; border: 1px solid rgba(255,255,255,0.3); padding: 0.85rem 2rem; font-family: 'Source Sans 3', sans-serif; font-size: 0.85rem; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; }
  .btn-outline:hover { border-color: #C9A84C; color: #C9A84C; }
  .section { padding: 4rem 2rem; max-width: 1100px; margin: 0 auto; }
  .section-label { font-size: 0.7rem; letter-spacing: 0.25em; text-transform: uppercase; color: #8B0000; margin-bottom: 0.5rem; font-weight: 600; }
  .section-title { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: #0A1628; margin-bottom: 0.75rem; }
  .divider { width: 50px; height: 2px; background: #C9A84C; margin-bottom: 1rem; }
  .stats-bar { background: #8B0000; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); }
  .stat-item { text-align: center; padding: 2rem 1rem; border-right: 1px solid rgba(255,255,255,0.1); }
  .stat-item:last-child { border-right: none; }
  .stat-num { font-family: 'Playfair Display', serif; font-size: 2.5rem; color: #C9A84C; line-height: 1; margin-bottom: 0.25rem; }
  .stat-label { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.7); }
  .newsletter-box { background: #0A1628; padding: 3rem; position: relative; overflow: hidden; }
  .newsletter-box::before { content: '§'; position: absolute; right: 2rem; top: 50%; transform: translateY(-50%); font-size: 8rem; color: rgba(201,168,76,0.06); font-family: 'Playfair Display', serif; pointer-events: none; }
  .newsletter-box h2 { font-family: 'Playfair Display', serif; color: #fff; font-size: 1.8rem; margin-bottom: 0.5rem; }
  .newsletter-box p { color: #94A3B8; font-family: 'Cormorant Garamond', serif; font-size: 1.05rem; font-style: italic; margin-bottom: 1.5rem; }
  .newsletter-form { display: flex; gap: 0.75rem; max-width: 520px; flex-wrap: wrap; }
  .newsletter-input { flex: 1; min-width: 220px; padding: 0.85rem 1rem; border: 1px solid rgba(201,168,76,0.3); background: rgba(255,255,255,0.05); color: #fff; font-family: 'Source Sans 3', sans-serif; font-size: 0.9rem; outline: none; transition: border-color 0.2s; }
  .newsletter-input::placeholder { color: #64748B; }
  .newsletter-input:focus { border-color: #C9A84C; }
  .checkbox-row { display: flex; align-items: flex-start; gap: 0.5rem; margin-top: 0.75rem; width: 100%; }
  .checkbox-row input[type="checkbox"] { margin-top: 3px; accent-color: #C9A84C; width: 14px; height: 14px; flex-shrink: 0; }
  .checkbox-row label { color: #94A3B8; font-size: 0.8rem; line-height: 1.5; cursor: pointer; }
  .checkbox-row label a { color: #C9A84C; text-decoration: none; }
  .success-msg { background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.4); padding: 1rem 1.5rem; color: #C9A84C; font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem; margin-top: 0.75rem; max-width: 520px; }
  .error-msg { color: #EF4444; font-size: 0.8rem; margin-top: 0.25rem; width: 100%; }
  .post-card { background: #fff; border: 1px solid #E2D9CC; padding: 1.5rem; transition: all 0.2s; cursor: pointer; }
  .post-card:hover { border-color: #C9A84C; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
  .post-type { display: inline-block; font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; padding: 0.2rem 0.6rem; margin-bottom: 0.75rem; font-weight: 600; }
  .post-type.newsletter { background: rgba(139,0,0,0.08); color: #8B0000; }
  .post-type.announcement { background: rgba(201,168,76,0.15); color: #8B6914; }
  .post-type.discussion { background: rgba(10,22,40,0.06); color: #0A1628; }
  .post-type.event { background: rgba(16,185,129,0.1); color: #065F46; }
  .post-card h3 { font-family: 'Playfair Display', serif; font-size: 1.15rem; color: #0A1628; margin-bottom: 0.4rem; line-height: 1.3; }
  .post-card p { color: #6B7280; font-size: 0.88rem; line-height: 1.6; margin-bottom: 0.75rem; }
  .post-meta { display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: #94A3B8; border-top: 1px solid #F0EBE3; padding-top: 0.75rem; }
  .post-author { display: flex; align-items: center; gap: 0.4rem; }
  .avatar { width: 22px; height: 22px; border-radius: 50%; background: linear-gradient(135deg, #8B0000, #5C0000); display: flex; align-items: center; justify-content: center; font-size: 0.6rem; color: white; font-weight: 600; }
  .post-form { background: #fff; border: 1px solid #E2D9CC; padding: 2rem; margin-bottom: 2rem; }
  .post-form h3 { font-family: 'Playfair Display', serif; color: #0A1628; margin-bottom: 1.5rem; font-size: 1.3rem; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .form-group { display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 1rem; }
  .form-label { font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: #0A1628; font-weight: 600; }
  .form-input, .form-select, .form-textarea { padding: 0.75rem 1rem; border: 1px solid #D4C9B8; background: #F5F0E8; font-family: 'Source Sans 3', sans-serif; font-size: 0.9rem; color: #0A1628; outline: none; transition: border-color 0.2s; width: 100%; }
  .form-input:focus, .form-select:focus, .form-textarea:focus { border-color: #C9A84C; background: #fff; }
  .form-textarea { min-height: 120px; resize: vertical; }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
  .about-text p { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; line-height: 1.8; color: #374151; margin-bottom: 1rem; }
  .feature-list { list-style: none; margin-top: 1rem; }
  .feature-list li { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0; border-bottom: 1px solid #F0EBE3; font-size: 0.9rem; color: #0A1628; }
  .feature-list li::before { content: '—'; color: #C9A84C; font-weight: bold; flex-shrink: 0; }
  .about-visual { background: #0A1628; padding: 2.5rem; position: relative; overflow: hidden; }
  .about-visual::before { content: '"'; font-family: 'Playfair Display', serif; font-size: 10rem; color: rgba(201,168,76,0.1); position: absolute; top: -1rem; left: 0.5rem; line-height: 1; }
  .quote-text { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-style: italic; color: #fff; line-height: 1.6; position: relative; z-index: 1; }
  .quote-attr { margin-top: 1rem; font-size: 0.8rem; color: #C9A84C; letter-spacing: 0.1em; text-transform: uppercase; }
  .modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 1rem; }
  .modal { background: #fff; max-width: 680px; width: 100%; max-height: 80vh; overflow-y: auto; padding: 2.5rem; position: relative; }
  .modal-close { position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #6B7280; line-height: 1; }
  .modal h2 { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: #0A1628; margin-bottom: 0.5rem; }
  .modal-body { color: #0A1628; font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; line-height: 1.8; margin-top: 1rem; white-space: pre-wrap; }
  .footer { background: #0A1628; border-top: 2px solid #C9A84C; padding: 3rem 2rem 1.5rem; color: #94A3B8; }
  .footer-grid { max-width: 1100px; margin: 0 auto 2rem; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; }
  .footer h4 { font-family: 'Playfair Display', serif; color: #fff; margin-bottom: 0.75rem; font-size: 1rem; }
  .footer p, .footer a { font-size: 0.85rem; line-height: 1.7; color: #94A3B8; text-decoration: none; display: block; margin-bottom: 0.25rem; transition: color 0.2s; cursor: pointer; }
  .footer a:hover { color: #C9A84C; }
  .footer-bottom { max-width: 1100px; margin: 0 auto; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; font-size: 0.75rem; color: #4B5563; }
  .subscribers-count { display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.2); padding: 0.3rem 0.75rem; color: #C9A84C; font-size: 0.8rem; margin-top: 0.75rem; }
  @media (max-width: 768px) { .nav-links { display: none; } .stats-bar { grid-template-columns: repeat(2, 1fr); } .about-grid, .footer-grid, .form-row { grid-template-columns: 1fr; } .hero h1 { font-size: 2.2rem; } }
`;

const initialPosts = [
  { id: 1, type: "newsletter", title: "The EML Review — Michaelmas Term 2025", excerpt: "Landmark EU AI Act implications for English contract law, an exclusive interview with a senior partner at Freshfields, and our upcoming mooting competition schedule.", content: `Welcome to the Michaelmas Term 2025 edition of The EML Review.\n\nThis term has been exceptionally busy for our society. We hosted three guest lecture series, participated in the National Law Moot, and welcomed 47 new student members.\n\nEU AI Act & English Contract Law\nThe recent enforcement of the EU AI Act raises fascinating questions for practitioners operating under English law post-Brexit. Our academic lead, Dr. Amara Chen, has prepared a detailed analysis exploring whether existing common law frameworks can accommodate the Act's risk-classification system.\n\nFreshfields Interview\nWe sat down with Emma Hartley (KCL LLB 2018), now Senior Associate at Freshfields Bruckhaus Deringer, to discuss her journey from the Strand to one of Magic Circle's finest.\n\nUpcoming Events\n— Advocacy Workshop: 15 Nov, Room G4, Strand Building\n— Alumni Careers Fair: 22 Nov, Great Hall\n— Michaelmas Formal Dinner: 5 Dec, Temple Inn\n\nWe hope to see you at our events.`, author: "Editorial Board", date: "Oct 28, 2025", readTime: "8 min read" },
  { id: 2, type: "announcement", title: "2026 Mooting Competition — Applications Now Open", excerpt: "KCL EML Law Society is delighted to announce the opening of applications for our annual internal mooting competition.", content: `Applications are now open for the 2026 KCL EML Internal Mooting Competition.\n\nThis is an incredible opportunity to develop your advocacy skills in a structured and supportive environment. The winner will represent King's College London at the National Varsity Moot in April 2026.\n\nFormat: Round robin heats → Quarterfinals → Semi-finals → Grand Final\n\nEligibility: All current KCL law students (LLB, LLM, GDL) who are EML members in good standing.\n\nHow to Apply: Submit a 500-word personal statement and your academic transcript to eml@kcl.ac.uk by 30 November 2025.\n\nCoaching: Selected participants will receive coaching from our alumni mentors currently practising at the Bar.`, author: "Events Committee", date: "Nov 2, 2025", readTime: "4 min read" },
  { id: 3, type: "discussion", title: "The Future of ADR: Has Arbitration Lost Its Edge?", excerpt: "Following last week's lecture by Prof. Williams, members share views on whether international commercial arbitration remains fit for purpose.", content: `Following Professor Williams' thought-provoking guest lecture on the evolution of international commercial arbitration, we invite members to contribute to this discussion.\n\nKey questions raised:\n\n1. Is the cost of arbitration now prohibitive for mid-market disputes?\n2. How does the proliferation of bilateral investment treaties affect consistency?\n3. Is mediation increasingly the preferred first-step in dispute resolution?\n\nWe'd love to hear your perspectives, especially those of you with commercial practice placements. Please reply via the forum or attend our next discussion session on 18 November.`, author: "Dr. J. Williams", date: "Nov 5, 2025", readTime: "6 min read" },
  { id: 4, type: "event", title: "Alumni Careers Evening — Magic Circle & Silver Circle Firms", excerpt: "Join us for an evening of networking with KCL alumni currently at Clifford Chance, Linklaters, Allen & Overy, Herbert Smith Freehills, and more.", content: `The KCL EML Society is proud to host our annual Alumni Careers Evening on Thursday 22 November 2025, 6:00–9:00 PM in the Anatomy Museum, King's Building.\n\nConfirmed Alumni:\n— Sarah Chen, Trainee Solicitor, Clifford Chance\n— James O'Brien, Associate, Linklaters\n— Priya Sharma, NQ Solicitor, Allen & Overy\n— Marcus Webb, Barrister, 3 Verulam Buildings\n\nFormat:\n6:00pm — Registration & Drinks Reception\n6:30pm — Panel Discussion: "Routes to the Top"\n7:30pm — Open Networking\n9:00pm — Close\n\nSpaces are limited. RSVP by 15 November to eml@kcl.ac.uk.`, author: "Careers Committee", date: "Nov 8, 2025", readTime: "3 min read" },
];

export default function KCLEMLWebsite() {
  const [activePage, setActivePage] = useState("home");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [subError, setSubError] = useState("");
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPostForm, setShowPostForm] = useState(false);
  const [subscribers, setSubscribers] = useState([]);
  const [newPost, setNewPost] = useState({ type: "newsletter", title: "", excerpt: "", content: "", author: "" });
  const [postSuccess, setPostSuccess] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const subData = await window.storage.get("kcl-eml-subscribers");
        if (subData) setSubscribers(JSON.parse(subData.value));
      } catch {}
      try {
        const postData = await window.storage.get("kcl-eml-posts");
        if (postData) {
          const saved = JSON.parse(postData.value);
          if (saved.length > 0) setPosts([...saved, ...initialPosts]);
        }
      } catch {}
    };
    loadData();
  }, []);

  const handleSubscribe = async () => {
    setSubError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubError("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setSubError("Please accept the newsletter terms to subscribe.");
      return;
    }
    const updated = [...subscribers.filter(s => s !== email), email];
    setSubscribers(updated);
    try { await window.storage.set("kcl-eml-subscribers", JSON.stringify(updated)); } catch {}
    setSubscribed(true);
    setEmail("");
    setConsent(false);
  };

  const handlePostSubmit = async () => {
    if (!newPost.title || !newPost.content || !newPost.author) return;
    const post = { ...newPost, id: Date.now(), date: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }), readTime: `${Math.max(1, Math.ceil(newPost.content.split(" ").length / 200))} min read` };
    const updatedPosts = [post, ...posts];
    setPosts(updatedPosts);
    const savedExtra = updatedPosts.filter(p => !initialPosts.find(i => i.id === p.id));
    try { await window.storage.set("kcl-eml-posts", JSON.stringify(savedExtra)); } catch {}
    setNewPost({ type: "newsletter", title: "", excerpt: "", content: "", author: "" });
    setShowPostForm(false);
    setPostSuccess(true);
    setTimeout(() => setPostSuccess(false), 4000);
  };

  const typeClass = { newsletter: "newsletter", announcement: "announcement", discussion: "discussion", event: "event" };
  const subCount = subscribers.length + 280;

  return (
    <div style={{ minHeight: "100vh" }}>
      <style>{style}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <div className="nav-crest">⚖</div>
          <div>
            <div className="nav-title">KCL EML Law Society</div>
            <div className="nav-subtitle">King's College London</div>
          </div>
        </div>
        <ul className="nav-links">
          {["home","about","forum","newsletter"].map(p => (
            <li key={p}><a className={activePage === p ? "active" : ""} onClick={() => setActivePage(p)}>{p.charAt(0).toUpperCase()+p.slice(1)}</a></li>
          ))}
        </ul>
      </nav>

      {/* ===== HOME ===== */}
      {activePage === "home" && (
        <>
          <div className="hero">
            <div className="hero-tag">Est. 2003 · The Strand, London</div>
            <h1>European & <span>Multilingual</span><br/>Law Society</h1>
            <p className="hero-sub">King's College London · Advocating excellence in European legal discourse</p>
            <div className="hero-btns">
              <button className="btn-primary" onClick={() => setActivePage("newsletter")}>Subscribe to Newsletter</button>
              <button className="btn-outline" onClick={() => setActivePage("forum")}>Explore Forum</button>
            </div>
          </div>

          <div className="stats-bar">
            {[["320+","Active Members"],["47","New This Term"],["12","Events Per Year"],[subCount+"","Newsletter Subscribers"]].map(([n,l]) => (
              <div className="stat-item" key={l}><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
            ))}
          </div>

          <div className="section">
            <div className="about-grid">
              <div className="about-text">
                <div className="section-label">Who We Are</div>
                <div className="divider" />
                <h2 className="section-title">A Community of Legal Scholars</h2>
                <p>The European and Multilingual Law Society at King's College London brings together students passionate about international and European legal frameworks, multilingual practice, and cross-border advocacy.</p>
                <p>Founded on the principles of intellectual rigour and collegiate ambition, we connect aspiring lawyers with the profession through mentorship, events, and scholarly debate.</p>
                <ul className="feature-list">
                  <li>Weekly academic discussion panels</li>
                  <li>Annual mooting competition</li>
                  <li>Alumni mentoring programme</li>
                  <li>The EML Review — termly newsletter</li>
                </ul>
              </div>
              <div className="about-visual">
                <p className="quote-text">"Law is not merely a system of rules. It is the living conscience of a society's highest aspirations."</p>
                <div className="quote-attr">— EML Founding Charter, 2003</div>
              </div>
            </div>
          </div>

          <div style={{ background: "#EFEBE3", padding: "4rem 2rem" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div className="section-label">Latest Posts</div>
              <div className="divider" />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "1.5rem" }}>
                <h2 className="section-title" style={{ marginBottom: 0 }}>From the Forum</h2>
                <button className="btn-primary" onClick={() => setActivePage("forum")}>View All</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
                {posts.slice(0, 3).map(post => (
                  <div className="post-card" key={post.id} onClick={() => setSelectedPost(post)}>
                    <span className={`post-type ${typeClass[post.type] || "discussion"}`}>{post.type}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt || post.content.slice(0,120)+"…"}</p>
                    <div className="post-meta">
                      <div className="post-author"><div className="avatar">{post.author[0]}</div><span>{post.author}</span></div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* ===== ABOUT ===== */}
      {activePage === "about" && (
        <div className="section">
          <div className="section-label">About Us</div>
          <div className="divider" />
          <h2 className="section-title">The European & Multilingual Law Society</h2>
          <div className="about-grid" style={{ marginTop: "2rem" }}>
            <div className="about-text">
              <p>Founded in 2003, the EML Law Society has grown from a small study group of twelve students to one of King's College London's most active and respected academic societies, with over 320 current members.</p>
              <p>We sit at the intersection of comparative law, multilingual legal practice, and European legal tradition. In a post-Brexit landscape, our work has never been more intellectually stimulating.</p>
              <p>Our committee is elected annually by the membership and comprises a President, Vice-President (Academic), Secretary, Treasurer, Events Officer, and Careers Officer.</p>
              <ul className="feature-list" style={{ marginTop: "1.5rem" }}>
                <li>Annual Mooting Competition</li>
                <li>Careers Evenings with City Firms</li>
                <li>Weekly Academic Discussion Groups</li>
                <li>The EML Review (termly publication)</li>
                <li>Language Exchange Programme</li>
                <li>Erasmus Alumni Network</li>
              </ul>
            </div>
            <div>
              <div className="about-visual" style={{ marginBottom: "1rem" }}>
                <p className="quote-text">"The EML Society gave me the confidence to present arguments in two languages before practitioners who would go on to become my colleagues."</p>
                <div className="quote-attr">— Sophie Laurent, LLB 2021, Now at Cleary Gottlieb Paris</div>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E2D9CC", padding: "1.5rem" }}>
                <div className="section-label" style={{ marginBottom: "0.5rem" }}>Contact</div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", lineHeight: "1.7", color: "#6B7280" }}>eml@kcl.ac.uk<br/>The Strand Building, Room 2.14<br/>King's College London<br/>WC2R 2LS</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== FORUM ===== */}
      {activePage === "forum" && (
        <div className="section">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-label">Community Board</div>
              <div className="divider" />
              <h2 className="section-title" style={{ marginBottom: "0.25rem" }}>Forum & Newsletters</h2>
              <p style={{ color: "#6B7280", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontStyle: "italic" }}>Discussions, announcements and the termly EML Review</p>
            </div>
            <button className="btn-primary" onClick={() => setShowPostForm(!showPostForm)}>{showPostForm ? "✕ Cancel" : "+ New Post"}</button>
          </div>

          {postSuccess && <div className="success-msg" style={{ marginBottom: "1.5rem" }}>✓ Your post has been published to the board.</div>}

          {showPostForm && (
            <div className="post-form">
              <h3>Publish to Board</h3>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Post Type</label>
                  <select className="form-select" value={newPost.type} onChange={e => setNewPost({...newPost, type: e.target.value})}>
                    <option value="newsletter">Newsletter</option>
                    <option value="announcement">Announcement</option>
                    <option value="discussion">Discussion</option>
                    <option value="event">Event</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Author / Committee</label>
                  <input className="form-input" placeholder="e.g. Editorial Board" value={newPost.author} onChange={e => setNewPost({...newPost, author: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Title</label>
                <input className="form-input" placeholder="Post title..." value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Short Summary (shown in card)</label>
                <input className="form-input" placeholder="Brief description..." value={newPost.excerpt} onChange={e => setNewPost({...newPost, excerpt: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Full Content</label>
                <textarea className="form-textarea" rows={8} placeholder="Write the full post content here..." value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} />
              </div>
              <button className="btn-primary" onClick={handlePostSubmit} disabled={!newPost.title || !newPost.content || !newPost.author}>Publish Post</button>
            </div>
          )}

          <div style={{ display: "grid", gap: "1rem" }}>
            {posts.map(post => (
              <div className="post-card" key={post.id} onClick={() => setSelectedPost(post)}>
                <span className={`post-type ${typeClass[post.type] || "discussion"}`}>{post.type}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt || post.content.slice(0, 180).replace(/\n/g, " ")+"…"}</p>
                <div className="post-meta">
                  <div className="post-author"><div className="avatar">{post.author[0]}</div><span>{post.author}</span></div>
                  <span>{post.date} · {post.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== NEWSLETTER ===== */}
      {activePage === "newsletter" && (
        <div>
          <div style={{ background: "#0A1628", padding: "4rem 2rem", textAlign: "center" }}>
            <div className="hero-tag" style={{ display: "inline-block" }}>The EML Review</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: "2.8rem", margin: "1rem 0 0.75rem" }}>
              Stay Informed.<br/><span style={{ color: "#C9A84C", fontStyle: "italic" }}>Stay Ahead.</span>
            </h1>
            <p style={{ color: "#94A3B8", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic" }}>Receive the EML Review and society announcements each term.</p>
          </div>

          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem" }}>
            {!subscribed ? (
              <div className="newsletter-box">
                <h2>Subscribe to the EML Newsletter</h2>
                <p>Join over {subCount} subscribers receiving termly updates, event invitations, and The EML Review.</p>
                <div className="newsletter-form">
                  <input className="newsletter-input" type="email" placeholder="your.email@kcl.ac.uk" value={email}
                    onChange={e => { setEmail(e.target.value); setSubError(""); }}
                    onKeyDown={e => e.key === "Enter" && handleSubscribe()} />
                  <button className="btn-primary" onClick={handleSubscribe}>Subscribe</button>
                  <div className="checkbox-row">
                    <input type="checkbox" id="consent" checked={consent} onChange={e => { setConsent(e.target.checked); setSubError(""); }} />
                    <label htmlFor="consent">I agree to receive newsletters and communications from KCL EML Law Society. You can unsubscribe at any time. We respect your privacy and will never share your data with third parties. View our <a href="#">Privacy Policy</a>.</label>
                  </div>
                  {subError && <div className="error-msg">{subError}</div>}
                </div>
                <div className="subscribers-count"><span>◉</span> {subCount} subscribers and counting</div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "3rem 2rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✉</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#0A1628", marginBottom: "0.75rem" }}>You're subscribed!</h2>
                <p style={{ color: "#6B7280", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontStyle: "italic", marginBottom: "2rem" }}>Welcome to the EML community. Look out for your first issue in your inbox.</p>
                <button className="btn-primary" onClick={() => setActivePage("forum")}>Browse the Forum</button>
              </div>
            )}

            <div style={{ marginTop: "3rem" }}>
              <div className="section-label">Past Issues</div>
              <div className="divider" />
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "1.5rem", color: "#0A1628" }}>The EML Review Archive</h3>
              {posts.filter(p => p.type === "newsletter").map(post => (
                <div className="post-card" key={post.id} onClick={() => setSelectedPost(post)} style={{ marginBottom: "0.75rem" }}>
                  <span className="post-type newsletter">Newsletter</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span>{post.author}</span>
                    <span>{post.date} · {post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>KCL EML Law Society</h4>
            <p>The European and Multilingual Law Society at King's College London. Fostering legal excellence and international perspective since 2003.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            {["Home","About","Forum","Newsletter"].map(l => <a key={l} onClick={() => setActivePage(l.toLowerCase())}>{l}</a>)}
          </div>
          <div>
            <h4>Contact</h4>
            <p>eml@kcl.ac.uk</p>
            <p>The Strand Building, Room 2.14</p>
            <p>King's College London, WC2R 2LS</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 KCL EML Law Society. All rights reserved.</span>
          <span>King's College London</span>
        </div>
      </footer>

      {/* POST MODAL */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPost(null)}>×</button>
            <span className={`post-type ${typeClass[selectedPost.type] || "discussion"}`}>{selectedPost.type}</span>
            <h2 style={{ marginTop: "0.75rem" }}>{selectedPost.title}</h2>
            <div className="post-meta" style={{ borderTop: "none", paddingTop: 0, marginTop: "0.5rem" }}>
              <div className="post-author"><div className="avatar">{selectedPost.author[0]}</div><span>{selectedPost.author}</span></div>
              <span>{selectedPost.date} · {selectedPost.readTime}</span>
            </div>
            <div className="modal-body">{selectedPost.content}</div>
          </div>
        </div>
      )}
    </div>
  );
}
