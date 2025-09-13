"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { heroData } from "@/data"

export function Hero() {
  return (
    <div className="flex flex-col justify-center px-8 lg:px-16 py-12">
      <div className="max-w-lg">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-amber-500" />
          <p className="text-amber-600 text-xl font-serif italic">{heroData.badge}</p>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {heroData.title}
          <br />
          <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
            {heroData.highlight}
          </span>
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {heroData.description}
        </p>
        
        <Button
          variant="outline"
          size="lg"
          className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white inline-flex items-center gap-2 bg-transparent"
        >
          {heroData.ctaText}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
