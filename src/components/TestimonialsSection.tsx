import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Marketing Director, Nike',
    quote: 'Working with this creator has been transformative for our brand. The content is authentic, engaging, and drives real results.',
    image: 'https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjE2ODQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Brand Manager, Apple',
    quote: 'The level of professionalism and creativity exceeded our expectations. Every piece of content tells a story.',
    image: 'https://images.unsplash.com/photo-1641236210747-48bc43e4517f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGNyZWF0aXZlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjI1Nzc0NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'CEO, Glossier',
    quote: 'Authentic, creative, and always on-brand. This is exactly the type of content that resonates with Gen Z.',
    image: 'https://images.unsplash.com/photo-1576558656222-ba66febe3dec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MjE2ODQ3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function TestimonialsSection() {
  return (
    <section style={{backgroundColor: '#c1111e'}} className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-white uppercase tracking-widest opacity-90">What Clients Say</span>
          <h2 className="text-5xl lg:text-7xl uppercase mt-4 text-white">
            TESTIMONIALS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-black p-8"
            >
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>

              <div style={{color: '#c1111e'}} className="text-4xl mb-4">"</div>
              
              <p className="text-neutral-700 mb-6 italic">
                {testimonial.quote}
              </p>

              <div className="border-t border-neutral-200 pt-4">
                <div className="text-black uppercase tracking-wide">
                  {testimonial.name}
                </div>
                <div className="text-neutral-600 text-sm mt-1">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid md:grid-cols-4 gap-8 text-center"
        >
          <div style={{borderLeftColor: 'white'}} className="border-l-4 pl-6 text-left">
            <div className="text-5xl text-white mb-2">98%</div>
            <div className="text-white opacity-90 uppercase tracking-wider text-sm">Client Satisfaction</div>
          </div>
          <div style={{borderLeftColor: 'white'}} className="border-l-4 pl-6 text-left">
            <div className="text-5xl text-white mb-2">2M+</div>
            <div className="text-white opacity-90 uppercase tracking-wider text-sm">Content Views</div>
          </div>
          <div className="border-l-4 border-white pl-6 text-left">
            <div className="text-5xl text-white mb-2">50+</div>
            <div className="text-white opacity-90 uppercase tracking-wider text-sm">Brand Partners</div>
          </div>
          <div className="border-l-4 border-white pl-6 text-left">
            <div className="text-5xl text-white mb-2">5K+</div>
            <div className="text-white opacity-90 uppercase tracking-wider text-sm">Content Pieces</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
