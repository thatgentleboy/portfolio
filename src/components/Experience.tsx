import React, { useState } from 'react';
import { Building, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Mercedes-Benz Financial Services",
    role: "Business Intelligence Analyst",
    period: "Jan 2023 - Present",
    location: "Boston, MA",
    description: [
      "Developed and maintained interactive dashboards using Tableau and Power BI, providing real-time insights into financial performance metrics and customer behavior patterns.",
      "Implemented advanced data modeling techniques to analyze customer payment patterns, resulting in a 15% improvement in risk assessment accuracy.",
      "Collaborated with cross-functional teams to identify key performance indicators and develop data-driven strategies for business growth.",
      "Automated reporting processes using Python and SQL, reducing manual effort by 30% and improving data accuracy."
    ],
    technologies: ["Tableau", "Power BI", "Python", "SQL", "Data Modeling", "Financial Analytics"]
  },
  {
    id: 2,
    company: "Stop & Shop",
    role: "Data Analyst",
    period: "May 2022 - Dec 2022",
    location: "Quincy, MA",
    description: [
      "Analyzed customer purchase data to identify shopping patterns and preferences, contributing to a 10% increase in targeted marketing campaign effectiveness.",
      "Developed predictive models to forecast product demand, helping optimize inventory management and reduce stockouts by 20%.",
      "Created comprehensive reports and visualizations to communicate insights to stakeholders, supporting data-driven decision making.",
      "Collaborated with the marketing team to segment customers based on purchasing behavior, enabling personalized promotional strategies."
    ],
    technologies: ["Python", "R", "SQL", "Excel", "Retail Analytics", "Predictive Modeling"]
  },
  {
    id: 3,
    company: "Amazon",
    role: "Supply Chain Analyst Intern",
    period: "Jun 2021 - Aug 2021",
    location: "Seattle, WA",
    description: [
      "Analyzed supply chain data to identify bottlenecks and inefficiencies, contributing to a 12% improvement in delivery times.",
      "Developed dashboards to monitor key performance metrics across the supply chain network.",
      "Collaborated with logistics teams to optimize warehouse operations based on data insights.",
      "Participated in process improvement initiatives, applying Lean Six Sigma methodologies to streamline operations."
    ],
    technologies: ["AWS", "Python", "SQL", "Supply Chain Analytics", "Process Optimization"]
  }
];

const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<number>(1);

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperience(exp.id)}
                  className={`w-full text-left p-4 border-b border-gray-700/50 last:border-b-0 transition-all duration-300 flex items-center justify-between ${activeExperience === exp.id ? 'bg-gray-700/50 text-purple-400' : 'hover:bg-gray-700/30'}`}
                >
                  <div>
                    <p className="font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.role}</p>
                  </div>
                  <ChevronRight 
                    size={18} 
                    className={`transition-transform duration-300 ${activeExperience === exp.id ? 'text-purple-400 rotate-90' : 'text-gray-500'}`} 
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 transition-all duration-500 ${activeExperience === exp.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 absolute -z-10 transform translate-y-4'}`}
                style={{ display: activeExperience === exp.id ? 'block' : 'none' }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="flex flex-wrap items-center text-gray-300 gap-y-2">
                    <div className="flex items-center mr-4">
                      <Building size={16} className="mr-2 text-purple-400" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="w-full mt-1 text-gray-400">
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-200">Responsibilities & Achievements</h4>
                  <ul className="space-y-3">
                    {exp.description.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-200">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;