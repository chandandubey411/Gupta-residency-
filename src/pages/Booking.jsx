import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { Calendar, Users, BedDouble, CreditCard, Check, Info } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { rooms } from '../data/roomsData';

/* ── Booking Page ────────────────────────────────────────── */
const Booking = () => {
  const location = useLocation();
  const prefill = location.state || {};
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(prefill.room || '');

  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      checkIn: prefill.checkIn || today,
      checkOut: prefill.checkOut || tomorrow,
      guests: prefill.guests || '2',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      requests: '',
    },
  });

  const onSubmit = (data) => {
    console.log('Booking submitted', data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
          className="text-center p-12 glass-card border border-gold/20 max-w-md"
        >
          <div className="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-gold" />
          </div>
          <h2 className="font-cormorant text-3xl font-bold text-cream mb-3">Booking Received</h2>
          <p className="font-dm text-sm text-cream/55 mb-6">
            Thank you for your reservation at Gupta Residency. Our team will confirm your booking within 2 hours via email.
          </p>
          <div className="gold-divider mx-auto mb-6" />
          <p className="font-cormorant italic text-lg text-gold">We look forward to welcoming you.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=90" alt="Booking" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-dark/80" />
        </div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative z-10 text-center">
          <div className="luxury-tag justify-center mb-4">Reservations</div>
          <h1 className="font-cormorant font-bold text-cream" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Book Your <span className="gold-text">Stay</span>
          </h1>
        </motion.div>
      </section>

      <section className="section-pad bg-dark">
        <div className="container-luxury">
          {/* Steps Indicator */}
          <div className="flex items-center justify-center gap-4 mb-14">
            {['Stay Details', 'Guest Info', 'Confirm'].map((label, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-8 h-8 flex items-center justify-center border text-sm font-dm font-medium transition-all duration-300 ${
                  step > i + 1 ? 'bg-gold border-gold text-dark' : step === i + 1 ? 'border-gold text-gold' : 'border-white/20 text-white/30'
                }`}>
                  {step > i + 1 ? <Check size={14} /> : i + 1}
                </div>
                <span className={`font-dm text-xs tracking-wide hidden sm:block ${step >= i + 1 ? 'text-gold' : 'text-white/30'}`}>{label}</span>
                {i < 2 && <div className={`w-12 h-px ${step > i + 1 ? 'bg-gold' : 'bg-white/10'} hidden sm:block`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left: Form Steps */}
              <div className="lg:col-span-2 space-y-8">
                {/* Step 1: Stay Details */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-card border border-gold/15 p-8">
                    <h2 className="font-cormorant text-2xl font-semibold text-cream mb-6 flex items-center gap-3">
                      <Calendar size={20} className="text-gold" /> Stay Details
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Check-In *</label>
                        <input type="date" min={today} {...register('checkIn', { required: true })} className="luxury-input" />
                        {errors.checkIn && <p className="text-red-400 text-xs mt-1">Required</p>}
                      </div>
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Check-Out *</label>
                        <input type="date" min={today} {...register('checkOut', { required: true })} className="luxury-input" />
                        {errors.checkOut && <p className="text-red-400 text-xs mt-1">Required</p>}
                      </div>
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Adults</label>
                        <select {...register('guests')} className="luxury-select w-full appearance-none">
                          {['1', '2', '3', '4', '5+'].map((n) => <option key={n}>{n}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Room Type *</label>
                        <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)} className="luxury-select w-full appearance-none" required>
                          <option value="">Select a room</option>
                          {rooms.map((r) => <option key={r.id} value={r.name}>{r.name} — ₹{r.price.toLocaleString()}/night</option>)}
                        </select>
                      </div>
                    </div>
                    <button type="button" onClick={() => setStep(2)} className="btn-gold mt-8">
                      Continue
                    </button>
                  </motion.div>
                )}

                {/* Step 2: Guest Info */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-card border border-gold/15 p-8">
                    <h2 className="font-cormorant text-2xl font-semibold text-cream mb-6 flex items-center gap-3">
                      <Users size={20} className="text-gold" /> Guest Information
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">First Name *</label>
                        <input {...register('firstName', { required: true })} className="luxury-input" placeholder="Arjun" />
                        {errors.firstName && <p className="text-red-400 text-xs mt-1">Required</p>}
                      </div>
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Last Name *</label>
                        <input {...register('lastName', { required: true })} className="luxury-input" placeholder="Sharma" />
                        {errors.lastName && <p className="text-red-400 text-xs mt-1">Required</p>}
                      </div>
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Email *</label>
                        <input type="email" {...register('email', { required: true })} className="luxury-input" placeholder="arjun@example.com" />
                        {errors.email && <p className="text-red-400 text-xs mt-1">Required</p>}
                      </div>
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Phone *</label>
                        <input type="tel" {...register('phone', { required: true })} className="luxury-input" placeholder="+91 98765 43210" />
                        {errors.phone && <p className="text-red-400 text-xs mt-1">Required</p>}
                      </div>
                      <div className="sm:col-span-2">
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Special Requests</label>
                        <textarea {...register('requests')} rows={3} className="luxury-input resize-none" placeholder="Dietary requirements, room preferences, occasion..." />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button type="button" onClick={() => setStep(1)} className="btn-ghost">Back</button>
                      <button type="button" onClick={() => setStep(3)} className="btn-gold">Continue</button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Confirm */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="glass-card border border-gold/15 p-8">
                    <h2 className="font-cormorant text-2xl font-semibold text-cream mb-6 flex items-center gap-3">
                      <CreditCard size={20} className="text-gold" /> Payment Details
                    </h2>
                    <div className="p-4 border border-gold/15 bg-gold/5 flex items-start gap-3 mb-6">
                      <Info size={16} className="text-gold mt-0.5 flex-shrink-0" />
                      <p className="font-dm text-xs text-cream/60">Payment is processed securely at the hotel. We accept all major cards, UPI, and net banking.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Card Number</label>
                        <input className="luxury-input" placeholder="4111 1111 1111 1111" />
                      </div>
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Name on Card</label>
                        <input className="luxury-input" placeholder="Arjun Sharma" />
                      </div>
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">Expiry</label>
                        <input className="luxury-input" placeholder="MM / YY" />
                      </div>
                      <div>
                        <label className="font-dm text-[10px] tracking-widest text-gold uppercase mb-2 block">CVV</label>
                        <input className="luxury-input" placeholder="•••" />
                      </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button type="button" onClick={() => setStep(2)} className="btn-ghost">Back</button>
                      <button type="submit" className="btn-gold">Confirm Booking</button>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Right: Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 glass-card border border-gold/20 p-6">
                  <h3 className="font-cormorant text-xl font-semibold text-cream mb-6 pb-4 border-b border-gold/15">Booking Summary</h3>
                  {selectedRoom ? (
                    <>
                      {(() => {
                        const r = rooms.find((rm) => rm.name === selectedRoom);
                        return r ? (
                          <>
                            <img src={r.thumbnail} alt={r.name} className="w-full aspect-video object-cover mb-4" />
                            <p className="font-cormorant text-lg font-semibold text-cream">{r.name}</p>
                            <p className="font-dm text-xs text-cream/40 mb-4">{r.category} · Up to {r.capacity} guests</p>
                            <div className="border-t border-gold/10 pt-4 mt-4">
                              <div className="flex justify-between font-dm text-sm text-cream/60 mb-2">
                                <span>Room Rate</span>
                                <span className="text-cream">₹{r.price.toLocaleString()}/night</span>
                              </div>
                              <div className="flex justify-between font-dm text-sm text-cream/60 mb-2">
                                <span>Taxes & Fees</span>
                                <span className="text-cream">₹{Math.round(r.price * 0.18).toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between font-cormorant text-xl font-semibold text-cream border-t border-gold/10 pt-3 mt-3">
                                <span>Total</span>
                                <span className="gold-text">₹{(r.price * 1.18).toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                              </div>
                            </div>
                          </>
                        ) : null;
                      })()}
                    </>
                  ) : (
                    <p className="font-dm text-sm text-cream/40 italic">Select a room to see summary</p>
                  )}
                  <div className="mt-6 pt-4 border-t border-gold/10 space-y-2">
                    {['Free cancellation', 'No prepayment required', '24/7 support'].map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <Check size={12} className="text-gold flex-shrink-0" />
                        <span className="font-dm text-xs text-cream/50">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Booking;
