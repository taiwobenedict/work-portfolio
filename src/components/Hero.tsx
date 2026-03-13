import { ArrowRight } from "lucide-react";
import DarkBgImage from "@/assets/backgroundimage.jpg"
import LightBgImage from "@/assets/backgroundimage1.jpg"

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector("#work");
    if (el) {
      const top = (el as HTMLElement).offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Dark/Light mode support */}
      <div className="absolute inset-0 w-full h-full">
        {/* Light mode background */}
        <img
          src={LightBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover dark:hidden"
          aria-hidden="true"
        />
        {/* Dark mode background */}
        <img
          src={DarkBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover hidden dark:block"
          aria-hidden="true"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-[#f7f7f7]/80 dark:bg-[#1a1a1a]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold text-[#1a1a1a] dark:text-white mb-4 tracking-tight leading-none">
          I'm Taiwo Ajayi
        </h1>
        <p className="text-[clamp(1.5rem,4vw,2.5rem)] text-[#555] dark:text-[#aaa] mb-12">
          A Full-Stack Web Engineer
        </p>
        <a
          href="#work"
          onClick={handleClick}
          className="inline-flex items-center gap-3 bg-[#82a698] hover:bg-[#6b8f82] text-white px-10 py-5 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          View My Work
          <ArrowRight size={22} />
        </a>
      </div>
    </section>
  );
};

export default Hero;