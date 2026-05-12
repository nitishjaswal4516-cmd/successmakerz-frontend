import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, MessageCircle, CheckCircle, AlertCircle, Phone } from 'lucide-react';
import { COUNTRIES, WHATSAPP_1, WHATSAPP_2, API_URL, PHONE_1, PHONE_2 } from '../data';

interface FormData {
  fullName: string; phone: string; email: string;
  country: string; purpose: 'tourist' | 'study' | 'work'; message: string;
}

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const values = watch();
  const waMsg = encodeURIComponent(`Hello Successmakerz!\n\nName: ${values.fullName||''}\nPhone: ${values.phone||''}\nEmail: ${values.email||''}\nCountry: ${values.country||''}\nPurpose: ${values.purpose||''}\nMessage: ${values.message||''}`);

  const onSubmit = async (data: FormData) => {
    setSending(true); setError('');
    try {
      const res = await fetch(`${API_URL}/api/leads`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) setSubmitted(true);
      else setError(result.message || 'Something went wrong. Please try WhatsApp.');
    } catch { setError('Could not connect to server. Please use WhatsApp to apply.'); }
    finally { setSending(false); }
  };

  return (
    <div>
      <section className="page-hero py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3 block">Apply Online</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Start Your Visa Application
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/80 text-lg max-w-xl mx-auto">
            Fill out the form below and our experts will contact you within 24 hours.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-black text-gray-800 mb-4">Quick Contact</h3>
              <div className="space-y-3">
                <a href={`https://wa.me/${WHATSAPP_1}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-50 hover:bg-green-100 rounded-xl p-3 transition-colors">
                  <MessageCircle size={18} className="text-green-600 shrink-0"/>
                  <div><p className="font-bold text-gray-800 text-sm">WhatsApp</p><p className="text-gray-500 text-xs">{PHONE_1}</p></div>
                </a>
                <a href={`https://wa.me/${WHATSAPP_2}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-50 hover:bg-green-100 rounded-xl p-3 transition-colors">
                  <MessageCircle size={18} className="text-green-600 shrink-0"/>
                  <div><p className="font-bold text-gray-800 text-sm">WhatsApp</p><p className="text-gray-500 text-xs">{PHONE_2}</p></div>
                </a>
                <a href={`tel:${PHONE_1}`} className="flex items-center gap-3 bg-blue-50 hover:bg-blue-100 rounded-xl p-3 transition-colors">
                  <Phone size={18} className="text-primary-600 shrink-0"/>
                  <div><p className="font-bold text-gray-800 text-sm">Call Us</p><p className="text-gray-500 text-xs">{PHONE_1}</p></div>
                </a>
              </div>
            </div>
            <div className="bg-primary-900 rounded-2xl p-6 text-white">
              <h3 className="font-black mb-3">Why Apply With Us?</h3>
              <ul className="space-y-2.5">
                {['Free expert consultation', 'Transparent pricing', '98% visa success rate', 'Fast processing', 'Complete documentation support', 'Support till you fly ✈️'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle size={14} className="text-blue-400 shrink-0"/> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 text-center">
                <CheckCircle size={60} className="text-green-500 mx-auto mb-5"/>
                <h3 className="text-2xl font-black text-gray-800 mb-3" style={{ fontFamily: 'Merriweather, serif' }}>Application Received! 🎉</h3>
                <p className="text-gray-500 mb-8">Thank you! Our consultant will contact you within 24 hours. For instant help, reach us on WhatsApp.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={`https://wa.me/${WHATSAPP_1}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-green justify-center">
                    <MessageCircle size={18}/> Chat on WhatsApp
                  </a>
                  <button onClick={() => setSubmitted(false)} className="btn-outline justify-center">Submit Another</button>
                </div>
              </motion.div>
            ) : (
              <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit(onSubmit)}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-xl font-black text-gray-800 mb-6" style={{ fontFamily: 'Merriweather, serif' }}>Application Form</h2>

                {error && (
                  <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 mb-5 text-sm">
                    <AlertCircle size={16} className="shrink-0"/> {error}
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5 block">Full Name *</label>
                    <input {...register('fullName', { required: 'Name is required' })} placeholder="Your full name" className="form-input"/>
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5 block">Phone Number *</label>
                    <input {...register('phone', { required: 'Phone is required' })} placeholder="+91 XXXXX XXXXX" type="tel" className="form-input"/>
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5 block">Email ID *</label>
                    <input {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })} placeholder="your@email.com" type="email" className="form-input"/>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5 block">Country Interested In *</label>
                    <select {...register('country', { required: 'Please select a country' })} className="form-input">
                      <option value="">Select Country</option>
                      {COUNTRIES.map(c => <option key={c.name} value={c.name}>{c.flag} {c.name}</option>)}
                    </select>
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-xs font-black text-gray-600 uppercase tracking-wide mb-2.5 block">Purpose of Visit *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['tourist', 'study', 'work'] as const).map(p => (
                      <label key={p} className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${values.purpose === p ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <input {...register('purpose', { required: true })} type="radio" value={p} className="sr-only"/>
                        <span className="text-2xl">{p === 'tourist' ? '✈️' : p === 'study' ? '🎓' : '💼'}</span>
                        <span className="text-xs font-black text-gray-700 capitalize">{p === 'tourist' ? 'Tourist' : p === 'study' ? 'Study' : 'Work'}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-xs font-black text-gray-600 uppercase tracking-wide mb-1.5 block">Tell Us Your Plans *</label>
                  <textarea {...register('message', { required: 'Please tell us about your plans' })}
                    placeholder="Tell us about your goals, plans, and any specific requirements..."
                    rows={4} className="form-input resize-none"/>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <div className="mb-6 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                  <span className="text-lg">🛂</span>
                  <p className="text-sm text-blue-700"><span className="font-bold">Passport copy?</span> Send it via WhatsApp after submitting. Our consultant will request it during follow-up.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="submit" disabled={sending} className="btn-primary flex-1 justify-center py-4 disabled:opacity-60">
                    {sending ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                        </svg> Submitting...
                      </span>
                    ) : <><Send size={16}/> Submit Application</>}
                  </button>
                  <a href={`https://wa.me/${WHATSAPP_1}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-green flex-1 justify-center py-4">
                    <MessageCircle size={16}/> Apply via WhatsApp
                  </a>
                </div>
                <p className="text-center text-gray-400 text-xs mt-4">
                  Or call: <a href={`tel:${PHONE_1}`} className="text-primary-600 font-bold">{PHONE_1}</a> / <a href={`tel:${PHONE_2}`} className="text-primary-600 font-bold">{PHONE_2}</a>
                </p>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
