import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* ── CTA Section ─────────────────────────────────────────── */
const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&q=85"
          alt="Luxury Hotel Room"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/90" />
      </div>

      {/* Gold border frame */}
      <div className="absolute inset-8 border border-gold/15 pointer-events-none hidden lg:block" />

      <div className="container-luxury relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="luxury-tag justify-center mb-6">Experience Perfection</div>

          <h2
            className="font-cormorant font-semibold text-cream leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Begin Your Journey of <br />
            <span className="gold-text">Unparalleled Luxury</span>
          </h2>

          <p className="font-dm text-base text-cream/55 max-w-xl mx-auto mb-10 leading-relaxed">
            Reserve your preferred suite and allow us to curate an experience that exceeds every expectation. Your extraordinary stay at Gupta Residency awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-gold">
              Book Your Stay
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-ghost">
              Contact Concierge
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
