import { Linkedin, Github, Twitter, MessageCircle } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/ajayi234" },
  { icon: Github, href: "https://github.com/taiwobenedict" },
  { icon: Twitter, href: "https://twitter.com/Taiwo29904903?t=7MZ_C5vIAOJf4YHxfWaEKQ&s=09" },
  { icon: MessageCircle, href: "https://wa.me/+2349075058582" },
];

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center gap-6 mb-6">
        {socials.map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center border-2 border-gray-900 dark:border-gray-100 rounded-full hover:bg-primary-light dark:hover:bg-accent-light hover:border-primary-light dark:hover:border-accent-light transition-all duration-300 transform hover:scale-110"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <p className="text-center text-gray-600 dark:text-gray-400">
        TAIWO AJAYI <span className="text-accent-dark dark:text-accent-light">&copy; 2024</span>
      </p>
    </div>
  </footer>
);

export default Footer;
