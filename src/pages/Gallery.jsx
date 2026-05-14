import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Filter } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { galleryImages, GALLERY_CATEGORIES } from '../data/galleryData';

/* ── Gallery Page ────────────────────────────────────────── */
const Gallery = () => {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'All' ? galleryImages : galleryImages.filter((img) => img.category === active);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=90" alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/75" />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-10 text-center">
          <div className="luxury-tag justify-center mb-4">Visual Journey</div>
          <h1 className="font-cormorant font-bold text-cream" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
            Our <span className="gold-text">Gallery</span>
          </h1>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-dark-100 border-b border-gold/10">
        <div className="container-luxury flex flex-wrap gap-3 justify-center">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 font-dm text-xs tracking-widest uppercase transition-all duration-300 border ${
                active === cat ? 'bg-gold text-dark border-gold' : 'border-gold/25 text-cream/60 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-pad bg-dark">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative overflow-hidden break-inside-avoid cursor-pointer mb-3"
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.thumb}
                    alt={img.caption}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/50 transition-all duration-400" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 border border-gold flex items-center justify-center">
                      <ZoomIn size={16} className="text-gold" />
                    </div>
                    <p className="font-cormorant text-cream text-sm mt-3 tracking-wide">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-dark/97 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.88 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.88 }}
              transition={{ duration: 0.35 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.url} alt={lightbox.caption} className="w-full max-h-[85vh] object-contain" />
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-cormorant text-xl text-cream">{lightbox.caption}</p>
                  <p className="font-dm text-xs text-gold tracking-widest uppercase">{lightbox.category}</p>
                </div>
                <button onClick={() => setLightbox(null)} className="w-10 h-10 border border-gold/30 flex items-center justify-center text-cream hover:text-gold transition-colors">
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
