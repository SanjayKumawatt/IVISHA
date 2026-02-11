import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-24 bg-[#0B1120] overflow-hidden flex items-center justify-center">
      
      {/* --- Background Effects (Reactor Glow) --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central Blue Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        {/* Bottom Orange Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-600/5 rounded-full blur-[100px]"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            Ready to Scale?
          </span>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Stop Patching. <br />
            Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Engineering.</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Build digital infrastructure designed for durability, security, and the next decade of growth. Let's architect your future today.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-lg overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              <span className="relative z-10 flex items-center">
                START YOUR PROJECT
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              to="/services"
              className="px-8 py-4 bg-[#151F32] border border-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all flex items-center shadow-lg"
            >
              EXPLORE CAPABILITIES
            </Link>
          </div>

          {/* Footer Strip (Quick Contact Info) */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-gray-500">
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-default">
              <Mail size={16} />
              <span>contact@ivisha.com</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-800"></div>
            <div className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-default">
              <MapPin size={16} />
              <span>New Delhi, India</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;