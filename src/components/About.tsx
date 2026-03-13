import { Download, ChevronRight } from "lucide-react";
import MyImage from "@/assets/my_image.jpg"

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Redux", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Backend",
    items: ["Python", "Django", "Node.js", "Express", "DRF", "Prisma"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  },
  {
    title: "Current Focus",
    items: ["AI/ML", "Data Science", "System Architecture", "Mentoring"],
  },
];

const About = () => (
  <section id="about" className="py-20 bg-white dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1">
          <p className="text-xl md:text-2xl leading-relaxed mb-6">
            I'm a Fullstack Developer with <span className="text-primary-light dark:text-accent-light font-semibold">5+ years experience</span> building scalable web applications with <span className="text-primary-light dark:text-accent-light font-semibold">Django and React</span>. I specialize in creating responsive, high-performance apps and I'm currently expanding into <span className="text-primary-light dark:text-accent-light font-semibold">AI and Machine Learning</span>.
          </p>
          <a
            href="/TAIWO_BENEDICT_AJAYI_Fullstack_Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-primary-light dark:text-accent-light hover:underline text-xl"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary-light dark:bg-accent-dark rounded-lg transform rotate-3" />
            <div className="relative rounded-lg shadow-2xl w-full overflow-hidden max-w-md mx-auto bg-gray-300 dark:bg-gray-700 h-80 flex items-center justify-center">
              <img src={MyImage} className="w-full h-full object-cover" alt="Taiwo Benedict Ajayi" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Featured Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-bold mb-4 text-primary-light dark:text-accent-light">{group.title}</h4>
              <div className="h-1 w-16 bg-primary-light dark:bg-accent-dark mb-4" />
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ChevronRight size={16} className="text-primary-light dark:text-accent-light flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;