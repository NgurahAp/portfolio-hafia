import { motion } from 'framer-motion';
import { Camera, Video, Package, Star, Megaphone, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Video,
    title: 'Visual Design',
    description: 'Graphic design for campaigns, posters, and social media. Focused on creating visuals that align with your brand identity and communicate messages clearly and creatively.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Product shots, lifestyle imagery, and behind-the-scenes content that brings your brand to life.',
  },
  {
    icon: Package,
    title: 'Pose & Visual Direction',
    description: 'On-set direction for models and talent to achieve expressive, brand-aligned visual results. Experienced in handling both adult and child models in photoshoots and creative sessions.',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Professional video content from concept to final edit. Brand stories, product launches, and creative campaigns.',
  },
  {
    icon: Megaphone,
    title: 'Event Creative & Production Support',
    description: 'Hands-on experience in live event documentation, stage crew coordination, and visual coverage for national-scale corporate and creative events.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Concept & Campaign Development',
    description: 'Assisting brands and teams in shaping campaign ideas, moodboards, and storytelling concepts for visual projects across digital and on-ground platforms.',
  },
];

export function ServicesSection() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-red-600 uppercase tracking-widest">What I Do</span>
          <h2 className="text-5xl lg:text-7xl uppercase mt-4 text-white">
            SERVICES
          </h2>
          <p className="text-neutral-400 mt-6 max-w-2xl text-lg">
            Content creation that feels authentic
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="border border-neutral-800 bg-neutral-900 p-8 hover:border-red-600 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-red-600 p-3 group-hover:bg-white transition-colors duration-300">
                      <Icon className="h-6 w-6 text-white group-hover:text-black" />
                    </div>
                    <span className="text-red-600 text-sm">★</span>
                  </div>
                  <h3 className="text-2xl uppercase text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
