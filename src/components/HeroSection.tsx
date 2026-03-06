import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Linkedin,
  Code2,
  Terminal,
  Sparkles,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-primary to-accent blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-accent to-primary blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[200px]"
        />

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, 0],
              x: [0, i % 2 === 0 ? 60 : -60, 0],
              rotate: [0, 360],
              opacity: [0.08, 0.25, 0.08],
            }}
            transition={{
              duration: 18 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2,
            }}
            className="absolute w-32 h-32 border-2 border-primary/20 rounded-3xl backdrop-blur-sm"
            style={{
              top: `${8 + i * 12}%`,
              left: `${3 + i * 12}%`,
              transform: `rotate(${i * 15}deg)`,
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            animate={{
              y: [0, -200 - i * 10, 0],
              x: [0, Math.sin(i) * 100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-1 h-1 rounded-full bg-primary"
            style={{
              top: `${20 + i * 5}%`,
              left: `${10 + i * 6}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading - Single Line */}
          <div className="mb-10">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-black tracking-tight leading-none"
              style={{ fontSize: "clamp(2.5rem, 10vw, 100px)" }}
            >
              <span className="gradient-text inline-block">
                ASHISH CHACKO OOMMAN
              </span>
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-2 bg-gradient-to-r from-primary via-accent to-primary mt-4 rounded-full mx-auto"
              style={{ maxWidth: "80%" }}
            />
          </div>

          {/* Animated Role Tags */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {[
              { icon: Code2, text: "Full Stack Developer", color: "#8b5cf6" },
              {
                icon: Terminal,
                text: "Competitive Programmer",
                color: "#ec4899",
              },
              { icon: Sparkles, text: "Problem Solver", color: "#14b8a6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="relative group"
              >
                <div className="flex items-center gap-2 px-6 py-3 glass-hover rounded-2xl border border-border/30 group-hover:border-primary/50 transition-all">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </motion.div>
                  <span className="text-sm md:text-base font-semibold">
                    {item.text}
                  </span>
                </div>
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  style={{
                    background: `radial-gradient(circle, ${item.color}30, transparent 70%)`,
                    filter: "blur(15px)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Computer Science undergraduate passionate about software development
            and problem solving. I enjoy building practical applications using
            technologies like C++, Python, JavaScript, TypeScript, HTML, CSS,
            and MySQL. I have solved 1000+ Data Structures and Algorithms
            problems across coding platforms, strengthening my logical and
            algorithmic thinking. Currently, I am focused on improving my skills
            in DSA, full-stack development while pursuing my B.Tech in Computer
            Science.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
