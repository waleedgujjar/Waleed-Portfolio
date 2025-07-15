import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index, isDarkMode }) => {
  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/10"
            : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10"
        } backdrop-blur-sm`}
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {project.featured && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <span className='bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-semibold shadow-lg'>
                Featured
              </span>
            </div>
          )}

          <div className="absolute top-4 right-4">
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                isDarkMode
                  ? "bg-gray-800/80 text-gray-200"
                  : "bg-white/90 text-gray-700"
              }`}
            >
              {project.category}
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center space-x-4"
          >
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>

            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all"
            >
              <FiGithub size={16} className="cursor-pointer" />
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </div>

        <div className="p-6">
          <h3
            className={`text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm leading-relaxed mb-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`text-xs px-3 py-1 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-200"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
