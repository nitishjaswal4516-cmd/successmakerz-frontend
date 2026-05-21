export const PHONE_1 = '7876838277';
export const PHONE_2 = '9817373428';
export const WHATSAPP_1 = '917876838277';
export const WHATSAPP_2 = '919817373428';
export const EMAIL = 'jaswalkaku980@gmail.com';
export const INSTAGRAM = 'https://instagram.com/nitishjaswal__';
export const WA_MSG = encodeURIComponent('Hello Successmakerz! I want to inquire about visa services.');
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const COUNTRIES = [
  { name: 'Canada', flag: '🇨🇦', services: ['Tourist', 'Study', 'Work'], desc: 'PR pathways, world-class education & abundant employment for skilled workers.', color: 'from-red-500 to-red-700' },
  { name: 'Australia', flag: '🇦🇺', services: ['Tourist', 'Study', 'Work'], desc: 'High-quality education institutions and skilled migration pathways.', color: 'from-yellow-500 to-yellow-700' },
  { name: 'New Zealand', flag: '🇳🇿', services: ['Tourist', 'Study', 'Work'], desc: 'Excellent work opportunities, student pathways and high quality of life.', color: 'from-black to-gray-700' },
  { name: 'United Kingdom', flag: '🇬🇧', services: ['Tourist', 'Study', 'Work'], desc: 'Work permits, prestigious student visas, and visitor visas.', color: 'from-blue-700 to-blue-900' },
  { name: 'Schengen Countries', flag: '🇪🇺', services: ['Tourist', 'Work'], desc: 'Access to 26+ European countries with a single visa application.', color: 'from-blue-500 to-indigo-700' },
  { name: 'Dubai (UAE)', flag: '🇦🇪', services: ['Tourist', 'Work'], desc: 'Fast processing for employment visas and visit visas to the UAE.', color: 'from-green-600 to-green-800' },
  { name: 'Russia', flag: '🇷🇺', services: ['Tourist', 'Work'], desc: 'Industrial and skilled job opportunities with work permit support.', color: 'from-red-600 to-red-800' },
  { name: 'Israel', flag: '🇮🇱', services: ['Tourist', 'Work'], desc: 'Caregiver programs and skilled worker permits with full documentation.', color: 'from-blue-400 to-blue-600' },
  { name: 'South Korea', flag: '🇰🇷', services: ['Tourist', 'Study'], desc: 'Student exchange programs and short-term visit visas.', color: 'from-red-400 to-red-600' },
  { name: 'Japan', flag: '🇯🇵', services: ['Tourist', 'Study'], desc: 'Language courses, student visas, and travel visas.', color: 'from-red-500 to-pink-600' },
];

export const SERVICES = [
  {
    id: 'tourist',
    title: 'Tourist Visa',
    emoji: '✈️',
    tagline: 'Explore the World',
    color: 'from-sky-500 to-blue-700',
    desc: 'Hassle-free tourist visa assistance with fast processing and minimum documentation for individuals and families worldwide.',
    features: ['Fast tourist visa processing', 'Minimum documentation required', 'Family & individual applications', 'Schengen and worldwide assistance', 'Expert application support', 'High visa approval rate'],
  },
  {
    id: 'study',
    title: 'Study Visa',
    emoji: '🎓',
    tagline: 'Study Abroad Dreams',
    color: 'from-indigo-500 to-purple-700',
    desc: 'From university selection to visa approval — complete study abroad guidance with SOP writing, documentation & interview prep.',
    features: ['University & college guidance', 'Admission assistance abroad', 'SOP writing & documentation', 'Study visa filing & submission', 'Visa interview preparation', 'Canada, UK, Australia & more'],
  },
  {
    id: 'work',
    title: 'Work Permit',
    emoji: '💼',
    tagline: 'Work Abroad Opportunities',
    color: 'from-emerald-500 to-teal-700',
    desc: 'Unlock overseas job opportunities with expert work permit consultancy for skilled and unskilled workers across major countries.',
    features: ['Overseas job opportunities', 'Skilled & unskilled categories', 'Employer-based work permits', 'Complete documentation support', 'Dubai, Canada, Israel & more', 'Work and settle abroad'],
  },
];

export const WHY_CHOOSE = [
  { icon: '🛡️', title: '100% Genuine Guidance', desc: 'Honest and transparent visa consultancy with no false promises ever.' },
  { icon: '🔍', title: 'Transparent Process', desc: 'You know every step. No surprises, no hidden charges at any stage.' },
  { icon: '💳', title: 'Stage-wise Payment', desc: 'Pay as per the process stage. No heavy upfront payments required.' },
  { icon: '⚡', title: 'Fast & Reliable', desc: 'Quick processing with a team that values your precious time.' },
  { icon: '📝', title: 'Expert Documentation', desc: 'Specialists in SOP writing, document prep, and accurate filing.' },
  { icon: '🏆', title: 'High Success Rate', desc: 'Hundreds of approved visas across Canada, Australia, UK & more.' },
];

export const PROCESS = [
  { step: 1, icon: '💬', title: 'Free Consultation', desc: 'Talk to our expert consultants. We understand your goals and recommend the best visa pathway.' },
  { step: 2, icon: '📋', title: 'Profile Assessment', desc: 'We evaluate your profile, documents, and eligibility to create the strongest application strategy.' },
  { step: 3, icon: '📁', title: 'Documentation', desc: 'Our team prepares and verifies all required documents including SOP, cover letters and more.' },
  { step: 4, icon: '📤', title: 'Application Filing', desc: 'We file your visa application accurately and on time, meeting all embassy requirements.' },
  { step: 5, icon: '✅', title: 'Visa Approval', desc: 'Receive your visa and travel with confidence! We support you right until you board your flight.' },
];

export const TESTIMONIALS = [
  { name: 'Rajinder Singh', loc: 'Punjab, India', visa: 'Canada Work Permit 🇨🇦', rating: 5, text: 'Successmakerz helped me get my Canada work permit in just 6 weeks. The process was completely smooth, transparent, and professional. They handled everything from documentation to filing. Highly recommended!' },
  { name: 'Priya Mehta', loc: 'Ludhiana, India', visa: 'Australia Study Visa 🇦🇺', rating: 5, text: 'I got my Australia study visa with full guidance on SOP writing and documentation. The team is very knowledgeable. They are the best visa consultants I have come across. My visa got approved without any hassle!' },
  { name: 'Gurpreet Kaur', loc: 'Chandigarh, India', visa: 'Dubai Employment Visa 🇦🇪', rating: 5, text: 'The team at Successmakerz is very professional, genuine, and honest. I got my Dubai employment visa without any trouble. They are transparent about fees. No hidden charges — absolutely recommended!' },
];

export const FAQS = [
  { q: 'What documents are required for a tourist visa?', a: 'Requirements vary by country but typically include: valid passport (6+ months validity), recent passport photos, bank statement, travel itinerary, accommodation proof, and travel insurance. Contact  us for a free country-specific checklist.' },
  { q: 'How long does visa processing take?', a: 'Tourist visas typically take 5–15 working days. Study visas may take 4–8 weeks, and work permits can take 6–12 weeks. We recommend applying well in advance and ensure your application is complete to avoid delays.' },
  { q: 'Do you guarantee visa approval?', a: 'We provide genuine expert guidance with a high success rate. While no consultant can legally guarantee approval (final decision rests with the embassy), our thorough documentation and experienced team maximizes your approval chances.' },
  { q: 'What are your consultancy fees?', a: 'We follow a transparent stage-wise payment process. There are absolutely no hidden charges. Contact  us for a free consultation and detailed quote based on your destination and visa type.' },
  { q: 'Can I apply for a visa for my whole family?', a: 'Yes! We handle both individual and family visa applications for tourist, study, and work purposes. We provide complete documentation support for all family members.' },
  { q: 'Which countries do you provide visa services for?', a: 'We serve Canada, Australia, New Zealand, United Kingdom, Schengen Countries, Dubai (UAE), Russia, Israel, South Korea, and Japan — covering tourist visas, study visas, and work permits.' },
  { q: 'Do I need to visit your office in person?', a: 'While an in-person consultation is welcome, we also provide complete online visa consultancy services via WhatsApp, phone, or email. Most documentation can be handled digitally for your convenience.' },
];
