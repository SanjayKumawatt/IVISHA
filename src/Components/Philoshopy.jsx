import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Zap, BarChart3, CheckCircle2 } from "lucide-react";

const philosophyPoints = [
  {
    title: "Structured",
    subtitle: "before it is scaled",
    description: "Building a solid foundation is crucial before adding weight.",
    icon: Layers,
    // Neon Blue
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "group-hover:border-cyan-400"
  },
  {
    title: "Secure",
    subtitle: "before it is deployed",
    description: "Security is an architectural requirement, not an afterthought.",
    icon: ShieldCheck,
    // Neon Green
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    borderColor: "group-hover:border-emerald-400"
  },
  {
    title: "Efficient",
    subtitle: "before it is expanded",
    description: "Optimization ensures resources are used effectively at any scale.",
    icon: Zap,
    // Neon Orange (Brand Color)
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "group-hover:border-orange-400"
  },
  {
    title: "Measurable",
    subtitle: "before it is optimized",
    description: "You cannot improve what you cannot measure accurately.",
    icon: BarChart3,
    // Neon Purple
    color: "text-violet-400",
    bgColor: "bg-violet-400/10",
    borderColor: "group-hover:border-violet-400"
  },
];

const Philosophy = () => {
  return (
    // Background Dark Slate (Almost Black)
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* Background Glow Effects (Subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">
              Our Core Philosophy
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Technology Must Be
            </h3>
            {/* Glowing Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </motion.div>
        </div>

        {/* --- 4 Pillars Grid (Dark Cards) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              // Card Styling: Dark Gray Background + Border Animation
              className={`group relative bg-[#151F32] rounded-xl p-8 border border-gray-800 hover:border-opacity-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50`}
            >
              {/* Dynamic Border Color on Hover (Using pseudo-element logic via Tailwind classes below) */}
              <div className={`absolute inset-0 rounded-xl border-2 border-transparent ${point.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${point.bgColor} ${point.color} ring-1 ring-white/5`}>
                <point.icon size={28} strokeWidth={2} />
              </div>

              {/* Text */}
              <h4 className="text-xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors">
                {point.title}
              </h4>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-700 pb-4">
                {point.subtitle}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Bottom Summary Section (Dark Glass Effect) --- */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 0.8 }}
           className="mt-24 bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden"
        >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

            <div className="relative flex-shrink-0 bg-blue-600/20 text-blue-400 p-4 rounded-full border border-blue-500/30">
                <CheckCircle2 size={32} />
            </div>
            
            <div className="relative">
                <h4 className="text-2xl font-bold text-white mb-4">
                    Why This Matters?
                </h4>
                <p className="text-lg text-gray-300 leading-relaxed font-light">
                    Our approach emphasizes <span className="text-blue-400 font-medium">stability</span>, <span className="text-blue-400 font-medium">long-term maintainability</span>, and <span className="text-blue-400 font-medium">operational clarity</span>. Every system we design is engineered with future growth, fault tolerance, and performance optimization in mind.
                </p>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Philosophy;