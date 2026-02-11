import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "February 10, 2026"; // You can update this dynamically or manually

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
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Shield size={24} />
              </div>
              <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">
                Legal Documentation
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
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
            
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-3">1.</span> Introduction
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                This Privacy Policy describes how <strong className="text-gray-100">IVISHA INFOTECH PRIVATE LIMITED</strong> (“the Company,” “we,” “our,” or “us”) collects, processes, stores, and protects information obtained through its website and digital platforms.
              </p>
              <p className="mt-4 leading-relaxed text-sm md:text-base">
                By accessing or using our website or services, you agree to the terms outlined in this Privacy Policy.
              </p>
            </section>

            {/* 2. Information We Collect */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-3">2.</span> Information We Collect
              </h2>
              <p className="mb-4 text-sm md:text-base">We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-400 marker:text-blue-500">
                <li>Personal identification details (name, email address, contact information)</li>
                <li>Organizational information submitted through inquiry forms</li>
                <li>Technical data such as IP address, browser type, device information</li>
                <li>Usage data relating to website interaction</li>
              </ul>
              <p className="mt-4 text-sm md:text-base italic bg-blue-900/10 p-4 border-l-2 border-blue-500">
                Information is collected solely for operational, communication, and service delivery purposes.
              </p>
            </section>

            {/* 3. Purpose of Data Collection */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-3">3.</span> Purpose of Data Collection
              </h2>
              <p className="mb-4 text-sm md:text-base">Collected information may be used for:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-400 marker:text-blue-500">
                <li>Responding to inquiries</li>
                <li>Providing service-related updates</li>
                <li>Maintaining system security</li>
                <li>Internal analytics and performance evaluation</li>
                <li>Compliance with legal obligations</li>
              </ul>
              <p className="mt-4 text-sm md:text-base">
                We do not sell, rent, or trade personal information to third parties.
              </p>
            </section>

            {/* 4. Data Security Measures */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-3">4.</span> Data Security Measures
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                The Company implements administrative, technical, and physical safeguards to protect data from unauthorized access, misuse, alteration, or disclosure.
              </p>
              <div className="mt-4 flex items-start gap-3 p-4 bg-[#0B1120] rounded-lg border border-gray-700">
                <Lock className="text-green-500 w-5 h-5 mt-1 shrink-0" />
                <p className="text-sm text-gray-400">
                  Security practices include encryption protocols, access restrictions, logging mechanisms, and controlled data storage environments.
                </p>
              </div>
            </section>

            {/* 5. Data Retention */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-3">5.</span> Data Retention
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                Personal information is retained only for as long as necessary to fulfill operational requirements or comply with legal obligations.
              </p>
            </section>

            {/* 6. Third-Party Services */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-3">6.</span> Third-Party Services
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                Where third-party integrations are used, such services operate under their respective privacy policies. The Company is not responsible for the independent data practices of external service providers.
              </p>
            </section>

            {/* 7. User Rights */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-3">7.</span> User Rights
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                Users may request access, correction, or deletion of their personal data by contacting the Company through official communication channels.
              </p>
            </section>

            {/* 8. Policy Updates */}
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="text-blue-500 mr-3">8.</span> Policy Updates
              </h2>
              <p className="leading-relaxed text-sm md:text-base">
                The Company reserves the right to update this Privacy Policy periodically. Changes will be reflected on this page with revised effective dates.
              </p>
            </section>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicy;