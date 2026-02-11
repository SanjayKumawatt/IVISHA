import React from "react";
import { motion } from "framer-motion";
import { 
  Telescope,     // Strategic Outlook
  Layers,        // Platform Ownership
  BrainCircuit,  // Infrastructure Intelligence
  LayoutGrid,    // Multi-Industry
  Microscope,    // Research
  Building2,     // Organization
  Flag           // Long-Term Objective
} from "lucide-react";

const strategies = [
  {
    id: 1,
    title: "Transition from Service Engineering to Platform Ownership",
    description: "The long-term direction is centered on developing proprietary platforms that standardize infrastructure management and workflow intelligence.",
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
    id: 2,
    title: "Development of Infrastructure Intelligence Systems",
    description: "We envision infrastructure layers that actively participate in decision-making rather than passively supporting applications.",
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
    id: 3,
    title: "Expansion into Multi-Industry Digital Frameworks",
    description: "Building configurable system templates tailored to specific sectors to reduce development friction while maintaining flexibility.",
    icon: LayoutGrid,
    color: "text-emerald-400",
    border: "group-hover:border-emerald-500/50",
    bg: "group-hover:bg-emerald-500/5",
    points: [
      "Logistics and fleet intelligence platforms",
      "Financial data processing environments",
      "Healthcare data integrity frameworks",
      "Retail analytics ecosystems",
      "Education infrastructure platforms"
    ]
  },
  {
    id: 4,
    title: "Research & Continuous Engineering Evolution",
    description: "Our internal engineering processes will evolve alongside technological advancements to maintain relevance and reliability.",
    icon: Microscope,
    color: "text-pink-400",
    border: "group-hover:border-pink-500/50",
    bg: "group-hover:bg-pink-500/5",
    points: [
      "Distributed system efficiency",
      "Low-latency application design",
      "Data compression optimizations",
      "Security protocol reinforcement",
      "Automation algorithm refinement"
    ]
  },
  {
    id: 5,
    title: "Building a Structured Technology Organization",
    description: "We aim to build a company where systems, processes, and governance mature alongside product capabilities.",
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
    id: 6,
    title: "Long-Term Objective",
    description: "We are building a foundation designed for durability, adaptability, and continuous evolution. Not a short-term vendor, but a long-term partner.",
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

const StrategicOutlook = () => {
  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* --- Background Stars Effect --- */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
            backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Gradient Globs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-6 ring-1 ring-blue-500/30">
                <Telescope className="text-blue-400 w-6 h-6" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">Outlook</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              "The next decade of enterprise technology will be defined not by isolated applications, but by interconnected digital ecosystems capable of self-optimization."
            </p>
          </motion.div>
        </div>

        {/* --- 3x2 Grid Strategy Cards --- */}
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

              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-6 border border-gray-700 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-6 h-6 ${item.color}`} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-gray-100">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed border-b border-gray-800 pb-6">
                {item.description}
              </p>

              {/* Points List */}
              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start text-xs font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0 bg-current opacity-60`}></span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Number Watermark (Optional for tech feel) */}
              <div className="absolute top-4 right-4 text-4xl font-black text-gray-800/30 select-none group-hover:text-gray-700/40 transition-colors">
                0{item.id}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default StrategicOutlook;