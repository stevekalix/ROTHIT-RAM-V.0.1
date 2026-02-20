import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-400">&copy; 2024 Rohith Ram. All rights reserved.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/rohith-ram-a631b82a4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="mailto:jrohithram@gmail.com" className="text-gray-400 hover:text-white transition">
                            <FaEnvelope size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;