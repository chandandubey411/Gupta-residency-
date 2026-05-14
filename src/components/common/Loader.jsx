import { motion } from 'framer-motion';

/* ── Loader — Cinematic Gold Luxury Loader ────────────────── */
const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[999] bg-dark flex flex-col items-center justify-center"
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center mb-12"
      >
        <span className="font-cormorant text-5xl font-bold gold-text tracking-[0.2em]">
          GUPTA
        </span>
        <span className="font-dm text-[10px] tracking-[0.6em] uppercase text-gold/60 font-medium mt-1">
          RESIDENCY
        </span>
        <div className="gold-divider mt-4 mx-auto" />
      </motion.div>

      {/* Gold Progress Bar */}
      <motion.div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 bg-gold-gradient"
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-cormorant text-sm text-cream/40 italic mt-6 tracking-widest"
      >
        Where Luxury Meets Legacy
      </motion.p>
    </motion.div>
  );
};

export default Loader;
