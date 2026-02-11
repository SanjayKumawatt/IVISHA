import React from "react";
import { motion } from "framer-motion";
import { 
  Network,       
  Server,        
  Workflow,      
  Database,      
  ShieldCheck,   
  CheckCircle2,  
  Settings,      
  ArrowRight
} from "lucide-react";

import CTA from "../Components/CTA"; 

const servicesData = [
  {
    id: "01",
    title: "Infrastructure Architecture & System Design",
    description: "We analyze business processes and translate them into structured system architectures. Our objective is to create infrastructure blueprints that minimize failure points.",
    icon: Network,
    color: "text-blue-400",
    border: "group-hover:border-blue-500/50",
    // Server Room / Architecture Image
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    points: [
      "System requirement mapping",
      "Capacity planning",
      "Infrastructure topology design",
      "Performance modeling",
      "Redundancy planning",
      "Scalability projections"
    ]
  },
  {
    id: "02",
    title: "High-Availability Application Development",
    description: "Applications are engineered to operate under varying traffic loads and recover gracefully from failure. We emphasize modular coding standards.",
    icon: Server,
    color: "text-orange-400",
    border: "group-hover:border-orange-500/50",
    // Coding / Software Image
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2066&auto=format&fit=crop",
    points: [
      "Operate under varying traffic loads",
      "Recover gracefully from failure",
      "Maintain session integrity",
      "Ensure uptime consistency",
      "Support horizontal and vertical scaling"
    ]
  },
  {
    id: "03",
    title: "Automation & Workflow Engineering",
    description: "Operational inefficiencies often arise from repetitive tasks. Automation improves reliability, reduces cost, and enhances operational speed.",
    icon: Workflow,
    color: "text-purple-400",
    border: "group-hover:border-purple-500/50",
    // Automation / Abstract Tech Image
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=2070&auto=format&fit=crop",
    points: [
      "Trigger-based execution models",
      "Business logic automation",
      "Scheduled workflow engines",
      "Cross-platform synchronization",
      "Centralized monitoring dashboards"
    ]
  },
  {
    id: "04",
    title: "Data Systems Engineering",
    description: "Modern enterprises require structured data processing capabilities to derive insights from operational data and improve decision-making.",
    icon: Database,
    color: "text-cyan-400",
    border: "group-hover:border-cyan-500/50",
    // Data Analytics / Dashboard Image
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    points: [
      "Data ingestion pipelines",
      "Transformation layers",
      "Structured storage environments",
      "Reporting modules",
      "Analytical dashboards"
    ]
  }
];

const Services = () => {
  return (
    <div className="bg-[#0B1120] min-h-screen font-sans pt-20">
      
      {/* --- 1. Page Hero --- */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-3 mb-6 bg-gray-800/50 rounded-xl border border-gray-700"
          >
            <Settings className="text-gray-400 w-8 h-8 animate-[spin_10s_linear_infinite]" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Engineering Services & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Capabilities
            </span>
          </motion.h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Analyzing business processes and translating them into structured, scalable, and resilient system architectures.
          </p>
        </div>
      </section>

      {/* --- 2. Main Services Grid (Images Included) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative bg-[#151F32] rounded-2xl border border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300 ${service.border}`}
            >
              {/* --- Image Section --- */}
              <div className="h-48 w-full overflow-hidden relative border-b border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-[#151F32] to-transparent z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                {/* ID Badge overlapping image */}
                <div className="absolute bottom-4 right-4 z-20 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded border border-gray-700 text-xs font-bold text-gray-300">
                   SERVICE {service.id}
                </div>
              </div>

              {/* --- Content Section --- */}
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className={`p-2 rounded-lg bg-gray-900 border border-gray-700 ${service.color}`}>
                      <service.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-100">
                        {service.title}
                    </h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-gray-700/50 pb-6 min-h-[60px]">
                  {service.description}
                </p>

                {/* Points List */}
                <div className="space-y-3">
                  {service.points.map((point, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 mr-3 flex-shrink-0 ${service.color}`} />
                      <span className="text-sm text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- 3. Security Section (With Background Image) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden border border-emerald-500/30 group"
        >
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" 
               alt="Cyber Security" 
               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-[#0B1120]/90 mix-blend-multiply"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row gap-12">
            
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                  <ShieldCheck size={28} />
                </div>
                <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm drop-shadow-md">
                  05. Service Layer
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                Security & Governance <br /> Integration
              </h2>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
                Security is embedded into every layer of our architecture. Governance mechanisms ensure traceability and compliance readiness.
              </p>
              
              <div className="inline-flex items-center text-emerald-400 font-bold text-sm border-b border-emerald-500/50 pb-1 cursor-pointer hover:text-emerald-300 transition-colors">
                SECURE BY DESIGN <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>

            {/* Right List */}
            <div className="lg:w-1/2 bg-black/40 backdrop-blur-md rounded-xl p-8 border border-emerald-500/20">
              <h4 className="text-white font-semibold mb-6 border-b border-gray-600 pb-2">Implementation Modules</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Identity & access management",
                  "Multi-layer encryption protocols",
                  "API authentication standards",
                  "Secure deployment practices",
                  "Logging and audit trails"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 group-hover/item:shadow-[0_0_8px_#10b981] transition-shadow"></div>
                    <span className="text-gray-300 text-sm font-medium group-hover/item:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 4. CTA Section --- */}
      <CTA />

    </div>
  );
};

export default Services;