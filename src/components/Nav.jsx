import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close mobile menu after clicking
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-md z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-white font-bold text-xl">Rohith Ram</div>
                    <div className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition">Home</button>
                        <button onClick={() => scrollToSection('summary')} className="text-gray-300 hover:text-white transition">Summary</button>
                        <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition">Experience</button>
                        <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition">Skills</button>
                        <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition">Projects</button>
                        <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white transition">Education</button>
                        <button onClick={() => scrollToSection('hobbies')} className="text-gray-300 hover:text-white transition">Hobbies</button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition">Contact</button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-gray-800 mt-2 rounded-lg"
                    >
                        <div className="flex flex-col space-y-2 p-4">
                            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition text-left">Home</button>
                            <button onClick={() => scrollToSection('summary')} className="text-gray-300 hover:text-white transition text-left">Summary</button>
                            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition text-left">Experience</button>
                            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition text-left">Skills</button>
                            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition text-left">Projects</button>
                            <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white transition text-left">Education</button>
                            <button onClick={() => scrollToSection('hobbies')} className="text-gray-300 hover:text-white transition text-left">Hobbies</button>
                            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition text-left">Contact</button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Nav;