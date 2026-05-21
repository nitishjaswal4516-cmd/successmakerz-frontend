import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, MessageCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WHATSAPP_1, WA_MSG, COUNTRIES, SERVICES, TESTIMONIALS, WHY_CHOOSE, PROCESS } from '../data';

const HERO_BG = { background: 'linear-gradient(135deg, #0F1F3D 0%, #1A56A0 55%, #1E3A6E 100%)' };
const DARK_BG = { background: 'linear-gradient(135deg, #0F1F3D 0%, #1A3A6E 100%)' };

export default function Home() {
  const [ref1, v1] = useInView();
  const [ref2, v2] = useInView();
  const [ref3, v3] = useInView();
  const [ref4, v4] = useInView();
  const [ref5, v5] = useInView();

  return (
    <div>
      {/* ── HERO ── */}
      <section style={HERO_BG} className="relative overflow-hidden pt-16 pb-0">
        {/* Background dots pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '28px 28px'
        }} />
        {/* Glow blobs */}
        <div className="absolute top-10 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(59,130,246,0.15)' }} />
        <div className="absolute bottom-32 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(99,102,241,0.1)' }} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-20">
            {/* LEFT — Text */}
            <div>
              {/* Badge */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, background: '#4ADE80', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 600, fontSize: 14 }}>Trusted Visa Consultancy in Punjab</span>
              </motion.div>

              {/* Heading */}
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                style={{ fontFamily: 'Merriweather, serif', color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
                Work, Study &<br />
                <span style={{ color: '#93C5FD' }}>Settle Abroad</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, lineHeight: 1.7, marginBottom: 24, maxWidth: 480 }}>
                Expert visa consultancy for Tourist Visa, Study Visa & Work Permit. Canada, Australia, UK, Dubai & 10+ countries.
              </motion.p>

              {/* Tags */}
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {[
                  { icon: '✈', label: 'Tourist Visa' },
                  { icon: '🎓', label: 'Study Visa' },
                  { icon: '💼', label: 'Work Permit' },
                ].map(t => (
                  <span key={t.label} style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: 13, fontWeight: 700, padding: '6px 16px', borderRadius: 999 }}>
                    {t.icon} {t.label}
                  </span>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 40 }}>
                <Link to="/apply" style={{ background: 'white', color: '#1A3A6E', fontWeight: 800, padding: '14px 32px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, boxShadow: '0 8px 24px rgba(0,0,0,0.2)', textDecoration: 'none' }}>
                  Apply now <ArrowRight size={18} />
                </Link>
                <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
                  style={{ background: '#22C55E', color: 'white', fontWeight: 800, padding: '14px 32px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, boxShadow: '0 8px 24px rgba(34,197,94,0.35)', textDecoration: 'none' }}>
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                {[{ v: '500+', l: 'Visas Approved' }, { v: '10+', l: 'Countries' }, { v: '98%', l: 'Success Rate' }, { v: '5★', l: 'Rating' }].map(s => (
                  <div key={s.l} style={{ textAlign: 'center', padding: '16px 8px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 16, backdropFilter: 'blur(8px)' }}>
                    <div style={{ fontFamily: 'Merriweather, serif', fontSize: 22, fontWeight: 900, color: 'white' }}>{s.v}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11, marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Illustration */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
              className="hidden lg:flex justify-center items-center">
              <div style={{ position: 'relative', width: 360, height: 360 }}>
                {/* Globe circle */}
                <div style={{ width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '30px auto', position: 'relative' }}>
                  <span style={{ fontSize: 110 }}>🌍</span>
                  {/* Orbit ring */}
                  <div style={{ position: 'absolute', inset: -20, borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.15)' }} />
                </div>
                {/* Country badges */}
                {[
                  { code: 'ca', label: 'Canada', top: 0, left: 10 },
                  { code: 'au', label: 'Australia', top: 0, right: 10 },
                  { code: 'gb', label: 'UK', bottom: 40, left: 10 },
                  { code: 'ae', label: 'Dubai', bottom: 40, right: 10 },
                ].map(b => (
                  <div key={b.label} style={{ position: 'absolute', top: b.top, bottom: b.bottom, left: b.left, right: b.right, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 12, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <img
                      src={`https://flagcdn.com/w40/${b.code}.png`}
                      width="24"
                      height="18"
                      alt={b.label}
                      style={{ borderRadius: 3, objectFit: 'cover' }}
                    />
                    <span style={{ color: 'white', fontWeight: 700, fontSize: 13 }}>{b.label}</span>
                  </div>
                ))}
                {/* Green check */}
                <div style={{ position: 'absolute', top: '38%', right: -10, width: 52, height: 52, background: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 8px 24px rgba(16,185,129,0.5)' }}>✓</div>
                {/* Plane */}
                <div style={{ position: 'absolute', top: '15%', left: '15%', fontSize: 32, animation: 'none' }}>✈️</div>
              </div>
            </motion.div>
          </div>

          {/* ── Quick service selector (inside hero, attached to bottom) ── */}
          <div style={{ background: 'white', borderRadius: '24px 24px 0 0', padding: '24px', boxShadow: '0 -8px 32px rgba(0,0,0,0.15)' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SERVICES.map(s => (
                <Link key={s.id} to={`/services/${s.id}`}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                  style={{ textDecoration: 'none' }}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-2xl shadow-sm shrink-0`}>{s.emoji}</div>
                  <div>
                    <div className="font-black text-gray-800 text-sm">{s.title}</div>
                    <div className="text-gray-500 text-xs">{s.tagline}</div>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-24 bg-white" ref={ref1 as any}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Why Successmakerz</span>
            <h2 className="section-title">The Most Trusted Visa Consultancy<br />in Punjab</h2>
            <div className="divider" />
            <p className="section-sub">We combine expert knowledge with genuine care to deliver visa approvals you can count on.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }} animate={v1 ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="card p-6 border border-gray-100 group">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:bg-primary-100 transition-colors">{item.icon}</div>
                <h3 className="font-black text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 bg-blue-50" ref={ref2 as any}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Our Services</span>
            <h2 className="section-title">Complete Visa Consultancy Services</h2>
            <div className="divider" />
            <p className="section-sub">End-to-end visa support from documentation to approval across all major visa categories.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div key={s.id}
                initial={{ opacity: 0, y: 40 }} animate={v2 ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
                className="card overflow-hidden group">
                <div className={`bg-gradient-to-br ${s.color} p-8 relative overflow-hidden`}>
                  <div className="absolute -right-6 -top-6 w-28 h-28 bg-white/10 rounded-full" />
                  <div className="absolute right-4 bottom-4 w-16 h-16 bg-white/10 rounded-full" />
                  <div className="text-5xl mb-3 relative z-10">{s.emoji}</div>
                  <h3 className="text-xl font-black text-white relative z-10" style={{ fontFamily: 'Merriweather, serif' }}>{s.title}</h3>
                  <p className="text-white/80 text-sm mt-1 relative z-10">{s.tagline}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {s.features.slice(0, 3).map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={14} className="text-primary-500 shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/services/${s.id}`}
                    className="w-full block text-center bg-primary-50 text-primary-700 font-black py-3 rounded-xl hover:bg-primary-600 hover:text-white transition-all text-sm"
                    style={{ textDecoration: 'none' }}>
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTRIES PREVIEW ── */}
      <section className="py-24 bg-white" ref={ref3 as any}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="section-tag">Global Reach</span>
              <h2 className="section-title text-left">Countries We Serve</h2>
              <div className="divider" style={{ margin: '0 0 1.5rem' }} />
            </div>
            <Link to="/countries" className="btn-outline shrink-0" style={{ textDecoration: 'none' }}>View All Countries →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {COUNTRIES.slice(0, 5).map((c, i) => (
              <motion.div key={c.name}
                initial={{ opacity: 0, y: 20 }} animate={v3 ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
                className="card border border-gray-100 p-5 text-center group cursor-pointer">
                <div className="text-4xl mb-3">{c.flag}</div>
                <h3 className="font-black text-gray-800 text-sm mb-2">{c.name}</h3>
                <div className="flex flex-wrap gap-1 justify-center">
                  {c.services.map(s => (
                    <span key={s} className={s === 'Tourist' ? 'badge-tourist' : s === 'Study' ? 'badge-study' : 'badge-work'}>{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={DARK_BG} className="py-24 relative overflow-hidden" ref={ref4 as any}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span style={{ color: '#93C5FD', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 12 }}>How It Works</span>
            <h2 style={{ fontFamily: 'Merriweather, serif', color: 'white', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 900, marginBottom: 16 }}>Our Simple 5-Step Process</h2>
            <div style={{ height: 4, width: 56, background: '#60A5FA', borderRadius: 2, margin: '0 auto 16px' }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>From free consultation to visa approval — we make the process simple, fast and stress-free.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step}
                initial={{ opacity: 0, y: 30 }} animate={v4 ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center">
                <div style={{ width: 72, height: 72, borderRadius: 18, background: 'linear-gradient(135deg, #1A56A0, #1E3A6E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 16, border: '2px solid rgba(96,165,250,0.3)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
                  {step.icon}
                </div>
                <span style={{ color: '#60A5FA', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Step {step.step}</span>
                <h3 style={{ color: 'white', fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, lineHeight: 1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/apply" style={{ background: 'white', color: '#0F1F3D', fontWeight: 800, padding: '16px 40px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
              Start Your Visa Journey →
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-blue-50" ref={ref5 as any}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Success Stories</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="divider" />
            <p className="section-sub">Hundreds of happy clients who trusted Successmakerz for their visa needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, y: 30 }} animate={v5 ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
                className="card bg-white p-7 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={16} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center font-black text-primary-700">{t.name[0]}</div>
                  <div>
                    <div className="font-black text-gray-800 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.loc} · {t.visa}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={HERO_BG} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 style={{ fontFamily: 'Merriweather, serif', color: 'white', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, marginBottom: 16 }}>
            Ready to Start Your Visa Journey?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, marginBottom: 32 }}>Get free consultation from our expert visa consultants today.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center' }}>
            <Link to="/apply" style={{ background: 'white', color: '#0F1F3D', fontWeight: 800, padding: '16px 40px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}>
              Apply now →
            </Link>
            <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
              style={{ background: '#22C55E', color: 'white', fontWeight: 800, padding: '16px 40px', borderRadius: 999, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 16, textDecoration: 'none', boxShadow: '0 8px 24px rgba(34,197,94,0.35)' }}>
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}