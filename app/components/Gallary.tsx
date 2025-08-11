"use client"

import Image from "next/image"
import { useState } from "react"

export default function SchoolGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { src: "/images/banner.jpg", alt: "Main Entrance" },
    { src: "/images/Nurses.jpeg", alt: "School Assembly" },
    { src: "/images/spanish.jpeg", alt: "Science Lab" },
    { src: "/images/4.jpg", alt: "Computer Lab" },
    { src: "/images/5.jpg", alt: "Sports Field" },
    { src: "/images/banner.jpg", alt: "Library" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-8">Our School in Pictures</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="object-cover w-full h-64 transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition duration-300">
              {image.alt}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage}
            alt="School Image"
            width={1000}
            height={700}
            className="max-h-[90vh] max-w-full object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  )
}
