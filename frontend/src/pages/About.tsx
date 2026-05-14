import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Globe, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { WHY_CHOOSE, WHATSAPP_1, WA_MSG } from '../data';

function AboutIllustration() {
  return (
    <svg viewBox="0 0 400 350" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Building */}
      <rect x="80" y="120" width="120" height="180" rx="8" fill="#EBF2FF" stroke="#1A56A0" strokeWidth="1.5"/>
      <rect x="100" y="140" width="30" height="30" rx="4" fill="#1A56A0" opacity="0.3"/>
      <rect x="145" y="140" width="30" height="30" rx="4" fill="#1A56A0" opacity="0.3"/>
      <rect x="100" y="185" width="30" height="30" rx="4" fill="#1A56A0" opacity="0.3"/>
      <rect x="145" y="185" width="30" height="30" rx="4" fill="#1A56A0" opacity="0.3"/>
      <rect x="115" y="240" width="50" height="60" rx="4" fill="#1A56A0" opacity="0.5"/>
      {/* Flag on building */}
      <line x1="140" y1="100" x2="140" y2="120" stroke="#1A56A0" strokeWidth="2"/>
      <path d="M140 100 L165 108 L140 116 Z" fill="#1A56A0"/>
      {/* People */}
      <circle cx="260" cy="200" r="22" fill="#DBEAFE" stroke="#1A56A0" strokeWidth="1.5"/>
      <circle cx="260" cy="193" r="9" fill="#1A56A0" opacity="0.5"/>
      <path d="M240 222 Q260 210 280 222" stroke="#1A56A0" strokeWidth="1.5" fill="none"/>
      <circle cx="310" cy="220" r="18" fill="#EBF2FF" stroke="#1A56A0" strokeWidth="1.5"/>
      <circle cx="310" cy="214" r="7" fill="#1A56A0" opacity="0.5"/>
      <path d="M293 238 Q310 228 327 238" stroke="#1A56A0" strokeWidth="1.5" fill="none"/>
      {/* Stars */}
      <text x="320" y="170" fontSize="20" fill="#F59E0B">★</text>
      <text x="300" y="155" fontSize="14" fill="#F59E0B" opacity="0.6">★</text>
      <text x="335" y="185" fontSize="12" fill="#F59E0B" opacity="0.4">★</text>
      {/* Check badges */}
      <circle cx="340" cy="130" r="22" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5"/>
      <path d="M329 130 L337 138 L351 122" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Documents */}
      <rect x="220" y="260" width="80" height="55" rx="6" fill="#EBF2FF" stroke="#1A56A0" strokeWidth="1.5"/>
      <line x1="232" y1="275" x2="288" y2="275" stroke="#1A56A0" strokeWidth="1.5" opacity="0.5"/>
      <line x1="232" y1="285" x2="288" y2="285" stroke="#1A56A0" strokeWidth="1.5" opacity="0.3"/>
      <line x1="232" y1="295" x2="270" y2="295" stroke="#1A56A0" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
}

export default function About() {
  const [ref1, v1] = useInView();
  const [ref2, v2] = useInView();

  return (
    <div>
      {/* Page Hero */}
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3 block">About Us</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Your Trusted Visa Partner
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/80 text-lg max-w-2xl mx-auto">
            Dedicated to making your international dreams a reality since day one.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title text-left">About Successmakerz — <br/>Making Dreams Reality</h2>
            <div className="divider-left divider"/>
            <p className="text-gray-600 leading-relaxed mb-5 text-base">
              <strong>Successmakerz</strong> is a trusted visa consultancy dedicated to helping individuals achieve their dreams of studying, working, traveling, and settling abroad. We provide complete guidance and support for <strong>Tourist Visas, Study Visas, and Work Permits</strong> with a transparent and professional process.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Our mission is to make international opportunities accessible, simple, and reliable for every client. As one of the <strong>best visa consultants in Punjab</strong>, we combine expert documentation skills with genuine, honest guidance to deliver high success rate visa approvals across 10+ countries worldwide.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: <Users size={20}/>, label: '500+ Happy Clients' },
                { icon: <Globe size={20}/>, label: '10+ Countries Served' },
                { icon: <Award size={20}/>, label: '98% Success Rate' },
                { icon: <Heart size={20}/>, label: '100% Genuine Service' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 bg-blue-50 rounded-xl p-3">
                  <div className="text-primary-600">{item.icon}</div>
                  <span className="font-bold text-gray-800 text-sm">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <Link to="/apply" className="btn-primary">Apply Now →</Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex justify-center">
            <AboutIllustration/>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-blue-50" ref={ref1 as any}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">What Makes Us Different</h2>
            <div className="divider"/>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} animate={v1 ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-black text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white" ref={ref2 as any}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">The Principles We Live By</h2>
            <div className="divider"/>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🤝', title: 'Integrity First', desc: 'We believe in complete transparency. What we promise, we deliver. No hidden fees, no false promises — ever.' },
              { icon: '🎯', title: 'Client Success', desc: 'Your visa approval is our success. Every decision we make is guided by what is best for our clients and their families.' },
              { icon: '💡', title: 'Expert Knowledge', desc: 'Our team stays updated on the latest visa policies, requirements, and processes to give you the most accurate guidance.' },
            ].map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 30 }} animate={v2 ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.15 }}
                className="text-center p-8 rounded-3xl border border-gray-100 hover:border-primary-200 hover:bg-blue-50/50 transition-all">
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="font-black text-gray-800 text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50"/>
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>Ready to Work With Us?</h2>
          <p className="text-white/80 mb-8">Get your free visa consultation today. No obligation, just genuine expert advice.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/apply" className="btn-white px-8 py-3">Apply Now →</Link>
            <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer" className="btn-green px-8 py-3">WhatsApp Free Consultation</a>
          </div>
        </div>
      </section>
    </div>
  );
}
