import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, BedDouble, Search } from 'lucide-react';

/* ── Booking Bar ─────────────────────────────────────────── */
const BookingBar = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split('T')[0];
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toISOString().split('T')[0];

  const [form, setForm] = useState({
    checkIn: today,
    checkOut: tomorrow,
    guests: '2 Guests',
    room: 'Any Room Type',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking', { state: form });
  };

  return (
    <section className="relative z-20 -mt-20">
      <div className="container-luxury">
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="glass-card bg-dark/90 border border-gold/20 p-6 md:p-8 shadow-2xl shadow-black/60"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6 items-end">
            {/* Check In */}
            <div className="group">
              <label className="flex items-center gap-2 font-dm text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                <Calendar size={12} />
                Check-In
              </label>
              <input
                type="date"
                min={today}
                value={form.checkIn}
                onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                className="luxury-input text-sm"
                required
              />
            </div>

            {/* Check Out */}
            <div className="group">
              <label className="flex items-center gap-2 font-dm text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                <Calendar size={12} />
                Check-Out
              </label>
              <input
                type="date"
                min={form.checkIn || today}
                value={form.checkOut}
                onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                className="luxury-input text-sm"
                required
              />
            </div>

            {/* Guests */}
            <div className="group">
              <label className="flex items-center gap-2 font-dm text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                <Users size={12} />
                Guests
              </label>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="luxury-select text-sm appearance-none"
              >
                {['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5+ Guests'].map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            {/* Room Type */}
            <div className="group">
              <label className="flex items-center gap-2 font-dm text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                <BedDouble size={12} />
                Room Type
              </label>
              <select
                value={form.room}
                onChange={(e) => setForm({ ...form, room: e.target.value })}
                className="luxury-select text-sm appearance-none"
              >
                {['Any Room Type', 'Classic Room', 'Deluxe Room', 'Suite', 'Penthouse'].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-gold justify-center gap-2 w-full xl:w-auto">
              <Search size={16} />
              Check Availability
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingBar;
