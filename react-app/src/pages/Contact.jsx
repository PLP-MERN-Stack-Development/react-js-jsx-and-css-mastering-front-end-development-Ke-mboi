import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
        Contact Us 💬
      </h2>

      {submitted ? (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center w-full max-w-md">
          Thank you for reaching out! We’ll get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        >
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-all"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
