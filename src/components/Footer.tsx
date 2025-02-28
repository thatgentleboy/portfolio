import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-800 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent mb-2">
                Manthan Goundadkar
              </h3>
              <p className="text-gray-400">
                Data Analyst & Business Intelligence Professional
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/mantthhhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/mantthhhan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:mantthhhan@gmail.com"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:8573978330"
                className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-green-600 hover:text-white transition-colors duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Manthan Goundadkar. All rights reserved.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-purple-600 hover:text-white transition-colors duration-300 flex items-center"
            >
              <ArrowUp size={20} />
              <span className="ml-2">Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;