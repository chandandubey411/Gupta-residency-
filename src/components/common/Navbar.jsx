import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { HOTEL, NAV_LINKS } from '../../utils/constants';

import Logo from './Logo';

/* ── Navbar ───────────────────────────────────────────────── */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMobileOpen(false), [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-xl border-b border-gold/10 py-3 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOTEL.phone}`}
              className="hidden md:flex items-center gap-2 text-cream/60 hover:text-gold transition-colors duration-300 text-sm font-dm"
            >
              <Phone size={14} className="text-gold" />
              {HOTEL.phone}
            </a>
            <Link to="/booking" className="hidden md:block btn-gold text-xs py-3 px-6">
              Book Now
            </Link>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-gold/30 text-cream hover:border-gold hover:text-gold transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-gold/10">
              <Logo onClick={() => setMobileOpen(false)} />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center border border-gold/30 text-cream"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block py-4 border-b border-white/5 font-cormorant text-2xl font-medium tracking-wide transition-colors duration-300 ${
                        isActive ? 'text-gold' : 'text-cream/80 hover:text-gold'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="p-6 border-t border-gold/10">
              <Link
                to="/booking"
                className="btn-gold w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Book Now
              </Link>
              <a
                href={`tel:${HOTEL.phone}`}
                className="flex items-center justify-center gap-2 mt-4 text-cream/50 text-sm font-dm"
              >
                <Phone size={14} className="text-gold" />
                {HOTEL.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
