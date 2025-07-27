import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import PROFILE_PIC from "../../assets/Profile.png";

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.4 },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const techBounce = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        {/* 🔵 Matching Background Effect */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className={`absolute bottom-10 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 ${
              isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-left"
            >
              <motion.div
                variants={fadeInUp}
                className={`text-sm uppercase tracking-widest mb-6 ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl xl:text-7xl font-light mb-8 leading-tight"
              >
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  Building digital
                </span>
                <br />
                <span className="text-blue-500 font-medium">experiences</span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  that matter
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className={`text-xl font-light max-w-lg leading-relaxed mb-12 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I craft beautiful, functional web applications with modern
                technologies and thoughtful user experiences.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex gap-6 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium"
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium ${
                    isDarkMode
                      ? "border-gray-700 text-gray-300 hover:border-gray-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex space-x-6 mb-12">
                <motion.a
                  href="https://github.com/waleedgujjar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className={`p-3 rounded-full border transition-colors ${
                    isDarkMode
                      ? "border-gray-700 text-gray-300 hover:border-gray-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  <FiGithub size={20} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/waleedgujjar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className={`p-3 rounded-full border transition-colors ${
                    isDarkMode
                      ? "border-gray-700 text-gray-300 hover:border-gray-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  <FiLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="mailto:waleedgujjar@email.com"
                  whileHover={{ scale: 1.2 }}
                  className={`p-3 rounded-full border transition-colors ${
                    isDarkMode
                      ? "border-gray-700 text-gray-300 hover:border-gray-600"
                      : "border-gray-300 text-gray-700 hover:border-gray-400"
                  }`}
                >
                  <Mail size={20} />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* 👉 Image Section */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex justify-center lg:justify-end relative"
            >
              <motion.div
                variants={techBounce}
                className="flex items-center space-x-8 text-xs uppercase tracking-widest absolute -top-16 left-6 flex-wrap"
              >
                {["React", ".", "TypeScript", ".", "NodeJs", ".", "MongoDB", "."].map(
                  (item, i) => (
                    <span
                      key={i}
                      className={
                        isDarkMode
                          ? i % 2 === 0
                            ? "text-gray-600"
                            : "text-gray-700"
                          : i % 2 === 0
                          ? "text-gray-500"
                          : "text-gray-400"
                      }
                    >
                      {item}
                    </span>
                  )
                )}
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className={`w-80 h-96 rounded-3xl overflow-hidden border-4 shadow-2xl ${
                  isDarkMode ? "border-gray-800" : "border-gray-300"
                }`}
              >
                <img
                  src={PROFILE_PIC}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* 📱 Mobile View */}
          <div className="block lg:hidden text-center flex flex-col items-center mt-12">
            <img
              src={PROFILE_PIC}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 shadow-xl object-cover mb-6"
            />
            <p
              className={`text-sm uppercase tracking-widest mb-2 ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Full Stack Developer
            </p>
            <h1 className="text-3xl font-light leading-snug">
              Building digital <br />
              <span className="text-blue-500 font-medium">experiences</span> <br />
              that matter
            </h1>
            <p
              className={`text-base mt-4 mb-6 px-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I craft beautiful, functional web applications with modern
              technologies and thoughtful user experiences.
            </p>
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => scrollToSection("work")}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm uppercase"
              >
                View Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`border rounded-full px-6 py-2 text-sm uppercase ${
                  isDarkMode
                    ? "border-gray-700 text-gray-300 hover:border-gray-600"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                Get In Touch
              </button>
            </div>
            <div className="flex space-x-4 text-sm uppercase tracking-widest">
              {["React", ".", "TypeScript", ".", "NodeJs", ".", "MongoDB"].map(
                (tech, i) => (
                  <span
                    key={i}
                    className={
                      isDarkMode ? "text-gray-500" : "text-gray-400"
                    }
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* ⬇ Animated Arrow */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ArrowDown
            size={24}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
