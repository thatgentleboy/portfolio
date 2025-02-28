import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) title.classList.add('animate-fade-in');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 500);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in');
    }, 1000);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 transition-opacity duration-1000"
        >
          <span className="block">Hi, I'm</span>
          <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 bg-clip-text text-transparent">
            Manthan Goundadkar
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 mb-10 opacity-0 transition-opacity duration-1000 delay-500"
        >
          Transforming complex data into actionable business intelligence
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 transition-opacity duration-1000 delay-1000"
        >
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
          >
            View My Work
          </button>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 rounded-full bg-transparent border border-gray-600 text-white font-medium transform transition-all duration-300 hover:border-purple-400 hover:text-purple-400"
          >
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full border border-gray-600 transition-all duration-300 hover:border-purple-400 hover:text-purple-400"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;