import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PHONE_1, PHONE_2, EMAIL, INSTAGRAM, WHATSAPP_1, WHATSAPP_2, WA_MSG } from '../data';

export default function Contact us() {
  return (
    <div>
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3 block">Get In Touch</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Contact us Us
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/80 text-lg max-w-xl mx-auto">
            We're here to help. Reach out via WhatsApp, call, or email — we respond fast!
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Phone size={22}/>, color: 'bg-blue-50 text-blue-600', title: 'Call Us', lines: [PHONE_1, PHONE_2], hrefs: [`tel:${PHONE_1}`, `tel:${PHONE_2}`] },
              { icon: <MessageCircle size={22}/>, color: 'bg-green-50 text-green-600', title: 'WhatsApp', lines: [PHONE_1, PHONE_2], hrefs: [`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`, `https://wa.me/${WHATSAPP_2}?text=${WA_MSG}`], external: true },
              { icon: <Mail size={22}/>, color: 'bg-red-50 text-red-500', title: 'Email Us', lines: [EMAIL], hrefs: [`mailto:${EMAIL}`] },
              { icon: <Instagram size={22}/>, color: 'bg-pink-50 text-pink-500', title: 'Instagram', lines: ['@successmakers_01'], hrefs: [INSTAGRAM], external: true },
              { icon: <Clock size={22}/>, color: 'bg-amber-50 text-amber-600', title: 'Office Hours', lines: ['Mon – Saturday', '9:00 AM – 6:00 PM'] },
              { icon: <MapPin size={22}/>, color: 'bg-purple-50 text-purple-600', title: 'Location', lines: ['Punjab, India'] },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-4`}>{item.icon}</div>
                <h3 className="font-black text-gray-800 mb-3">{item.title}</h3>
                <div className="space-y-1.5">
                  {item.lines.map((line, j) => (
                    item.hrefs ? (
                      <a key={j} href={item.hrefs[j]} target={item.external ? '_blank' : undefined} rel="noopener noreferrer"
                        className="block text-primary-600 font-semibold text-sm hover:text-primary-800 transition-colors">{line}</a>
                    ) : (
                      <p key={j} className="text-gray-600 text-sm">{line}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-10 text-center text-white">
            <div className="text-5xl mb-4">💬</div>
            <h2 className="text-2xl font-black mb-3" style={{ fontFamily: 'Merriweather, serif' }}>Fastest Way to Reach Us</h2>
            <p className="text-white/85 mb-7 max-w-xl mx-auto">Our consultants typically reply within minutes on WhatsApp. Get instant answers to all your visa questions.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
                className="bg-white text-green-600 font-black px-8 py-3 rounded-full hover:bg-green-50 transition-colors inline-flex items-center gap-2 shadow-lg">
                <MessageCircle size={18}/> Chat — {PHONE_1}
              </a>
              <a href={`https://wa.me/${WHATSAPP_2}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
                className="bg-white text-green-600 font-black px-8 py-3 rounded-full hover:bg-green-50 transition-colors inline-flex items-center gap-2 shadow-lg">
                <MessageCircle size={18}/> Chat — {PHONE_2}
              </a>
            </div>
          </div>

          {/* Apply CTA */}
          <div className="mt-10 text-center bg-blue-50 rounded-3xl p-10">
            <h2 className="section-title">Ready to Apply?</h2>
            <p className="text-gray-500 mb-7">Fill out our quick application form and we'll get back to you within 24 hours.</p>
            <Link to="/apply" className="btn-primary px-10 py-4 text-base">Start Your Application →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
