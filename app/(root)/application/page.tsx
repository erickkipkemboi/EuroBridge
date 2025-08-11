"use client";
import React, { useState } from "react";

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    level: "",
    language: "",
    careerDream: "",
    mpesaCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can send formData to your backend or service
    console.log("Submitted:", formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Application Form</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Level</label>
          <select
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Language</label>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="">Select Language</option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
            <option value="IELTS">IELTS</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Career Dream</label>
          <textarea
            name="careerDream"
            value={formData.careerDream}
            onChange={handleChange}
            required
            rows={3}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Application Fee</label>
          <input
            type="text"
            value="1000 KES"
            readOnly
            className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 text-gray-600 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">M-Pesa Transaction Code</label>
          <input
            type="text"
            name="mpesaCode"
            value={formData.mpesaCode}
            onChange={handleChange}
            required
            placeholder="Enter the code you received after payment"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
