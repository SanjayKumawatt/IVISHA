import React from "react";
import { Link } from "react-router-dom"; // Link import kiya
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
      
      {/* --- 1. Background Image with Dark Overlay --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
      </div>

      {/* --- 2. Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="flex items-center space-x-2 mb-6">
            
            <span className="text-orange-400 font-bold tracking-widest uppercase text-sm drop-shadow-md">
              Architecture-First Engineering
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={fadeInUp} 
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
          >
            Engineering Foundational <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 filter drop-shadow-sm">
              Digital Systems
            </span>{" "}
            for Modern Enterprises
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p 
            variants={fadeInUp} 
            className="text-lg md:text-xl text-white font-normal mb-8 border-l-4 border-orange-500 pl-6 bg-black/30 backdrop-blur-sm p-4 rounded-r-lg"
          >
            <strong className="text-orange-400 font-bold">IVISHA INFOTECH PRIVATE LIMITED</strong> is a technology systems engineering company focused on Designing structured, scalable, and resilient digital environments for organizations operating in rapidly evolving markets.
          </motion.p>

          {/* Detailed Description */}
          <motion.div variants={fadeInUp} className="text-base text-gray-100 space-y-4 mb-10 max-w-3xl leading-relaxed font-light drop-shadow-md">
            <p>
              In an era where businesses depend heavily on digital performance, system reliability, and data-driven operations, infrastructure is no longer optional - it is strategic. IVISHA INFOTECH was established to design and implement the foundational systems that allow enterprises to operate efficiently, scale confidently, and innovate sustainably.
            </p>
            <p className="hidden md:block">
              We specialize in architecture-first engineering. Rather than building surface-level applications, we focus on constructing deep backend frameworks, distributed processing systems, secure data environments, and automation-driven operational platforms that form the backbone of digital businesses.
            </p>
          </motion.div>

          {/* Buttons Section (Now Clickable with Link) */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            
            {/* Primary Button -> Goes to Contact Page */}
            <Link 
              to="/contact" 
              className="group relative px-8 py-4 bg-orange-600 text-white font-bold rounded overflow-hidden shadow-[0_0_20px_rgba(234,88,12,0.5)] transition-all hover:bg-orange-700 hover:scale-105 active:scale-95 inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                GET STARTED
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Secondary Button -> Goes to Services Page */}
            <Link 
              to="/services" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center shadow-lg inline-flex"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              VIEW SERVICES
            </Link>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;