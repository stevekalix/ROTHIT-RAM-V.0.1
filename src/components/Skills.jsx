import { motion } from 'framer-motion';

const Skills = () => {
    const technicalSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Databases'];
    const languages = [
        { lang: 'Japanese', level: 'A2' },
        { lang: 'English', level: 'C1' },
        { lang: 'Tamil', level: 'C2' }
    ];

    return (
        <section id="skills" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                >
                    Skills
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                        <div className="flex flex-wrap gap-4">
                            {technicalSkills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-white font-semibold"
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Languages</h3>
                        <div className="space-y-4">
                            {languages.map((lang, index) => (
                                <motion.div
                                    key={lang.lang}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
                                >
                                    <span className="text-lg">{lang.lang}</span>
                                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full text-sm font-semibold">{lang.level}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;