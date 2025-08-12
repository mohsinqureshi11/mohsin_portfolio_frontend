// src/components/Contact.jsx
import React, { useState } from "react";
import API from "../api/axios";
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      // const res = await API.post('/contact', formData); // local chal raha hai
      // const res = await API.post("/api/contact", formData); 
      const res = await axios.post('https://mohsin-portfolio-backend.vercel.app/api/contact',formData);
      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-12">
          Have a question, a project idea, or just want to say hi?  
          Fill out the form below and I’ll get back to you soon.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-800/60 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="mt-6 p-4 rounded-lg bg-gray-900 border border-gray-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all w-full"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && (
        <p
          className={`mt-6 text-center font-medium ${
            status.includes("✅") ? "text-green-400" : "text-red-400"
          }`}
        >
          {status}
        </p>
      )}
    </section>
  );
};

export default Contact;
