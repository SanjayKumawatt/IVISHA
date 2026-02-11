import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  User, 
  Target, 
  CheckCircle2, 
  Rocket, 
  Cpu, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

// Import CTA Component (Make sure the path is correct)
import CTA from "../Components/CTA"; // Adjust path if needed

const About = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-[#0B1120] min-h-screen text-white font-sans pt-20">
      
      {/* --- 1. Page Header (Hero) --- */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Who We Are
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              About The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Company
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg font-light">
              Engineering foundational digital systems for modern enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Corporate Overview & Founder (Split Section) --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Corporate Overview */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Building2 size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white">Corporate Overview</h2>
            </div>
            
            <div className="text-gray-300 text-lg leading-relaxed space-y-6">
              <p>
                <strong className="text-white">IVISHA INFOTECH PRIVATE LIMITED</strong> was incorporated on <span className="text-blue-400 font-semibold">9th February 2026</span> in New Delhi, India. Registered under the classification of <em className="text-gray-400">“Other Information Technology and Computer Service Activities,”</em> the company operates in the domain of digital infrastructure engineering, system design, and intelligent technology platform development.
              </p>
              <div className="p-6 bg-[#151F32] border-l-4 border-orange-500 rounded-r-lg shadow-lg">
                <p className="text-white font-medium italic">
                  "The company was founded with a singular objective: to contribute to the digital transformation of businesses by engineering dependable and scalable computing environments."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Founder Card */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl transform rotate-3"></div>
            <div className="relative bg-[#151F32] border border-gray-700 rounded-2xl p-8 md:p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border-2 border-orange-500 shadow-lg shadow-orange-500/20">
                  <User className="text-white w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Surendra Kumar</h3>
                  <p className="text-orange-400 text-sm font-bold uppercase tracking-wider">Founder & Director</p>
                </div>
              </div>
              
              <h4 className="text-lg font-semibold text-blue-200 mb-4">The Vision</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                IVISHA INFOTECH was conceptualized to address the structural weaknesses often seen in rapidly built digital systems. The vision behind the company is to promote <span className="text-white">disciplined engineering practices</span>, <span className="text-white">structured architecture planning</span>, and <span className="text-white">sustainable digital infrastructure development</span>.
              </p>
              
              {/* Signature Line */}
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. Long-Term Direction (Grid Section) --- */}
      <section className="py-24 bg-[#0F1623] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Future Roadmap</h2>
              <h3 className="text-4xl font-extrabold text-white">Our Long-Term Direction</h3>
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                We are actively working toward building technology assets that serve multiple industries through modular architecture.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                text: "A builder of proprietary infrastructure management platforms",
                icon: Cpu,
                color: "text-blue-400",
                bg: "bg-blue-400/10"
              },
              {
                text: "A developer of intelligent workflow automation tools",
                icon: Zap,
                color: "text-yellow-400",
                bg: "bg-yellow-400/10"
              },
              {
                text: "A provider of structured backend frameworks for emerging enterprises",
                icon: Rocket,
                color: "text-purple-400",
                bg: "bg-purple-400/10"
              },
              {
                text: "A contributor to resilient, secure, and efficient digital ecosystems",
                icon: ShieldCheck,
                color: "text-emerald-400",
                bg: "bg-emerald-400/10"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex items-center p-6 bg-[#1A2436] rounded-xl border border-gray-800 hover:border-gray-600 transition-colors group"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${item.bg} flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`${item.color} w-6 h-6`} />
                </div>
                <p className="text-gray-200 font-medium text-lg">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <p className="inline-block px-6 py-3 rounded-full bg-gray-800/50 border border-gray-700 text-gray-400 text-sm">
              <span className="text-orange-400 font-bold mr-2">Core Focus:</span> 
              Standardized deployment practices & Modular architecture.
            </p>
          </div>
        </div>
      </section>

      {/* --- 4. CTA Section (Imported Component) --- */}
      <CTA />

    </div>
  );
};

export default About;