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
                    Adaptable professional with a strong ability to thrive in diverse environments.
                    Recognized for quick comprehension and efficient execution of tasks.
                    Possesses a disciplined approach combined with strategic thinking and effective communication skills.
                </motion.p>
            </div>
        </section>
    );
};

export default Summary;