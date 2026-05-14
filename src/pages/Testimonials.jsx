import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import CTASection from '../components/home/CTASection';
import { testimonials } from '../data/testimonialsData';

/* ── Testimonials Page ───────────────────────────────────── */
const Testimonials = () => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=90" alt="Testimonials" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/75" />
      </div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-10 text-center">
        <div className="luxury-tag justify-center mb-4">Guest Stories</div>
        <h1 className="font-cormorant font-bold text-cream" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
          What Our <span className="gold-text">Guests</span> Say
        </h1>
      </motion.div>
    </section>

    {/* Summary Stats */}
    <section className="py-12 bg-dark-100 border-b border-gold/10">
      <div className="container-luxury grid grid-cols-3 gap-6 text-center">
        {[
          { value: '4.9/5', label: 'Average Rating' },
          { value: '1,284+', label: 'Reviews' },
          { value: '98%', label: 'Would Recommend' },
        ].map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <p className="font-cormorant text-3xl font-bold gold-text">{s.value}</p>
            <p className="font-dm text-xs text-cream/50 mt-1 tracking-wide">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Testimonials Grid */}
    <section className="section-pad bg-dark">
      <div className="container-luxury">
        <SectionTitle tag="Verified Reviews" title='Distinguished <span class="gold-text">Guest Experiences</span>'
          subtitle="Every testimonial represents a story of exceptional hospitality and memories that last a lifetime." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((t, i) => (
            <motion.div key={t.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card border border-gold/10 p-6 md:p-8 flex flex-col"
            >
              <Quote size={28} className="text-gold/40 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={13} className="text-gold fill-gold" />)}
              </div>
              <p className="font-cormorant text-lg text-cream/80 italic leading-relaxed flex-1 mb-6">"{t.review}"</p>
              <div className="flex items-center gap-4 pt-4 border-t border-gold/10">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 object-cover grayscale" loading="lazy" />
                <div>
                  <p className="font-cormorant text-base font-semibold text-cream">{t.name}</p>
                  <p className="font-dm text-[10px] text-gold/70 tracking-wide">{t.designation}</p>
                  <p className="font-dm text-[10px] text-cream/35 mt-0.5">{t.country} · {t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default Testimonials;
