import { motion } from 'framer-motion';

const Nav = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
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
                        <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition">Skills</button>
                        <button onClick={() => scrollToSection('education')} className="text-gray-300 hover:text-white transition">Education</button>
                        <button onClick={() => scrollToSection('hobbies')} className="text-gray-300 hover:text-white transition">Hobbies</button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition">Contact</button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Nav;