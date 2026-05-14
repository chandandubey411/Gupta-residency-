import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { HOTEL } from '../utils/constants';

/* ── Contact Page ────────────────────────────────────────── */
const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200)); // simulate send
    console.log('Contact form', data);
    setSubmitted(true);
    reset();
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=90" alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-10 text-center">
          <div className="luxury-tag justify-center mb-4">Reach Us</div>
          <h1 className="font-cormorant font-bold text-cream" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
            Get in <span className="gold-text">Touch</span>
          </h1>
        </motion.div>
      </section>

      <section className="section-pad bg-dark">
        <div className="container-luxury grid lg:grid-cols-5 gap-16">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-2">
            <SectionTitle tag="Contact Us" title="We're Here to <span class='gold-text'>Assist</span>" center={false}
              subtitle="Our dedicated team is available around the clock to help you plan your perfect stay." />

            <div className="mt-10 space-y-6">
              {[
                { icon: MapPin, label: 'Address', value: HOTEL.location },
                { icon: Phone, label: 'Phone', value: HOTEL.phone, href: `tel:${HOTEL.phone}` },
                { icon: Mail, label: 'Email', value: HOTEL.email, href: `mailto:${HOTEL.email}` },
                { icon: Clock, label: 'Hours', value: HOTEL.hours },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-4 border border-gold/10 hover:border-gold/25 transition-colors">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-dm text-[10px] tracking-widest uppercase text-gold mb-1">{label}</p>
                    {href ? (
                      <a href={href} className="font-dm text-sm text-cream/70 hover:text-gold transition-colors">{value}</a>
                    ) : (
                      <p className="font-dm text-sm text-cream/70">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-3">
            {submitted ? (
              <div className="glass-card border border-gold/20 p-10 flex flex-col items-center justify-center text-center h-full min-h-64">
                <div className="w-14 h-14 border border-gold flex items-center justify-center mb-6">
                  <Check size={24} className="text-gold" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-cream mb-3">Message Sent</h3>
                <p className="font-dm text-sm text-cream/55">Our concierge team will respond to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="glass-card border border-gold/15 p-8 space-y-6">
                <h3 className="font-cormorant text-2xl font-semibold text-cream mb-2">Send a Message</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Full Name *</label>
                    <input {...register('name', { required: true })} className="luxury-input" placeholder="Arjun Sharma" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">Required</p>}
                  </div>
                  <div>
                    <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Email *</label>
                    <input type="email" {...register('email', { required: true })} className="luxury-input" placeholder="arjun@example.com" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">Required</p>}
                  </div>
                  <div>
                    <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Phone</label>
                    <input type="tel" {...register('phone')} className="luxury-input" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Subject</label>
                    <select {...register('subject')} className="luxury-select w-full appearance-none">
                      <option>Reservation Enquiry</option>
                      <option>Event & Banquet</option>
                      <option>Spa & Wellness</option>
                      <option>Corporate Stays</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Message *</label>
                    <textarea {...register('message', { required: true })} rows={5} className="luxury-input resize-none" placeholder="How can we assist you?" />
                    {errors.message && <p className="text-red-400 text-xs mt-1">Required</p>}
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-gold gap-2">
                  {isSubmitting ? 'Sending...' : <>Send Message <Send size={16} /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224096.9!2d77.0999!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="420"
            style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.9)' }}
            allowFullScreen=""
            loading="lazy"
            title="Gupta Residency Location"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
