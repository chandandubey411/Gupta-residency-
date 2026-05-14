import HeroSection from '../components/home/HeroSection';
import BookingBar from '../components/home/BookingBar';
import FeaturedRooms from '../components/home/FeaturedRooms';
import LuxuryExperience from '../components/home/LuxuryExperience';
import ServicesSection from '../components/home/ServicesSection';
import StatsSection from '../components/home/StatsSection';
import Testimonials from '../components/home/Testimonials';
import GallerySection from '../components/home/GallerySection';
import CTASection from '../components/home/CTASection';

/* ── Home Page ───────────────────────────────────────────── */
const Home = () => (
  <>
    <title>Gupta Residency | 5-Star Luxury Hotel New Delhi</title>
    <HeroSection />
    <BookingBar />
    <FeaturedRooms />
    <LuxuryExperience />
    <StatsSection />
    <ServicesSection />
    <Testimonials />
    <GallerySection />
    <CTASection />
  </>
);

export default Home;
