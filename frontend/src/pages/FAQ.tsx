import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQS, WHATSAPP_1, WA_MSG } from '../data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3 block">FAQ</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Frequently Asked Questions
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/80 text-lg max-w-xl mx-auto">
            Everything you need to know about our visa services.
          </motion.p>
        </div>
      </section>
      <section className="py-20 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors">
                  <span className="font-black text-gray-800 text-sm leading-relaxed">{faq.q}</span>
                  <ChevronDown size={18} className={`text-primary-500 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}/>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                      <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 bg-primary-900 rounded-3xl p-8 text-white text-center">
            <div className="text-4xl mb-3">🤔</div>
            <h3 className="font-black text-xl mb-2" style={{ fontFamily: 'Merriweather, serif' }}>Still Have Questions?</h3>
            <p className="text-white/70 mb-6">Our consultants are available to help you with any visa queries.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn-green px-6 py-2.5 text-sm">
                <MessageCircle size={16}/> WhatsApp Us
              </a>
              <Link to="/apply" className="btn-white px-6 py-2.5 text-sm">Apply now →</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
