import { motion } from 'framer-motion';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import CTASection from '../components/home/CTASection';
import { services } from '../data/servicesData';
import { Waves, Utensils, Dumbbell, Sparkles, Music, Briefcase, Wine, Car } from 'lucide-react';

const ICONS = { Waves, Utensils, Dumbbell, Sparkles, Music, Briefcase, Wine, Car };

/* ── Services Page ───────────────────────────────────────── */
const Services = () => (
  <>
    {/* Hero */}
    <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=90" alt="Services" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
      </div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-10 text-center">
        <div className="luxury-tag justify-center mb-4">Hotel Amenities</div>
        <h1 className="font-cormorant font-bold text-cream" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
          World-Class <span className="gold-text">Services</span>
        </h1>
      </motion.div>
    </section>

    {/* Services Grid */}
    <section className="section-pad bg-dark">
      <div className="container-luxury">
        <SectionTitle tag="Our Offerings" title='Every Experience, <span class="gold-text">Perfected</span>'
          subtitle="From revitalizing spa rituals to exquisite culinary journeys, every service at Gupta Residency is crafted with singular dedication to excellence." />

        <div className="mt-16 space-y-24">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden aspect-[4/3] ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                  {/* Gold corner */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/60" />
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/60" />
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <div className="luxury-tag mb-3">{service.hours}</div>
                  <h2 className="font-cormorant text-3xl md:text-4xl font-semibold text-cream mb-2">{service.name}</h2>
                  <p className="font-cormorant italic text-xl text-cream/50 mb-4">{service.tagline}</p>
                  <p className="font-dm text-sm text-cream/55 leading-relaxed mb-6">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Check size={14} className="text-gold flex-shrink-0" />
                        <span className="font-dm text-xs text-cream/60">{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-cream/40 font-dm text-xs mb-6">
                    <Clock size={14} className="text-gold" />
                    Open: {service.hours}
                  </div>

                  <Link to="/booking" className="btn-ghost">
                    Enquire Now <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default Services;
