import { motion } from "motion/react";
import {
  GraduationCap,
  Code,
  Lightbulb,
  Target,
  Award,
  BookOpen,
  Cpu,
  Palette,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function About() {
  const journey = [
    {
      year: "2025-Present",
      title: "University of Galway",
      description:
        "Expanded into deeper software engineering practice through C, JavaScript, algorithms, and technical projects. The university environment accelerated my development as both a logical engineer and a creative builder.",
      icon: GraduationCap,
      color: "from-blue-900 to-slate-800",
    },
    {
      year: "2024-present",
      title: "Self-Learning & Projects",
      description:
        "Built a strong foundation in web development, game design, and creative tools. Completed numerous projects ranging from web apps to Unity games.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2025-present",
      title: "Design Exploration",
      description:
        "Mastered Adobe Creative Suite including Photoshop, Illustrator, Premiere Pro, and Audition. Created professional designs and prototypes.",
      icon: Palette,
      color: "from-blue-500 to-indigo-500",
    },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always seeking creative solutions to complex problems",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering high-quality, polished work",
    },
    {
      icon: Award,
      title: "Growth",
      description: "Continuously learning and improving my craft",
    },
    {
      icon: BookOpen,
      title: "Knowledge",
      description: "Sharing insights and helping others succeed",
    },
  ];

  const expertise = [
    {
      category: "Web Development",
      icon: Code,
      skills: ["React", "TypeScript", "HTML/CSS", "JavaScript", "Responsive Design", "Java", "C", "Python","PHP","C#","GoLang","Kotlin","Swift","Net"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Game Development",
      icon: Cpu,
      skills: ["Unity", "C#","C++", "Game Mechanics", "WebGL", "Level Design"],
      color: "from-blue-900 to-slate-800",
    },
    {
      category: "Design & Creative",
      icon: Palette,
      skills: ["Photoshop", "Illustrator", "Premiere Pro","CapCut", "UI/UX","Figma","WordPress", "Visual Composition"],
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          I'm a passionate Computer Science student at the University of Galway, specializing in
          full-stack development, game design,Ethical Hacking,AI Engineering,Cloud Computing and creative digital arts. I combine technical
          expertise with creative vision to build innovative digital experiences.
        </p>
      </motion.div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-20"
      >
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-blue-900/10 to-slate-800/10 border-sky-500/30 text-center">
          <div className="text-6xl text-sky-300 mb-4">"</div>
          <p className="text-xl sm:text-2xl text-gray-200 italic mb-6">
            Always work smarter not harder.
          </p>
          <p className="text-gray-400">— Dhurgham Alsaadi</p>
        </Card>
      </motion.div>

      {/* Journey Timeline */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 bg-clip-text text-transparent">
            My Journey
          </span>
        </motion.h2>

        <div className="space-y-6">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:border-sky-500/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-sky-500/10 text-sky-100 border-sky-500/30">
                      {item.year}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 bg-clip-text text-transparent">
            Core Values
          </span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 bg-gradient-to-br from-blue-900/10 to-slate-800/10 border-sky-500/30 hover:border-sky-500/50 transition-all duration-300 h-full text-center">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expertise Areas */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 bg-clip-text text-transparent">
            Expertise Areas
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {expertise.map((area, index) => (
            <motion.div
              key={index}
              className="flex"
            
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
             <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:border-sky-500/30 transition-all duration-300 w-full h-full flex flex-col">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${area.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <area.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{area.category}</h3>
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-sky-400 rounded-full mr-3" />
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20"
      >
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-blue-500/10 to-[#3d564f]/10 border-[#51697a]/30 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            University of Galway
          </h3>
          <p className="text-gray-300 text-lg mb-2">Computer Science Student</p>
          <p className="text-gray-400">
            Specializing in Full-Stack Development, Game Design, Ethical Hacking,Cloud Computing, and Creative Design.
          </p>
        </Card>
      </motion.div>
    </div>
  );
}
