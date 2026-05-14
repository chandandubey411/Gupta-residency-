import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

/* ── 404 Not Found ───────────────────────────────────────── */
const NotFound = () => (
  <div className="min-h-screen bg-dark flex items-center justify-center relative overflow-hidden">
    {/* Background watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <span className="font-cormorant text-[25rem] font-bold text-white/3 select-none leading-none">404</span>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="relative z-10 text-center px-4"
    >
      <div className="luxury-tag justify-center mb-6">Page Not Found</div>
      <h1 className="font-cormorant font-bold text-cream mb-4" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
        <span className="gold-text">404</span>
      </h1>
      <p className="font-cormorant italic text-2xl text-cream/60 mb-4">
        Lost in Luxury
      </p>
      <p className="font-dm text-sm text-cream/40 mb-10 max-w-md mx-auto leading-relaxed">
        The page you are looking for seems to have checked out. Allow us to guide you back to an extraordinary experience.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/" className="btn-gold gap-2">
          <Home size={16} />
          Back to Home
        </Link>
        <Link to="/rooms" className="btn-ghost gap-2">
          <ArrowLeft size={16} />
          View Rooms
        </Link>
      </div>
    </motion.div>
  </div>
);

export default NotFound;
