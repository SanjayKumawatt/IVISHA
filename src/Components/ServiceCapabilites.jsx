import React from "react";
import { motion } from "framer-motion";
import { 
  Network,       // Infrastructure
  Cpu,           // High Availability
  Workflow,      // Automation
  DatabaseZap,   // Data Systems
  LockKeyhole,   // Security
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Infrastructure Architecture & System Design",
    description: "We analyze business processes and translate them into structured system architectures. Our objective is to create infrastructure blueprints that minimize failure points and maximize operational continuity.",
    icon: Network,
    color: "text-blue-400",
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
    title: "High-Availability Application Development",
    description: "Applications are engineered to operate under varying traffic loads and recover gracefully from failure. We emphasize modular coding standards and maintainable development practices.",
    icon: Cpu,
    color: "text-orange-400",
    points: [
      "Operate under varying traffic loads",
      "Recover gracefully from failure",
      "Maintain session integrity",
      "Ensure uptime consistency",
      "Support horizontal and vertical scaling"
    ]
  },
  {
    title: "Automation & Workflow Engineering",
    description: "Operational inefficiencies often arise from repetitive tasks. Automation improves reliability, reduces cost, and enhances operational speed through structured frameworks.",
    icon: Workflow,
    color: "text-purple-400",
    points: [
      "Trigger-based execution models",
      "Business logic automation",
      "Scheduled workflow engines",
      "Cross-platform synchronization modules",
      "Centralized monitoring dashboards"
    ]
  },
  {
    title: "Data Systems Engineering",
    description: "Modern enterprises require structured data processing capabilities. These systems allow businesses to derive insights from operational data and improve decision-making.",
    icon: DatabaseZap,
    color: "text-cyan-400",
    points: [
      "Data ingestion pipelines",
      "Transformation and normalization layers",
      "Structured storage environments",
      "Reporting modules",
      "Analytical dashboards"
    ]
  }
];

const ServicesCapabilities = () => {
  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* --- Background Grid Pattern --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">
              Technical Competencies
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Engineering Services & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Capabilities
              </span>
            </h3>
          </motion.div>
        </div>

        {/* --- 2x2 Grid for Primary Services --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#151F32] rounded-2xl p-8 border border-gray-800 hover:border-gray-600 transition-colors group"
            >
              {/* Icon & Title */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-lg bg-gray-900 border border-gray-700 ${service.color}`}>
                  <service.icon size={32} />
                </div>
                <div className="text-right text-gray-500 text-xs font-mono font-bold tracking-widest opacity-30">
                  0{index + 1}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 h-20">
                {service.description}
              </p>

              {/* Capabilities List */}
              <div className="bg-[#0B1120]/50 rounded-xl p-6 border border-gray-800">
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <CheckCircle2 className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${service.color}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Full Width Card for Security (Foundation) --- */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-gradient-to-r from-[#151F32] to-[#0f1623] rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden group"
        >
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                
                {/* Left: Content */}
                <div className="lg:w-1/2 relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-emerald-900/30 text-emerald-400 rounded-lg border border-emerald-500/30">
                            <LockKeyhole size={28} />
                        </div>
                        <h4 className="text-2xl font-bold text-white">Security & Governance Integration</h4>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Security is embedded into every layer of our architecture. Governance mechanisms ensure traceability and compliance readiness.
                    </p>
                    <Link to={"/products"} className="inline-flex items-center text-emerald-400 font-bold text-sm tracking-wide border-b border-emerald-500/30 pb-1">
                        SECURE BY DESIGN <ArrowRight size={16} className="ml-2" />
                    </Link>
                </div>

                {/* Right: List Grid */}
                <div className="lg:w-1/2 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Identity and access management models",
                            "Multi-layer encryption",
                            "API authentication standards",
                            "Secure deployment practices",
                            "Logging and audit trails"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center p-3 bg-black/20 rounded-lg border border-gray-700/50 hover:border-emerald-500/30 transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3"></div>
                                <span className="text-sm text-gray-200 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesCapabilities;