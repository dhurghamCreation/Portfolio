import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Palette, Code, Gamepad2, Brush } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  life: number;
}

export function InteractiveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentTool, setCurrentTool] = useState<'brush' | 'code' | 'game' | 'design'>('brush');
  const particles = useRef<Particle[]>([]);

  const tools = [
    { id: 'brush', icon: Brush, label: 'Creative', color: '#8b5cf6' },
    { id: 'code', icon: Code, label: 'Technical', color: '#3b82f6' },
    { id: 'game', icon: Gamepad2, label: 'Gaming', color: '#10b981' },
    { id: 'design', icon: Palette, label: 'Design', color: '#38bdf8' }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.01;
        particle.vy += 0.1; // gravity

        if (particle.life <= 0) return false;

        ctx.globalAlpha = particle.life;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        return particle.x > 0 && particle.x < canvas.width && 
               particle.y > 0 && particle.y < canvas.height;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handleCanvasInteraction = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const tool = tools.find(t => t.id === currentTool);
    if (!tool) return;

    // Create particles at interaction point
    for (let i = 0; i < 5; i++) {
      particles.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4 - 2,
        size: Math.random() * 3 + 1,
        color: tool.color,
        life: 1
      });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 display-text">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-400 bg-clip-text text-transparent">
              Interactive Creative Canvas
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto elegant-text">
            A human-made interactive experience - click and move your mouse to create art
          </p>
        </motion.div>

        {/* Tool Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center space-x-2 p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            {tools.map((tool) => (
              <motion.button
                key={tool.id}
                onClick={() => setCurrentTool(tool.id as any)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentTool === tool.id
                    ? 'bg-white/20 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <tool.icon className="w-5 h-5" />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Canvas Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl blur-xl" />
          <div className="relative bg-slate-800/50 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-96 cursor-crosshair"
              onMouseMove={handleCanvasInteraction}
              onMouseDown={() => setIsDrawing(true)}
              onMouseUp={() => setIsDrawing(false)}
              onMouseLeave={() => setIsDrawing(false)}
            />
            
            {/* Instructions */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-gray-400 text-sm elegant-text">
                Move your mouse across the canvas to create interactive particles
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tool Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
            <div className="flex items-center space-x-2">
              {(() => {
                const currentToolObj = tools.find(t => t.id === currentTool);
                if (!currentToolObj) return null;
                return (
                  <>
                    <currentToolObj.icon 
                      className="w-5 h-5" 
                      style={{ color: currentToolObj.color }}
                    />
                    <span className="text-gray-300 elegant-text">
                      {currentToolObj.label} Mode
                    </span>
                  </>
                );
              })()}
            </div>
            <div className="w-px h-4 bg-white/20" />
            <span className="text-gray-500 text-xs">Hand-coded with passion</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
