import { motion } from 'motion/react';

const images = {
  hero: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80',
  heroAlt: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
};

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt="Emma & James"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white/95 text-lg md:text-xl tracking-[0.2em] uppercase font-normal mb-6 drop-shadow-sm"
        >
          We're Getting Married
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-heading font-medium tracking-tight leading-none mb-6">
            Emma
            <span className="block text-2xl md:text-4xl my-4 font-script font-normal text-rose">&</span>
            James
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-3"
        >
          <p className="text-white text-sm md:text-base uppercase tracking-[0.15em] font-medium">
            15 October 2026
          </p>
          <p className="text-white/85 text-xs md:text-sm uppercase tracking-[0.1em] font-normal">
            The Hidden Barn · Stellenbosch Winelands
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12"
        >
          <a
            href="#rsvp"
            className="inline-block border-2 border-rose/60 text-white hover:bg-rose/20 transition-all duration-500 px-10 py-3 uppercase tracking-[0.2em] text-xs font-light"
          >
            Join the Celebration
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </div>
  );
}
