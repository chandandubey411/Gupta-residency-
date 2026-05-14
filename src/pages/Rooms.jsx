import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Maximize2, Users, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import CTASection from '../components/home/CTASection';
import { rooms, ROOM_CATEGORIES } from '../data/roomsData';

/* ── Rooms Page ──────────────────────────────────────────── */
const Rooms = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? rooms : rooms.filter((r) => r.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=90" alt="Rooms" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/70" />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-10 text-center">
          <div className="luxury-tag justify-center mb-4">Accommodations</div>
          <h1 className="font-cormorant font-bold text-cream" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Rooms &amp; <span className="gold-text">Suites</span>
          </h1>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-dark-100 border-b border-gold/10">
        <div className="container-luxury flex flex-wrap gap-3 justify-center">
          {ROOM_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 font-dm text-xs tracking-widest uppercase transition-all duration-300 border ${
                active === cat ? 'bg-gold text-dark border-gold' : 'border-gold/25 text-cream/60 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-pad bg-dark">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((room, i) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <RoomCard room={room} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection />
    </>
  );
};

/* ── Room Card ───────────────────────────────────────────── */
const RoomCard = ({ room }) => (
  <Link to={`/rooms/${room.slug}`} className="group block">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img src={room.thumbnail} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div className="img-overlay" />
      <div className="absolute top-4 left-4 px-3 py-1 bg-gold/90">
        <span className="font-dm text-[10px] tracking-widest uppercase text-dark font-semibold">{room.category}</span>
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-dark/60 backdrop-blur-sm border border-gold/20">
        <Star size={10} className="text-gold fill-gold" />
        <span className="font-dm text-xs text-cream font-medium">{room.rating}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-cormorant text-xl font-semibold text-cream group-hover:text-gold transition-colors mb-1">{room.name}</h3>
        <div className="flex items-center gap-4 text-cream/60 text-xs font-dm">
          <span className="flex items-center gap-1"><Maximize2 size={10} className="text-gold" />{room.size} m²</span>
          <span className="flex items-center gap-1"><Users size={10} className="text-gold" />Up to {room.capacity}</span>
        </div>
      </div>
    </div>
    <div className="p-5 border border-gold/10 border-t-0 bg-dark-200 flex items-center justify-between">
      <div>
        <span className="font-dm text-[10px] tracking-widest text-cream/40 uppercase">From</span>
        <div className="flex items-baseline gap-1">
          <span className="font-cormorant text-2xl font-semibold text-gold">₹{room.price.toLocaleString()}</span>
          <span className="font-dm text-xs text-cream/40">/night</span>
        </div>
      </div>
      <span className="font-dm text-xs text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
        View Room <ArrowRight size={14} />
      </span>
    </div>
  </Link>
);

export default Rooms;
