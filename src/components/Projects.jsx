import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            title: 'Task Management App',
            description: 'A full-stack task management application built with React, Node.js, and MongoDB. Features include user authentication, real-time updates, and collaborative features.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'Weather Dashboard',
            description: 'Interactive weather dashboard using JavaScript, HTML, and CSS. Integrates with weather APIs to display current conditions and forecasts.',
            technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
            github: 'https://github.com',
            live: 'https://example.com'
        },
        {
            title: 'Portfolio Website',
            description: 'Modern responsive portfolio website built with React and Tailwind CSS. Features smooth animations and clean design.',
            technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
            github: 'https://github.com',
            live: 'https://example.com'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Projects
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="bg-blue-600 px-2 py-1 rounded text-sm">{tech}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                                    <FaGithub size={20} />
                                </a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;