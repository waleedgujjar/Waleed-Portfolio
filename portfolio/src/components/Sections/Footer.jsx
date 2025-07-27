import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import {motion} from "framer-motion";
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/waleedgujjar',
    icon: Github,
    hoverColor: 'hover:text-white hover:bg-black',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-waleed-software-engineer/',
    icon: Linkedin,
    hoverColor: 'hover:text-white hover:bg-[#0077B5]',
  },
  {
    name: 'Email',
    url: 'waleednisar43@gmail.com',
    icon: Mail,
    hoverColor: 'hover:text-white hover:bg-red-500',
  },
  {
    name: 'Portfolio',
    url: 'https://your-portfolio.com',
    icon: Globe,
    hoverColor: 'hover:text-white hover:bg-indigo-600',
  },
];

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`relative py-12 px-6 overflow-hidden ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-xl font-medium mb-4">
          © {new Date().getFullYear()} Muhammad Waleed — All rights reserved.
        </h2>
        <p
          className={`text-sm mb-6 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          Designed & Developed by Muhammad Waleed
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 rounded-full border transition-colors duration-300 ${
                isDarkMode
                  ? 'border-gray-700 text-gray-300'
                  : 'border-gray-300 text-gray-700'
              } ${social.hoverColor}`}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Floating Decorative Circle */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className={`absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? 'bg-blue-500' : 'bg-purple-400'
        }`}
      />
    </footer>
  );
};

export default Footer;
