import { motion } from 'motion/react';

const schedule = [
  { time: '14:00', label: 'Guest Arrival', detail: 'Welcome drinks & canapés on the lawn' },
  { time: '14:30', label: 'Wedding Ceremony', detail: 'Under the ancient oak tree' },
  { time: '15:30', label: 'Canapés & Mingling', detail: 'Garden-style hors d\'oeuvres' },
  { time: '17:00', label: 'Reception & Dinner', detail: 'Family-style farm-to-table feast' },
  { time: '19:00', label: 'Speeches & Cake', detail: 'Toast the happy couple' },
  { time: '20:00', label: 'Dancing & Celebrations', detail: 'Under the stars' },
];

export default function Schedule() {
  return (
    <div className="min-h-screen flex items-center bg-[#F5F0EA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">The Timeline</span>
          <h2 className="section-title mt-2">Schedule</h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-sage/30 -translate-x-1/2" />

          {schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-12 mb-12 last:mb-0 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-terracotta border-2 border-cream z-10 mt-1.5" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content card */}
              <div className="ml-12 md:ml-0 md:w-1/2 bg-white/60 backdrop-blur p-6 rounded-sm">
                <span className="text-terracotta font-heading text-2xl font-medium">{item.time}</span>
                <h3 className="font-heading text-lg text-charcoal mt-1">{item.label}</h3>
                <p className="text-charcoal/80 text-base mt-1 font-normal">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
