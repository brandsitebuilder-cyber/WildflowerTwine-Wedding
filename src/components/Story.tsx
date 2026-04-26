import { motion } from 'motion/react';

const storyImg = 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80';

export default function Story() {
  return (
    <div className="min-h-screen flex items-center bg-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={storyImg}
                alt="Emma & James story"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 bg-sage-light/30 rounded-full -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="section-label">How it all began</span>
            <h2 className="section-title mt-2 mb-8">Our Story</h2>

            <div className="space-y-5 text-charcoal leading-[1.8] font-normal text-base md:text-lg">
              <p>
                It started with a shared love for good coffee, old books, and long walks through the vineyards. Emma was curating a small art exhibition at a local gallery when James walked in, looking for <span className="italic">"something that reminded him of home."</span> That something turned out to be a painting of a wildflower field that now hangs in their living room.
              </p>
              <p>
                What followed were months of Sunday morning farmer's markets, impromptu road trips along the Garden Route, and conversations that stretched deep into the night. They discovered that the things that made them different made them stronger, and the things they shared made them unstoppable.
              </p>
              <p>
                On a quiet autumn afternoon at their favourite lookout point over the valley, James got down on one knee. The ring — a vintage rose-cut diamond — caught the golden light as he asked the question that had been written in his heart from the very beginning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
