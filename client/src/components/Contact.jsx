import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Loader2 } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // State for form data and sending status.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  // Update form data as user types.
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission.
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      // Use the full URL to your backend API endpoint.
      await axios.post("http://localhost:5000/api/contact", formData);
      setFormData({ name: "", email: "", message: "" });
      // Show success toast in bottom-right corner.
      toast.success("Message Sent! Thank you for contacting us.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      // Show error toast.
      toast.error("Oops! Something went wrong. Please try again later.", {
        position: "bottom-right",
        autoClose: 3000,
      });
      console.error("Error sending message:", error);
    } finally {
      setIsSending(false);
    }
  };

  // Variants for input field animations.
  const inputVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center snap-start bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900 relative z-10">
      <div className="container mx-auto px-4">
        {/* Header Title with Icon */}
        <motion.h2
          className="text-4xl font-bold text-center flex items-center justify-center space-x-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Mail size={48} className="text-white" />
          <span>Contact Me</span>
        </motion.h2>

        {/* Form Container with glassmorphism effect */}
        <motion.form
          className="max-w-md mx-auto p-8 mt-2 rounded-2xl shadow-2xl bg-gray-900 bg-opacity-70 backdrop-blur-md"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Name Field */}
          <motion.div
            className="mb-6"
            variants={inputVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
          >
            <label htmlFor="name" className="block mb-2 text-white font-medium">
              Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-200"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            className="mb-6"
            variants={inputVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
          >
            <label
              htmlFor="email"
              className="block mb-2 text-white font-medium"
            >
              Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-200"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Message Field with Fixed Height */}
          <motion.div
            className="mb-6"
            variants={inputVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="message"
              className="block mb-2 text-white font-medium"
            >
              Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 min-h-[150px] max-h-[150px] resize-y transition-all duration-200"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            ></motion.textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-4 rounded-full transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
            whileHover={{ scale: isSending ? 1 : 1.05 }}
            whileTap={{ scale: isSending ? 1 : 0.95 }}
          >
            {isSending ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={18} className="ml-2" />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>

      {/* Toast Container for alerts */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
