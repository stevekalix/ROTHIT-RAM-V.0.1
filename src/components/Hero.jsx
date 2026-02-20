import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="text-center max-w-4xl mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Hi, I'm Rohith Ram
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl mb-2"
                >
                    Software Developer
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg mb-8 text-gray-300"
                >
                    Salem, Tamil Nadu, 636115 | jrohithram@gmail.com | 9025516511
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition flex items-center gap-2"
                    >
                        <FaDownload /> Download Resume
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rohith-ram-a631b82a4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-gray-600 hover:border-blue-400 text-white px-8 py-3 rounded-full font-semibold transition flex items-center gap-2"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;