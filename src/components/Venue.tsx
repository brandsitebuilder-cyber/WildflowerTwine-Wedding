import { motion } from 'motion/react';

const venueImg = 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1920&q=80';
const dressImg = 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80';

export default function Venue() {
  return (
    <div className="min-h-screen flex items-center bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">The Location</span>
          <h2 className="section-title mt-2">Venue & Details</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Venue card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-sm"
          >
            <div className="aspect-[4/3]">
              <img src={venueImg} alt="The Hidden Barn" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h3 className="font-heading text-2xl md:text-3xl mb-2">The Hidden Barn</h3>
              <p className="text-white/85 text-sm md:text-base font-light">Stellenbosch Winelands, Western Cape</p>
              <p className="text-white/60 text-xs mt-2 uppercase tracking-[0.1em]">On-site parking · Wheelchair accessible</p>
            </div>
          </motion.div>

          {/* Dress code card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative group overflow-hidden rounded-sm mb-6">
              <div className="aspect-[4/2]">
                <img src={dressImg} alt="Dress code" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
            <h3 className="font-heading text-2xl text-charcoal mb-2">Garden Formal</h3>
            <p className="text-charcoal/80 text-sm font-normal leading-[1.8] mb-4">
              Embrace the rustic elegance of our day. Earthy tones, soft florals, and textures that celebrate the natural beauty of the winelands.
            </p>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-white/50 p-4 rounded-sm">
                <span className="font-medium block mb-1 text-charcoal">Gentlemen</span>
                <span className="text-charcoal/80 font-light">Linen suits or chinos in earthy tones. Ties optional.</span>
              </div>
              <div className="bg-white/50 p-4 rounded-sm">
                <span className="font-medium block mb-1 text-charcoal">Ladies</span>
                <span className="text-charcoal/80 font-light">Flowing midi dresses, floral prints, block heels.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
