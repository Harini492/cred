import React, { useEffect, useRef, useState } from 'react'
import { FiStar, FiCreditCard, FiGift, FiTrendingUp, FiSmartphone, FiDollarSign, FiPercent, FiLock, FiShield, FiEye, FiKey, FiFileText, FiZap, FiArrowRight, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'
import { FaApple, FaGooglePlay } from 'react-icons/fa'

/* ─── CURSOR ─────────────────────────────────────────────── */
function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (dot.current) { dot.current.style.left = e.clientX + 'px'; dot.current.style.top = e.clientY + 'px' }
      if (ring.current) { ring.current.style.left = e.clientX + 'px'; ring.current.style.top = e.clientY + 'px' }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot} className="cursor-dot hidden md:block" />
      <div ref={ring} className="cursor-ring hidden md:block" />
    </>
  )
}

/* ─── SCROLL REVEAL HOOK ──────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  })
}

/* ─── ANIMATED COUNTER ────────────────────────────────────── */
function Counter({ target, suffix = '', decimals = 0, active }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = target / 80
    const t = setInterval(() => {
      start += step
      if (start >= target) { setVal(target); clearInterval(t) }
      else setVal(parseFloat(start.toFixed(decimals)))
    }, 20)
    return () => clearInterval(t)
  }, [active, target, decimals])
  return <span>{decimals ? val.toFixed(decimals) : Math.round(val)}{suffix}</span>
}

/* ─── NAVBAR ──────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const links = ['Features', 'Rewards', 'Security', 'Members']

  return (
    <nav className={`site-nav ${scrolled ? 'scrolled' : ''}`} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(8,8,8,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(210,176,90,0.1)' : '1px solid transparent',
      padding: scrolled ? '14px 0' : '22px 0',
    }}>
      <div className="site-nav-inner">

        {/* Logo */}
        <a href="#" className="site-logo">
          <div className="site-logo-mark">
            <span>C</span>
          </div>
          <span className="site-logo-text">CRED</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex nav-links">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="nav-link"
                onMouseEnter={e => e.target.style.color = '#d2b05a'}
                onMouseLeave={e => e.target.style.color = '#6b6b6b'}
              >{l}</a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex nav-actions">
          <a href="#" className="nav-link nav-link-light"
            onMouseEnter={e => e.target.style.color = '#d2b05a'}
            onMouseLeave={e => e.target.style.color = '#6b6b6b'}
          >Sign In</a>
          <button className="neopop nav-action-btn">Get Invite</button>
        </div>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="nav-toggle md:hidden">
          {[0,1,2].map(i => (
            <span key={i} className={`nav-toggle-bar ${open && i === 0 ? 'open-top' : ''} ${open && i === 1 ? 'open-middle' : ''} ${open && i === 2 ? 'open-bottom' : ''}`} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        maxHeight: open ? 300 : 0, overflow: 'hidden',
        transition: 'max-height 0.4s ease',
        background: 'rgba(8,8,8,0.98)',
        borderTop: open ? '1px solid rgba(210,176,90,0.1)' : 'none',
      }}>
        <div className="nav-mobile-menu">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="nav-link nav-mobile-link">{l}</a>
          ))}
          <button className="neopop nav-action-btn nav-mobile-cta">Get Invite</button>
        </div>
      </div>
    </nav>
  )
}

/* ─── HERO ────────────────────────────────────────────────── */
function Hero() {
  const orbRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!orbRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section className="hero-section">

      {/* Background orb */}
      <div ref={orbRef} style={{
        position: 'absolute', top: '35%', left: '50%', marginLeft: -300,
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(210,176,90,0.1) 0%, rgba(210,176,90,0.03) 50%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none', transition: 'transform 0.8s ease',
      }} />

      {/* Extra orbs */}
      <div style={{ position: 'absolute', bottom: 100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(210,176,90,0.07) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 150, right: -50, width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,201,109,0.06) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      {/* Grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.025,
        backgroundImage: 'linear-gradient(rgba(210,176,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(210,176,90,1) 1px, transparent 1px)',
        backgroundSize: '90px 90px',
      }} />

      {/* Diagonal accent lines */}
      <div style={{ position: 'absolute', top: 0, left: '20%', width: 1, height: '40%', background: 'linear-gradient(to bottom, transparent, rgba(210,176,90,0.2), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '20%', right: '15%', width: 1, height: '50%', background: 'linear-gradient(to bottom, transparent, rgba(210,176,90,0.15), transparent)', pointerEvents: 'none' }} />

      <div className="hero-badge">
        <FiStar className="hero-badge-icon" />
        <span>Members Only Club</span>
        <FiStar className="hero-badge-icon" />
      </div>

      {/* Headline */}
      <div className="hero-copy-block">
        <h1 className="hero-title">
          <span>Good Things</span>
          <span className="shimmer">Happen To</span>
          <span>Good People.</span>
        </h1>

        <p className="hero-copy">
          India's most rewarding platform for <span style={{ color: '#d2b05a' }}>creditworthy</span> individuals. Pay bills, earn rewards, own your score.
        </p>

        <div className="hero-cta-group">
          <button className="btn btn-primary">Join CRED →</button>
          <button className="btn btn-secondary">Watch Film</button>
        </div>
      </div>

      {/* Floating card */}
      <div className="hero-card animate-float">
        <div className="glass-panel" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16, minWidth: 280 }}>
          <div style={{ width: 44, height: 30, borderRadius: 6, background: 'linear-gradient(135deg,#d2b05a,#f0cc6f)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 8, fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, color: '#000', letterSpacing: 2 }}>CRED</span>
          </div>
          <div>
            <p style={{ color: '#f0ede6', fontSize: 13, fontWeight: 500 }}>₹3,240 Cashback Earned</p>
            <p style={{ color: '#6b6b6b', fontSize: 10, letterSpacing: '0.1em', marginTop: 3, fontFamily: "'JetBrains Mono', monospace" }}>This month · 4 payments</p>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 6, height: 6, background: '#4ade80', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#4ade80', fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}>Live</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.4 }}>
        <span style={{ fontSize: 9, letterSpacing: '0.3em', color: '#6b6b6b', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, #d2b05a, transparent)', animation: 'pulse 2s infinite' }} />
      </div>
    </section>
  )
}

/* ─── MARQUEE ─────────────────────────────────────────────── */
function Marquee() {
  const items = ['Pay Bills', 'Earn Rewards', 'Track Score', 'UPI Payments', 'CRED Coins', 'Cashback', 'Members Only', 'Exclusive Deals']
  const repeated = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid #1c1c1c', borderBottom: '1px solid #1c1c1c', padding: '18px 0', background: '#0f0f0f' }}>
      <div className="animate-marquee" style={{ display: 'flex', gap: 32, whiteSpace: 'nowrap', width: 'max-content' }}>
        {repeated.map((item, i) => (
          <React.Fragment key={`${item}-${i}`}>
            <span style={{
              fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#6b6b6b',
            }}>{item}</span>
            {i !== repeated.length - 1 && <FiStar className="marquee-sep" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

/* ─── ABOUT ───────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{ padding: '120px 24px', maxWidth: 1280, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: 80, alignItems: 'center' }}>

        {/* Left */}
        <div className="reveal-left">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(to right, #d2b05a, transparent)' }} />
            <span style={{ color: '#d2b05a', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>About CRED</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 300, fontSize: 'clamp(48px,6vw,80px)', lineHeight: 0.95, marginBottom: 28, color: '#f0ede6' }}>
            Exclusivity<br />is <span className="shimmer">earned,</span><br />not given.
          </h2>
          <p style={{ color: '#6b6b6b', fontSize: 16, lineHeight: 1.8, marginBottom: 20, fontWeight: 300 }}>
            CRED is a members-only club built for India's most creditworthy individuals. Every member is vetted — we only accept those with a credit score above 750.
          </p>
          <p style={{ color: '#6b6b6b', fontSize: 16, lineHeight: 1.8, fontWeight: 300 }}>
            In return, we reward responsible financial behaviour with premium experiences, real cashbacks, and exclusive access to brands you won't find anywhere else.
          </p>
          <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 32, height: 1, background: '#d2b05a' }} />
            <span style={{ color: '#d2b05a', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>Invitation Only</span>
          </div>
        </div>

        {/* Right — stacked cards */}
        <div className="reveal-right" style={{ position: 'relative', height: 340, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Card 3 */}
          <div className="glass" style={{ position: 'absolute', borderRadius: 16, padding: 24, width: 300, transform: 'rotate(7deg) translateY(24px)', zIndex: 1, opacity: 0.5 }}>
            <div style={{ width: 36, height: 24, background: '#1c1c1c', borderRadius: 4, marginBottom: 16 }} />
            <div style={{ height: 8, background: '#1c1c1c', borderRadius: 4, width: '70%', marginBottom: 8 }} />
            <div style={{ height: 8, background: '#1c1c1c', borderRadius: 4, width: '50%' }} />
          </div>
          {/* Card 2 */}
          <div className="glass" style={{ position: 'absolute', borderRadius: 16, padding: 24, width: 300, transform: 'rotate(-4deg) translateY(12px)', zIndex: 2, opacity: 0.75 }}>
            <div style={{ width: 36, height: 24, background: 'rgba(210,176,90,0.25)', borderRadius: 4, marginBottom: 16 }} />
            <div style={{ height: 8, background: 'rgba(210,176,90,0.15)', borderRadius: 4, width: '65%', marginBottom: 8 }} />
            <div style={{ height: 8, background: 'rgba(210,176,90,0.1)', borderRadius: 4, width: '45%' }} />
          </div>
          {/* Card 1 — front */}
          <div style={{
            position: 'relative', borderRadius: 16, padding: 28, width: 300, zIndex: 3,
            background: 'linear-gradient(135deg, rgba(210,176,90,0.14) 0%, rgba(22,22,22,0.95) 100%)',
            border: '1px solid rgba(210,176,90,0.25)',
            boxShadow: '0 0 60px rgba(210,176,90,0.1)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 36 }}>
              <div style={{ width: 42, height: 30, borderRadius: 6, background: 'linear-gradient(135deg,#d2b05a,#f0cc6f)', boxShadow: '0 0 14px rgba(210,176,90,0.4)' }} />
              <span style={{ color: '#d2b05a', fontSize: 9, letterSpacing: '0.3em', fontFamily: "'JetBrains Mono', monospace" }}>CRED</span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#f0ede6', fontSize: 13, letterSpacing: '0.2em', marginBottom: 20 }}>•••• •••• •••• 4291</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ color: '#6b6b6b', fontSize: 8, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 4, fontFamily: "'JetBrains Mono', monospace" }}>Member</div>
                <div style={{ color: '#f0ede6', fontSize: 12, fontWeight: 500 }}>Arjun Mehta</div>
              </div>
              <div style={{ color: 'rgba(210,176,90,0.5)', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: 2 }}>VISA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="reveal" style={{ marginTop: 100, paddingTop: 60, borderTop: '1px solid #1c1c1c', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 40 }}>
        {[
          { num: '12M', suf: '+', label: 'Active Members' },
          { num: '₹1200', suf: 'Cr+', label: 'Rewards Given' },
          { num: '750', suf: '+', label: 'Min Credit Score' },
          { num: '4.9', suf: '★', label: 'App Store Rating' },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div className="shimmer" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 52, fontWeight: 300, lineHeight: 1 }}>{s.num}{s.suf}</div>
            <div style={{ color: '#6b6b6b', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: 8, fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── FEATURES ────────────────────────────────────────────── */
const FEATURES = [
  { icon: <FiCreditCard />, title: 'Bill Payments', sub: 'Never miss a due date', desc: 'Pay all your credit card bills in one place. Get reminders and earn rewards on every payment.', tag: 'ZERO FEE' },
  { icon: <FiGift />, title: 'CRED Rewards', sub: 'Exclusive member benefits', desc: 'Unlock premium rewards, cashbacks, and exclusive deals from top brands — just for paying on time.', tag: 'EXCLUSIVE' },
  { icon: <FiTrendingUp />, title: 'Credit Score', sub: 'Know your financial health', desc: 'Track, understand, and improve your credit score with personalised insights and recommendations.', tag: 'FREE' },
  { icon: <FiSmartphone />, title: 'UPI Payments', sub: 'Pay anywhere, earn everywhere', desc: 'Send money, split bills, and pay merchants via UPI — and earn CRED coins on every transaction.', tag: 'INSTANT' },
  { icon: <FiDollarSign />, title: 'CRED Coins', sub: 'Your loyalty, rewarded', desc: 'Earn coins on every payment and redeem them for cashbacks, vouchers, and premium experiences.', tag: 'EARN' },
  { icon: <FiPercent />, title: 'Cashback', sub: 'Money back on everything', desc: 'Real cashback, not points. Earn on bill payments, UPI transactions, and brand partner spends.', tag: 'REAL CASH' },
]

function FeatureCard({ f, i }) {
  return (
    <div className="feature-card">
      <div className="feature-card-top">
        <div className="feature-card-icon">{f.icon}</div>
        <span className="feature-card-tag">{f.tag}</span>
      </div>
      <h3 className="feature-card-title">{f.title}</h3>
      <p className="feature-card-subtitle">{f.sub}</p>
      <p className="feature-card-copy">{f.desc}</p>
      <div className="feature-card-footer">Learn more <FiArrowRight className="feature-card-arrow" /></div>
    </div>
  )
}

function Features() {
  return (
    <section id="features" style={{ padding: '120px 24px', background: '#080808' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal section-header">
          <span className="section-topline">What We Offer</span>
          <h2 className="section-title">Built for the <span className="shimmer">financially wise.</span></h2>
          <p className="section-copy">Every feature rewards responsibility and makes your financial life seamless.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
          {FEATURES.map((f, i) => <FeatureCard key={i} f={f} i={i} />)}
        </div>
      </div>
    </section>
  )
}

/* ─── NEOPOP SHOWCASE ─────────────────────────────────────── */
function NeoPOPSection() {
  const { ref, visible } = useInView()
  return (
    <section id="rewards" style={{ padding: '120px 24px', background: '#0a0a0a', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 80, alignItems: 'center' }}>

        {/* Left */}
        <div className="reveal-left section-header">
          <span className="section-topline">NeoPOP Design</span>
          <h2 className="section-title">Premium in<br />every <span className="shimmer">interaction.</span></h2>
          <p className="section-copy">CRED's NeoPOP design system redefines premium digital interactions. Bold shadows, crisp edges, deliberate depth — every tap feels satisfying.</p>
          {['3D layered button system', 'Glassmorphism overlays', 'Micro-interaction feedback', 'Dark-first design language'].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <div style={{ width: 5, height: 5, background: '#d2b05a', borderRadius: '50%' }} />
              <span style={{ color: '#6b6b6b', fontSize: 14, fontWeight: 300 }}>{item}</span>
            </div>
          ))}
          <button className="neopop" style={{
            marginTop: 32, background: 'linear-gradient(135deg,#d2b05a,#f0cc6f)',
            color: '#000', border: 'none', padding: '14px 32px',
            fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase',
            fontFamily: "'JetBrains Mono', monospace", fontWeight: 500, borderRadius: 2,
          }}>Explore Design System</button>
        </div>

        {/* Right — App UI mockup */}
        <div ref={ref} className="reveal-right" style={{ position: 'relative' }}>
          <div style={{
            borderRadius: 24, padding: 28,
            background: 'linear-gradient(135deg, rgba(210,176,90,0.08) 0%, rgba(15,15,15,0.98) 100%)',
            border: '1px solid rgba(210,176,90,0.2)',
            boxShadow: '0 0 80px rgba(210,176,90,0.08)',
          }}>
            {/* Reward alert */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', background: '#161616', border: '1px solid #242424', borderRadius: 12, marginBottom: 24 }}>
              <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg,#d2b05a,#f0cc6f)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: 14, boxShadow: '0 0 16px rgba(210,176,90,0.3)' }}><FiStar /></div>
              <div style={{ flex: 1 }}>
                <p style={{ color: '#f0ede6', fontSize: 13, fontWeight: 500 }}>Reward Unlocked!</p>
                <p style={{ color: '#6b6b6b', fontSize: 11, marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>250 CRED coins credited</p>
              </div>
              <span style={{ color: '#d2b05a', fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 600 }}>+250</span>
            </div>

            {/* Coin display */}
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div className="shimmer" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 72, fontWeight: 300, lineHeight: 1 }}>14,820</div>
              <div style={{ color: '#6b6b6b', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 8, fontFamily: "'JetBrains Mono', monospace" }}>CRED Coins</div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginBottom: 20 }}>
              {['Pay Bill', 'Rewards', 'Transfer'].map((btn, i) => (
                <button key={i} className="neopop" style={{
                  background: '#161616', border: '1px solid #242424', borderRadius: 10,
                  padding: '12px 8px', color: '#f0ede6', fontSize: 11,
                  fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em',
                  cursor: 'pointer',
                }}>{btn}</button>
              ))}
            </div>

            {/* Score bar */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#6b6b6b', fontSize: 10, letterSpacing: '0.2em', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>Credit Score</span>
                <span style={{ color: '#d2b05a', fontSize: 10, fontFamily: "'JetBrains Mono', monospace" }}>812 / 900</span>
              </div>
              <div style={{ height: 4, background: '#1c1c1c', borderRadius: 2, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', borderRadius: 2,
                  background: 'linear-gradient(90deg,#d2b05a,#f0cc6f)',
                  width: visible ? '90%' : '0%',
                  transition: 'width 1.8s cubic-bezier(0.22,1,0.36,1)',
                }} />
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="animate-float" style={{
            position: 'absolute', top: -16, right: -16,
            background: 'rgba(8,8,8,0.95)', border: '1px solid rgba(210,176,90,0.25)',
            borderRadius: 12, padding: '12px 16px', backdropFilter: 'blur(20px)',
          }}>
            <div style={{ color: '#6b6b6b', fontSize: 9, letterSpacing: '0.2em', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>Cashback</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 400, color: '#d2b05a' }}>₹840</div>
          </div>
          <div className="animate-float-slow" style={{
            position: 'absolute', bottom: -16, left: -16,
            background: 'rgba(8,8,8,0.95)', border: '1px solid #1c1c1c',
            borderRadius: 12, padding: '10px 14px', backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <div style={{ width: 6, height: 6, background: '#4ade80', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            <span style={{ color: '#f0ede6', fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>Payment secured</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── USE IN VIEW ─────────────────────────────────────────── */
function useInView() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.2 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

/* ─── TESTIMONIALS ────────────────────────────────────────── */
const TESTIMONIALS = [
  { name: 'Arjun Mehta', role: 'Product Manager, Bengaluru', avatar: 'AM', text: 'CRED redefined how I manage credit cards. The rewards are insane and the UI is the cleanest I\'ve ever seen in fintech.', rating: 5 },
  { name: 'Priya Sharma', role: 'Architect, Mumbai', avatar: 'PS', text: 'Being a CRED member genuinely feels exclusive. The cashbacks are real, the experience is premium, and I\'ve never paid a late fee since joining.', rating: 5 },
  { name: 'Rahul Verma', role: 'Founder, Delhi', avatar: 'RV', text: 'I track my credit score weekly now. CRED\'s insights helped me improve my score by 60 points in just 4 months.', rating: 5 },
  { name: 'Sneha Nair', role: 'Doctor, Hyderabad', avatar: 'SN', text: 'The UPI feature is seamlessly integrated. Earn coins on every tap — it\'s genuinely the smartest wallet app I use.', rating: 5 },
]

function Testimonials() {
  const { ref, visible } = useInView()
  return (
    <section id="members" style={{ padding: '120px 24px', background: '#080808' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div className="reveal section-header">
          <span className="section-topline">Member Stories</span>
          <h2 className="section-title">What members <span className="shimmer">are saying.</span></h2>
        </div>

        {/* Stat counters */}
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: 16, marginBottom: 60 }}>
          {[
            { val: 12, suf: 'M+', dec: 0, label: 'Members' },
            { val: 4.9, suf: '★', dec: 1, label: 'App Store' },
            { val: 1200, suf: 'Cr+', dec: 0, label: 'Rewards Given' },
            { val: 99, suf: '%', dec: 0, label: 'On-time Payments' },
          ].map((s, i) => (
            <div key={i} style={{
              background: '#0f0f0f', border: '1px solid #1c1c1c', borderRadius: 16,
              padding: 24, textAlign: 'center',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(210,176,90,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1c1c1c'}
            >
              <div className="shimmer" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 42, fontWeight: 300, lineHeight: 1 }}>
                <Counter target={s.val} suffix={s.suf} decimals={s.dec} active={visible} />
              </div>
              <div style={{ color: '#6b6b6b', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 8, fontFamily: "'JetBrains Mono', monospace" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{
              background: '#0f0f0f', border: '1px solid #1c1c1c', borderRadius: 16, padding: 28,
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(210,176,90,0.25)'; e.currentTarget.style.background = 'rgba(210,176,90,0.03)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1c1c1c'; e.currentTarget.style.background = '#0f0f0f' }}
            >
              <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                {Array(t.rating).fill(0).map((_, j) => <FiStar key={j} className="rating-star" />)}
              </div>
              <p style={{ color: '#f0ede6', fontSize: 15, lineHeight: 1.75, marginBottom: 24, fontWeight: 300, fontStyle: 'italic', fontFamily: "'Space Grotesk', sans-serif" }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #1c1c1c', paddingTop: 20 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#d2b05a,#f0cc6f)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#000', fontSize: 11, fontWeight: 600,
                }}>{t.avatar}</div>
                <div>
                  <div style={{ color: '#f0ede6', fontSize: 13, fontWeight: 500 }}>{t.name}</div>
                  <div style={{ color: '#6b6b6b', fontSize: 10, marginTop: 2, fontFamily: "'JetBrains Mono', monospace" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Store ratings */}
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 60, flexWrap: 'wrap' }}>
          {[
            { store: 'App Store', rating: '4.9', reviews: '580K+ Reviews', icon: <FaApple /> },
            { store: 'Play Store', rating: '4.8', reviews: '2.1M+ Reviews', icon: <FaGooglePlay /> },
          ].map((s, i) => (
            <div key={i} style={{
              background: '#0f0f0f', border: '1px solid #1c1c1c', borderRadius: 16,
              padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 18,
              minWidth: 240, transition: 'border-color 0.3s', cursor: 'pointer',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(210,176,90,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1c1c1c'}
            >
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <div>
                <div style={{ color: '#6b6b6b', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", marginBottom: 4 }}>{s.store}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 400, color: '#f0ede6' }}>{s.rating} <span style={{ color: '#d2b05a' }}>★</span></div>
                <div style={{ color: '#6b6b6b', fontSize: 10, fontFamily: "'JetBrains Mono', monospace", marginTop: 2 }}>{s.reviews}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── SECURITY ────────────────────────────────────────────── */
const SEC_FEATURES = [
  { icon: <FiLock />, title: '256-bit Encryption', desc: 'Military-grade AES-256 encryption protects every transaction and your personal data at rest and in transit.', tag: 'BANK-GRADE' },
  { icon: <FiShield />, title: 'Zero Data Selling', desc: 'We never sell your financial data. Ever. Your information is yours — we are just the trusted vault.', tag: 'GUARANTEED' },
  { icon: <FiEye />, title: 'Fraud Detection', desc: 'AI-powered anomaly detection monitors every payment in real time. Suspicious activity triggers instant alerts.', tag: 'REAL-TIME' },
  { icon: <FiKey />, title: 'Biometric Auth', desc: 'Face ID, fingerprint, and device-level security keep your account accessible only to you.', tag: 'MULTI-LAYER' },
  { icon: <FiFileText />, title: 'RBI Regulated', desc: 'Fully compliant with RBI guidelines. CRED is a PCI DSS certified and regulated payment platform.', tag: 'CERTIFIED' },
  { icon: <FiZap />, title: 'Instant Alerts', desc: 'Every payment, every login, every action — you are notified in real time. No surprises.', tag: 'LIVE' },
]

function Security() {
  return (
    <section id="security" style={{ padding: '120px 24px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
      {/* Radial glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(210,176,90,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div className="reveal section-header">
          <span className="section-topline">Security</span>
          <h2 className="section-title">Your trust is our <span className="shimmer">first product.</span></h2>
          <p className="section-copy">Security isn't a feature at CRED — it's the foundation every feature is built on.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 20, marginBottom: 60 }}>
          {SEC_FEATURES.map((f, i) => (
            <div key={i} style={{
              background: '#0f0f0f', border: '1px solid #1c1c1c', borderRadius: 16, padding: 28,
              transition: 'all 0.35s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(210,176,90,0.25)'; e.currentTarget.style.background = 'rgba(210,176,90,0.03)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1c1c1c'; e.currentTarget.style.background = '#0f0f0f'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <span style={{ fontSize: 28 }}>{f.icon}</span>
                <span style={{ fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", color: '#d2b05a', border: '1px solid rgba(210,176,90,0.25)', background: 'rgba(210,176,90,0.06)', padding: '4px 10px', borderRadius: 2 }}>{f.tag}</span>
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 400, color: '#f0ede6', marginBottom: 10 }}>{f.title}</h3>
              <p style={{ color: '#6b6b6b', fontSize: 14, lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Cert bar */}
        <div className="reveal" style={{ background: '#0f0f0f', border: '1px solid #1c1c1c', borderRadius: 16, padding: '32px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 32 }}>
            {[['PCI DSS', 'Level 1 Certified'], ['ISO 27001', 'Info Security'], ['RBI', 'Compliant & Licensed'], ['SOC 2', 'Type II Audited']].map(([t, s], i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, fontSize: 22, color: '#d2b05a', marginBottom: 4 }}>{t}</div>
                <div style={{ color: '#6b6b6b', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace" }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FOOTER ──────────────────────────────────────────────── */
function Footer() {
  const cols = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Product: ['Features', 'Rewards', 'CRED Pay', 'CRED Store'],
    Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Grievance'],
    Support: ['Help Center', 'Contact Us', 'Status', 'Community'],
  }
  return (
    <footer style={{ borderTop: '1px solid #1c1c1c', padding: '80px 24px 40px', background: '#080808', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 200, background: 'radial-gradient(ellipse, rgba(210,176,90,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 48, marginBottom: 64 }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 34, height: 34, borderRadius: 6, background: 'linear-gradient(135deg,#d2b05a,#f0cc6f)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(210,176,90,0.3)' }}>
                <span style={{ color: '#000', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 16 }}>C</span>
              </div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 22, color: '#f0ede6', letterSpacing: 4 }}>CRED</span>
            </div>
            <p style={{ color: '#6b6b6b', fontSize: 14, lineHeight: 1.7, maxWidth: 220, fontWeight: 300, marginBottom: 24 }}>
              Good things happen to good people. CRED rewards the creditworthy.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {[
              { icon: <FiTwitter />, label: 'Twitter' },
              { icon: <FiLinkedin />, label: 'LinkedIn' },
              { icon: <FiInstagram />, label: 'Instagram' },
              { icon: <FiYoutube />, label: 'YouTube' },
            ].map((social, i) => (
                <a key={social.label} aria-label={social.label} href="#" style={{
                  width: 34, height: 34, background: '#0f0f0f', border: '1px solid #1c1c1c',
                  borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#6b6b6b', fontSize: 18, textDecoration: 'none', transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#d2b05a'; e.currentTarget.style.borderColor = 'rgba(210,176,90,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#6b6b6b'; e.currentTarget.style.borderColor = '#1c1c1c' }}
                >{social.icon}</a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(cols).map(([section, links]) => (
            <div key={section}>
              <h4 style={{ color: '#d2b05a', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", marginBottom: 20 }}>{section}</h4>
              <ul style={{ listStyle: 'none' }}>
                {links.map(link => (
                  <li key={link} style={{ marginBottom: 12 }}>
                    <a href="#" style={{ color: '#6b6b6b', fontSize: 14, textDecoration: 'none', fontWeight: 300, transition: 'color 0.3s' }}
                      onMouseEnter={e => e.target.style.color = '#f0ede6'}
                      onMouseLeave={e => e.target.style.color = '#6b6b6b'}
                    >{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid #1c1c1c', paddingTop: 32, display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { label: 'App Store', icon: <FaApple /> },
              { label: 'Play Store', icon: <FaGooglePlay /> },
            ].map((s, i) => (
              <a key={s.label} href="#" style={{
                background: '#0f0f0f', border: '1px solid #1c1c1c', borderRadius: 10,
                padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 8,
                textDecoration: 'none', transition: 'border-color 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(210,176,90,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#1c1c1c'}
              >
                <span style={{ fontSize: 18, display: 'inline-flex' }}>{s.icon}</span>
                <span style={{ color: '#f0ede6', fontSize: 12, fontFamily: "'Inter', sans-serif" }}>Download on {s.label}</span>
              </a>
            ))}
          </div>
          <span style={{ color: '#3a3a3a', fontSize: 11, fontFamily: "'JetBrains Mono', monospace" }}>© 2024 CRED. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

/* ─── APP ─────────────────────────────────────────────────── */
export default function App() {
  useReveal()
  return (
    <div style={{ background: '#080808', minHeight: '100vh' }}>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Features />
        <NeoPOPSection />
        <Testimonials />
        <Security />
      </main>
      <Footer />
    </div>
  )
}





