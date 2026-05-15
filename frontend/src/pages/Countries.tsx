import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { COUNTRIES, WHATSAPP_1, WA_MSG } from '../data';

const FILTERS = ['All', 'Tourist', 'Study', 'Work'];

export default function Countries() {
  const [ref, inView] = useInView();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? COUNTRIES : COUNTRIES.filter(c => c.services.includes(filter));

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3 block">Global Reach</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Countries We Serve
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/80 text-lg max-w-xl mx-auto">
            Expert visa consultancy for 10+ countries across 3 major visa categories.
          </motion.p>
          {/* Filters */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-3 mt-8">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${filter === f ? 'bg-white text-primary-700' : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'}`}>
                {f}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-white" ref={ref as any}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((c, i) => (
              <motion.div key={c.name}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.06 }}
                className="card border border-gray-100 overflow-hidden group">
                {/* Header */}
                <div className={`bg-gradient-to-br ${c.color} p-6 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-10 bg-white"/>
                  <div className="text-5xl mb-2 relative z-10">{c.flag}</div>
                  <h3 className="font-black text-white text-lg relative z-10">{c.name}</h3>
                </div>
                {/* Body */}
                <div className="p-5">
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.services.map(s => (
                      <span key={s} className={s === 'Tourist' ? 'badge-tourist' : s === 'Study' ? 'badge-study' : 'badge-work'}>{s}</span>
                    ))}
                  </div>
                  <Link to="/apply"
                    className="w-full block text-center bg-primary-50 text-primary-700 font-black py-2.5 rounded-xl hover:bg-primary-600 hover:text-white transition-all text-sm">
                    Apply for {c.name} Visa →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title">Don't See Your Country?</h2>
          <p className="text-gray-500 mb-8">Contact us us — we may still be able to help with your visa requirements.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn-green px-8 py-3">WhatsApp Us</a>
            <Link to="/contact us" className="btn-outline px-8 py-3">Contact us Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
