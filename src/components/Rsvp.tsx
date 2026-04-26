import { useState } from 'react';
import { motion } from 'motion/react';

const rsvpBg = 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1920&q=80';

export default function Rsvp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState('1');
  const [dietary, setDietary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={rsvpBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-12"
        >
          <span className="text-rose/80 text-lg font-script">Join us</span>
          <h2 className="font-heading text-4xl md:text-5xl mt-2 mb-4">RSVP</h2>
          <p className="text-white/60 font-light text-sm md:text-base max-w-lg mx-auto">
            Please confirm your attendance before 31 August 2026. We can't wait to celebrate with you!
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-lg rounded-sm p-12 text-center text-white"
          >
            <span className="font-script text-5xl text-rose">Thank You!</span>
            <p className="mt-4 text-white/70 font-light">Your RSVP has been received. We look forward to seeing you!</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-lg rounded-sm p-8 md:p-12 space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name(s)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-rose/60 transition-colors"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-rose/60 transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-rose/60 transition-colors"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n} className="text-charcoal">{n} Guest{n > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Dietary Requirements"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-rose/60 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-rose/80 hover:bg-rose transition-all duration-300 text-white rounded-sm py-4 uppercase tracking-[0.2em] text-xs font-medium"
            >
              Send RSVP
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
