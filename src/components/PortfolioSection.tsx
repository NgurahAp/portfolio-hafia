import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'SKATE DISTRICT',
    category: 'Photography',
    image: 'SKATE DISTRICT.png',
  },
  {
    id: 2,
    title: 'POSE',
    category: 'Portrait',
    image: 'POSE.png',
  },
  {
    id: 3,
    title: 'TAMARIN',
    category: 'Product',
    image: 'TAMARIN.png',
  },
  {
    id: 4,
    title: 'TENIS',
    category: 'Sport',
    image: 'TENIS.png',
  },
  {
    id: 5,
    title: 'UI PL',
    category: 'Design',
    image: 'UI PL.png',
  },
  {
    id: 6,
    title: 'SOCIAL FEED',
    category: 'Social Media',
    image: 'FEED.png',
  },
  {
    id: 7,
    title: 'PIA',
    category: 'Portrait',
    image: 'pia.png',
  },
  {
    id: 8,
    title: 'PIA 2',
    category: 'Portrait',
    image: 'pia 2.png',
  },
  {
    id: 9,
    title: 'WEDDING',
    category: 'Event',
    image: 'WEDDING.png',
  },
  {
    id: 10,
    title: 'RED PROFILE',
    category: 'Portrait',
    image: 'RED PROFILE.png',
  },
  {
    id: 11,
    title: 'RED PORTO',
    category: 'Portfolio',
    image: 'RED PORTO.png',
  },
  {
    id: 12,
    title: 'RED PORTO 2',
    category: 'Portfolio',
    image: 'RED PORTO 2.png',
  },
].map(item => ({
  ...item,
  image: `/images/${item.image}`
}));

export function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="bg-neutral-100 py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-red-600 uppercase tracking-widest">My Work</span>
          <h2 className="text-5xl lg:text-7xl uppercase mt-4 text-black">
            PORTFOLIO
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-64 bg-gray-50 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      console.error('Error loading image:', item.image);
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23f3f4f6%22%2F%3E%3Ctext%20x%3D%22100%22%20y%3D%22100%22%20font-family%3D%22Arial%22%20font-size%3D%2214%22%20text-anchor%3D%22middle%22%20alignment-baseline%3D%22middle%22%20fill%3D%226b7280%22%3EImage%20not%20found%3C%2Ftext%3E%3C%2Fsvg%3E';
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
