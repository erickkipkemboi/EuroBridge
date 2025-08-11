import React from 'react';
import Image from 'next/image';
import Content3 from '@/app/components/Content3';
import TuitionFeeCard from '@/app/components/course/TuitionFeeCard';
import FrenchDescription from '@/app/components/course/FrenchDescription';
import GermanDescription from '@/app/components/course/GermanDescription';
import IeltsDescription from '@/app/components/course/IeltsDescription';
import SpanishDescription from '@/app/components/course/SpanishDescription'; // optional if you have it

function Page() {
  return (
    <>
      <div className="relative">
        <Content3 />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h3 className="text-4xl font-bold">Our Courses</h3>
          <p className="text-xl">Home / Course</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-[-3rem] text-xl px-4">
        <div className="rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-6 text-black">
            Our Courses Catalogue
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* French */}
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="flex-1">
                <Image
                  src="/images/french.jpg"
                  alt="French Course"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="text-start mt-4">
                <TuitionFeeCard />
              </div>
            </div>

            {/* German */}
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="flex-1">
                <Image
                  src="/images/german.jpg"
                  alt="German Course"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="text-start mt-4">
                <TuitionFeeCard />
              </div>
            </div>

            {/* IELTS */}
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="flex-1">
                <Image
                  src="/images/ielts.png"
                  alt="IELTS Course"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="text-start mt-4">
                <TuitionFeeCard />
              </div>
            </div>

            {/* Spanish */}
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
              <div className="flex-1">
                <Image
                  src="/images/spanish.jpeg"
                  alt="Spanish Course"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
              <div className="text-start mt-4">
                <TuitionFeeCard />
              </div>
            </div>
          </div>
        </div>

        {/* Optional descriptions below */}
        <FrenchDescription />
        <GermanDescription />
        <IeltsDescription />
        <SpanishDescription /> {/* Only if the file exists */}
      </div>
    </>
  );
}

export default Page;
