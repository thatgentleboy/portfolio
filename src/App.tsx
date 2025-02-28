import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail, Phone, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Mobile menu button */}
      <button 
        onClick={toggleMenu} 
        className="fixed top-6 right-6 z-50 p-2 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 shadow-lg transition-all duration-300 hover:bg-gray-700"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side menu */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-gray-900/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out shadow-2xl ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full pt-20 px-6">
          <nav className="flex-1">
            <ul className="space-y-6">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`group flex items-center w-full py-2 px-4 rounded-lg transition-all duration-300 ${activeSection === section ? 'bg-gray-800/80 text-purple-400' : 'hover:bg-gray-800/50'}`}
                  >
                    <span className="capitalize text-lg font-medium">{section}</span>
                    <ChevronRight 
                      size={18} 
                      className={`ml-auto transition-transform duration-300 ${activeSection === section ? 'text-purple-400' : 'opacity-50 group-hover:opacity-100'} group-hover:translate-x-1`} 
                    />
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="py-8 border-t border-gray-800/50">
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/mantthhhan" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all duration-300">
                <GitHub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/mantthhhan" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mantthhhan@gmail.com" className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all duration-300">
                <Mail size={20} />
              </a>
              <a href="tel:8573978330" className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-all duration-300">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={closeMenu}
        ></div>
      )}

      {/* Main content */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
        
        <main>
          <section id="home" className="min-h-screen">
            <Hero scrollToSection={scrollToSection} />
          </section>
          
          <section id="about" className="py-20">
            <About />
          </section>
          
          <section id="experience" className="py-20 bg-gray-900/50">
            <Experience />
          </section>
          
          <section id="projects" className="py-20">
            <Projects />
          </section>
          
          <section id="skills" className="py-20 bg-gray-900/50">
            <Skills />
          </section>
          
          <section id="contact" className="py-20">
            <Contact />
          </section>
          
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;