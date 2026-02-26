import { motion as Motion } from "motion/react";
import { Link } from "react-router";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink, Sun, Moon, MessageSquare } from "lucide-react";
import { ChatBot } from "./components/ChatBot";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import imgGroceryApp from "figma:asset/b0b9d7a2240d26f23ecd5aaa2af48fca0e3f12d9.png";
import imgGroceryMain from "figma:asset/54609b8492c2e2957dfd100c8917466610f34af2.png";
import imgComingSoon from "figma:asset/ade0a11749af58b0ff99f05c7bb8fbbdf575637f.png";
import imgImage2 from "figma:asset/26d5b38b0f31e62d38471747f1aeb7e3b1617254.png";

// Social Icons
import iconLinkedIn from "figma:asset/e6122c29d641e79e333dc45537b42601ea705000.png";
import iconEmail from "figma:asset/24bb08d8995c84428d17cccab720d3d6cd1fcd2b.png";
import iconBehance from "figma:asset/e86fad423c9d694840c75f5520b0db31a1cddf36.png";
import iconDribbble from "figma:asset/fd3fc4f117792d7a01e77bec4745ab53184ad7ba.png";

const projects = [
  {
    title: "Grocery Delivery App",
    category: "Mobile App",
    description: "A seamless end-to-end grocery shopping experience with real-time tracking, smart recommendations, and an intuitive checkout flow.",
    image: imgGroceryMain,
    tags: ["Mobile", "E-commerce", "UX Design"],
    link: "https://www.behance.net/gallery/244789697/Grocery-App-UI-UX"
  },
  {
    title: "Enterprise SaaS Platform",
    category: "SaaS / B2B",
    description: "A complex design system and platform for high-scale enterprise operations, focusing on data density and user efficiency.",
    image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1080",
    tags: ["Product Design", "UI/UX", "Design System"],
    link: "#"
  },
  {
    title: "Minimal Agency Website",
    category: "Web Design",
    description: "A clean, minimal landing page for a creative agency, emphasizing bold typography and smooth interactions.",
    image: "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?q=80&w=1080",
    tags: ["Branding", "Front-end", "Interaction"],
    link: "#"
  },
  {
    title: "Healthcare Dashboard",
    category: "Enterprise",
    description: "Streamlining patient management for medical professionals with an intuitive, accessibility-focused dashboard.",
    image: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?q=80&w=1080",
    tags: ["Healthcare", "Data Viz", "UX Research"],
    link: "#"
  },
  {
    title: "E-commerce Mobile App",
    category: "Mobile",
    description: "A seamless shopping experience for a luxury fashion brand, optimizing the conversion funnel and checkout flow.",
    image: "https://images.unsplash.com/photo-1755514838747-adfd34197d39?q=80&w=1080",
    tags: ["Mobile App", "E-commerce", "Figma"],
    link: "#"
  }
];

export default function ProjectsPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === 'dark';

  return (
    <Motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-[#030213] text-white' : 'bg-white text-[#101828]'}`}
    >
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? 'bg-[#030213]/80 border-white/10' : 'bg-white/80 border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className={`flex items-center gap-2 font-semibold text-lg transition-colors ${isDarkMode ? 'hover:text-blue-400 text-gray-200' : 'hover:text-blue-600 text-[#101828]'}`}>
            <ArrowLeft className="size-5" />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
              className={`p-2.5 rounded-full transition-all ${isDarkMode ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
            <div className="hidden sm:flex items-center gap-4">
              <Link to="/" className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'hover:text-blue-600'}`}>Home</Link>
              <span className="text-gray-300">/</span>
              <span className="text-sm font-medium text-blue-600">My Projects</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <div className="max-w-3xl mb-12 sm:mb-24">
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-6 border ${isDarkMode ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-blue-50 text-blue-700 border-blue-100'}`}
          >
            <img src={imgImage2} alt="Badge" className="size-4 sm:size-5 object-contain" />
            <span>CASE STUDIES</span>
          </Motion.div>
          <Motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-6xl font-bold tracking-tight mb-6 sm:mb-8 leading-[1.1]"
          >
            Selected Works & <br className="hidden sm:block" />
            <span className="text-blue-600">Product Experiments</span>
          </Motion.h1>
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className={`text-lg sm:text-xl leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
          >
            A collection of projects where I've helped businesses solve complex problems through strategic design and user-centered solutions.
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-lg ${isDarkMode ? 'bg-white/5 ring-1 ring-white/10' : 'bg-gray-100'}`}>
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${isDarkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    {project.category}
                  </span>
                  <div className={`h-px flex-1 ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-3 transition-colors ${isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'}`}>
                  {project.title}
                </h3>
                <p className={`mb-6 flex-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className={`text-xs font-medium px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-white/5 text-gray-400 border border-white/10' : 'bg-gray-100 text-gray-500'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <a 
                    href={project.link}
                    target={project.link.startsWith('http') ? "_blank" : "_self"}
                    rel={project.link.startsWith('http') ? "noopener noreferrer" : ""}
                    className={`flex items-center gap-2 text-sm font-bold transition-colors ${isDarkMode ? 'text-gray-200 hover:text-blue-400' : 'text-[#101828] hover:text-blue-600'}`}
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </main>

      <footer className={`py-20 mt-24 transition-colors duration-300 ${isDarkMode ? 'bg-black/40' : 'bg-[#030213] text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="max-w-lg">
              <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
              <p className="text-gray-400 text-lg">Let's build something amazing for your users and your business.</p>
            </div>
            <button 
              onClick={() => setIsChatOpen(true)}
              className={`px-8 py-4 font-bold rounded-full transition-all text-lg flex items-center justify-center gap-2 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white text-black hover:bg-gray-100'}`}
            >
              Get in Touch
              <MessageSquare className="size-5" />
            </button>
          </div>
          <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
            <p>© 2026 Farooq. All rights reserved.</p>
            <div className="flex gap-8 items-center">
              <a href="mailto:farooq260786@gmail.com" className="hover:scale-110 transition-transform">
                <img src={iconEmail} alt="Email" className="size-5 object-contain" />
              </a>
              <a href="https://www.linkedin.com/in/farooq26/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={iconLinkedIn} alt="LinkedIn" className="size-5 object-contain" />
              </a>
              <a href="https://dribbble.com/farooq26" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={iconDribbble} alt="Dribbble" className="size-5 object-contain" />
              </a>
              <a href="https://www.behance.net/abdulfarooq" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <img src={iconBehance} alt="Behance" className="size-5 object-contain" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </Motion.div>
  );
}
