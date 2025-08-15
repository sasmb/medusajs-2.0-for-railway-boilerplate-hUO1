"use client"

import { useState, useEffect } from "react"
import { Heading, Button } from "@medusajs/ui"

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    "/image/heropic.png",
    "/image/Screenshot 2025-08-15 at 16.08.19.png",
    "/image/Screenshot 2025-08-15 at 16.11.13.png",
    "/image/Screenshot 2025-08-15 at 16.11.47.png",
    "/image/Screenshot 2025-08-15 at 17.13.43.png",
    "/image/Screenshot 2025-08-15 at 17.15.42.png"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 60000) // Change every 1 minute (60,000ms)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          <Heading
            level="h1"
            className="text-white mb-8 drop-shadow-lg"
            style={{
              fontFamily: 'TimesNow, Times New Roman, serif',
              fontWeight: 400,
              fontSize: 'clamp(48px, 10vw, 120px)',
              lineHeight: 'clamp(44px, 9vw, 110px)',
              letterSpacing: '-0.02em',
              textAlign: 'left',
              maxWidth: '800px'
            }}
          >
            Transformative
            <br />
            and
            <br />
            Inclusive
            <br />
            Salon-Grade
            <br />
            Hair Control
          </Heading>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="large"
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline"
              size="large" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
        
        {/* Image Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
