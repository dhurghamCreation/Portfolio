import { motion } from "motion/react";
import { Image as ImageIcon, ExternalLink, Play } from "lucide-react";
import { useState } from "react";

interface DesignProject {
  id: number;
  title: string;
  category: string;
  description: string;
  imagePath: string;
  pdfPath?: string;
  technologies?: string[];
  isVideo?: boolean;
}

const designProjects: DesignProject[] = [
  // To change portfolio images, replace the imagePath values below.
  // Recommended location: public/assets/
  {
    id: 1,
    title: "FireTech Innovators Can",
    category: "Photoshop Artwork",
    description: "Photoshop artwork created for a fictional tech company, showcasing creativity and design skills in a visually striking composition",
    imagePath: "/assets/images/can.png",
    technologies: ["Photoshop", "Creative Design"]
  },
  {
    id: 2,
    title: "Cybersecurity Presentation",
    category: "PowerPoint Design",
    description: "Cybersecurity presentation designed for educational purposes, covering key concepts and best practices in information security",
    imagePath: "/assets/images/Cyber.png",
    pdfPath: "/assets/images/Advanced-Cybersecurity-Framework 3.pdf",
    technologies: ["PowerPoint Design", "Problem Solving"]
  },
  {
    id: 3,
    title: "A beautiful day",
    category: "Illustrator Artwork",
    description: "Illustrator artwork showcasing creativity and design skills, inspired by a beautiful random day.",
    imagePath: "/assets/images/A Beautiful day.png",
    technologies: ["Illustrator", "Creative Design"]
  },
  {
    id: 4,
    title: "Chips",
    category: "Photoshop Artwork",
    description: "Photoshop artwork that creatively combines elements of technology and nature, designed to evoke a sense of wonder and curiosity.",
    imagePath: "/assets/images/Chips.png",
    isVideo: true,
    technologies: ["Photoshop", "Creative Design"]
  },
  {
    id: 5,
    title: "Photography Portfolio",
    category: "Photography",
    description: "This Portolio containes work that i have completed as part of my Photoshop Certificate",
    imagePath: "/assets/images/Photo.png",
    pdfPath: "/assets/images/Photoshop Portfolio.pdf",
    technologies: ["Photoshop", "Creative Design"]
  },
  {
    id: 6,
    title: "Illustrator Portfolio",
    category: "Illustration",
    description: "This Portolio containes work that i have completed as part of my Illustrator Certificate",
    imagePath: "/assets/images/illu.png",
    pdfPath: "/assets/images/Illustrator Portfolio.pdf",
    technologies: ["Illustrator", "Creative Design"]
  }
];

interface ProjectCardProps {
  project: DesignProject;
  index: number;
}
function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  const handleRedirection = (e: React.MouseEvent) => {
    // This stops the app from trying to "route" to the PDF
    e.preventDefault();
    const link = project.pdfPath || project.imagePath;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
      onClick={handleRedirection} // Click anywhere on the card to open
    >
      <div className="relative aspect-[4/3] bg-slate-900 rounded-2xl overflow-hidden border border-slate-700/50">
        {!imageError ? (
          <img
            src={project.imagePath}
            alt={project.title}
            /* FIX: 'object-contain' prevents the zoom-in/cropping issue */
            className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-800">
            <ImageIcon className="w-16 h-16 text-slate-600" />
          </div>
        )}
        
        {/* Overlay showing 'View' on hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
             <ExternalLink className="w-8 h-8 text-white mb-2" />
             <span className="text-white font-bold">{project.pdfPath ? 'View PDF' : 'View Image'}</span>
        </div>
      </div>
      
      {/* Title and Description below the image */}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-slate-400 text-sm">{project.category}</p>
      </div>
    </motion.div>
  );
}


export function DesignProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ... (Your existing Header Code) ... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 display-text">
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Creative & Visual Arts
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto elegant-text">
            Design-focused work across branding, compositing, and visual storytelling
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {designProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          {/* FIX: Wrap the button in a proper anchor tag */}
          <a 
            href="https://www.linkedin.com/in/dhurgham-a-b1428a253/"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-bold transition-colors cursor-pointer"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Full Portfolio</span>
            </motion.div>
          </a>
        </div>
      </div>
    </section>
  );
}
