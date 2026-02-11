import React from "react";
import { motion } from "framer-motion";
import { 
  Compass,       // Architecture-first
  TrendingUp,    // Scalability
  GitMerge,      // Deployment
  ShieldCheck,   // Security
  Gauge,         // Performance
  FileText,      // Documentation
  CheckCircle2   // Decorator
} from "lucide-react";

const reasons = [
  {
    title: "Architecture-first execution",
    description: "We don't just code; we blueprint. Every line is written with the bigger picture in mind.",
    icon: Compass,
    color: "text-blue-400"
  },
  {
    title: "Long-term scalability planning",
    description: "Systems designed to handle 10x growth without needing a complete rewrite.",
    icon: TrendingUp,
    color: "text-green-400"
  },
  {
    title: "Structured deployment methodology",
    description: "Zero-downtime deployments with automated CI/CD pipelines and rollback strategies.",
    icon: GitMerge,
    color: "text-purple-400"
  },
  {
    title: "Security-conscious system design",
    description: "Security isn't a plugin; it's baked into the core architecture from day one.",
    icon: ShieldCheck,
    color: "text-red-400"
  },
  {
    title: "Performance benchmarking and monitoring",
    description: "Real-time metrics and optimization to ensure sub-second response times.",
    icon: Gauge,
    color: "text-orange-400"
  },
  {
    title: "Operational documentation and system transparency",
    description: "No black boxes. We deliver complete documentation for full ownership transfer.",
    icon: FileText,
    color: "text-cyan-400"
  },
];

const WhyWorkWithUs = () => {
  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT SIDE: Sticky Content --- */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">
                Why Choose Us
              </h2>
              <h3 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
                Why Organizations <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Work With Us
                </span>
              </h3>
              
              <div className="bg-[#151F32] p-8 rounded-2xl border-l-4 border-orange-500 shadow-xl">
                <p className="text-xl text-gray-300 font-light leading-relaxed italic">
                  "We operate with the mindset of building infrastructure that lasts - not quick solutions that require rebuilding."
                </p>
                <div className="mt-6 flex items-center gap-3">
                   <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-xs">IV</div>
                   <div>
                       <p className="text-white font-bold text-sm">IVISHA INFOTECH</p>
                       <p className="text-xs text-gray-400">Engineering Principles</p>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: The List --- */}
          <div className="space-y-6">
            {reasons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group flex items-start p-6 rounded-xl bg-[#151F32]/50 border border-gray-800 hover:bg-[#151F32] hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Icon Box */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center border border-gray-700 group-hover:border-gray-600 group-hover:scale-110 transition-all duration-300 ${item.color}`}>
                  <item.icon size={24} />
                </div>

                {/* Text Content */}
                <div className="ml-6">
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors mb-2 flex items-center gap-2">
                    {item.title}
                    {/* Tiny decorative checkmark appearing on hover */}
                    <CheckCircle2 className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0" />
                  </h4>
                  {/* I added a placeholder description for better UI balance, you can remove or keep */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;