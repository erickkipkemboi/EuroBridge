import React from 'react';

function GermanDescription() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Section Header */}
      <div className="text-2xl ms-11 mb-4 font-semibold text-indigo-500">
        <h3>French Course Description</h3>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* A1/A2 Level */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-medium mb-4">Beginner German (A1/A2)</h3>
            <ul className="list-disc text-sm pl-5 space-y-1">
              <li>Introduction to basic German vocabulary, grammar, and pronunciation.</li>
              <li>Practice in everyday conversations, greetings, and simple interactions.</li>
              <li>Preparation for Goethe-Zertifikat A1/A2 exams.</li>
            </ul>
          </div>
        </div>

        {/* B1/B2 Level */}
        <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-medium mb-4">Intermediate German (B1/B2)</h3>
            <ul className="list-disc text-sm pl-5 space-y-1">
              <li>Expansion of vocabulary and grammar to discuss more complex topics.</li>
              <li>Development of reading, writing, listening, and speaking skills through various activities.</li>
              <li>Preparation for Goethe-Zertifikat B1/B2 exams.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GermanDescription;
