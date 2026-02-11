import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  User, 
  Target, 
  CheckCircle, 
  MapPin, 
  Calendar,
  ArrowRight
} from "lucide-react";

const goals = [
  "A builder of proprietary infrastructure management platforms",
  "A developer of intelligent workflow automation tools",
  "A provider of structured backend frameworks for emerging enterprises",
  "A contributor to resilient, secure, and efficient digital ecosystems"
];

const AboutCompany = () => {
  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      
      {/* --- Background Decorative Elements --- */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT COLUMN: Corporate Overview & Founder --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Header */}
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
                About The Company
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Corporate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Overview
              </span>
            </h2>

            {/* Corporate Text */}
            <div className="text-gray-400 text-lg leading-relaxed space-y-6 mb-10">
              <p>
                <strong className="text-white">IVISHA INFOTECH PRIVATE LIMITED</strong> was incorporated on <span className="text-blue-400 font-semibold">9th February 2026</span> in New Delhi, India. Registered under the classification of “Other Information Technology and Computer Service Activities,” the company operates in the domain of digital infrastructure engineering, system design, and intelligent technology platform development.
              </p>
              <p>
                The company was founded with a singular objective: to contribute to the digital transformation of businesses by engineering dependable and scalable computing environments.
              </p>
            </div>

            {/* Founder Section (Signature Card Style) */}
            <div className="bg-[#151F32] rounded-xl p-8 border-l-4 border-orange-500 shadow-xl relative overflow-hidden group">
              {/* Subtle background icon */}
              <User className="absolute right-4 top-4 text-white/5 w-24 h-24 rotate-12 group-hover:scale-110 transition-transform duration-500" />
              
              <h3 className="text-2xl font-bold text-white mb-1">Surendra Kumar</h3>
              <p className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">Founder & Director</p>
              
              <p className="text-gray-300 italic font-light relative z-10">
                "IVISHA INFOTECH was conceptualized to address the structural weaknesses often seen in rapidly built digital systems. The vision behind the company is to promote disciplined engineering practices, structured architecture planning, and sustainable digital infrastructure development."
              </p>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: Image & Long-Term Direction --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Image Container with Overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10"></div>
              {/* Architecture/Building Image */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Corporate Architecture" 
                className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Content: Long-Term Direction */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="bg-[#0B1120]/80 backdrop-blur-md rounded-xl p-6 border border-gray-700 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <Target className="text-orange-500" size={24} />
                    <h4 className="text-xl font-bold text-white">Our Long-Term Direction</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {goals.map((goal, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 min-w-[20px]">
                           <CheckCircle className="text-blue-400 w-5 h-5" />
                        </div>
                        <p className="text-gray-300 text-sm font-medium leading-snug">
                          {goal}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Footer Line */}
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-400 flex items-center gap-2">
                       Active Goal <ArrowRight size={14} className="text-orange-500" /> Building standardized deployment assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge (Top Right) */}
            <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg shadow-blue-900/50 hidden md:block">
               <div className="flex items-center gap-2">
                  <Calendar size={20} />
                  <div>
                    <p className="text-xs font-bold opacity-80">ESTABLISHED</p>
                    <p className="text-lg font-bold">2026</p>
                  </div>
               </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutCompany;