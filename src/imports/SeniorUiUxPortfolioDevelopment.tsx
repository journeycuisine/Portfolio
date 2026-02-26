import { motion as Motion } from "motion/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { 
  Menu, X, Download, Linkedin, Github, ExternalLink, 
  ArrowRight, Mail, MapPin, ChevronDown, Monitor, 
  Smartphone, Layout, Briefcase, User, MessageSquare,
  Sun, Moon
} from "lucide-react";
import { ChatBot } from "../app/components/ChatBot";
import { ImageWithFallback } from "../app/components/figma/ImageWithFallback";
import svgPaths from "./svg-3o85r2hnv5";
import imgImageMyPhoto from "https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?q=80&w=1080";
import imgUntitled21 from "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080";
import imgSearch31 from "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=1080";
import imgUxDesign1 from "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1080";
import imgCooperation1 from "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080";
import imgFigma1 from "https://cdn-icons-png.flaticon.com/512/5968/5968705.png";
import imgGroceryApp from "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080";
import imgGroceryMain from "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1080";
import imgComingSoon from "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1080";
import imgImage2 from "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1080";

// Social Icons
const iconLinkedIn = "https://cdn-icons-png.flaticon.com/512/174/174857.png";
const iconEmail = "https://cdn-icons-png.flaticon.com/512/732/732200.png";
const iconBehance = "https://cdn-icons-png.flaticon.com/512/145/145801.png";
const iconDribbble = "https://cdn-icons-png.flaticon.com/512/145/145802.png";

export default function SeniorUiUxPortfolioDevelopment() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "home", icon: Monitor },
    { name: "About", id: "about", icon: User },
    { name: "Process", id: "process", icon: Layout },
    { name: "Skills", id: "skills", icon: Smartphone },
    { name: "Contact", id: "contact", icon: MessageSquare },
  ];

  if (!mounted) return null;

  return (
    <div className={`font-sans overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300 ${isDarkMode ? 'dark bg-[#030213] text-white' : 'bg-white text-[#101828]'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 inset-x-0 z-[100] backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? 'bg-[#030213]/80 border-white/10' : 'bg-white/80 border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 font-bold text-2xl tracking-tighter cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <span className="bg-blue-600 text-white size-8 rounded flex items-center justify-center">F</span>
            <span>FAROOQ</span>
          </Motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isDarkMode ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-gray-50 text-gray-700'}`}
              >
                {item.name}
              </button>
            ))}
            
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2.5 rounded-full transition-all ${isDarkMode ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>

            <button
              onClick={() => navigate('/projects')}
              className={`ml-4 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-[#101828] text-white hover:bg-black'}`}
            >
              My Projects
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'bg-white/10 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
            >
              {isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
            <button 
              className={`p-2 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        <Motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          className={`md:hidden border-t overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-[#030213] border-white/10' : 'bg-white border-gray-100'}`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg font-medium transition-colors text-left ${isDarkMode ? 'hover:bg-white/10 text-gray-300' : 'hover:bg-gray-50 text-gray-700'}`}
              >
                <item.icon className="size-5 text-gray-400" />
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                navigate('/projects');
              }}
              className={`w-full mt-4 px-6 py-4 rounded-xl text-lg font-bold shadow-lg flex items-center justify-center gap-2 ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-[#101828] text-white'}`}
            >
              <Briefcase className="size-5" />
              My Projects
            </button>
          </div>
        </Motion.div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-[calc(100vh-80px)] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5">
            <div className={`absolute top-0 right-0 w-1/2 h-1/2 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 ${isDarkMode ? 'bg-blue-400 opacity-20' : 'bg-blue-600'}`} />
            <div className={`absolute bottom-0 left-0 w-1/3 h-1/3 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 ${isDarkMode ? 'bg-purple-400 opacity-20' : 'bg-purple-600'}`} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <Motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-semibold mb-8 border ${isDarkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border-emerald-100'}`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  AVAILABLE FOR NEW OPPORTUNITIES
                </div>
                
                <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
                  Designing Solutions, <br />
                  <span className="text-blue-600">Not Just Visuals.</span>
                </h1>
                
                <p className={`text-xl leading-relaxed max-w-xl mb-10 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Hello! I'm Farooq. I'm a <span className={`font-bold italic ${isDarkMode ? 'text-white' : 'text-[#101828]'}`}>UX Leader & Product Designer</span> focused on crafting clean, user-centric experiences for enterprise-scale platforms.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <button 
                    onClick={() => setIsChatOpen(true)}
                    className={`px-8 py-4 font-bold rounded-2xl transition-all shadow-xl hover:shadow-2xl active:scale-95 flex items-center justify-center gap-2 ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-[#101828] text-white hover:bg-black'}`}
                  >
                    Let's Talk
                    <MessageSquare className="size-5" />
                  </button>
                  <a 
                    href="https://drive.google.com/file/d/1cogX_T_c3WeL9ae4lagRKcAU3BHuotQ4/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-8 py-4 border-2 font-bold rounded-2xl transition-all flex items-center justify-center gap-2 ${isDarkMode ? 'border-white/10 text-white hover:bg-white/5' : 'border-gray-200 text-[#101828] hover:bg-gray-50'}`}
                  >
                    <Download className="size-5" />
                    Download CV
                  </a>
                </div>

                <div className={`flex items-center gap-8 pt-8 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-100'}`}>
                  <a href="mailto:farooq260786@gmail.com" className={`flex items-center gap-2 group transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-[#101828]'}`}>
                    <img src={iconEmail} alt="Email" className="size-5 object-contain" />
                    <span className="font-medium">Email</span>
                  </a>
                  <a href="https://www.linkedin.com/in/farooq26/" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 group transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600'}`}>
                    <img src={iconLinkedIn} alt="LinkedIn" className="size-5 object-contain" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a href="https://dribbble.com/farooq26" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 group transition-colors ${isDarkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-500 hover:text-pink-600'}`}>
                    <img src={iconDribbble} alt="Dribbble" className="size-5 object-contain" />
                    <span className="font-medium">Dribbble</span>
                  </a>
                  <a href="https://www.behance.net/abdulfarooq" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 group transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-300' : 'text-gray-500 hover:text-blue-400'}`}>
                    <img src={iconBehance} alt="Behance" className="size-5 object-contain" />
                    <span className="font-medium">Behance</span>
                  </a>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className={`relative aspect-[4/5] sm:aspect-square rounded-[2rem] overflow-hidden shadow-2xl ${isDarkMode ? 'ring-1 ring-white/10' : ''}`}>
                  <img src={imgImageMyPhoto} alt="Farooq" className="size-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent`} />
                </div>
                
                {/* Floating Badge */}
                <Motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -bottom-6 -left-6 sm:-left-12 p-6 rounded-2xl shadow-2xl max-w-[200px] border hidden sm:block ${isDarkMode ? 'bg-[#101828] border-white/10' : 'bg-white border-gray-50'}`}
                >
                  <p className="text-sm font-bold text-blue-600 mb-1">12+ YEARS</p>
                  <p className={`text-xs leading-tight ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Delivering impactful design for global enterprises</p>
                </Motion.div>
              </Motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 relative">
                <div className={`aspect-square rounded-3xl overflow-hidden ${isDarkMode ? 'ring-1 ring-white/10' : ''}`}>
                  <img src={imgUntitled21} alt="Process" className="size-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -right-10 size-40 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none" />
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-blue-600" />
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-600">ABOUT ME</span>
                </div>
                <h2 className="text-4xl font-bold mb-8 leading-tight">Crafting Digital Experiences with Purpose</h2>
                <div className={`space-y-6 text-lg leading-relaxed mb-10 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <p>
                    I follow a data-informed, collaborative design process that balances speed with rigor. My approach is centered on understanding the "Why" before the "How".
                  </p>
                  <p>
                    Over the past 12 years, I've led design initiatives for B2B SaaS platforms, complex enterprise workflows, and high-growth consumer products. I believe design is a strategic business function, not just an aesthetic layer.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-2xl border shadow-sm transition-colors ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'}`}>
                    <div className="size-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                      <Layout className="size-6 text-orange-600" />
                    </div>
                    <h4 className="font-bold mb-2">Strategic Thinking</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Aligning design decisions with business KPIs and user outcomes.</p>
                  </div>
                  <div className={`p-6 rounded-2xl border shadow-sm transition-colors ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'}`}>
                    <div className="size-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="size-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold mb-2">Enterprise UX</h4>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Simplifying complex data-rich environments for expert users.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-blue-600" />
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">MY PROCESS</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">A Strategic & Iterative Approach</h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                My workflow is built on transparency and validation. Every step is designed to minimize risk and maximize user impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Discover & Research",
                  desc: "Understanding the problem space through user interviews, analytics review, and stakeholder alignment.",
                  color: "bg-blue-600",
                  icon: imgSearch31
                },
                {
                  step: "02",
                  title: "Define & Strategize",
                  desc: "Synthesizing research into actionable insights, user journeys, and clear success metrics.",
                  color: isDarkMode ? "bg-blue-400" : "bg-[#101828]",
                  icon: imgUxDesign1
                },
                {
                  step: "03",
                  title: "Design & Validate",
                  desc: "Iterative prototyping and user testing to ensure solutions solve actual pain points elegantly.",
                  color: "bg-blue-600",
                  icon: imgCooperation1
                }
              ].map((item, i) => (
                <Motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className={`p-8 rounded-3xl border shadow-sm hover:shadow-xl transition-all flex flex-col h-full relative overflow-hidden group ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100'}`}
                >
                  <div className={`absolute top-0 right-0 p-4 font-black text-6xl opacity-[0.03] group-hover:opacity-10 transition-opacity ${item.color.replace('bg-', 'text-')}`}>
                    {item.step}
                  </div>
                  <div className={`size-16 rounded-2xl flex items-center justify-center mb-8 ${isDarkMode ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <img src={item.icon} alt={item.title} className="size-10 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className={`leading-relaxed flex-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-[#030213]' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-blue-500" />
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-500">EXPERTise</span>
                </div>
                <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#101828]'}`}>Full-stack Product Design Capabilities</h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  A comprehensive skill set that spans strategic thinking, hands-on design execution, and cross-functional leadership.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <div className={`p-8 border rounded-3xl backdrop-blur-md ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100 shadow-sm'}`}>
                  <div className="flex gap-4 items-center">
                    <div className="size-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <img src={imgFigma1} alt="Figma" className="size-8" />
                    </div>
                    <div>
                      <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-[#101828]'}`}>Figma Power User</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Advanced Design Systems & Auto-layout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "UX Strategy", skills: ["User Research", "IA", "Journey Maps", "Discovery"] },
                { title: "UI Design", skills: ["Design Systems", "Visual Identity", "Grid Systems", "Typography"] },
                { title: "Interaction", skills: ["Prototyping", "Micro-interactions", "User Testing", "Feedback Loops"] },
                { title: "Soft Skills", skills: ["Leadership", "Stakeholder Mgmt", "Collaboration", "Mentorship"] }
              ].map((cat, i) => (
                <div key={i} className={`p-8 rounded-3xl border transition-colors ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/[0.08]' : 'bg-white border-gray-100 hover:border-blue-200 shadow-sm'}`}>
                  <h4 className="text-blue-500 font-bold mb-6 tracking-wide">{cat.title.toUpperCase()}</h4>
                  <ul className="space-y-4">
                    {cat.skills.map((s, j) => (
                      <li key={j} className={`flex items-center gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="size-1.5 bg-blue-500 rounded-full" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-blue-600" />
                  <span className="text-sm font-bold uppercase tracking-widest text-blue-600">SELECTED WORKS</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Case Studies</h2>
                <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Demonstrating my approach to solving complex business problems with user-centered design and data insights.
                </p>
              </div>
              <button 
                onClick={() => navigate('/projects')}
                className={`group flex items-center gap-3 px-8 py-4 border-2 font-bold rounded-2xl transition-all whitespace-nowrap ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-[#030213]' : 'border-[#101828] text-[#101828] hover:bg-[#101828] hover:text-white'}`}
              >
                View All Projects
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Grocery Delivery App",
                  cat: "MOBILE APP",
                  image: imgGroceryMain,
                  link: "/projects"
                },
                {
                  title: "Enterprise SaaS Platform",
                  cat: "B2B PLATFORM",
                  image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1080",
                  link: "/projects"
                }
              ].map((project, i) => (
                <Motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => project.link.startsWith('http') ? window.open(project.link, '_blank') : navigate(project.link)}
                >
                  <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-lg ${isDarkMode ? 'bg-white/5' : 'bg-gray-100'}`}>
                    <ImageWithFallback 
                      src={project.image} 
                      alt={project.title} 
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs font-black tracking-[0.2em] text-blue-600 uppercase">{project.cat}</span>
                    <div className={`h-px flex-1 ${isDarkMode ? 'bg-white/10' : 'bg-gray-100'}`} />
                  </div>
                  <h3 className={`text-2xl font-bold transition-colors ${isDarkMode ? 'group-hover:text-blue-400' : 'group-hover:text-blue-600'}`}>{project.title}</h3>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-24 overflow-hidden relative transition-colors duration-300 ${isDarkMode ? 'bg-[#030213]' : 'bg-gray-900 text-white'}`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] border border-white rounded-full animate-[pulse_8s_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[1200px] border border-white/5 rounded-full" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl sm:text-6xl font-bold mb-8 leading-tight">Let's Create Something Impactful Together</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                I'm currently open to senior product design roles and strategic consulting. Let's talk about how I can help drive your product vision.
              </p>
              
              <div className="max-w-2xl mx-auto mb-16">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 text-left"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-bold text-gray-400 ml-1">NAME</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      required 
                      placeholder="John Doe"
                      className="p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors" 
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-bold text-gray-400 ml-1">EMAIL</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required 
                      placeholder="john@example.com"
                      className="p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors" 
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-bold text-gray-400 ml-1">MESSAGE</label>
                    <textarea 
                      id="message"
                      name="message" 
                      required 
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="p-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="sm:col-span-2 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="flex flex-wrap justify-center gap-8 mb-16">
                <a href="mailto:farooq260786@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="size-12 bg-white/10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                    <img src={iconEmail} alt="Email" className="size-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">EMAIL ME</p>
                    <p className="font-bold text-white">farooq260786@gmail.com</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/farooq26/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="size-12 bg-white/10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg">
                    <img src={iconLinkedIn} alt="LinkedIn" className="size-8 object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">LINKEDIN</p>
                    <p className="font-bold text-white">linkedin.com/in/farooq26</p>
                  </div>
                </a>
              </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-20 border-t ${isDarkMode ? 'border-white/10' : 'border-white/5'}`}>
              <div className="text-center md:text-left">
                <p className="text-gray-500 font-medium tracking-widest uppercase mb-4">Location</p>
                <div className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-300">
                  <MapPin className="size-5 text-blue-500" />
                  <span>Kolkata, West Bengal, India</span>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-bold border border-green-500/20">
                  <div className="size-2 bg-green-400 rounded-full animate-pulse" />
                  CURRENTLY ACCEPTING NEW PROJECTS
                </div>
              </div>
            </div>

            <div className={`mt-20 pt-8 border-t text-center text-sm ${isDarkMode ? 'border-white/5 text-gray-600' : 'border-white/5 text-gray-400'}`}>
              <p>© 2026 Farooq.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button (Mobile) */}
      <Motion.a
        href="mailto:farooq260786@gmail.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#030213] border border-white/10 text-white rounded-full shadow-2xl md:hidden flex items-center justify-center"
      >
        <img src={iconEmail} alt="Email" className="size-6 object-contain" />
      </Motion.a>
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
