import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { HOTEL, NAV_LINKS } from '../../utils/constants';

// Social icons SVG components
import Logo from './Logo';

const Instagram = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const Facebook = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const Twitter = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const Youtube = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>;

/* ── Footer ───────────────────────────────────────────────── */
const Footer = () => {
  return (
    <footer className="bg-dark-100 border-t border-gold/10">
      {/* Newsletter Strip */}
      <div className="border-b border-gold/10">
        <div className="container-luxury py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="luxury-tag mb-2">Exclusive Offers</p>
            <h3 className="font-cormorant text-2xl font-semibold text-cream">
              Join Our Inner Circle
            </h3>
          </div>
          <form
            className="flex w-full md:w-auto gap-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 bg-dark-200 border border-gold/20 px-5 py-3.5 text-cream/70 font-dm text-sm focus:outline-none focus:border-gold transition-colors duration-300 placeholder-white/25"
            />
            <button
              type="submit"
              className="btn-gold py-3.5 px-6 gap-0"
              aria-label="Subscribe"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-8">
              <Logo />
            </div>
            <p className="font-dm text-sm text-cream/50 leading-relaxed mb-6">
              A legacy of Indian hospitality since 1987. Where timeless elegance meets modern luxury in the heart of New Delhi.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: HOTEL.social.instagram },
                { icon: Facebook, href: HOTEL.social.facebook },
                { icon: Twitter, href: HOTEL.social.twitter },
                { icon: Youtube, href: HOTEL.social.youtube },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-gold/20 flex items-center justify-center text-cream/50 hover:border-gold hover:text-gold transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-cream mb-6 tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-dm text-sm text-cream/50 hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/booking"
                  className="font-dm text-sm text-gold hover:text-gold-300 transition-colors duration-300 tracking-wide"
                >
                  Book Now →
                </Link>
              </li>
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-cream mb-6 tracking-wider uppercase">
              Experiences
            </h4>
            <ul className="space-y-3">
              {['Royal Spa & Wellness', 'Amrit Fine Dining', 'Infinity Pool', 'Grand Ballroom', 'Pinnacle Fitness', 'The Cellar Bar', 'Concierge Services'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="font-dm text-sm text-cream/50 hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-cream mb-6 tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-dm text-sm text-cream/50 leading-relaxed">
                  {HOTEL.location}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${HOTEL.phone}`}
                  className="flex items-center gap-3 text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  <Phone size={15} className="text-gold flex-shrink-0" />
                  <span className="font-dm text-sm">{HOTEL.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${HOTEL.email}`}
                  className="flex items-center gap-3 text-cream/50 hover:text-gold transition-colors duration-300"
                >
                  <Mail size={15} className="text-gold flex-shrink-0" />
                  <span className="font-dm text-sm">{HOTEL.email}</span>
                </a>
              </li>
            </ul>

            <div className="mt-8 p-4 border border-gold/15 bg-gold/5">
              <p className="font-cormorant text-sm text-gold font-medium mb-1">Reservations</p>
              <p className="font-dm text-xs text-cream/50">{HOTEL.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="container-luxury py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-dm text-xs text-cream/30">
            © {new Date().getFullYear()} Gupta Residency. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="font-dm text-xs text-cream/30 hover:text-gold/60 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
