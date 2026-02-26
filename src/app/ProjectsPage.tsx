import React from "react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Grocery Delivery App",
    category: "Mobile App",
    description:
      "A modern grocery delivery app focused on seamless ordering experience and clean UI.",
    image: "/images/grocery.png",
    tags: ["Mobile", "E-commerce", "UX Design"],
    link: "https://www.behance.net/gallery/244789697/Grocery-App-UI-UX",
  },
  {
    title: "Grocery App Concept",
    category: "UI Design",
    description:
      "Creative exploration of mobile grocery shopping experience with bold visuals.",
    image: "/images/grocery-app.png",
    tags: ["App Design", "Prototype"],
    link: "#",
  },
  {
    title: "Coming Soon Project",
    category: "Web Design",
    description:
      "New exciting case study coming soon. Stay tuned for updates.",
    image: "/images/coming-soon.png",
    tags: ["Web", "UI/UX"],
    link: "#",
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-12 text-center">
          My Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-neutral-900 rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-400">
                  {project.category}
                </p>

                <h2 className="text-xl font-semibold mt-2">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm mt-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-neutral-800 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="mailto:your@email.com">
              <img src="/images/email.png" alt="Email" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img src="/images/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://behance.net" target="_blank">
              <img src="/images/behance.png" alt="Behance" className="w-6 h-6" />
            </a>
            <a href="https://dribbble.com" target="_blank">
              <img src="/images/dribbble.png" alt="Dribbble" className="w-6 h-6" />
            </a>
          </div>

          <p className="text-gray-500 text-sm">
            © 2026 Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
