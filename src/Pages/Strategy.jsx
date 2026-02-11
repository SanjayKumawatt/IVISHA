import React from "react";
import { motion } from "framer-motion";
import { 
  Telescope,     // Strategic Outlook
  Layers,        // Platform Ownership
  BrainCircuit,  // Infrastructure Intelligence
  Globe,         // Multi-Industry (Changed to Globe for expansion vibe)
  Microscope,    // Research
  Building2,     // Organization
  Flag,          // Long-Term Objective
  ArrowRight,
  Sparkles
} from "lucide-react";

import CTA from "../Components/CTA";

const strategies = [
  {
    id: "01",
    title: "Transition from Service Engineering to Platform Ownership",
    description: "In the early stages, our focus remains on building robust digital infrastructures. However, the long-term direction is centered on developing proprietary platforms that standardize infrastructure management.",
    icon: Layers,
    color: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    bg: "group-hover:bg-blue-500/5",
    points: [
      "Modular orchestration systems",
      "Intelligent monitoring frameworks",
      "Infrastructure automation engines",
      "Performance analytics modules",
      "System diagnostic tools"
    ]
  },
  {
    id: "02",
    title: "Development of Infrastructure Intelligence Systems",
    description: "Future enterprise environments will require infrastructure that is not only scalable but also adaptive. We envision infrastructure layers that actively participate in decision-making.",
    icon: BrainCircuit,
    color: "text-purple-400",
    border: "group-hover:border-purple-500/50",
    bg: "group-hover:bg-purple-500/5",
    points: [
      "Predictive load behavior analysis",
      "Automated scaling decisions",
      "Intelligent fault detection",
      "Real-time performance benchmarking",
      "Proactive resource optimization"
    ]
  },
  {
    id: "03",
    title: "Expansion into Multi-Industry Digital Frameworks",
    description: "Our long-term roadmap includes building configurable system templates tailored to specific sectors to reduce development friction while maintaining flexibility.",
    icon: Globe,
    color: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    bg: "group-hover:bg-emerald-500/5",
    points: [
      "Logistics and fleet intelligence",
      "Financial data processing",
      "Healthcare data integrity",
      "Retail analytics ecosystems",
      "Education infrastructure platforms"
    ]
  },
  {
    id: "04",
    title: "Research & Continuous Engineering Evolution",
    description: "Technology evolves continuously. IVISHA INFOTECH plans to allocate structured effort toward research to maintain relevance and performance reliability.",
    icon: Microscope,
    color: "text-pink-400",
    border: "group-hover:border-pink-500/50",
    bg: "group-hover:bg-pink-500/5",
    points: [
      "Distributed system efficiency",
      "Low-latency application design",
      "Data compression optimization",
      "Security protocol reinforcement",
      "Automation algorithm refinement"
    ]
  },
  {
    id: "05",
    title: "Building a Structured Technology Organization",
    description: "Beyond technology assets, our future includes developing structured governance. We aim to build a company where processes mature alongside product capabilities.",
    icon: Building2,
    color: "text-cyan-400",
    border: "group-hover:border-cyan-500/50",
    bg: "group-hover:bg-cyan-500/5",
    points: [
      "Structured internal documentation",
      "Standardized development protocols",
      "Security-first operational policies",
      "Risk management methodologies",
      "Scalable team-based workflows"
    ]
  },
  {
    id: "06",
    title: "Long-Term Objective",
    description: "IVISHA INFOTECH is not structured to operate as a short-term project vendor. We are building a foundation designed for durability, adaptability, and continuous evolution.",
    icon: Flag,
    color: "text-orange-500",
    border: "group-hover:border-orange-500/50",
    bg: "group-hover:bg-orange-500/5",
    points: [
      "Reliable digital infrastructure design",
      "Scalable system engineering",
      "Secure platform architecture",
      "Operationally sustainable ecosystems"
    ]
  }
];

const Strategy = () => {
  return (
    <div className="bg-[#0B1120] min-h-screen font-sans pt-20 text-white">
      
      {/* --- 1. Hero Section --- */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
        
        {/* Animated Background Stars */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0B1120] to-[#0B1120]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8"
          >
            <Sparkles size={16} />
            VISION 2030 & BEYOND
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
          >
            Strategic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
              Outlook
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-400 leading-relaxed font-light"
          >
            "The next decade of enterprise technology will be defined not by isolated applications, but by interconnected digital ecosystems capable of self-optimization."
          </motion.p>
        </div>
      </section>

      {/* --- 2. Strategy Grid --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategies.map((item, index) => (
                <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group relative bg-[#151F32] rounded-2xl p-8 border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${item.border}`}
                >
                {/* Hover Background Tint */}
                <div className={`absolute inset-0 rounded-2xl transition-colors duration-300 pointer-events-none ${item.bg}`}></div>

                {/* Header: Icon & ID */}
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center border border-gray-700 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-7 h-7 ${item.color}`} strokeWidth={1.5} />
                    </div>
                    <span className="text-5xl font-black text-gray-800 group-hover:text-gray-700/50 transition-colors select-none">
                        {item.id}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 leading-snug min-h-[56px] flex items-center group-hover:text-gray-100">
                    {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed border-b border-gray-700/50 pb-6 min-h-[100px]">
                    {item.description}
                </p>

                {/* Points List */}
                <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Key Focus Areas</h4>
                    {item.points.map((point, i) => (
                    <div key={i} className="flex items-start text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                        <ArrowRight className={`w-3 h-3 mt-0.5 mr-2 flex-shrink-0 ${item.color}`} />
                        {point}
                    </div>
                    ))}
                </div>
                </motion.div>
            ))}
            </div>
        </div>
      </section>

      {/* --- 3. CTA Section --- */}
      <CTA />

    </div>
  );
};

export default Strategy;