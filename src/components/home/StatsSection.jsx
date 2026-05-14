import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { STATS } from '../../utils/constants';

/* ── Counter Component ───────────────────────────────────── */
function Counter({ end, duration = 2.5, decimals = 0, suffix = '' }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Number(latest).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
  });

  useEffect(() => {
    const controls = animate(count, end, { duration, ease: 'easeOut' });
    return () => controls.stop();
  }, [count, end, duration]);

  return <motion.span>{rounded}</motion.span>;
}

/* ── Stats Section ───────────────────────────────────────── */
const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-dark relative overflow-hidden">
      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-luxury">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gold/15">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center px-6"
            >
              <div className="font-cormorant font-bold text-5xl md:text-6xl gold-text leading-none">
                {inView ? (
                  <Counter
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                  />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <p className="font-dm text-sm text-cream/50 mt-3 tracking-wide">{stat.label}</p>
              <div className="gold-divider mx-auto mt-4" style={{ width: 32 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
