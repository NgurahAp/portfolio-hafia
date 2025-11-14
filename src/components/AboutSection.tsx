import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <ImageWithFallback
                src="/images/RED PROFILE.png"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <span style={{color: '#c1111e'}} className="uppercase tracking-widest">About Me</span>
              <h2 className="text-5xl lg:text-7xl uppercase mt-4" style={{ color: '#c1111e', fontWeight: 500, letterSpacing: '-0.05em' }}>
                HAFIA MUHSHONA
              </h2>
            </div>
            
            <div className="space-y-4 text-neutral-700">
              <p className="text-lg">
                I'm a multi-faceted content creator specializing in UGC, photography, and brand storytelling with edge—driven.
              </p>
              <p>
                I craft authentic content that connects — through video, photography, and bold storytelling. Over the past five years, I've worked with brands in lifestyle, fashion, tech, and wellness—helping them connect with their audience in meaningful ways.
              </p>
              <p>
                From UGC videos, to curated capsule, I focus on what matters: real, authentic visual content that feels and aesthetic.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 mb-8">
              <div style={{borderLeftColor: '#c1111e'}} className="border-l-4 pl-4">
                <div className="text-3xl text-black">5+</div>
                <div className="text-neutral-600">Years Experience</div>
              </div>
              <div className="border-l-4 border-black pl-4">
                <div className="text-3xl text-black">30+</div>
                <div className="text-neutral-600">Brand Partners</div>
              </div>
            </div>
            
            <div className="w-full flex justify-end mt-16">
              <div style={{backgroundColor: '#c1111e'}} className="text-white p-8 max-w-md z-10 relative -mb-20">
                <p className="text-lg italic leading-relaxed">
                  "Storytelling through visual content is not just what I do—it's who I am."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
