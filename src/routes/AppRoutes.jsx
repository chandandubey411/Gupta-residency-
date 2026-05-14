import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy-loaded pages
const Home        = lazy(() => import('../pages/Home'));
const About       = lazy(() => import('../pages/About'));
const Rooms       = lazy(() => import('../pages/Rooms'));
const RoomSingle  = lazy(() => import('../pages/RoomSingle'));
const Services    = lazy(() => import('../pages/Services'));
const Gallery     = lazy(() => import('../pages/Gallery'));
const Booking     = lazy(() => import('../pages/Booking'));
const Testimonials= lazy(() => import('../pages/Testimonials'));
const Contact     = lazy(() => import('../pages/Contact'));
const NotFound    = lazy(() => import('../pages/NotFound'));

/* ── Page Loading Fallback ───────────────────────────────── */
const PageLoader = () => (
  <div className="min-h-screen bg-dark flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border border-gold/30 border-t-gold animate-spin" />
      <span className="font-dm text-xs tracking-widest text-cream/40 uppercase">Loading</span>
    </div>
  </div>
);

/* ── App Routes ──────────────────────────────────────────── */
const AppRoutes = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomSingle />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;
