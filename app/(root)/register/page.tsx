"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const ApplicationProcedure = () => {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push("https://forms.gle/tT1NQJVadX9q9wyv8"); 
    };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#0B3C5D]">
        German Course Application
      </h1>

      <p className="mb-4">
        <strong>LÖWE & ADLER</strong> specializes in professional German language
        training from A1 to B2 levels. Our programs are designed to prepare
        students for opportunities in Germany including Ausbildung,
        university studies, and skilled employment pathways.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6 text-gray-800">
        How to Apply
      </h2>

      <ul className="list-decimal pl-6 mb-6 space-y-2">
        <li>Click the <strong> Apply Now</strong> button below.</li>
        <li>Fill out the official Google application form with your details.</li>
        <li>Select your preferred German level (A1, A2, B1, or B2).</li>
        <li>Submit the form and wait for confirmation and further guidance.</li>
      </ul>

      <p className="mb-8 text-gray-700 font-medium">
        Note: Ensure all information provided in the form is accurate and complete.
        Our admissions team will contact you with the next steps.
      </p>

      <div className="flex justify-center">
        <Button
          onClick={handleApplyClick}
          className="bg-[#0B3C5D] text-white px-6 py-3 rounded-full hover:bg-[#092f47] transition"
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default ApplicationProcedure;