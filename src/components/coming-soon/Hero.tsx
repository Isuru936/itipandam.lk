"use client"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="flex flex-col justify-center px-8 lg:px-16 py-12">
      <div className="max-w-lg">
        <p className="text-amber-600 text-xl font-serif italic mb-4">
          Coming Soon
        </p>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Meet Our
          <br />
          Latest Creations
        </h1>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          Elevates any space with premium scented candles, sustainable and luxurious too!
        </p>
        <Button
          variant="outline"
          className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white inline-flex items-center gap-2 bg-transparent"
        >
          Learn More
          <span className="text-lg">→</span>
        </Button>
      </div>
    </div>
  )
}
