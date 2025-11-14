import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'IG POST',
    price: '$150',
    features: [
      '1 IG Post',
      '24hr Story',
      '3-5 Reels',
    ],
    highlight: false,
  },
  {
    name: 'IG STORIES',
    price: '$200',
    features: [
      '5 IG Story',
      'Link Swipe-Up',
      '3-5 Reels + 3 Stories',
    ],
    highlight: false,
  },
  {
    name: 'REELS',
    price: '$300',
    features: [
      '1 IG Reel',
      '1 TikTok',
      '3-5 Reels + 3 Stories',
    ],
    highlight: true,
  },
  {
    name: 'UGC',
    price: '$250',
    features: [
      '1 Video',
      '3 Photos',
      '3 IG Reels + Video',
    ],
    highlight: false,
  },
];

export function PackagesSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-red-600 uppercase tracking-widest">Pricing</span>
          <h2 className="text-5xl lg:text-7xl uppercase mt-4 text-black">
            PACKAGES
          </h2>
          <p className="text-neutral-600 mt-6 max-w-2xl mx-auto">
            Choose the package that fits your needs. All prices are starting rates and can be customized.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-2 p-8 ${
                pkg.highlight
                  ? 'border-red-600 bg-red-600 text-white'
                  : 'border-black bg-white text-black'
              } hover:shadow-2xl transition-all duration-300`}
            >
              {pkg.highlight && (
                <div className="text-center mb-4">
                  <span className="bg-white text-red-600 px-3 py-1 text-sm uppercase tracking-wider">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-3xl uppercase tracking-wider mb-4 ${pkg.highlight ? 'text-white' : 'text-black'}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className={`text-5xl ${pkg.highlight ? 'text-white' : 'text-red-600'}`}>
                    {pkg.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${pkg.highlight ? 'text-white' : 'text-red-600'}`} />
                    <span className={pkg.highlight ? 'text-white' : 'text-neutral-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full uppercase tracking-wider ${
                  pkg.highlight
                    ? 'bg-white text-red-600 hover:bg-neutral-100'
                    : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                Select Package
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom Packages CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center bg-neutral-100 p-12 border-l-4 border-red-600"
        >
          <h3 className="text-3xl uppercase text-black mb-4">
            Need a Custom Package?
          </h3>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Every brand is unique. Let's create a custom content package that fits your specific needs and budget.
          </p>
          <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 uppercase tracking-wider">
            Request Custom Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
