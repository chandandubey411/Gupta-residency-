import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Star, Users, Maximize2, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { rooms } from '../../data/roomsData';

/* ── Featured Rooms Slider ───────────────────────────────── */
const FeaturedRooms = () => {
  const featured = rooms.filter((r) => r.popular);

  return (
    <section className="section-pad bg-dark-100">
      <div className="container-luxury">
        <SectionTitle
          tag="Our Finest Accommodations"
          title='Rooms &amp; <span class="gold-text">Suites</span>'
          subtitle="Each room at Gupta Residency is a masterpiece of design, combining traditional Indian artistry with contemporary luxury to create an incomparable sanctuary."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {featured.map((room) => (
              <SwiperSlide key={room.id}>
                <RoomCard room={room} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          <Link to="/rooms" className="btn-ghost">
            View All Rooms
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Room Card ───────────────────────────────────────────── */
const RoomCard = ({ room }) => (
  <Link to={`/rooms/${room.slug}`} className="group block">
    <div className="relative overflow-hidden aspect-[4/3]">
      <img
        src={room.thumbnail}
        alt={room.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="img-overlay" />

      {/* Category Badge */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-gold/90 backdrop-blur-sm">
        <span className="font-dm text-[10px] tracking-[0.25em] uppercase text-dark font-semibold">
          {room.category}
        </span>
      </div>

      {/* Rating */}
      <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-dark/60 backdrop-blur-sm border border-gold/20">
        <Star size={10} className="text-gold fill-gold" />
        <span className="font-dm text-xs text-cream font-medium">{room.rating}</span>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-cormorant text-xl font-semibold text-cream mb-1 group-hover:text-gold transition-colors duration-300">
          {room.name}
        </h3>
        <div className="flex items-center gap-4 text-cream/60 text-xs font-dm">
          <span className="flex items-center gap-1">
            <Maximize2 size={10} className="text-gold" />
            {room.size} m²
          </span>
          <span className="flex items-center gap-1">
            <Users size={10} className="text-gold" />
            Up to {room.capacity}
          </span>
        </div>
      </div>
    </div>

    {/* Price */}
    <div className="p-4 border border-gold/10 border-t-0 bg-dark-200 flex items-center justify-between">
      <div>
        <span className="font-dm text-[10px] tracking-widest text-cream/40 uppercase">From</span>
        <div className="flex items-baseline gap-1">
          <span className="font-cormorant text-2xl font-semibold text-gold">
            ₹{room.price.toLocaleString()}
          </span>
          <span className="font-dm text-xs text-cream/40">/night</span>
        </div>
      </div>
      <span className="font-dm text-xs text-gold hover:text-gold-300 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
        Book Now <ArrowRight size={14} />
      </span>
    </div>
  </Link>
);

export default FeaturedRooms;
