import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Users, Heart, Globe, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';

const TIMELINE = [
  { year: '1987', title: 'Our Beginning', desc: 'Gupta Residency opens its doors in Connaught Place, New Delhi, with a vision to bring authentic Indian luxury hospitality to the world.' },
  { year: '1995', title: 'First Recognition', desc: 'Awarded 5-star status by the Ministry of Tourism. Our Amrit Restaurant received its first national culinary excellence award.' },
  { year: '2002', title: 'Royal Expansion', desc: 'Construction of the legendary Maharaja Suite wing and the award-winning Royal Spa & Wellness Centre, doubling the hotel\'s footprint.' },
  { year: '2010', title: 'Global Acclaim', desc: 'Featured in Condé Nast Traveller\'s list of top 10 luxury hotels in Asia. Partnership established with The Leading Hotels of the World.' },
  { year: '2018', title: 'Sustainability Pledge', desc: 'Gupta Residency becomes Delhi\'s first carbon-neutral luxury hotel. Solar-powered operations and zero-waste kitchen launched.' },
  { year: '2024', title: 'New Heights', desc: 'Completion of the Presidential Penthouse with its legendary private plunge pool. 15,000th guest celebrated with a surprise gala.' },
];

const TEAM = [
  { name: 'Rajendra Gupta', role: 'Founder & Chairman', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { name: 'Priya Gupta', role: 'Managing Director', img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80' },
  { name: 'Arjun Kapoor', role: 'Executive Chef', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Neha Sharma', role: 'Head of Guest Relations', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
];

/* ── About Page ──────────────────────────────────────────── */
const About = () => (
  <>
    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=90" alt="About" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
      </div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-10 text-center">
        <div className="luxury-tag justify-center mb-4">Our Heritage</div>
        <h1 className="font-cormorant font-bold text-cream leading-tight" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
          About <span className="gold-text">Gupta Residency</span>
        </h1>
      </motion.div>
    </section>

    {/* Story */}
    <section className="section-pad bg-dark">
      <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <SectionTitle tag="Our Story" title='A Legacy Born from <span class="gold-text">Passion</span>' center={false}
            subtitle="What began as Rajendra Gupta's personal vision in 1987 has blossomed into India's most celebrated luxury hotel. Our story is one of passion, craftsmanship, and an unwavering commitment to delivering the extraordinary." />
          <p className="font-dm text-sm text-cream/50 mt-6 leading-relaxed">
            At Gupta Residency, luxury is not just a standard—it is a way of life. Each detail, from hand-crafted Rajasthani furniture to bespoke perfume diffused through our corridors, speaks of a philosophy that places the guest's experience above all else. We weave Indian heritage with global standards, creating a stay that is deeply personal and profoundly unforgettable.
          </p>
          <Link to="/rooms" className="btn-gold mt-8 inline-flex">
            Explore Our Rooms <ArrowRight size={16} />
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="relative">
          <div className="grid grid-cols-2 gap-3">
            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" alt="" className="w-full aspect-square object-cover" />
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="" className="w-full aspect-square object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80" alt="" className="w-full aspect-square object-cover -mt-8" />
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80" alt="" className="w-full aspect-square object-cover" />
          </div>
        </motion.div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-pad bg-dark-100">
      <div className="container-luxury">
        <SectionTitle tag="Our Journey" title='Milestones of <span class="gold-text">Excellence</span>' subtitle="Three and a half decades of creating extraordinary memories." />
        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/15 hidden md:block" />
          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="font-cormorant text-2xl font-semibold text-cream mb-2">{item.title}</h3>
                  <p className="font-dm text-sm text-cream/50 leading-relaxed">{item.desc}</p>
                </div>
                <div className="flex-shrink-0 w-16 h-16 border border-gold/40 bg-dark flex items-center justify-center relative">
                  <span className="font-cormorant text-sm font-bold gold-text">{item.year}</span>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <StatsSection />

    {/* Team */}
    <section className="section-pad bg-dark-100">
      <div className="container-luxury">
        <SectionTitle tag="Our People" title='The Faces Behind <span class="gold-text">Your Experience</span>' subtitle="Our team of hospitality experts is dedicated to making every moment at Gupta Residency exceptional." />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {TEAM.map((member, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group">
              <div className="relative overflow-hidden aspect-[3/4]">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-cormorant text-lg font-semibold text-cream">{member.name}</p>
                  <p className="font-dm text-[10px] tracking-widest text-gold uppercase">{member.role}</p>
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

export default About;
