import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const NAV = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services', path: '/services',
    sub: [
      { label: '✈️ Tourist Visa', path: '/services/tourist' },
      { label: '🎓 Study Visa', path: '/services/study' },
      { label: '💼 Work Permit', path: '/services/work' },
    ]
  },
  { label: 'Countries', path: '/countries' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <Logo size={38} variant="color" />
          <div>
            <div className="font-black text-primary-900 text-lg leading-none" style={{ fontFamily: 'Merriweather, serif' }}>Successmakerz</div>
            <div className="text-xs text-gray-400 font-medium leading-none">Your Dream Our Mission</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map(item => (
            item.sub ? (
              <div key={item.label} className="relative" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${isActive(item.path) ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'}`}>
                  {item.label} <ChevronDown size={14} className={`transition-transform ${dropdown ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {dropdown && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 mt-1">
                      {item.sub.map(s => (
                        <Link key={s.path} to={s.path}
                          className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive(s.path) ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'}`}>
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={item.path} to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors ${isActive(item.path) ? 'text-primary-600 bg-primary-50' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'}`}>
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/apply" className="btn-primary text-sm py-2.5 px-6">Apply Now →</Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV.map(item => (
                <div key={item.label}>
                  <Link to={item.path}
                    className={`block px-4 py-3 rounded-xl font-bold text-sm transition-colors ${isActive(item.path) ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}>
                    {item.label}
                  </Link>
                  {item.sub && (
                    <div className="ml-4 flex flex-col gap-1 mt-1">
                      {item.sub.map(s => (
                        <Link key={s.path} to={s.path}
                          className={`block px-4 py-2 rounded-xl text-sm transition-colors ${isActive(s.path) ? 'bg-primary-50 text-primary-700' : 'text-gray-500 hover:bg-gray-50'}`}>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/apply" className="btn-primary mt-3 justify-center">Apply Now →</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
