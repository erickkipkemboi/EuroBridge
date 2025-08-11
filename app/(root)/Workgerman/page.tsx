"use client";

import React from "react";

export default function GermanyOpportunities() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-6">
        🇩🇪 Explore Career & Volunteer Opportunities in Germany!
      </h2>

      <p className="text-lg text-center text-gray-700 mb-10">
        Learn German and open doors to Ausbildung, FSJ, and FÖJ programs with real benefits and career paths!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Ausbildung Card */}
        <div className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">🛠 Ausbildung</h3>
          <p className="text-gray-600 mb-3">
            Paid vocational training in nursing, IT, hospitality, and more.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Earn monthly salary</li>
            <li>Hands-on skills</li>
            <li>Permanent job chances</li>
          </ul>
        </div>

        {/* FSJ Card */}
        <div className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">🤝 FSJ (Social Year)</h3>
          <p className="text-gray-600 mb-3">
            Volunteer in schools, hospitals, or NGOs while improving your German.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Get accommodation & food</li>
            <li>Pocket money included</li>
            <li>Great for ages 18–26</li>
          </ul>
        </div>

        {/* FÖJ Card */}
        <div className="border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-indigo-500 mb-2">🌿 FÖJ (Eco Year)</h3>
          <p className="text-gray-600 mb-3">
            Volunteer in green projects: farms, forests, and conservation.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Eco-friendly learning</li>
            <li>Great for nature lovers</li>
            <li>Boost your German</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">📢 Learn German with Us!</h4>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          We’ll help you learn the language AND guide you step-by-step to join these amazing programs in Germany!
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
          Get Started Today
        </button>
      </div>
    </div>
  );
}
