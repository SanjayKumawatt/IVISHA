import React from "react";
import { motion } from "framer-motion";
import { 
  Puzzle, 
  Grid, 
  Workflow, 
  Layers, 
  Activity, 
  Cpu, 
  GitMerge, 
  CheckCircle2,
  Construction
} from "lucide-react";

import CTA from "../Components/CTA";

const Products = () => {
  return (
    <div className="bg-[#0B1120] min-h-screen font-sans pt-20">
      
      {/* --- 1. Page Hero --- */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center p-3 mb-6 bg-indigo-500/10 rounded-xl border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
          >
            <Puzzle className="text-indigo-400 w-8 h-8" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          >
            Product Development <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Initiatives
            </span>
          </motion.h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            IVISHA INFOTECH is actively building structured internal platforms to strengthen its technology portfolio.
          </p>
        </div>
      </section>

      {/* --- 2. Product 1: COREGRID™ --- */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Background for CoreGrid */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Visual Side (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
               {/* Glass Card Visual */}
               <div className="relative bg-[#151F32]/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-8 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Grid size={120} />
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                     <div className="p-4 bg-cyan-900/30 rounded-lg border border-cyan-500/30 text-cyan-400">
                        <Cpu size={32} />
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-white tracking-widest">IVISHA</h3>
                        <h2 className="text-4xl font-black text-cyan-400 tracking-tighter">COREGRID™</h2>
                     </div>
                  </div>
                  {/* Fake UI Elements */}
                  <div className="space-y-3">
                     <div className="h-2 w-3/4 bg-gray-700 rounded animate-pulse"></div>
                     <div className="h-2 w-1/2 bg-gray-700 rounded animate-pulse delay-75"></div>
                     <div className="h-2 w-full bg-gray-700 rounded animate-pulse delay-150"></div>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-900/20 w-fit px-3 py-1 rounded border border-cyan-500/20">
                     <Construction size={12} />
                     STATUS: UNDER DEVELOPMENT
                  </div>
               </div>
            </motion.div>

            {/* Content Side (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Digital Infrastructure Orchestration
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A framework designed to help organizations manage complex application environments. <strong className="text-cyan-400">COREGRID</strong> provides visibility, control, and optimization capabilities for digital systems.
              </p>

              <div className="bg-[#0f1623] rounded-xl p-6 border border-gray-800">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                  Key Capabilities
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    "Environment lifecycle management",
                    "Resource utilization monitoring",
                    "Deployment automation",
                    "Health tracking dashboards",
                    "Alerting and performance diagnostics"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 3. Product 2: FLOWOPS™ --- */}
      <section className="py-24 relative overflow-hidden bg-[#0d121f]">
        {/* Decorative Background for FlowOps */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            
            {/* Visual Side (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
               {/* Glass Card Visual */}
               <div className="relative bg-[#151F32]/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-8 shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 left-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                     <Layers size={120} />
                  </div>
                  <div className="flex items-center justify-end gap-4 mb-8">
                     <div className="text-right">
                        <h3 className="text-2xl font-bold text-white tracking-widest">IVISHA</h3>
                        <h2 className="text-4xl font-black text-purple-400 tracking-tighter">FLOWOPS™</h2>
                     </div>
                     <div className="p-4 bg-purple-900/30 rounded-lg border border-purple-500/30 text-purple-400">
                        <GitMerge size={32} />
                     </div>
                  </div>
                   {/* Fake UI Elements (Flowchart style) */}
                   <div className="flex justify-end gap-2 mb-2">
                      <div className="h-8 w-8 rounded-full bg-gray-700 animate-pulse"></div>
                      <div className="h-8 w-24 rounded bg-gray-700 animate-pulse delay-75"></div>
                   </div>
                   <div className="flex justify-end gap-2">
                      <div className="h-2 w-1/2 bg-gray-700 rounded animate-pulse delay-100"></div>
                   </div>

                  <div className="mt-8 flex justify-end">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-900/20 w-fit px-3 py-1 rounded border border-purple-500/20">
                        <Activity size={12} />
                        STATUS: PROTOTYPING
                    </div>
                  </div>
               </div>
            </motion.div>

            {/* Content Side (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                Intelligent Workflow Automation
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A platform that connects tools, processes, and teams into a unified execution environment. <strong className="text-purple-400">FLOWOPS</strong> is structured to support operational teams across industries.
              </p>

              <div className="bg-[#0f1623] rounded-xl p-6 border border-gray-800">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                  Planned Capabilities
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    "Visual workflow builder",
                    "Conditional execution logic",
                    "Third-party integration connectors",
                    "Real-time process tracking",
                    "Centralized activity logs"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 mr-3 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- 4. CTA Section --- */}
      <CTA />

    </div>
  );
};

export default Products;