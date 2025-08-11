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
    Autoplay({ delay: 12000, stopOnInteraction: false })
  )

  const slides = [
    {
      src: "/images/1.jpg",
      title: "Master English",
      flag: "/flags/UK.jpg",
      description:
        "Study, work, and travel across the globe with fluent English. Join programs in the UK, USA, Canada, and Australia that open doors to top universities and high-paying careers.",
    },
    {
      src: "/images/2.jpg",
      title: "Learn German",
      flag: "/flags/Germany.jpg",
      description:
        "Experience world-class education and vocational training in Germany through Ausbildung, FSJ, and FSD programs. Earn while you learn and explore the rich culture of one of Europe’s strongest economies.",
    },
    {
      src: "/images/3.jpg",
      title: "Speak French",
      flag: "/flags/France.jpg",
      description:
        "Immerse yourself in the language of diplomacy, culture, and art. With French, you can study in France, Canada, Belgium, and Switzerland while enjoying vibrant lifestyles and opportunities.",
    },
    {
      src: "/images/4.jpg",
      title: "Explore Spanish",
      flag: "/flags/Spain.jpg",
      description:
        "Connect with over 500 million Spanish speakers worldwide. Access exchange programs in Spain, Mexico, and Latin America while enjoying warm weather and welcoming communities.",
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

              {/* Darker Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-black/60 flex flex-col items-center justify-center text-white px-4 text-center space-y-4">
                
                {/* Flag + Title */}
                <div className="flex items-center space-x-3">
                  <Image
                    src={slide.flag}
                    alt={`${slide.title} flag`}
                    width={50}
                    height={35}
                    className="rounded-sm shadow-md"
                  />
                  <h2 className="text-4xl md:text-5xl font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                    {slide.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-lg md:text-xl max-w-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                  {slide.description}
                </p>

                {/* Button */}
                <Link href="/apply">
                  <Button
                    variant="secondary"
                    className="text-lg px-6 py-3 font-semibold bg-white text-black hover:bg-gray-200 transition duration-300"
                  >
                    Apply Now
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
