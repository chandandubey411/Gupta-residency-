import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { services } from '../../data/servicesData';
import { Waves, Utensils, Dumbbell, Sparkles, Music, Briefcase, Wine, Car } from 'lucide-react';

const ICONS = { Waves, Utensils, Dumbbell, Sparkles, Music, Briefcase, Wine, Car };

/* ── Services Section ────────────────────────────────────── */
const ServicesSection = () => {
  return (
    <section className="section-pad bg-dark-100">
      <div className="container-luxury">
        <SectionTitle
          tag="Hotel Amenities"
          title='World-Class <span class="gold-text">Services</span>'
          subtitle="From award-winning spa treatments to Michelin-starred cuisine, every experience at Gupta Residency is crafted to perfection."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {services.slice(0, 8).map((service, i) => {
            const Icon = ICONS[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ServiceCard service={service} Icon={Icon} />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-ghost">
            All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Service Card ────────────────────────────────────────── */
const ServiceCard = ({ service, Icon }) => (
  <Link to="/services" className="group block">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

      {/* Icon */}
      <div className="absolute top-4 left-4 w-10 h-10 border border-gold/30 bg-dark/50 backdrop-blur-sm flex items-center justify-center">
        <Icon size={18} className="text-gold" />
      </div>
    </div>

    <div className="p-4 border border-gold/10 border-t-0 bg-dark-200 group-hover:border-gold/25 transition-colors duration-300">
      <h3 className="font-cormorant text-lg font-semibold text-cream group-hover:text-gold transition-colors duration-300 mb-1">
        {service.name}
      </h3>
      <div className="flex items-center gap-1 text-gold/70">
        <Clock size={10} />
        <span className="font-dm text-[10px] tracking-wide">{service.hours}</span>
      </div>
    </div>
  </Link>
);

export default ServicesSection;
