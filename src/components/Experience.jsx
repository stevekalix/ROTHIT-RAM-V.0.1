import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: 'Full-Stack Developer Intern',
            company: 'Tech Startup',
            period: '2023 - Present',
            description: 'Developing modern web applications using React, Node.js, and MongoDB. Implementing responsive designs and RESTful APIs while learning best practices in software development.'
        },
        {
            title: 'Frontend Developer',
            company: 'Freelance',
            period: '2022 - 2023',
            description: 'Built responsive websites using HTML, CSS, and JavaScript. Created interactive user interfaces and collaborated with clients to bring their visions to life.'
        }
    ];

    return (
        <section id="experience" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Experience
                </motion.h2>
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-800 p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                            <p className="text-blue-400 mb-2">{exp.company} | {exp.period}</p>
                            <p className="text-gray-300">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;