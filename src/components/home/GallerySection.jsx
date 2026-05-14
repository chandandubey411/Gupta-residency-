import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { Link } from 'react-router-dom';
import { galleryImages } from '../../data/galleryData';

/* ── Gallery Preview (Home) ──────────────────────────────── */
const GallerySection = () => {
  const [lightbox, setLightbox] = useState(null);
  const preview = galleryImages.slice(0, 8);

  return (
    <section className="section-pad bg-dark-100 overflow-hidden">
      <div className="container-luxury">
        <SectionTitle
          tag="Hotel Gallery"
          title='Captured <span class="gold-text">Moments</span> of Luxury'
          subtitle="A visual journey through the timeless elegance of Gupta Residency."
        />

        {/* Masonry-style grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-16"
        >
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden cursor-pointer ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              } ${i === 5 ? 'col-span-2' : ''}`}
              style={{ aspectRatio: i === 0 ? '1/1' : i === 5 ? '2/1' : '1/1' }}
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.thumb}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-400" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 border border-gold flex items-center justify-center">
                  <ZoomIn size={16} className="text-gold" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-dm text-xs text-cream/80">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-10"
        >
          <Link to="/gallery" className="btn-ghost">
            View Full Gallery
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.url} alt={lightbox.caption} className="w-full max-h-[80vh] object-contain" />
              <p className="mt-4 font-cormorant text-xl text-cream text-center">{lightbox.caption}</p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 w-10 h-10 border border-gold/30 flex items-center justify-center text-cream hover:text-gold transition-colors"
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
