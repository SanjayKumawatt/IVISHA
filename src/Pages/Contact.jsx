import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Loader2,
  MessageSquare,
  Building
} from "lucide-react";

const Contact = () => {
  // Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Input Change Handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call (2 seconds delay)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="bg-[#0B1120] min-h-screen font-sans pt-20 text-white">
      
      {/* --- Page Header --- */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-800 bg-[#0f1623]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Contact <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                IVISHA INFOTECH
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to engineer your digital infrastructure? Reach out to our team for a structured consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Main Content Split --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- LEFT: Contact Info --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-orange-500 pl-4">
              Corporate Headquarters
            </h3>

            {/* Address Card */}
            <div className="flex items-start gap-6 p-6 bg-[#151F32] rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors group">
              <div className="p-4 bg-gray-900 rounded-lg text-orange-500 group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Office Address</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  4819/24 3rd Floor, Ansari Road,<br />
                  Darya Ganj, Central Delhi,<br />
                  New Delhi, Delhi, India - 110002.
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-start gap-6 p-6 bg-[#151F32] rounded-xl border border-gray-800 hover:border-blue-500/30 transition-colors group">
              <div className="p-4 bg-gray-900 rounded-lg text-blue-500 group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Email Support</h4>
                <p className="text-gray-400 text-sm mb-2">
                  For inquiries, project proposals, and technical support:
                </p>
                <a href="mailto:support@ivishainfotech.in" className="text-blue-400 font-semibold hover:text-white transition-colors">
                  support@ivishainfotech.in
                </a>
              </div>
            </div>

            {/* Additional Info Box */}
            <div className="p-6 bg-gradient-to-r from-blue-900/10 to-transparent rounded-xl border border-blue-500/20">
               <div className="flex items-center gap-3 mb-3">
                  <Building size={20} className="text-blue-400" />
                  <h4 className="font-bold text-blue-100">Company Operations</h4>
               </div>
               <p className="text-sm text-gray-400">
                  IVISHA INFOTECH PRIVATE LIMITED is a registered entity under the Companies Act. We operate strictly under formal service agreements.
               </p>
            </div>

          </motion.div>

          {/* --- RIGHT: Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#151F32] p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl relative overflow-hidden"
          >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageSquare className="text-blue-500" /> Send a Message
            </h3>

            {/* Success Message Banner (Visible only when isSuccess is true) */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 24 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 flex items-start gap-3 overflow-hidden"
                >
                  <CheckCircle2 className="text-emerald-400 w-5 h-5 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-emerald-400 font-bold text-sm">Message Sent Successfully!</h4>
                    <p className="text-emerald-200/70 text-xs">Our engineering team will review your inquiry and respond shortly.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              
              {/* Name Input */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#0B1120] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#0B1120] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                  placeholder="Enter your email"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#0B1120] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="Infrastructure Design">Infrastructure Design</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Partnership Proposal">Partnership Proposal</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0B1120] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600 resize-none"
                  placeholder="Describe your requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Processing...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Contact;