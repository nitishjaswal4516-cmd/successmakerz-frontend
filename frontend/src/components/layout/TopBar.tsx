import { Phone, Mail, Instagram, MessageCircle } from 'lucide-react';
import { PHONE_1, PHONE_2, EMAIL, INSTAGRAM, WHATSAPP_1, WA_MSG } from '../../data';

export default function TopBar() {
  return (
    <div className="topbar text-white py-2 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a href={`tel:${PHONE_1}`} className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
            <Phone size={12} /> {PHONE_1}
          </a>
          <a href={`tel:${PHONE_2}`} className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
            <Phone size={12} /> {PHONE_2}
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-blue-200 transition-colors">
            <Mail size={12} /> {EMAIL}
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/60">Mon–Sat: 9AM – 6PM</span>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-pink-300 transition-colors">
            <Instagram size={12} /> @nitishjaswal__          </a>
          <a href={`https://wa.me/${WHATSAPP_1}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white px-3 py-1 rounded-full transition-colors font-semibold">
            <MessageCircle size={12} /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
