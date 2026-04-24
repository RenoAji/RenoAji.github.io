import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SKILLS, PROJECTS, SERVICES } from './data';

const Header = () => (
  <header className="sticky top-0 z-50 bg-neo-bg border-b-4 border-neo-black py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="text-3xl font-black tracking-tighter uppercase whitespace-nowrap bg-neo-yellow px-2 border-2 border-neo-black brutal-shadow translate-y-[-2px] translate-x-[-2px]">RA.</div>
      <nav className="hidden md:flex gap-8">
        {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xl font-bold uppercase hover:bg-neo-yellow hover:text-neo-black border-2 border-transparent hover:border-neo-black px-2 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section className="min-h-[85vh] flex items-center border-b-4 border-neo-black bg-neo-yellow overflow-hidden relative">
    <div className="absolute w-full h-full" style={{ backgroundImage: "radial-gradient(#111 2px, transparent 0)", backgroundSize: "40px 40px", opacity: 0.1 }}></div>
    <div className="container mx-auto px-6 z-10 relative">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
          className="inline-block bg-neo-bg border-4 border-neo-black px-4 py-2 mb-6 brutal-shadow"
        >
          <span className="text-xl font-bold uppercase tracking-widest typing-cursor">Hello, I'm Septareno</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black uppercase leading-none mb-8 tracking-tighter"
        >
          Backend <span className="text-neo-bg" style={{ textShadow: "4px 4px 0 #111, -1px -1px 0 #111, 1px -1px 0 #111, -1px 1px 0 #111, 1px 1px 0 #111" }}>Developer</span> <br/>
          & AI Explorer.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl font-semibold mb-10 max-w-2xl bg-white border-2 border-neo-black p-4 brutal-shadow"
        >
          Still exploring a bunch of different things in the tech field.
          Currently interested in scalable architectures and Artificial Intelligence.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-6"
        >
          <a href="#projects" className="brutal-btn flex items-center gap-2 text-lg">
            View Projects <ArrowRight size={24} />
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/RenoAji" target="_blank" rel="noopener noreferrer" className="bg-white p-3 border-4 border-neo-black brutal-shadow hover:bg-neo-blue hover:text-white transition-colors">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/septareno-nugroho-aji-4743992b3" target="_blank" rel="noopener noreferrer" className="bg-white p-3 border-4 border-neo-black brutal-shadow hover:bg-neo-blue hover:text-white transition-colors">
              <FaLinkedin size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SectionTitle = ({ children, color = "bg-neo-blue" }) => (
  <div className="flex items-center gap-4 mb-16">
    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">{children}</h2>
    <div className={`h-4 flex-1 border-y-4 border-neo-black ${color}`}></div>
  </div>
);

const About = () => (
  <section id="about" className="py-24 border-b-4 border-neo-black bg-neo-bg">
    <div className="container mx-auto px-6">
      <SectionTitle color="bg-neo-red">About Me</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white border-4 border-neo-black p-8 brutal-shadow relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-neo-yellow border-b-4 border-l-4 border-neo-black -mt-4 -mr-4 flex items-center justify-center font-bold text-2xl">?</div>
          <p className="text-xl font-medium leading-relaxed">
            I am Septareno Nugroho Aji, an Informatics Engineering student at the Electronic Engineering Polytechnic Institute of Surabaya (EEPIS). 
            <br/><br/>
            I'm passionate about building software — from microservice architectures and RESTful APIs to real-time collaborative tools and AI-powered applications. I'm always eager to explore new technologies and take on challenges that push my skills further.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-neo-yellow border-4 border-neo-black p-6 brutal-shadow text-center">
            <h3 className="text-5xl font-black mb-2">9+</h3>
            <p className="text-lg font-bold uppercase">Projects</p>
          </div>
          <div className="bg-neo-green border-4 border-neo-black p-6 brutal-shadow text-center">
            <h3 className="text-5xl font-black mb-2">8+</h3>
            <p className="text-lg font-bold uppercase">Languages</p>
          </div>
          <div className="bg-neo-blue border-4 border-neo-black p-6 brutal-shadow text-center col-span-2 text-white">
            <h3 className="text-4xl font-black mb-2">EEPIS</h3>
            <p className="text-lg font-bold uppercase">Undergraduate Student</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = ({ items, direction = "left", bg = "bg-white", text = "text-neo-black" }) => (
  <div className={`border-y-4 border-neo-black py-4 overflow-hidden flex whitespace-nowrap ${bg} ${text}`}>
    <div className={`flex gap-8 px-4 w-max ${direction === 'left' ? 'animate-marquee' : 'animate-marquee'} hover:[animation-play-state:paused]`}>
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span key={i} className="text-3xl font-black uppercase flex items-center gap-4">
          {item}
          <span className="text-neo-red">•</span>
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-24 border-b-4 border-neo-black overflow-hidden bg-neo-bg">
    <div className="container mx-auto px-6 mb-12">
      <SectionTitle color="bg-neo-green">Tech Stack</SectionTitle>
    </div>
    
    <div className="flex flex-col gap-6 -rotate-2 scale-105">
      <Marquee items={SKILLS.languages} bg="bg-neo-black" text="text-white" />
      <Marquee items={SKILLS.frameworks} bg="bg-neo-yellow" />
      <Marquee items={SKILLS.tools} bg="bg-neo-blue" text="text-white" />
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 border-b-4 border-neo-black bg-neo-bg">
    <div className="container mx-auto px-6">
      <SectionTitle color="bg-neo-yellow">Projects</SectionTitle>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border-4 border-neo-black brutal-shadow group flex flex-col h-full"
          >
            <div className="h-60 border-b-4 border-neo-black overflow-hidden relative bg-gray-100">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {project.isLive && (
                <div className="absolute top-4 right-4 bg-neo-green border-2 border-neo-black px-3 py-1 font-bold text-sm uppercase transform rotate-3">
                  Live
                </div>
              )}
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-black uppercase mb-3 line-clamp-2">{project.title}</h3>
              <p className="text-lg font-medium mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 border-2 border-neo-black px-2 py-1 text-xs font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="brutal-btn !bg-neo-blue text-white w-full flex justify-center items-center gap-2 text-center text-sm"
              >
                {project.isLive ? <ExternalLink size={18} /> : <FaGithub size={18} />}
                {project.isLive ? 'Live Demo' : 'GitHub Repo'}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesList = () => (
  <section className="py-24 border-b-4 border-neo-black bg-neo-bg">
    <div className="container mx-auto px-6">
      <SectionTitle color="bg-neo-red">Services</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => (
          <div key={i} className="bg-white border-4 border-neo-black p-8 brutal-shadow relative mt-8">
            <div className="absolute -top-10 left-8 bg-neo-yellow border-4 border-neo-black p-4 brutal-shadow">
              <service.icon size={40} className="text-neo-black" />
            </div>
            <h3 className="text-2xl font-black uppercase mt-8 mb-4">{service.title}</h3>
            <p className="font-medium text-lg leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 bg-neo-yellow relative overflow-hidden">
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 transform -rotate-2">
        Let's Talk!
      </h2>
      <p className="text-2xl font-bold mb-12 max-w-2xl mx-auto bg-white border-4 border-neo-black p-6 brutal-shadow transform rotate-1">
        I'm always open to discussions, collaborations, or new opportunities. Don't hesitate to reach out.
      </p>
      <a href="mailto:renoaji25sep@gmail.com" className="brutal-btn !bg-neo-red text-white !text-2xl !px-12 !py-6 inline-flex items-center gap-4 hover:-rotate-2 transition-transform">
        <Mail size={32} /> Send Email
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-neo-black text-white py-8 border-t-8 border-neo-green">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="text-3xl font-black uppercase tracking-tighter">RenoAji.</div>
      <p className="font-bold uppercase">&copy; {new Date().getFullYear()} Septareno. All rights reserved.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen border-8 border-neo-black m-2 md:m-4 bg-neo-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ServicesList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
