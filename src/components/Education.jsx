import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Education
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-gray-800 p-8 rounded-lg"
                >
                    <h3 className="text-2xl font-semibold mb-2">Bachelor of Science</h3>
                    <p className="text-lg text-gray-300 mb-2">Saraswathi Matric Higher Secondary School</p>
                    <p className="text-gray-400">Salem, Tamil Nadu</p>
                    <p className="text-gray-400">Completed: April 2023</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;