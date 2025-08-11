"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"; // Adjust path if you're not using ShadCN UI

const ApplicationProcedure = () => {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push("/application"); // Redirect to your form route
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Application Procedure
      </h1>

      <p className="mb-4">
        <strong>EuroBridge Language School</strong> is committed to helping
        students master international languages including <strong>German</strong>,{" "}
        <strong>French</strong>, <strong>Spanish</strong>, and <strong>IELTS</strong>.
        All applications are processed through our convenient online application form.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-6 text-gray-800">
        How to Apply
      </h2>

      <ul className="list-decimal pl-6 mb-6 space-y-2">
        <li>Fill out the online application form by clicking the button below.</li>
        <li>Make your payment via M-Pesa using the Paybill details provided.</li>
        <li>
          Enter the <strong>Transaction Code</strong> in the application form to verify your payment.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 text-gray-800">Payment Details</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li><strong>Paybill:</strong> 400200</li>
        <li><strong>Account Number:</strong> 1045003</li>
        <li>
          After payment, you receive a <strong>Transaction Code</strong> via SMS.
          Include this code in your application form.
        </li>
      </ul>

      <p className="mb-8 text-red-600 font-medium">
        Note: Application is only complete once payment is made and the transaction code is submitted with your form.
      </p>

      <div className="flex justify-center">
        <Button
          onClick={handleApplyClick}
          className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
        >
          Apply Now
        </Button>
      </div>
    </div> 
  );
};

export default ApplicationProcedure;
