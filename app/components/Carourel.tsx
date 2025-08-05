"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [isHovered, setIsHovered] = React.useState(false)

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  const slides = [
    {
      src: "/1.jpg",
      title: "Explore Nature",
      description: "Discover the beauty of the wild and reconnect with the natural world around you",
      buttonText: "Start Exploring",
    },
    {
      src: "/2.jpg", 
      title: "Adventure Awaits",
      description: "Find your next thrilling journey and create memories that will last a lifetime",
      buttonText: "Find Adventure",
    },
    {
      src: "/3.jpg",
      title: "Peaceful Retreat",
      description: "Escape the noise and unwind in serene locations designed for complete relaxation",
      buttonText: "Book Retreat",
    },
    {
      src: "/5.jpg",
      title: "City Lights",
      description: "Feel the pulse of the urban world and experience the energy of metropolitan life",
      buttonText: "Explore City",
    },
  ]

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const togglePlayPause = () => {
    if (isPlaying) {
      plugin.current.stop()
    } else {
      plugin.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const goToSlide = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden group">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="w-full h-full relative">
              <div className="w-full h-full relative overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-end text-white px-6 md:px-12 pb-24 md:pb-32">
                  <div className="max-w-4xl text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl animate-fade-up">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/95 drop-shadow-lg animate-fade-up animation-delay-200">
                      {slide.description}
                    </p>
                    <Button
                      size="lg"
                      className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-up animation-delay-400"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>

                {/* Slide number indicator */}
                <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {index + 1} / {slides.length}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Enhanced Navigation Arrows */}
        <CarouselPrevious 
          className={`absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300 w-12 h-12 ${
            isHovered ? 'opacity-100' : 'opacity-70'
          }`}
        >
          <ChevronLeft className="h-6 w-6" />
        </CarouselPrevious>
        
        <CarouselNext 
          className={`absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300 w-12 h-12 ${
            isHovered ? 'opacity-100' : 'opacity-70'
          }`}
        >
          <ChevronRight className="h-6 w-6" />
        </CarouselNext>

        {/* Play/Pause Control */}
        <Button
          onClick={togglePlayPause}
          className={`absolute top-6 right-6 z-20 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 transition-all duration-300 w-12 h-12 p-0 ${
            isHovered ? 'opacity-100' : 'opacity-70'
          }`}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </Button>
      </Carousel>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index + 1
                ? 'bg-yellow-400 scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-yellow-400 transition-all duration-300 ease-linear"
          style={{
            width: `${(current / count) * 100}%`,
          }}
        />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}