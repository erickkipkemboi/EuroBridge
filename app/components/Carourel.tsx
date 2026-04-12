"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { Button } from "@/components/ui/button"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: false })
  )

  const slides = [
    {
      src: "/images/1.jpg",
      title: "Learn German for Ausbildung",
      flag: "/flags/Germany.jpg",
      description:
        "Start your journey to Germany through Ausbildung programs. Learn German to B1/B2 level and secure paid vocational training opportunities.",
    },
    {
      src: "/images/2.jpg",
      title: "German for Study in Germany",
      flag: "/flags/Germany.jpg",
      description:
        "Qualify for public universities in Germany with strong German language skills. Study tuition-free while accessing world-class education.",
    },
    {
      src: "/images/3.jpg",
      title: "German for Work Opportunities",
      flag: "/flags/Germany.jpg",
      description:
        "Unlock high-demand job opportunities in Germany. Master professional German and increase your chances of securing skilled employment.",
    },
    {
      src: "/images/4.jpg",
      title: "Online German Classes (A1–B2)",
      flag: "/flags/Germany.jpg",
      description:
        "Join flexible online German classes from beginner to advanced level. Interactive lessons, exam preparation, and personalized support for your success.",
    },
  ]

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-screen h-screen overflow-hidden"
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="w-full h-screen relative">
            <div className="w-full h-full relative">

              {/* Background Image */}
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                />

              {/* Navy + Gold Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B3C5D]/90 via-black/80 to-black/90 flex flex-col items-center justify-center text-white px-6 text-center space-y-6">

                {/* Flag + Title */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={slide.flag}
                    alt="German flag"
                    width={55}
                    height={40}
                    className="rounded-sm shadow-lg"
                  />

                  <h2 className="text-4xl md:text-6xl font-bold tracking-wide">
                    {slide.title}
                  </h2>
                </div>

                {/* Gold Accent Line */}
                <div className="w-24 h-[3px] bg-[#C9A227] rounded-full" />

                {/* Description */}
                <p className="text-lg md:text-xl max-w-3xl text-gray-200 leading-relaxed">
                  {slide.description}
                </p>

                {/* CTA Button */}
                <Link href="/register">
                  <Button
                    className="mt-4 bg-[#C9A227] hover:bg-[#B38B1D] text-[#0B3C5D] font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
                  >
                    Apply Now →
                  </Button>
                </Link>

              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}