import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SERVICES, COUNTRIES, WHATSAPP_1, WA_MSG } from '../data';

function ServiceIllustration({ id }: { id: string }) {
  if (id === 'tourist') return (
    <svg viewBox="0 0 400 320" className="w-full max-w-sm" fill="none">
      <circle cx="200" cy="160" r="110" fill="#EBF2FF" stroke="#1A56A0" strokeWidth="1.5"/>
      <ellipse cx="200" cy="160" rx="45" ry="110" stroke="#1A56A0" strokeWidth="1" opacity="0.4"/>
      <line x1="90" y1="160" x2="310" y2="160" stroke="#1A56A0" strokeWidth="1" opacity="0.4"/>
      <line x1="105" y1="110" x2="295" y2="110" stroke="#1A56A0" strokeWidth="0.8" opacity="0.3"/>
      <line x1="105" y1="210" x2="295" y2="210" stroke="#1A56A0" strokeWidth="0.8" opacity="0.3"/>
      <g transform="translate(145,80) rotate(-25)">
        <path d="M0 8 L50 0 L44 8 L50 16 Z" fill="#1A56A0"/>
        <path d="M18 8 L30 2 L30 14 Z" fill="#1A56A0" opacity="0.5"/>
      </g>
      <circle cx="155" cy="135" r="10" fill="#EF4444"/><circle cx="155" cy="135" r="5" fill="white"/>
      <circle cx="245" cy="185" r="10" fill="#10B981"/><circle cx="245" cy="185" r="5" fill="white"/>
      <circle cx="195" cy="220" r="10" fill="#F59E0B"/><circle cx="195" cy="220" r="5" fill="white"/>
      <path d="M155 135 Q195 100 245 185" stroke="#1A56A0" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5"/>
      <rect x="280" y="100" width="70" height="50" rx="8" fill="white" stroke="#1A56A0" strokeWidth="1.5"/>
      <text x="295" y="130" fontSize="22" fill="#1A56A0">🛂</text>
    </svg>
  );
  if (id === 'study') return (
    <svg viewBox="0 0 400 320" className="w-full max-w-sm" fill="none">
      <rect x="80" y="100" width="240" height="160" rx="12" fill="#EBF2FF" stroke="#1A56A0" strokeWidth="1.5"/>
      <rect x="80" y="100" width="240" height="40" rx="12" fill="#1A56A0"/>
      <circle cx="110" cy="120" r="10" fill="white" opacity="0.3"/>
      <circle cx="135" cy="120" r="10" fill="white" opacity="0.2"/>
      <text x="175" y="126" fontSize="14" fill="white" fontWeight="bold" fontFamily="serif">UNIVERSITY</text>
      <line x1="110" y1="165" x2="290" y2="165" stroke="#1A56A0" strokeWidth="1.5" opacity="0.4"/>
      <line x1="110" y1="185" x2="260" y2="185" stroke="#1A56A0" strokeWidth="1.5" opacity="0.3"/>
      <line x1="110" y1="205" x2="270" y2="205" stroke="#1A56A0" strokeWidth="1.5" opacity="0.3"/>
      <text x="155" y="245" fontSize="28">🎓</text>
      <circle cx="320" cy="90" r="30" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5"/>
      <path d="M308 90 L317 99 L332 80" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="50" y="180" fontSize="24">📚</text>
      <text x="60" y="220" fontSize="20">✏️</text>
    </svg>
  );
  return (
    <svg viewBox="0 0 400 320" className="w-full max-w-sm" fill="none">
      <rect x="100" y="80" width="200" height="180" rx="10" fill="#EBF2FF" stroke="#1A56A0" strokeWidth="1.5"/>
      <rect x="100" y="80" width="200" height="50" rx="10" fill="#1A56A0"/>
      <text x="155" y="112" fontSize="14" fill="white" fontWeight="bold" fontFamily="serif">WORK PERMIT</text>
      <rect x="125" y="150" width="60" height="70" rx="6" fill="white" stroke="#1A56A0" strokeWidth="1"/>
      <rect x="215" y="150" width="60" height="70" rx="6" fill="white" stroke="#1A56A0" strokeWidth="1"/>
      <text x="138" y="193" fontSize="26">👔</text>
      <text x="228" y="193" fontSize="26">💼</text>
      <circle cx="320" cy="100" r="28" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5"/>
      <text x="308" y="108" fontSize="22">⭐</text>
      <circle cx="80" cy="200" r="25" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5"/>
      <path d="M69 200 L77 208 L91 192" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Single service detail page
function ServiceDetail({ id }: { id: string }) {
  const service = SERVICES.find(s => s.id === id);
  const [ref, inView] = useInView();
  if (!service) return <div className="p-20 text-center">Service not found</div>;

  const relatedCountries = COUNTRIES.filter(c =>
    (id === 'tourist' && c.services.includes('Tourist')) ||
    (id === 'study' && c.services.includes('Study')) ||
    (id === 'work' && c.services.includes('Work'))
  );

  return (
    <div>
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3 block">Our Services</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
              {service.emoji} {service.title}
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/80 text-lg mb-8">{service.desc}</motion.p>
            <div className="flex flex-wrap gap-4">
              <Link to="/apply" className="btn-white px-8 py-3">Apply Now →</Link>
              <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn-green px-8 py-3">Free Consultation</a>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="flex justify-center">
            <ServiceIllustration id={id}/>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white" ref={ref as any}>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Features */}
          <div className="lg:col-span-2">
            <span className="section-tag">What's Included</span>
            <h2 className="section-title text-left">Everything You Get</h2>
            <div className="divider-left divider"/>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {service.features.map((f, i) => (
                <motion.div key={f} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 bg-blue-50 rounded-xl p-4">
                  <CheckCircle size={18} className="text-primary-500 mt-0.5 shrink-0"/>
                  <span className="text-gray-700 font-semibold text-sm">{f}</span>
                </motion.div>
              ))}
            </div>
            <h3 className="font-black text-gray-800 text-lg mb-5">Countries Available</h3>
            <div className="flex flex-wrap gap-3">
              {relatedCountries.map(c => (
                <span key={c.name} className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-bold text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors cursor-pointer">
                  {c.flag} {c.name}
                </span>
              ))}
            </div>
          </div>
          {/* Sidebar */}
          <div>
            <div className="bg-primary-900 rounded-3xl p-7 text-white sticky top-24">
              <h3 className="font-black text-xl mb-2" style={{ fontFamily: 'Merriweather, serif' }}>Get Free Consultation</h3>
              <p className="text-white/70 text-sm mb-6">Talk to our experts about your {service.title} requirements.</p>
              <div className="space-y-3">
                <Link to="/apply" className="btn-white w-full justify-center py-3">Apply Now →</Link>
                <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn-green w-full justify-center py-3">WhatsApp Us</a>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/50 text-xs mb-3">Other Services:</p>
                {SERVICES.filter(s => s.id !== id).map(s => (
                  <Link key={s.id} to={`/services/${s.id}`} className="flex items-center gap-2 text-white/70 hover:text-white text-sm py-2 transition-colors">
                    {s.emoji} {s.title} <ArrowRight size={14} className="ml-auto"/>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Services overview page
export default function Services() {
  const { id } = useParams();
  const [ref, inView] = useInView();

  if (id) return <ServiceDetail id={id}/>;

  return (
    <div>
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3 block">Our Services</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Complete Visa Services
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/80 text-lg max-w-xl mx-auto">
            End-to-end visa support across all major categories.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white" ref={ref as any}>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div key={s.id}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
              className="card overflow-hidden group">
              <div className={`bg-gradient-to-br ${s.color} p-8 relative overflow-hidden`}>
                <div className="absolute -right-6 -top-6 w-28 h-28 bg-white/10 rounded-full"/>
                <div className="text-5xl mb-3 relative z-10">{s.emoji}</div>
                <h3 className="text-xl font-black text-white relative z-10" style={{ fontFamily: 'Merriweather, serif' }}>{s.title}</h3>
                <p className="text-white/80 text-sm mt-1 relative z-10">{s.tagline}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-primary-500 shrink-0"/> {f}
                    </li>
                  ))}
                </ul>
                <Link to={`/services/${s.id}`} className="w-full block text-center bg-primary-50 text-primary-700 font-black py-3 rounded-xl hover:bg-primary-600 hover:text-white transition-all text-sm">
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
