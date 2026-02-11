import React from "react";
import { motion } from "framer-motion";
import { FileText, Gavel, AlertCircle } from "lucide-react";

const TermsConditions = () => {
  const lastUpdated = "February 10, 2026";

  return (
    <div className="bg-[#0B1120] min-h-screen font-sans pt-20 text-gray-300">
      
      {/* --- Page Header --- */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-800 bg-[#0f1623]">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                <Gavel size={24} />
              </div>
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs">
                Legal Agreement
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-gray-400 text-sm">
              Last Updated: <span className="text-gray-200">{lastUpdated}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Content Section --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-[#151F32] rounded-2xl p-8 md:p-12 border border-gray-800 shadow-xl">
          
          <div className="space-y-12">
            
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-orange-500 mr-3">1.</span> Acceptance of Terms
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                By accessing the website of <strong className="text-gray-100">IVISHA INFOTECH PRIVATE LIMITED</strong>, users agree to comply with these Terms and Conditions. Continued use constitutes acceptance of any updates or modifications.
              </p>
            </section>

            {/* 2. Intellectual Property */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-orange-500 mr-3">2.</span> Intellectual Property
              </h2>
              <p className="leading-relaxed text-sm md:text-base mb-4">
                All content, design elements, system structures, proprietary frameworks, and documentation on this website are the intellectual property of IVISHA INFOTECH PRIVATE LIMITED unless otherwise stated.
              </p>
              <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold bg-orange-900/10 p-3 rounded border border-orange-500/20 w-fit">
                <AlertCircle size={16} />
                Unauthorized reproduction, distribution, or modification is strictly prohibited.
              </div>
            </section>

            {/* 3. Use of Website */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-orange-500 mr-3">3.</span> Use of Website
              </h2>
              <p className="mb-4 text-sm md:text-base">Users agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-400 marker:text-orange-500">
                <li>Engage in unlawful activities</li>
                <li>Attempt unauthorized system access</li>
                <li>Interfere with website functionality</li>
                <li>Distribute harmful or malicious code</li>
              </ul>
              <p className="mt-4 text-sm md:text-base text-gray-500">
                Violation may result in restricted access or legal action.
              </p>
            </section>

            {/* 4. Service Agreements */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-orange-500 mr-3">4.</span> Service Agreements
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                Any service engagement between the Company and a client shall be governed by a separate written agreement defining scope, deliverables, intellectual property rights, payment terms, and liabilities.
              </p>
            </section>

            {/* 5. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-orange-500 mr-3">5.</span> Limitation of Liability
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                The Company shall not be liable for indirect, incidental, or consequential damages arising from the use of its website or services, except where mandated by applicable law.
              </p>
            </section>

            {/* 6. Governing Law */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-orange-500 mr-3">6.</span> Governing Law
              </h2>
              <p className="leading-relaxed text-sm md:text-base flex items-center gap-2">
                <Gavel size={16} className="text-gray-500" />
                These Terms shall be governed by the laws of India. Any disputes shall fall under the jurisdiction of courts located in <strong className="text-white">New Delhi, India</strong>.
              </p>
            </section>

            {/* 7. Amendments */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-orange-500 mr-3">7.</span> Amendments
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                The Company reserves the right to modify these Terms at any time. Continued usage constitutes agreement to updated terms.
              </p>
            </section>

          </div>
        </div>
      </section>

    </div>
  );
};

export default TermsConditions;