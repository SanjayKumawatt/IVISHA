import React from "react";
import { motion } from "framer-motion";
import { 
  Blocks,       // Scalable Architecture
  Share2,       // Distributed Processing
  BrainCircuit, // Intelligent Automation
  ShieldCheck,  // Secure Data
  Webhook       // API Integration
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Scalable Application Architectures",
    description: "Designing modular, service-oriented backend systems capable of handling growing user bases and increasing workloads.",
    icon: Blocks,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-transparent",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "02",
    title: "Distributed Processing Environments",
    description: "Creating computing structures that distribute workload intelligently across multiple system components to ensure availability and efficiency.",
    icon: Share2,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-transparent",
    border: "group-hover:border-purple-500/50"
  },
  {
    id: "03",
    title: "Intelligent Automation Frameworks",
    description: "Building rule-driven and logic-driven automation systems that reduce manual intervention and enhance operational speed.",
    icon: BrainCircuit,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-transparent",
    border: "group-hover:border-orange-500/50"
  },
  {
    id: "04",
    title: "Secure Data Management Systems",
    description: "Designing environments that handle sensitive information with encryption, access control, logging, and compliance-based structuring.",
    icon: ShieldCheck,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-transparent",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: "05",
    title: "API-Centric Integration Ecosystems",
    description: "Developing structured APIs that allow businesses to connect tools, platforms, and external services without system fragmentation.",
    icon: Webhook,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-transparent",
    border: "group-hover:border-cyan-500/50"
  },
];

const WhatWeEngineer = () => {
  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* --- Background Elements (Subtle Grid) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm pl-2 border-l-4 border-orange-500">
            Our Capabilities
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white leading-tight">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Engineer</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl text-lg">
            We don't just write code; we architect systems that serve as the backbone for digital enterprises.
          </p>
        </motion.div>

        {/* --- Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative bg-[#151F32] rounded-2xl p-8 border border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300 ${index === 3 || index === 4 ? "lg:col-span-1.5" : ""}`} // Logic to center last 2 items if needed, or just let them flow
            >
              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              {/* Dynamic Border Glow */}
              <div className={`absolute inset-0 border-2 border-transparent ${item.border} rounded-2xl transition-colors duration-300 pointer-events-none`}></div>

              {/* Watermark Number */}
              <div className="absolute top-0 right-4 text-8xl font-black text-gray-800/20 group-hover:text-gray-700/30 transition-colors duration-500 select-none z-0">
                {item.id}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Box */}
                <div className={`w-12 h-12 rounded-lg bg-gray-900/50 flex items-center justify-center mb-6 border border-gray-700 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors pr-10">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-700/50 pt-4 group-hover:border-gray-600 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhatWeEngineer;