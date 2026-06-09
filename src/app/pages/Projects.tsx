import { motion } from "motion/react";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  Gamepad2,
  Globe,
  Palette,
  Filter,
  FileCode,
  Award,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    // Change project images here by replacing the image path for each project.
    // Put your files inside: public/assets/
    {
      title: "DairyFresh",
      category: "web",
      tags: ["TypeScript", "React", "E-Commerce"],
      description:
        "Interactive dairy products web shop with multilingual support, chatbot support, brochure content, and account workflows.",
      image: "/assets/images/dairy.png",
      demoUrl: "https://dairy-fresh.vercel.app",
      codeUrl: "https://github.com/dhurghamCreation/DairyFresh",
      gradient: "from-stone-500/15 to-slate-600/15",
    },
    {
      title: "ShopVibe",
      category: "web",
      tags: ["TypeScript", "Frontend", "UI"],
      description:
        "Clothing shop project focused on practical storefront structure, browsing experience, and clear product presentation.",
      image: "/assets/images/shop.png",
      demoUrl: "https://e-commerce-website-design-eight.vercel.app",
      codeUrl: "https://github.com/dhurghamCreation/ShopVibe",
      gradient: "from-stone-500/15 to-zinc-600/15",
    },
    {
      title: "FireTech-Messager-Server",
      category: "web",
      tags: ["JavaScript", "Backend", "Messaging"],
      description:
        "Server-side messaging backend project with routing, request handling, and practical API structure.",
      image: "/assets/images/message.png",
      demoUrl: "https://huggingface.co/spaces/Dhurgh/FireTech-Message-server",
      codeUrl: "https://github.com/dhurghamCreation/FireTech-Messager-Server",
      gradient: "from-slate-500/20 to-stone-500/15",
    },
    {
      title: "croc-playtime",
      category: "game",
      tags: ["JavaScript", "Gameplay", "Web"],
      description:
        "Browser game project focused on responsive controls, simple mechanics, and engaging interaction loops.",
      image: "/assets/images/croc (2).png",
      demoUrl: "https://croc-play.vercel.app/",
      codeUrl: "https://github.com/dhurghamCreation/croc-playtime",
      gradient: "from-slate-600/20 to-zinc-700/20",
    },
    
    {
      title: "SlainteAI-Core",
      category: "design",
      tags: ["Python", "AI", "Core Logic"],
      description:
        "Core AI-focused Python project built around reusable modules and practical backend logic organization.",
      image: "/assets/images/slainteai-core.png",
      demoUrl: null,
      codeUrl: "https://github.com/dhurghamCreation/SlainteAI-Core",
      gradient: "from-stone-600/20 to-neutral-700/20",
    },
    {
      title: "tictactoe-server",
      category: "game",
      tags: ["TypeScript", "Backend", "Game Service"],
      description:
        "Backend service for multiplayer tic-tac-toe style interactions, with clean TypeScript API patterns.",
      image: "/assets/images/tic.png",
      
      demoUrl: "https://mkak.itch.io/neon-galaxy",
      codeUrl: "https://github.com/dhurghamCreation/tictactoe-server",
      gradient: "from-slate-500/20 to-stone-700/20",
    },
    
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return Globe;
      case "game":
        return Gamepad2;
      case "design":
        return Palette;
      default:
        return FileCode;
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-stone-200 via-slate-200 to-stone-300 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          A collection of my work spanning web development, game design, and creative arts. Each
          project represents a unique challenge and learning experience.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="max-w-7xl mx-auto mb-12"
      >
        <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 bg-slate-900/60 border border-white/10">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-slate-700/40 data-[state=active]:text-slate-200"
            >
              <Filter className="w-4 h-4 mr-2" />
              All
            </TabsTrigger>
            <TabsTrigger
              value="web"
              className="data-[state=active]:bg-stone-700/30 data-[state=active]:text-stone-200"
            >
              <Globe className="w-4 h-4 mr-2" />
              Web
            </TabsTrigger>
            <TabsTrigger
              value="game"
              className="data-[state=active]:bg-zinc-700/30 data-[state=active]:text-zinc-200"
            >
              <Gamepad2 className="w-4 h-4 mr-2" />
              Games
            </TabsTrigger>
            <TabsTrigger
              value="design"
              className="data-[state=active]:bg-neutral-700/30 data-[state=active]:text-neutral-200"
            >
              <Palette className="w-4 h-4 mr-2" />
              Design
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card
                  className={`overflow-hidden bg-gradient-to-br ${project.gradient} backdrop-blur-sm border-white/10 hover:border-stone-400/30 transition-all duration-300 h-full flex flex-col handcrafted-hover`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(event) => {
                        event.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60" />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <CategoryIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="border-white/20 text-gray-300 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <Button
                          size="sm"
                          className="flex-1 bg-slate-700/30 hover:bg-slate-700/45 text-slate-200 border border-slate-500/30"
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-white/20 text-gray-300 hover:bg-white/5"
                          asChild
                        >
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
           initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mt-12 mb-20"
          >
            <Button
              variant="outline"
              size="lg"
              className="group border-white/10 bg-slate-900/40 text-gray-300 hover:bg-slate-800 hover:text-white hover:border-stone-400/50 transition-all duration-300"
              asChild
            >
              <a 
                href="https://github.com/dhurghamCreation?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore My Other Projects
                <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
          </motion.div>
        )}
      </div>

      {/* GitHub Link Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20"
      >
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-slate-800/50 to-stone-900/50 border-white/10 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-stone-200" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            View All My Repositories
          </h3>
          <p className="text-gray-300 mb-6">
            Check out my complete collection of projects, experiments, and open-source contributions
            on GitHub.
          </p>
          <Button
            size="lg"
            className="bg-slate-200 text-slate-900 hover:bg-white px-8"
            asChild
          >
            <a
              href="https://github.com/dhurghamCreation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              Visit GitHub Profile
            </a>
          </Button>
        </Card>
      </motion.div>
    </div>
  );
}



