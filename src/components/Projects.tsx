import React, { useState } from 'react';
import { ExternalLink, Github, BarChart3, Database, LineChart } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  category: 'data' | 'visualization' | 'ml';
}

const projects: Project[] = [
  {
    id: 1,
    title: "Scalable Stock Market Data Pipeline Using AWS",
    description: "Built an end-to-end data pipeline for processing and analyzing stock market data using AWS services including S3, Lambda, Glue, and Athena. The pipeline ingests real-time stock data, processes it, and makes it available for analysis through a dashboard.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["AWS", "Python", "S3", "Lambda", "Glue", "Athena", "ETL"],
    github: "https://github.com/mantthhhan/Scalable-Stock-Market-Data-Pipeline-Using-AWS",
    category: 'data'
  },
  {
    id: 2,
    title: "Beauty Retail Sales Analytics Dashboard",
    description: "Developed a comprehensive Tableau dashboard for beauty retail sales analysis, providing insights into product performance, customer demographics, and sales trends. The dashboard helps identify top-performing products, customer segments, and opportunities for growth.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Tableau", "SQL", "Data Visualization", "Retail Analytics"],
    github: "https://github.com/mantthhhan/Beauty-Retail-Sales-Analytics-A-Tableau-Driven-Data-Story",
    demo: "https://public.tableau.com/shared/74SG5QBF5?:display_count=n&:origin=viz_share_link",
    category: 'visualization'
  },
  {
    id: 3,
    title: "Heart Disease Prediction",
    description: "Created a machine learning model to predict the likelihood of heart disease based on various health parameters. The model uses a combination of classification algorithms and feature engineering to achieve high accuracy in predictions.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "Scikit-learn", "Pandas", "Machine Learning", "Classification"],
    github: "https://github.com/mantthhhan/Heart-Disease-predictive-model",
    category: 'ml'
  },
  {
    id: 4,
    title: "Airbnb Rental Analysis",
    description: "Analyzed Airbnb rental data to identify patterns in occupancy rates, pricing strategies, and customer preferences. The project includes exploratory data analysis, statistical modeling, and visualization of key insights.",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "R", "Data Analysis", "Visualization", "Statistical Modeling"],
    github: "https://github.com/mantthhhan/Airbnb-Rental-and-Occupancy-Analysis-Machine-Learning-Insights",
    category: 'data'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'data':
        return <Database size={18} />;
      case 'visualization':
        return <BarChart3 size={18} />;
      case 'ml':
        return <LineChart size={18} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'all' ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('data')}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${filter === 'data' ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              <Database size={16} />
              Data Engineering
            </button>
            <button
              onClick={() => setFilter('visualization')}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${filter === 'visualization' ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              <BarChart3 size={16} />
              Visualization
            </button>
            <button
              onClick={() => setFilter('ml')}
              className={`px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${filter === 'ml' ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              <LineChart size={16} />
              Machine Learning
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transform transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                
                <div className="absolute top-4 left-4 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2 text-sm text-purple-300 border border-gray-700/50">
                  {getCategoryIcon(project.category)}
                  <span>
                    {project.category === 'data' ? 'Data Engineering' : 
                     project.category === 'visualization' ? 'Visualization' : 
                     'Machine Learning'}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700/50 rounded-full text-xs text-purple-300">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">Click to view details</div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-700/50 text-white hover:bg-gray-600 transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-700/50 text-white hover:bg-gray-600 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div 
                className={`absolute inset-0 bg-purple-900/20 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex items-center justify-center ${hoveredProject === project.id ? 'opacity-100' : ''}`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg px-6 py-3 transform transition-transform duration-300 scale-90 group-hover:scale-100">
                  <span className="text-white font-medium">View Project Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            ></div>
            
            <div className="relative bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors duration-300 z-10"
              >
                <X size={20} />
              </button>
              
              <div className="relative h-64 sm:h-80">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 text-gray-200">Project Overview</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>
                
                {selectedProject.id === 2 && (
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-3 text-gray-200">Live Dashboard</h4>
                    <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                      <iframe 
                        title="Tableau Dashboard"
                        src="https://public.tableau.com/shared/74SG5QBF5?:display_count=n&:origin=viz_share_link"
                        width="100%" 
                        height="100%" 
                        style={{ border: 'none' }}
                      ></iframe>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                  
                  {selectedProject.demo && (
                    <a 
                      href={selectedProject.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300 flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      View Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;