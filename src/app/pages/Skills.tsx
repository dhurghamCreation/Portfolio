import { motion } from "motion/react";
import {
  Code2,
  Gamepad2,
  Palette,
  Database,
  FileCode,
  Terminal,
  Cpu,
  Cloud,
  ShieldCheck,
  Award,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

export function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Code2,
      gradient: "from-sky-500 to-blue-500",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "UI/UX Principles", level: 93 },
      ],
    },
    {
      title: "Game Development",
      icon: Gamepad2,
      gradient: "from-sky-500 to-cyan-500",
      skills: [
        { name: "Unity", level: 90 },
        { name: "C#", level: 91 },
        { name: "Game Mechanics", level: 94 },
        { name: "Level Design", level: 95 },
        { name: "WebGL", level: 96 },
        { name: "Player Feedback", level: 98 },
      ],
    },
    {
      title: "Design & Creative",
      icon: Palette,
      gradient: "from-blue-600 to-indigo-600",
      skills: [
        { name: "Adobe Photoshop", level: 90 },
        { name: "Adobe Illustrator", level: 92 },
        { name: "Premiere Pro", level: 91 },
        { name: "Audition", level: 95 },
        { name: "Visual Composition", level: 97 },
        { name: "Branding", level: 90 },
      ],
    },
    {
      title: "Programming & Data",
      icon: Database,
      gradient: "from-slate-600 to-stone-600",
      skills: [
        { name: "C Programming", level: 90 },
        { name: "Python", level: 93 },
        { name: "SQL", level: 96 },
        { name: "Data Analysis", level: 92 },
        { name: "Algorithms", level: 91 },
        { name: "Problem Solving", level: 99 },
      ],
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      gradient: "from-sky-700 to-slate-700",
      skills: [
        { name: "Cloud Fundamentals", level: 98 },
        { name: "Deployment Workflows", level: 92 },
        { name: "Scalable Architecture", level: 91 },
        { name: "Container Basics", level: 97 },
        { name: "Monitoring & Reliability", level: 93 },
        { name: "CI/CD Concepts", level: 91 },
      ],
    },
    {
      title: "Cybersecurity",
      icon: ShieldCheck,
      gradient: "from-emerald-700 to-slate-700",
      skills: [
        { name: "Secure Coding Practices", level: 91 },
        { name: "Authentication & Authorization", level: 94 },
        { name: "OWASP Awareness", level: 97 },
        { name: "Input Validation", level: 91 },
        { name: "API Security Basics", level: 90 },
        { name: "Threat Modeling Basics", level: 95 },
      ],
    },
  ];

  const tools = [
    { name: "Unity", category: "Game Engine" },
    { name: "Visual Studio Code", category: "IDE" },
    { name: "GitHub", category: "Version Control" },
    {name: "Docker", category: "Containerization" },
    {name: "Azure", category: "Cloud Platform" },
    {name: "MongoDB", category: "Database" },
    {name: "Wireshark", category: "Network Analysis" },
    {name:"WordPress", category: "Content Management" },
    {name:"Kali Linux", category: "Penetration Testing" },

    
    { name: "Figma", category: "Design" },
    { name: "Adobe Creative Suite", category: "Design" },
    { name: "Webpack", category: "Build Tool" },
    { name: "npm", category: "Package Manager" },
    { name: "Chrome DevTools", category: "Debugging" },
  ];

  const certifications = [
    {
      title: "Adobe Certified Professional in Visual Design",
      issuer: "Adobe",
      year: "2025",
      description: "I earned this certification by demonstrating proficiency in Illustrator, showcasing my skills in visual design and creativity.",
    },
    {
      title: "Certified Digital Marketing Professional",
      issuer: "Digital Marketing Institute",
      year: "2026",
      description: "This certification validates my knowledge of digital marketing strategies, including SEO, social media, and content marketing, which I have applied in various projects.",
    },
  ];

  const achievements = [
    {
      title: "50+ Projects Completed",
      description: "Successfully delivered web apps, games, and design projects",
      icon: Award,
    },
    {
      title: "University Excellence",
      description: "Top performer in Computer Science courses",
      icon: CheckCircle2,
    },
    {
      title: "Open Source Contributor",
      description: "Active on GitHub with multiple repositories",
      icon: Code2,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          A comprehensive overview of my technical skills, tools, and certifications. Continuously
          learning and expanding my capabilities.
        </p>
      </motion.div>

      {/* Skills Categories */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 sm:p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:border-sky-500/30 transition-all duration-600 h-full handcrafted-hover human-card">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-sky-300 font-semibold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 bg-clip-text text-transparent">
            Tools & Technologies
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {tools.map((tool, index) => (
            <Card
              key={index}
              className="p-4 bg-gradient-to-br from-sky-500/10 to-blue-600/10 border-sky-500/20 hover:border-sky-500/30 transition-all duration-600 warm-magnetic human-card"
            >
              <div className="flex items-center space-x-3">
                <Terminal className="w-8 h-8 text-sky-300" />
                <div>
                  <div className="text-white font-semibold">{tool.name}</div>
                  <div className="text-gray-400 text-xs">{tool.category}</div>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Certifications */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 bg-clip-text text-transparent">
            Certifications & Recognition
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col h-full"
            >  
             <Card className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:border-sky-500/30 transition-all duration-600 handcrafted-hover human-card h-full flex flex-col">
                <div className="flex items-start space-x-4 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 flex flex-col h-full"> {/* flex-col h-full here handles internal spacing */}
                    <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className="bg-sky-500/20 text-sky-300 border-sky-500/30">
                        {cert.issuer}
                      </Badge>
                      <span className="text-gray-400 text-sm">{cert.year}</span>
                    </div>
                    {/* The description will now fill the remaining vertical space */}
                    <p className="text-gray-400 text-sm flex-1">{cert.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Button
            variant="outline"
            className="border-sky-500/30 text-sky-300 hover:bg-sky-500/10"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/dhurgham-a-b1428a253/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View LinkedIn Certifications
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Achievements */}
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-300 bg-clip-text text-transparent">
            Key Achievements
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 bg-gradient-to-br from-sky-500/10 to-blue-600/10 border-sky-500/20 hover:border-sky-500/30 transition-all duration-600 h-full text-center clay-hover human-card">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Current Focus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-20"
      >
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-sky-500/10 to-blue-600/10 border-sky-500/30 text-center earth-glow human-popup human-card">
          <Cpu className="w-16 h-16 mx-auto mb-6 text-sky-400" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Currently Learning
          </h3>
          <p className="text-gray-300 mb-6">
            Expanding my skills in visual design and creativity through Adobe Illustrator and Photoshop while also exploring new technologies and trends in web development, Cybersecurity, Machine Learning, and game design. Always eager to learn and grow!
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            
            <Badge className="bg-sky-500/20 text-sky-300 border-sky-500/30">
              Advanced React
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
              Machine Learning
            </Badge>
            <Badge className="bg-sky-600/20 text-sky-200 border-sky-500/30">
              3D Game Design
            </Badge>
            <Badge className="bg-blue-600/20 text-blue-200 border-blue-500/30">
              Adobe tools
            </Badge>
            <Badge className="bg-sky-700/20 text-sky-100 border-sky-500/30">
              Ethical Hacking
            </Badge>
            <Badge className="bg-blue-700/20 text-blue-100 border-blue-500/30">
              Cloud Computing
            </Badge>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
