import { motion } from 'framer-motion';

const Hobbies = () => {
    const hobbies = [
        'Workout at gym',
        'Playing chess',
        'Watching anime'
    ];

    return (
        <section id="hobbies" className="py-20 bg-black text-white">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Hobbies
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={hobby}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 p-6 rounded-lg text-center"
                        >
                            <p className="text-lg">{hobby}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;