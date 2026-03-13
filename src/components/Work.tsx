import { useState } from "react";
import { Code, ExternalLink } from "lucide-react";
import Connect from "@/assets/Connect.jpg"
import Agapesprings from "@/assets/Agapesprings.png"
import Edulyncx from "@/assets/Edulyncx.png"
import Tradebanta from "@/assets/Tradebanta.png"
import JellyFish from "@/assets/JellyFish.jpg"
import Maxshop from "@/assets/Maxshop.jpg"
import Fazy from "@/assets/Fazy.jpg"
import Subcoin from "@/assets/Supcoin.png"


interface Project {
  title: string;
  description: React.ReactNode;
  tags: string[];
  sourceUrl: string;
  siteUrl: string;
  imageAlt: string;
  imageFirst?: boolean;
  imageUrl?: string;
}

const tabs = [
  { id: "fullstack", label: "Full-Stack Projects" },
  { id: "frontend", label: "Frontend Projects" },
  { id: "mini", label: "Mini Projects" },
];

const projects: Record<string, Project[]> = {
  fullstack: [
    {
      title: "Edulyncx",
      description: (
        <>
          A school management platform built with <span className="text-accent-dark dark:text-accent-light font-semibold">React, TypeScript and Django</span>. Features automated grading, CBT exams, and role-based access for students, teachers, and admins.
        </>
      ),
      tags: ["React", "Django", "Tailwind", "MySQL", "Chart.js"],
      sourceUrl: "https://github.com/taiwobenedict/",
      siteUrl: "https://edulyncx.com",
      imageAlt: "Edulyncx Website",
      imageFirst: false,
      imageUrl: Edulyncx
    },
    {
      title: "Connect",
      description: (
        <>
          Connect is a social networking site, where registered users share their thoughts with other users. Built with{" "}
          <span className="text-accent-dark dark:text-accent-light font-semibold">Django</span> and Bootstrap framework.
          Users can post, like posts, message other users and more.
        </>
      ),
      tags: ["Django", "Bootstrap", "Python", "PostgreSQL", ],
      sourceUrl: "https://github.com/taiwobenedict/connect",
      siteUrl: "https://connect-3jzd.onrender.com",
      imageAlt: "Connect Project",
      imageFirst: true,
      imageUrl: Connect
    },
    {
      title: "Maxshop Ecommerce",
      description: (
        <>
          Welcome to Maxshop, the ultimate destination for fashion and lifestyle enthusiasts. Our e-commerce website,
          built with{" "}
          <span className="text-accent-dark dark:text-accent-light font-semibold">React and Django</span>, offers a
          seamless and stylish platform for all your shopping needs.
        </>
      ),
      tags: ["React", "Django", "Redux", "Stripe", "Django REST"],
      sourceUrl: "https://github.com/taiwobenedict/eccommerce",
      siteUrl: "https://maxshop.onrender.com",
      imageAlt: "Maxshop Project",
      imageFirst: false,
      imageUrl: Maxshop
    },
  ],
  frontend: [
    {
      title: "Tradebanta",
      description: (
        <>
          A prediction/staking platform built with <span className="text-accent-dark dark:text-accent-light font-semibold">React, TypeScript and Socket.io</span> for real-time updates. Features admin dashboard, multi-currency wallet, and KYC verification.
        </>
      ),
      tags: ["React", "TypeScript", "Tailwind CSS", "Socket.io"],
      sourceUrl: "https://github.com/taiwobenedict/",
      siteUrl: "https://www.agapespringsint.com/",
      imageAlt: "Agapesprings Project",
      imageFirst: false,
      imageUrl: Tradebanta,
    },
    {
      title: "Agapesprings - Church Website",
      description: (
        <>
          A church website built with <span className="text-accent-dark dark:text-accent-light font-semibold">React and TypeScript</span>. Features YouTube API integration for sermon streaming, custom audio player, and resource shop.
        </>
      ),
      tags: ["React", "TypeScript", "YouTube API", "AOS"],
      sourceUrl: "https://github.com/taiwobenedict/",
      siteUrl: "https://www.agapespringsint.com/",
      imageAlt: "Agapesprings Project",
      imageFirst: true,
      imageUrl: Agapesprings
    },
    {
      title: "Supcoin",
      description: (
        <>
          Supcoin is a full website with over 15 pages and different functionalities and features built with JavaScript,{" "}
          <span className="text-accent-dark dark:text-accent-light font-semibold">React</span> and other libraries.
        </>
      ),
      tags: ["React", "JavaScript", "CSS3", "Bootstrap"],
      sourceUrl: "https://github.com/taiwobenedict/upcoin",
      siteUrl: "https://supcoin.netlify.com",
      imageAlt: "Supcoin Project",
      imageFirst: false,
      imageUrl: Subcoin
    },
  ],
  mini: [
    {
      title: "Fazy",
      description: (
        <>
          Fazy is a cryptocurrency landing page I developed for a happy customer. It is built with{" "}
          <span className="text-accent-dark dark:text-accent-light font-semibold">HTML, CSS and JavaScript</span>. Check
          the source code or the site for more details.
        </>
      ),
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      sourceUrl: "https://github.com/taiwobenedict/Fazy",
      siteUrl: "https://fazy.dev",
      imageAlt: "Fazy Project",
      imageFirst: false,
      imageUrl: Fazy
    },
    {
      title: "JellyFish",
      description: (
        <>
          JellyFish is also a cryptocurrency landing page I developed for a happy customer. It is built with{" "}
          <span className="text-accent-dark dark:text-accent-light font-semibold">Bootstrap</span>. You can check the
          source code or the site for more details.
        </>
      ),
      tags: ["HTML5", "Bootstrap 5", "CSS3", "JavaScript"],
      sourceUrl: "https://github.com/taiwobenedict/jellyfish",
      siteUrl: "https://jellyfishy.netlify.com",
      imageAlt: "JellyFish Project",
      imageFirst: true,
      imageUrl: JellyFish
    },
  ],
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-8 hover:shadow-2xl transition-shadow duration-300">
    <div className="grid md:grid-cols-2 gap-0">
      <div className={`${project.imageFirst ? "order-2" : "order-2 md:order-1"} p-8 md:p-12 flex flex-col justify-center`}>
        <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
        <div className="h-1 w-16 bg-accent-dark dark:bg-accent-light mb-6" />
        <p className="text-lg mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent-dark/10 dark:bg-accent-light/10 text-accent-dark dark:text-accent-light rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-light dark:text-accent-light hover:underline"
          >
            <Code size={16} /> Source Code
          </a>
          <a
            href={project.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-light dark:text-accent-light hover:underline"
          >
            <ExternalLink size={16} /> Visit Site
          </a>
        </div>
      </div>
      <div className={`${project.imageFirst ? "order-1" : "order-1 md:order-2"} h-64 md:h-auto bg-gray-200 dark:bg-gray-700 overflow-hidden`}>
        <img
          src={project.imageUrl}
          alt={project.imageAlt}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
    </div>
  </div>
);

const Work = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Work</h2>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400">Featured Projects</p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${activeTab === tab.id
                ? "bg-primary-light dark:bg-accent-dark text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div>
          {projects[activeTab]?.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
