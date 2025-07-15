import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../../utils/data.js";
import { containerVariants, itemVariants } from "../../utils/helper.js";

const SkillSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    margin: "-100px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id='skills'
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Animated Background Bubbles */}
      <motion.div style={{ y, opacity }}>
        <div
          className={`absolute top-40 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-30 ${
            isDarkMode ? "bg-blue-600" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-30 ${
            isDarkMode ? "bg-purple-600" : "bg-purple-400"
          }`}
        />
      </motion.div>

      {/* Section Heading */}
      <motion.div
        className='max-w-6xl mx-auto relative z-10'
        style={{ y, opacity }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='text-center mb-20'
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } mb-4`}
          >
            Technical Expertise
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className='text-3xl md:text-5xl font-light mb-6'
          >
            Skills &{" "}
            <span className='text-blue-500 font-semibold'>Technologies</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            } max-w-2xl mx-auto font-light`}
          >
            A comprehensive toolkit for building modern, scalable web
            applications from concept to deployment.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Skills Categories */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className='grid md:grid-cols-2 gap-8 lg:gap-12'
      >
        {SKILLS_CATEGORY.map((category) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                  : "bg-white/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <div className='flex items-center mb-6 gap-4'>
                <div
                  className={`p-3 rounded-xl ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  }`}
                >
                  <Icon size={24} className='text-blue-500' />
                </div>
                <div>
                  <h3 className='text-xl font-medium mb-1'>{category.title}</h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Progress Bars */}
              <div className='space-y-4'>
                {category.skills?.map((skill) => (
                  <div key={skill.name} className='group'>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='text-sm font-medium'>{skill.name}</span>
                      <span
                        className={`text-xs ${
                          isDarkMode ? "text-gray-500" : "text-gray-600"
                        }`}
                      >
                        {skill.level} %
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={skill.level}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className='absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className='mt-16'
      >
        <motion.div variants={itemVariants} className='text-center mb-8'>
          <h3 className='text-xl font-medium mb-4'>Also Working With</h3>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className='flex flex-wrap justify-center gap-3'
        >
          {TECH_STACK.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ y: -2, scale: 1.05 }}
              className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-600"
                  : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
              }`}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className='mt-20 grid grid-cols-2 md:grid-cols-4 gap-8'
      >
        {STATS.map((stats, index) => (
          <motion.div 
            key={stats.label}
            variants={itemVariants}
            className='text-center'
          >
            <div className='text-2xl md:text-3xl font-light text-blue-500 mb-2'>
              {stats.number}
            </div>
            <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {stats.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillSection;
