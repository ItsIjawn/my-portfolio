import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Github, Linkedin, ExternalLink, Code2, Palette, Rocket, CheckCircle2, Facebook, Instagram } from 'lucide-react';
import profileImg from './assets/profile.jfif';
import pg1Img from './assets/purongginto1.png';
import be1Img from './assets/biteex1.png';
import pg2Img from './assets/purongginto2.png';
import pg3Img from './assets/purongginto3.png';
import be2Img from './assets/biteex2.png';
import be3Img from './assets/biteex3.png';
import be4Img from './assets/biteex4.png';


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});
  
  const sectionRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Purong Ginto",
      description: "Online Sari sari Store",
      image: pg1Img,
      detailedDescription: "A comprehensive e-commerce platform for a traditional Filipino sari-sari store, bringing the neighborhood shopping experience online. Features include product catalog, shopping cart, and order management.",
      technologies: ["HTML", "CSS", "JavaScript"],
      additionalImages: [pg1Img, pg2Img, pg3Img]
    },
    {
      title: "Bite-ex",
      description: "social media based recipe",
      image: be2Img,
      detailedDescription: "A social media platform designed for food enthusiasts to share, discover, and explore recipes. Users can post their favorite dishes, interact with other food lovers, and build a community around culinary creativity.",
      technologies: ["HTML/CSS", "PHP", "JavaScript", "SQL"],
      additionalImages: [be1Img, be2Img, be3Img, be4Img]
    }
  ];

  const skills = [
    { icon: Code2, name: "SCHOOL", items: ["LAS PINAS ELEMENTARY SCHOOL", "MUNTINLUPA NATIONAL HIGH SCHOOL", "CAVITE STATE UNIVERSITY"] },
    { icon: Palette, name: "TOOLS", items: ["CSS", "JAVA", "TAILWIND", "PYTHON", "FIGMA"] },
  ];

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-md' : 'bg-black/80 backdrop-blur-sm'}`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              ItsmeIjawn
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 ${activeSection === item.id ? 'text-pink-500 font-semibold' : 'text-gray-300 hover:text-pink-500'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black shadow-lg border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection === item.id ? 'bg-gray-900 text-pink-500 font-medium' : 'text-gray-300 hover:bg-gray-900'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-black"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-block animate-fade-in">
            <div className="w-80 h-80 mx-auto mb-6 overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-pink-500">
              <img
                src={profileImg}
                alt="John Dave Pelone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            John Dave M. Pelone
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            "The only way to learn programming is by writing code, but the only way to write code is to learn programming."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')} 
              className="px-8 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-8 py-3 bg-white text-black border-2 border-white rounded-lg font-medium hover:bg-gray-200 transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        ref={el => sectionRefs.current['about'] = el}
        className={`py-20 px-4 bg-black transition-all duration-1000 ${
          visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Yo! I am John Dave Pelone, a passionate and driven third-year college student with a strong interest in technology and its potential to shape the future.
              I am currently pursuing my studies with the goal of deepening my understanding of various aspects of the tech industry.
              I am eager to expand my knowledge and skills through hands-on projects, continuous learning, and active participation in the tech community.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              My journey in technology is fueled by a desire to not only learn but also to contribute.
              I am enthusiastic about sharing my ideas, insights, and learnings with others, and I am always looking for opportunities to collaborate on innovative projects.
              I am committed to showcasing my work and demonstrating my capabilities through a diverse portfolio of projects that reflect my passion and dedication to the field.
            </p>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-gray-900 border-2 border-gray-800 rounded-xl p-6 hover:shadow-xl hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-pink-500" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-white">{skill.name}</h4>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={el => sectionRefs.current['projects'] = el}
        className={`py-20 px-4 bg-black transition-all duration-1000 ${
          visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-800 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center text-pink-500 font-medium text-sm">
                      <span>View Details</span>
                      <ExternalLink size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-400 text-lg">Projects coming soon! Check back later.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={el => sectionRefs.current['contact'] = el}
        className={`py-20 px-4 bg-black transition-all duration-1000 ${
          visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-center">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 flex flex-col items-start">
              <a href="mailto:johndavepelone07@gmail.com" className="flex items-center text-gray-300 hover:text-pink-500 transition-colors group">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-pink-500 transition-colors">
                  <Mail className="group-hover:text-white transition-colors" size={20} />
                </div>
                <span>johndavepelone07@gmail.com</span>
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-pink-500 transition-colors group">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-pink-500 transition-colors">
                  <Facebook className="group-hover:text-white transition-colors" size={20} />
                </div>
                <span>www.facebook.com/jan.dee</span>
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-pink-500 transition-colors group">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-pink-500 transition-colors">
                  <Linkedin className="group-hover:text-white transition-colors" size={20} />
                </div>
                <span>www.linkedin.com/in/johndave-pelone</span>
              </a>
              <a href="#" className="flex items-center text-gray-300 hover:text-pink-500 transition-colors group">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-pink-500 transition-colors">
                  <Github className="group-hover:text-white transition-colors" size={20} />
                </div>
                <span>github.com/ItsIjawn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 px-4">
        <div className="mx-auto text-center">
          <p className="text-gray-500">
            © 2025 John Dave M. Pelone. All right reserved.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-gray-900 border-b border-gray-800 px-6 py-4 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={24} className="text-white" />
              </button>
            </div>
            
            <div className="p-6">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedProject.additionalImages.map((img, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={img} 
                      alt={`${selectedProject.title} screenshot ${idx + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">About This Project</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.detailedDescription}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium border border-pink-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}