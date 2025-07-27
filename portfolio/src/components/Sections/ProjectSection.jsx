import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { PROJECTS } from '../../utils/data';
import ProjectCard from '../ProjectCard';
import { containerVariants, itemVariants } from '../../utils/helper';

const ProjectSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      } relative overflow-hidden`}
    >
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest font-semibold mb-4 inline-block px-3 py-1 rounded-full ${
              isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'
            }`}
          >
            Featured Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Recent <span className="text-blue-500 font-medium">Projects</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg font-light max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            A collection of projects that showcase my expertise in building modern web applications and solving complex problems.
          </motion.p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDarkMode={isDarkMode}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
