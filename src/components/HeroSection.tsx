import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-neutral-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block"
              >
                <span style={{color: '#c1111e'}} className="uppercase tracking-widest">Multidisciplinary Creative</span>
              </motion.div>
              
              <h1 style={{
                  color: '#c1111e', 
                  fontWeight: 700,
                  WebkitTextStroke: '1.5px #c1111e',
                  // textShadow: '2px 2px 0 #c1111e',
                  letterSpacing: '-0.05em'
                }} 
                className="text-7xl lg:text-9xl uppercase tracking-tight"
              >
                HAFIA
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-neutral-600 max-w-md">
                  Creative individual with a diverse background in graphic design, photography, event production, and visual storytelling.
                </p>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-black text-white hover:bg-neutral-800 uppercase tracking-wider"
                  >
                    Let's Work Together
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-4xl text-black">50K+</div>
                  <div className="text-neutral-600">Total Reach</div>
                </div>
                <div>
                  <div className="text-4xl text-black">100+</div>
                  <div className="text-neutral-600">Projects Done</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-screen w-full">
              <ImageWithFallback
                src="/images/RED PORTO 2.png"
                alt="Creative Professional"
                className="w-full h-full object-cover"
              />
              <div style={{backgroundColor: '#c1111e'}} className="absolute top-4 right-4 w-16 h-16 flex items-center justify-center">
                <span className="text-white text-2xl">★</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div style={{backgroundColor: '#c1111e'}} className="absolute top-0 right-0 w-1/3 h-1/3 opacity-10 blur-3xl"></div>
    </section>
  );
}
