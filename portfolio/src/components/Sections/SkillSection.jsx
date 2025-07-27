import React, { useRef } from 'react';
import { useInView, useScroll, useTransform, motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../../utils/data.js";
import { containerVariants, itemVariants } from "../../utils/helper.js";

const SkillSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

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
      id="skills"
      className={`py-24 px-6 relative overflow-hidden ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Blur Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
      </div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest font-semibold mb-4 inline-block px-3 py-1 rounded-full ${
              isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200 text-gray-700"
            }`}
          >
            Featured Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Skills & <span className="text-blue-500 font-medium">Technologies</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg font-light max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A comprehensive toolkit for building modern, scalable web applications from concept to deployment.
          </motion.p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-10"
        >
          {SKILLS_CATEGORY.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`p-6 rounded-2xl border shadow-md transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-900/50 border-gray-800"
                    : "bg-white/80 border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      isDarkMode ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <Icon size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{category.title}</h3>
                    <p
                      className={`text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills?.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span
                          className={`text-xs ${
                            isDarkMode ? "text-gray-500" : "text-gray-600"
                          }`}
                        >
                          {skill.level}%
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
                          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tech Stack Pills */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-xl font-medium">Also Working With</h3>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
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

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((stats) => (
            <motion.div
              key={stats.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-light text-blue-500 mb-2">
                {stats.number}
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stats.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
