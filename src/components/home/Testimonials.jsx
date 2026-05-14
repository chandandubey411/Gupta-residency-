import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../data/testimonialsData';

/* ── Testimonials ────────────────────────────────────────── */
const Testimonials = () => {
  return (
    <section className="section-pad bg-dark relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-3">
        <span className="font-cormorant text-[20rem] font-bold text-gold/5 select-none">G</span>
      </div>

      <div className="container-luxury relative z-10">
        <SectionTitle
          tag="Guest Experiences"
          title='Voices of Our <span class="gold-text">Distinguished</span> Guests'
          subtitle="Every stay at Gupta Residency leaves a lasting impression. Here's what our guests say about their time with us."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Testimonial Card ────────────────────────────────────── */
const TestimonialCard = ({ testimonial: t }) => (
  <div className="glass-card p-6 md:p-8 h-full flex flex-col">
    {/* Quote Icon */}
    <Quote size={28} className="text-gold/40 mb-4 flex-shrink-0" />

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(t.rating)].map((_, i) => (
        <Star key={i} size={13} className="text-gold fill-gold" />
      ))}
    </div>

    {/* Review */}
    <p className="font-cormorant text-lg text-cream/80 italic leading-relaxed flex-1 mb-6">
      "{t.review}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-4 pt-4 border-t border-gold/10">
      <img
        src={t.avatar}
        alt={t.name}
        className="w-12 h-12 object-cover grayscale"
        loading="lazy"
      />
      <div>
        <p className="font-cormorant text-base font-semibold text-cream">{t.name}</p>
        <p className="font-dm text-[10px] text-gold/70 tracking-wide">{t.designation}</p>
        <p className="font-dm text-[10px] text-cream/35 mt-0.5">{t.country} · {t.date}</p>
      </div>
    </div>
  </div>
);

export default Testimonials;
