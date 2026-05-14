import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';

const FEATURES = [
  'Heritage architecture with modern luxury',
  'Michelin-starred dining experience',
  'Award-winning Royal Spa & Wellness',
  'Rooftop infinity pool with city views',
  'Personalised 24/7 butler service',
  'Exclusive cultural heritage experiences',
];

/* ── Luxury Experience ───────────────────────────────────── */
const LuxuryExperience = () => {
  return (
    <section className="section-pad bg-dark overflow-hidden">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=85"
                alt="Gupta Residency Luxury"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -right-8 bottom-12 glass-card p-6 hidden md:block"
            >
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-gold mb-1">Since</p>
              <p className="font-cormorant text-5xl font-bold text-cream leading-none">1987</p>
              <p className="font-dm text-xs text-cream/50 mt-1">Years of Excellence</p>
              <div className="w-8 h-px bg-gold mt-3" />
              <p className="font-dm text-xs text-cream/60 mt-3">Trusted by 15,000+<br />Guests Worldwide</p>
            </motion.div>

            {/* Gold corner accent */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-gold/40 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionTitle
              tag="Why Choose Us"
              title='A Legacy of <span class="gold-text">Unmatched</span> Hospitality'
              subtitle="For over three decades, Gupta Residency has set the gold standard of luxury hospitality in India — combining heritage, culture, and world-class service."
              center={false}
            />

            <ul className="mt-10 space-y-4">
              {FEATURES.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-dm text-sm text-cream/70 leading-relaxed">{feat}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <Link to="/about" className="btn-gold">
                Our Story
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperience;
