import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'data' | 'visualization' | 'cloud' | 'soft';
  color: string;
}

const skills: Skill[] = [
  // Programming
  { name: 'Python', level: 90, category: 'programming', color: 'from-blue-400 to-blue-600' },
  { name: 'SQL', level: 95, category: 'programming', color: 'from-orange-400 to-orange-600' },
  { name: 'R', level: 80, category: 'programming', color: 'from-blue-500 to-blue-700' },
  { name: 'JavaScript', level: 75, category: 'programming', color: 'from-yellow-400 to-yellow-600' },
  
  // Data
  { name: 'Data Analysis', level: 95, category: 'data', color: 'from-green-400 to-green-600' },
  { name: 'Machine Learning', level: 85, category: 'data', color: 'from-purple-400 to-purple-600' },
  { name: 'Statistical Modeling', level: 80, category: 'data', color: 'from-indigo-400 to-indigo-600' },
  { name: 'ETL Processes', level: 90, category: 'data', color: 'from-red-400 to-red-600' },
  
  // Visualization
  { name: 'Tableau', level: 95, category: 'visualization', color: 'from-blue-400 to-blue-600' },
  { name: 'Power BI', level: 90, category: 'visualization', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Data Visualization', level: 90, category: 'visualization', color: 'from-green-400 to-green-600' },
  
  // Cloud
  { name: 'AWS', level: 85, category: 'cloud', color: 'from-orange-400 to-orange-600' },
  { name: 'Azure', level: 75, category: 'cloud', color: 'from-blue-400 to-blue-600' },
  { name: 'Cloud Computing', level: 80, category: 'cloud', color: 'from-purple-400 to-purple-600' },
  
  // Soft Skills
  { name: 'Problem Solving', level: 95, category: 'soft', color: 'from-pink-400 to-pink-600' },
  { name: 'Communication', level: 90, category: 'soft', color: 'from-teal-400 to-teal-600' },
  { name: 'Project Management', level: 85, category: 'soft', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Team Leadership', level: 80, category: 'soft', color: 'from-red-400 to-red-600' },
];

const categories = [
  { id: 'programming', name: 'Programming Languages' },
  { id: 'data', name: 'Data Science & Analytics' },
  { id: 'visualization', name: 'Visualization Tools' },
  { id: 'cloud', name: 'Cloud & Infrastructure' },
  { id: 'soft', name: 'Soft Skills' },
];

const Skills: React.FC = () => {
  const skillBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.level}%`;
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillBarsRef.current) {
      observer.observe(skillBarsRef.current);
    }

    return () => {
      if (skillBarsRef.current) {
        observer.unobserve(skillBarsRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div ref={skillBarsRef} className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-white">{category.name}</h3>
              
              <div className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`skill-bar-fill h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: '0%' }}
                          data-level={skill.level}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="text-4xl font-bold text-pink-400 mb-2">10+</div>
            <div className="text-gray-300">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;