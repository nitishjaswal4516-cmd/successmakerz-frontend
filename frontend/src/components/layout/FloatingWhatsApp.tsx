import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';
import { WHATSAPP_1, WHATSAPP_2, WA_MSG, PHONE_1, PHONE_2 } from '../../data';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wa-float">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-72">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">S</div>
                <div>
                  <p className="font-bold text-sm leading-none">Successmakerz</p>
                  <p className="text-white/80 text-xs">Typically replies instantly ⚡</p>
                </div>
              </div>
            </div>
            <div className="p-3 bg-gray-50 text-xs text-gray-500 italic border-b border-gray-100">
              "Hello! How can we help you with your visa today?"
            </div>
            <div className="p-3 space-y-2">
              <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between bg-green-50 hover:bg-green-100 rounded-xl p-3 transition-colors group">
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-green-600" />
                  <div>
                    <p className="text-xs font-bold text-gray-800">Chat Now</p>
                    <p className="text-xs text-gray-500">{PHONE_1}</p>
                  </div>
                </div>
                <span className="text-green-600 text-xs font-bold group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <a href={`https://wa.me/${WHATSAPP_2}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between bg-green-50 hover:bg-green-100 rounded-xl p-3 transition-colors group">
                <div className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-green-600" />
                  <div>
                    <p className="text-xs font-bold text-gray-800">Chat Now</p>
                    <p className="text-xs text-gray-500">{PHONE_2}</p>
                  </div>
                </div>
                <span className="text-green-600 text-xs font-bold group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
              <div className="flex gap-2 pt-1">
                <a href={`tel:${PHONE_1}`} className="flex-1 flex items-center justify-center gap-1.5 bg-primary-50 text-primary-700 text-xs font-bold py-2 rounded-lg hover:bg-primary-100 transition-colors">
                  <Phone size={12} /> Call
                </a>
                <a href={`tel:${PHONE_2}`} className="flex-1 flex items-center justify-center gap-1.5 bg-primary-50 text-primary-700 text-xs font-bold py-2 rounded-lg hover:bg-primary-100 transition-colors">
                  <Phone size={12} /> Call 2
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button onClick={() => setOpen(!open)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center transition-colors relative">
        {open ? <X size={22} /> : <MessageCircle size={26} />}
        {!open && <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center font-bold animate-pulse">2</span>}
      </motion.button>
    </div>
  );
}
