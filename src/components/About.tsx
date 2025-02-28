import React from 'react';
import { Award, BookOpen, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Data Analyst and Business Intelligence professional with expertise in transforming complex data into actionable insights. With a strong foundation in data science and analytics, I help organizations make data-driven decisions that drive growth and efficiency.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in data analytics has taken me through various industries, from automotive finance at Mercedes-Benz to retail analytics at Stop & Shop and supply chain optimization at Amazon. This diverse experience has equipped me with a unique perspective on how data can solve business challenges across different sectors.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm constantly expanding my knowledge and skills in the ever-evolving field of data science, staying up-to-date with the latest tools, technologies, and methodologies.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 border border-gray-700/50">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 mr-4">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-300">Master's in Business Analytics, Northeastern University</p>
                  <p className="text-gray-400 text-sm">Boston, MA</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 border border-gray-700/50">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 mr-4">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['Python', 'SQL', 'Tableau', 'Power BI', 'AWS', 'Machine Learning', 'Data Visualization', 'ETL'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 border border-gray-700/50">
              <div className="flex items-start">
                <div className="p-3 rounded-lg bg-pink-500/10 text-pink-400 mr-4">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Google Analytics Professional</li>
                    <li>Lean Six Sigma Green Belt</li>
                    <li>AWS Cloud Practitioner</li>
                    <li>Tableau Desktop Specialist</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;