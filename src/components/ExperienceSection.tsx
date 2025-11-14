import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2024 - NOW',
    title: 'SYSTECH MAJU JAYA',
    brands: ['Stage Crew', 'FOH Crew', 'Documentary Crew'],
    description: 'Involved in multiple large-scale and corporate events as part of the stage crew and documentation team, responsible for both technical and creative execution. Handled photo and video documentation, assisted in live event flow, and supported content production for social media.',
  },
  {
    year: '2024 - NOW',
    title: 'GLAMS AGENCY',
    brands: ['Pose Director', 'PIC Model', 'Content Maker'],
    description: 'Served as PIC Model and Pose Director during photoshoots and brand collaborations handled by Glams Agency. Responsible for coordinating model schedules, managing on-set flow, and directing model poses (including child models) to achieve the desired visual concept. Produced and edited behind-the-scenes video content and creative materials for internal and social media promotion',
  },
  {
    year: '2023',
    title: 'GLAMS ACADEMY',
    brands: ['Admin', 'Digital Marketing'],
    description: 'Responsible for managing administrative tasks, including scheduling, budgeting, and logistics for events and projects. Also handled digital marketing activities, including social media management, email marketing, and content creation.',
  },
  {
    year: '2022',
    title: 'Freelancer',
    brands: ['Graphic Design', 'Photography'],
    description: 'Freelance graphic designer and photographer specializing in creative visuals for small businesses and personal brands. Experienced in designing product packaging, posters, CVs, and promotional banners. Also works in portrait, model, and wedding photography — capturing real moments with a storytelling touch.',
  },
  {
    year: '2021',
    title: 'WEMAKE PHOTOGRAPHY',
    brands: ['Designer', 'Photographer'],
    description: 'A creative studio specializing in wedding documentation and collage design. Combining photography and design to capture every detail, emotion, and memory in timeless visuals.',
  },
];

export function ExperienceSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32">
              <span style={{color: '#c1111e'}} className="uppercase tracking-widest">Track Record</span>
              <h2 className="text-5xl lg:text-7xl uppercase mt-4 text-black leading-none">
                EXPERIENCE
              </h2>
              {/* <p className="text-neutral-600 mt-6">
                Over the past five years, I've worked with brands in lifestyle, fashion, tech, and wellness.
              </p> */}
            </div>
          </motion.div>

          {/* Right Side - Timeline */}
          <div className="lg:col-span-8 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-black pl-8 py-4 hover:border-[#c1111e] transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span style={{color: '#c1111e'}} className="text-4xl">{exp.year}</span>
                  <span style={{color: '#c1111e'}}>★</span>
                </div>
                
                <h3 className="text-2xl uppercase text-black mb-2">
                  {exp.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.brands.map((brand) => (
                    <span
                      key={brand}
                      className="bg-black text-white px-3 py-1 text-sm uppercase tracking-wider"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
                
                <p className="text-neutral-600">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Brand Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-neutral-200 pt-16"
        >
          <h3 className="text-3xl uppercase text-center mb-12 text-black">
            Expertise & Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['Graphic Design', 'Photography & Videography', ' Visual Direction', 'UI/Web Design', 'Event Crew', 'Content Production'].map((brand) => (
              <div
                key={brand}
                className="text-center text-2xl uppercase tracking-wider text-neutral-400 hover:text-black transition-colors duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
