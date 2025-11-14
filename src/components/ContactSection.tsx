import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Instagram, Youtube, MapPin } from 'lucide-react';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for reaching out! I\'ll get back to you soon.');
  };

  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <span className="text-red-600 uppercase tracking-widest mb-6">Get In Touch</span>
            <h2 className="text-5xl lg:text-7xl uppercase text-white leading-none mb-8">
              LET'S GET IN TOUCH
            </h2>
            <p className="text-neutral-400 text-lg mb-8 max-w-lg">
              Ready to create something amazing together? Drop me a message and let's discuss how we can bring your brand to life.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-neutral-400 text-sm uppercase tracking-wider">Email</div>
                  <div className="text-white">hello@ardenvale.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-neutral-400 text-sm uppercase tracking-wider">Location</div>
                  <div className="text-white">Los Angeles, CA</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-neutral-400 text-sm uppercase tracking-wider mb-4">
                Follow Me
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-neutral-900 p-4 hover:bg-red-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-neutral-900 p-4 hover:bg-red-600 transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-neutral-900 p-4 hover:bg-red-600 transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <span className="text-white text-xl">🎵</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-wider text-neutral-700 mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="border-neutral-300 focus:border-red-600"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm uppercase tracking-wider text-neutral-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="border-neutral-300 focus:border-red-600"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm uppercase tracking-wider text-neutral-700 mb-2">
                  Company / Brand
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your Brand"
                  className="border-neutral-300 focus:border-red-600"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm uppercase tracking-wider text-neutral-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  className="w-full px-3 py-2 border border-neutral-300 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                >
                  <option>Under $500</option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-wider text-neutral-700 mb-2">
                  Project Details *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="border-neutral-300 focus:border-red-600 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 text-white hover:bg-red-700 uppercase tracking-wider py-6"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
