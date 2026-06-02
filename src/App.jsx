import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SKILLS, PROJECTS, SERVICES } from "./data";

const Header = () => (
  <header className="sticky top-0 z-50 bg-neo-bg border-b-4 border-neo-black py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <div className="text-3xl font-black tracking-tighter uppercase whitespace-nowrap bg-neo-yellow px-2 border-2 border-neo-black brutal-shadow translate-y-[-2px] translate-x-[-2px]">
        RA.
      </div>
      <nav className="hidden md:flex gap-8">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
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
  <section className="min-h-[85vh] py-16 md:py-24 flex items-center border-b-4 border-neo-black bg-neo-yellow overflow-hidden relative">
    <div
      className="absolute w-full h-full"
      style={{
        backgroundImage: "radial-gradient(#111 2px, transparent 0)",
        backgroundSize: "40px 40px",
        opacity: 0.1,
      }}
    ></div>
    <div className="container mx-auto px-6 z-10 relative">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
          className="inline-block bg-neo-bg border-4 border-neo-black px-4 py-2 mb-6 brutal-shadow max-w-full"
        >
          <span className="text-base sm:text-xl font-bold uppercase tracking-widest typing-cursor">
            Hello, I'm Septareno
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-black uppercase leading-[1.1] sm:leading-none mb-8 tracking-tighter break-words"
        >
          Backend{" "}
          <span
            className="text-neo-bg"
            style={{
              textShadow:
                "4px 4px 0 #111, -1px -1px 0 #111, 1px -1px 0 #111, -1px 1px 0 #111, 1px 1px 0 #111",
            }}
          >
            Engineer
          </span>{" "}
          <br />& Systems Explorer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-2xl font-semibold mb-10 max-w-2xl bg-white border-2 border-neo-black p-4 brutal-shadow"
        >
          An Informatics Engineering student who loves diving into the deep end
          of tech. I spend my time exploring scalable system architectures,
          building high-throughput backends, and experimenting with AI
          integration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap gap-6"
        >
          <a
            href="#projects"
            className="brutal-btn flex items-center gap-2 text-lg"
          >
            View Projects <ArrowRight size={24} />
          </a>
          <div className="flex gap-4">
            <a
              href="https://github.com/RenoAji"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 border-4 border-neo-black brutal-shadow hover:bg-neo-blue hover:text-white transition-colors"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/septareno-nugroho-aji-4743992b3"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 border-4 border-neo-black brutal-shadow hover:bg-neo-blue hover:text-white transition-colors"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const SectionTitle = ({ children, color = "bg-neo-blue" }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12 sm:mb-16 w-full overflow-hidden">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter">
      {children}
    </h2>
    <div
      className={`h-4 w-full sm:flex-1 border-y-4 border-neo-black ${color}`}
    ></div>
  </div>
);

const About = () => (
  <section id="about" className="py-24 border-b-4 border-neo-black bg-neo-bg">
    <div className="container mx-auto px-6">
      <SectionTitle color="bg-neo-red">About Me</SectionTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white border-4 border-neo-black p-8 brutal-shadow relative">
          <div className="absolute top-0 right-0 w-16 h-16 bg-neo-yellow border-b-4 border-l-4 border-neo-black -mt-4 -mr-4 flex items-center justify-center font-bold text-2xl">
            ?
          </div>
          <p className="text-xl font-medium leading-relaxed">
            I am Septareno Nugroho Aji, an Informatics Engineering student at
            Politeknik Elektronika Negeri Surabaya (PENS).
            <br />
            <br />
            My true passion lies in behind-the-scenes engineering - architecting
            microservices, optimizing databases, and mapping out scalable
            server-side systems. Driven by an intense curiosity for how complex
            systems operate, I treat the tech field as a playground for
            continuous learning. Whether it's managing messaging streams,
            configuring local virtual environments, or integrating AI models
            into practical software, I thrive on turning challenging technical
            hurdles into clean, efficient code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-neo-yellow border-4 border-neo-black p-6 brutal-shadow text-center">
            <h3 className="text-3xl sm:text-4xl font-black mb-2">Backend</h3>
            <p className="text-base sm:text-lg font-bold uppercase">
              Systems Architecture
            </p>
          </div>
          <div className="bg-neo-green border-4 border-neo-black p-6 brutal-shadow text-center">
            <h3 className="text-4xl sm:text-5xl font-black mb-2">9+</h3>
            <p className="text-base sm:text-lg font-bold uppercase">
              Built & Deployed
            </p>
          </div>
          <div className="bg-neo-blue border-4 border-neo-black p-6 brutal-shadow text-center col-span-1 sm:col-span-2 text-white">
            <h3 className="text-3xl sm:text-4xl font-black mb-2">
              4th Semester
            </h3>
            <p className="text-base sm:text-lg font-bold uppercase">
              Applied Bachelor Student
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = ({
  items,
  direction = "left",
  bg = "bg-white",
  text = "text-neo-black",
}) => (
  <div
    className={`border-y-4 border-neo-black py-4 overflow-hidden flex whitespace-nowrap ${bg} ${text}`}
  >
    <div
      className={`flex gap-8 px-4 w-max ${direction === "left" ? "animate-marquee" : "animate-marquee"} hover:[animation-play-state:paused]`}
    >
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span
          key={i}
          className="text-3xl font-black uppercase flex items-center gap-4"
        >
          {item}
          <span className="text-neo-red">•</span>
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section
    id="skills"
    className="py-24 border-b-4 border-neo-black overflow-hidden bg-neo-bg"
  >
    <div className="container mx-auto px-6">
      <SectionTitle color="bg-neo-green">Technical Ecosystem</SectionTitle>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Languages Card */}
        <div className="border-4 border-neo-black brutal-shadow bg-white flex flex-col">
          <div className="border-b-4 border-neo-black bg-neo-yellow p-4 flex items-center justify-between">
            <span className="text-xl font-black uppercase tracking-tight text-neo-black">
              Languages
            </span>
            <div className="flex gap-1.5">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-neo-black bg-neo-red"></div>
              <div className="w-3.5 h-3.5 rounded-full border-2 border-neo-black bg-neo-yellow"></div>
              <div className="w-3.5 h-3.5 rounded-full border-2 border-neo-black bg-neo-green"></div>
            </div>
          </div>
          <div className="p-6 flex-grow">
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.languages.map((item) => (
                <span
                  key={item}
                  className="bg-neo-bg text-neo-black border-2 border-neo-black px-3 py-1.5 font-bold text-sm uppercase shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:bg-neo-yellow active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Backend Card */}
        <div className="border-4 border-neo-black brutal-shadow bg-white flex flex-col">
          <div className="border-b-4 border-neo-black bg-neo-blue p-4 flex items-center justify-between">
            <span className="text-xl font-black uppercase tracking-tight text-white">
              Backend Specs
            </span>
            <div className="flex gap-1.5">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-neo-black bg-neo-red"></div>
              <div className="w-3.5 h-3.5 rounded-full border-2 border-neo-black bg-neo-yellow"></div>
              <div className="w-3.5 h-3.5 rounded-full border-2 border-neo-black bg-neo-green"></div>
            </div>
          </div>
          <div className="p-6 flex-grow">
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.frameworks.map((item) => (
                <span
                  key={item}
                  className="bg-neo-bg text-neo-black border-2 border-neo-black px-3 py-1.5 font-bold text-sm uppercase shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:bg-neo-blue hover:text-white active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Infra Card */}
        <div className="border-4 border-neo-black brutal-shadow bg-white flex flex-col">
          <div className="border-b-4 border-neo-black bg-neo-green p-4 flex items-center justify-between">
            <span className="text-xl font-black uppercase tracking-tight text-neo-black">
              Infra & Tools
            </span>
            <div className="flex gap-1.5">
              <div className="w-3.5 h-3.5 rounded-full border-2 border-neo-black bg-neo-red"></div>
              <div className="w-3.5 h-3.5 rounded-full border-2 border-neo-black bg-neo-yellow"></div>
              <div className="w-3.5 h-3.5 rounded-full border-2 border-neo-black bg-neo-green"></div>
            </div>
          </div>
          <div className="p-6 flex-grow">
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.tools.map((item) => (
                <span
                  key={item}
                  className="bg-neo-bg text-neo-black border-2 border-neo-black px-3 py-1.5 font-bold text-sm uppercase shadow-[2px_2px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:bg-neo-green active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section
    id="projects"
    className="py-24 border-b-4 border-neo-black bg-neo-bg"
  >
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
              <h3 className="text-2xl font-black uppercase mb-3 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-lg font-medium mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 border-2 border-neo-black px-2 py-1 text-xs font-bold uppercase"
                  >
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
                {project.isLive ? (
                  <ExternalLink size={18} />
                ) : (
                  <FaGithub size={18} />
                )}
                {project.isLive ? "Live Demo" : "GitHub Repo"}
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
      <SectionTitle color="bg-neo-red">Services / Capabilities</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className="bg-white border-4 border-neo-black p-8 brutal-shadow relative mt-8"
          >
            <div className="absolute -top-10 left-8 bg-neo-yellow border-4 border-neo-black p-4 brutal-shadow">
              <service.icon size={40} className="text-neo-black" />
            </div>
            <h3 className="text-2xl font-black uppercase mt-8 mb-4">
              {service.title}
            </h3>
            <p className="font-medium text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section
    id="contact"
    className="py-24 sm:py-32 bg-neo-yellow relative overflow-hidden"
  >
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 transform -rotate-2">
        Let's talk
      </h2>
      <p className="text-lg sm:text-2xl font-bold mb-12 max-w-2xl mx-auto bg-white border-4 border-neo-black p-6 brutal-shadow transform rotate-1">
        I am always looking to connect with fellow engineers, collaborate on
        backend infrastructure, or discuss upcoming engineering internship
        opportunities.
      </p>
      <a
        href="mailto:renoaji25sep@gmail.com"
        className="brutal-btn !bg-neo-red text-white !text-lg sm:!text-2xl !px-8 sm:!px-12 !py-4 sm:!py-6 inline-flex items-center gap-4 hover:-rotate-2 transition-transform"
      >
        <Mail size={32} /> Send Email
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-neo-black text-white py-8 border-t-4 sm:border-t-8 border-neo-green">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
      <div className="text-3xl font-black uppercase tracking-tighter">
        RenoAji.
      </div>
      <p className="font-bold uppercase text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Septareno. All rights reserved.
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen border-4 sm:border-8 border-neo-black sm:m-2 md:m-4 bg-neo-bg overflow-x-hidden">
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
