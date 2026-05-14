import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Star, Maximize2, Users, BedDouble, Eye, Check, ArrowLeft, Calendar } from 'lucide-react';
import { rooms } from '../data/roomsData';
import CTASection from '../components/home/CTASection';

/* ── Room Single Page ────────────────────────────────────── */
const RoomSingle = () => {
  const { slug } = useParams();
  const room = rooms.find((r) => r.slug === slug);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [bookingData, setBookingData] = useState({
    checkIn: today,
    checkOut: tomorrow,
    guests: '2',
  });

  if (!room) return <Navigate to="/rooms" replace />;

  const related = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <>
      {/* Image Gallery */}
      <section className="pt-24 bg-dark">
        <div className="container-luxury">
          <Link to="/rooms" className="inline-flex items-center gap-2 font-dm text-sm text-cream/50 hover:text-gold transition-colors mb-8">
            <ArrowLeft size={16} /> Back to Rooms
          </Link>

          <div className="grid lg:grid-cols-5 gap-4 h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="lg:col-span-4 h-full overflow-hidden">
              <Swiper modules={[Navigation, Thumbs]} navigation thumbs={{ swiper: thumbsSwiper }} className="w-full h-full">
                {room.images.map((img, i) => (
                  <SwiperSlide key={i} className="bg-dark-100">
                    <img src={img} alt={room.name} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="lg:col-span-1 h-full hidden lg:block overflow-hidden">
              <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                direction="vertical"
                spaceBetween={12}
                slidesPerView="auto"
                className="h-full"
              >
                {room.images.map((img, i) => (
                  <SwiperSlide key={i} style={{ height: 'auto' }}>
                    <div className="aspect-[4/3] w-full overflow-hidden border-2 border-transparent transition-all cursor-pointer opacity-50 hover:opacity-100 [.swiper-slide-thumb-active_&]:opacity-100 [.swiper-slide-thumb-active_&]:border-gold">
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-pad bg-dark">
        <div className="container-luxury grid lg:grid-cols-3 gap-12">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="luxury-tag mb-2">{room.category}</span>
                  <h1 className="font-cormorant text-4xl md:text-5xl font-bold text-cream">{room.name}</h1>
                  <p className="font-cormorant italic text-xl text-cream/50 mt-1">{room.tagline}</p>
                </div>
                <div className="flex items-center gap-1 border border-gold/25 px-3 py-1.5">
                  <Star size={14} className="text-gold fill-gold" />
                  <span className="font-dm font-semibold text-cream">{room.rating}</span>
                  <span className="font-dm text-xs text-cream/40">({room.reviews})</span>
                </div>
              </div>

              {/* Quick specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border border-gold/15 mb-8">
                {[
                  { icon: Maximize2, label: 'Size', value: `${room.size} m²` },
                  { icon: Users, label: 'Guests', value: `Up to ${room.capacity}` },
                  { icon: BedDouble, label: 'Beds', value: room.beds },
                  { icon: Eye, label: 'View', value: room.view },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center">
                    <Icon size={18} className="text-gold mx-auto mb-2" />
                    <p className="font-dm text-[10px] text-cream/40 uppercase tracking-wider">{label}</p>
                    <p className="font-dm text-sm text-cream font-medium">{value}</p>
                  </div>
                ))}
              </div>

              <p className="font-dm text-sm text-cream/60 leading-relaxed mb-8">{room.description}</p>

              {/* Amenities */}
              <h3 className="font-cormorant text-2xl font-semibold text-cream mb-4">Amenities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {room.amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2">
                    <Check size={14} className="text-gold flex-shrink-0" />
                    <span className="font-dm text-xs text-cream/60">{a}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <h3 className="font-cormorant text-2xl font-semibold text-cream mt-8 mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {room.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-3 p-3 border border-gold/15">
                    <Star size={12} className="text-gold fill-gold flex-shrink-0" />
                    <span className="font-dm text-sm text-cream/70">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Booking Widget */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="sticky top-28 glass-card p-6 border border-gold/20"
            >
              <p className="font-dm text-[10px] tracking-[0.3em] uppercase text-gold mb-1">Starting From</p>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-cormorant text-4xl font-bold gold-text">₹{room.price.toLocaleString()}</span>
                <span className="font-dm text-sm text-cream/40">/night</span>
              </div>
              {room.originalPrice && (
                <p className="font-dm text-xs text-cream/30 line-through mb-6">₹{room.originalPrice.toLocaleString()}/night</p>
              )}

              <div className="space-y-4 mb-6">
                <div>
                  <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Check-In</label>
                  <input type="date" value={bookingData.checkIn} onChange={(e) => setBookingData({...bookingData, checkIn: e.target.value})} className="luxury-input text-sm" min={today} />
                </div>
                <div>
                  <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Check-Out</label>
                  <input type="date" value={bookingData.checkOut} onChange={(e) => setBookingData({...bookingData, checkOut: e.target.value})} className="luxury-input text-sm" min={bookingData.checkIn || today} />
                </div>
                <div>
                  <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Guests</label>
                  <select value={bookingData.guests} onChange={(e) => setBookingData({...bookingData, guests: e.target.value})} className="luxury-select text-sm w-full appearance-none">
                    {[...Array(room.capacity)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Link to="/booking" state={{ room: room.name, ...bookingData }} className="btn-gold w-full justify-center gap-2">
                <Calendar size={16} />
                Reserve This Room
              </Link>
              <p className="font-dm text-[10px] text-center text-cream/30 mt-3">Free cancellation · No prepayment needed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Similar Rooms */}
      <section className="section-pad bg-dark-100">
        <div className="container-luxury">
          <h2 className="font-cormorant text-3xl font-semibold text-cream mb-10">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.id} to={`/rooms/${r.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img src={r.thumbnail} alt={r.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="img-overlay" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-cormorant text-lg font-semibold text-cream group-hover:text-gold transition-colors">{r.name}</h3>
                    <p className="font-cormorant text-gold text-base">₹{r.price.toLocaleString()}/night</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default RoomSingle;
