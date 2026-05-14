import { motion } from 'framer-motion';

/* ── SectionTitle — Animated luxury section heading ──────── */
const SectionTitle = ({ tag, title, subtitle, center = true, light = false, className = '' }) => {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`luxury-tag mb-4 ${center ? 'justify-center' : ''}`}
        >
          {tag}
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className={`font-cormorant font-semibold text-headline leading-tight mb-4 ${
            light ? 'text-cream' : 'text-cream'
          }`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`font-dm text-base max-w-2xl leading-relaxed ${
            center ? 'mx-auto' : ''
          } ${light ? 'text-cream/60' : 'text-cream/50'}`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Gold Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`gold-divider mt-6 ${center ? 'mx-auto' : ''}`}
        style={{ transformOrigin: center ? 'center' : 'left' }}
      />
    </div>
  );
};

export default SectionTitle;
