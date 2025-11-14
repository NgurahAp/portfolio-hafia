import { motion } from 'framer-motion';
import { Instagram, Youtube, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const socialStats = [
  {
    platform: 'TikTok',
    icon: '🎵',
    followers: '125K',
    engagement: '8.5%',
    avgViews: '50K',
    color: 'bg-black',
  },
  {
    platform: 'Instagram',
    icon: '📸',
    followers: '85K',
    engagement: '6.2%',
    avgViews: '25K',
    color: 'bg-gradient-to-r from-purple-600 to-pink-600',
  },
  {
    platform: 'YouTube',
    icon: '▶️',
    followers: '45K',
    engagement: '7.8%',
    avgViews: '35K',
    color: 'bg-red-600',
  },
];

export function SocialStatsSection() {
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
          <span className="text-red-600 uppercase tracking-widest">My Reach</span>
          <h2 className="text-5xl lg:text-7xl uppercase mt-4 text-white">
            SOCIAL MEDIA STATS
          </h2>
          <p className="text-neutral-400 mt-6 max-w-2xl">
            Proven engagement across multiple platforms with a highly active and engaged audience.
          </p>
        </motion.div>

        {/* Cards View */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {socialStats.map((stat, index) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-900 border border-neutral-800 p-8 hover:border-red-600 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl">{stat.icon}</span>
                <span className="text-red-600">★</span>
              </div>
              
              <h3 className="text-2xl uppercase text-white mb-6">
                {stat.platform}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-neutral-400 text-sm uppercase tracking-wider mb-1">Followers</div>
                  <div className="text-3xl text-white">{stat.followers}</div>
                </div>
                <div>
                  <div className="text-neutral-400 text-sm uppercase tracking-wider mb-1">Engagement Rate</div>
                  <div className="text-2xl text-red-600">{stat.engagement}</div>
                </div>
                <div>
                  <div className="text-neutral-400 text-sm uppercase tracking-wider mb-1">Avg. Views</div>
                  <div className="text-2xl text-white">{stat.avgViews}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Table View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-neutral-900 border border-neutral-800 overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-neutral-800 hover:bg-neutral-800">
                <TableHead className="text-white uppercase tracking-wider">Platform</TableHead>
                <TableHead className="text-white uppercase tracking-wider">Followers</TableHead>
                <TableHead className="text-white uppercase tracking-wider">Engagement</TableHead>
                <TableHead className="text-white uppercase tracking-wider">Avg. Views</TableHead>
                <TableHead className="text-white uppercase tracking-wider">Niche</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-neutral-800 hover:bg-neutral-800">
                <TableCell className="text-white">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎵</span>
                    <span className="uppercase tracking-wide">TikTok</span>
                  </div>
                </TableCell>
                <TableCell className="text-neutral-300">125K</TableCell>
                <TableCell className="text-red-600">8.5%</TableCell>
                <TableCell className="text-neutral-300">50K</TableCell>
                <TableCell className="text-neutral-400 text-sm">Lifestyle & UGC</TableCell>
              </TableRow>
              <TableRow className="border-neutral-800 hover:bg-neutral-800">
                <TableCell className="text-white">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📸</span>
                    <span className="uppercase tracking-wide">Instagram</span>
                  </div>
                </TableCell>
                <TableCell className="text-neutral-300">85K</TableCell>
                <TableCell className="text-red-600">6.2%</TableCell>
                <TableCell className="text-neutral-300">25K</TableCell>
                <TableCell className="text-neutral-400 text-sm">Fashion & Beauty</TableCell>
              </TableRow>
              <TableRow className="border-neutral-800 hover:bg-neutral-800">
                <TableCell className="text-white">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">▶️</span>
                    <span className="uppercase tracking-wide">YouTube</span>
                  </div>
                </TableCell>
                <TableCell className="text-neutral-300">45K</TableCell>
                <TableCell className="text-red-600">7.8%</TableCell>
                <TableCell className="text-neutral-300">35K</TableCell>
                <TableCell className="text-neutral-400 text-sm">Tech & Reviews</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-5xl text-red-600 mb-2">255K</div>
            <div className="text-neutral-400 uppercase tracking-wider">Total Followers</div>
          </div>
          <div className="text-center">
            <div className="text-5xl text-red-600 mb-2">7.5%</div>
            <div className="text-neutral-400 uppercase tracking-wider">Avg. Engagement</div>
          </div>
          <div className="text-center">
            <div className="text-5xl text-red-600 mb-2">110K</div>
            <div className="text-neutral-400 uppercase tracking-wider">Monthly Reach</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
