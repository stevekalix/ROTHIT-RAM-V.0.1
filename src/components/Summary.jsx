import { motion } from 'framer-motion';

const Summary = () => {
    return (
        <section id="summary" className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    About Me
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg leading-relaxed text-center"
                >
                    Aspiring Full-Stack Developer passionate about building modern, responsive web applications. Skilled in HTML, CSS, JavaScript, and currently expanding my knowledge in React, Node.js, and databases. I love solving problems, learning new technologies, and turning ideas into functional digital experiences. Committed to continuous learning and professional growth in the tech industry.
                </motion.p>
            </div>
        </section>
    );
};

export default Summary;