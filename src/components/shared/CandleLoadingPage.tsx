"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { particlePositions, loadingData, animationConfig } from "@/data"

export function CandleLoadingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showFlame, setShowFlame] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setShowFlame(true)
            setTimeout(() => setIsLoading(false), animationConfig.fadeOutDelay)
          }, animationConfig.flameDelay)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, animationConfig.progressInterval)

    return () => clearInterval(progressInterval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {particlePositions.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-300 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
        
        {/* Warm glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-200/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-red-200/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="relative inline-block">
            <Image
              src={loadingData.logoPath}
              alt={loadingData.brandName}
              width={120}
              height={120}
              className="drop-shadow-lg"
            />
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl scale-110" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 font-serif">
            {loadingData.brandName}
          </h1>
          <p className="text-lg text-gray-600 font-light tracking-wider">
            {loadingData.tagline}
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-3" />
        </div>

        {/* Candle Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Candle Base */}
            <div className="w-8 h-24 bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-lg shadow-lg relative">
              {/* Wax drips */}
              <div className="absolute -right-1 top-8 w-2 h-3 bg-amber-300 rounded-r-full opacity-80" />
              <div className="absolute -right-1 top-12 w-1.5 h-2 bg-amber-400 rounded-r-full opacity-60" />
              <div className="absolute -right-1 top-16 w-1 h-1.5 bg-amber-500 rounded-r-full opacity-40" />
            </div>
            
            {/* Flame */}
            {showFlame && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  {/* Outer flame */}
                  <div className="w-3 h-6 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full animate-pulse" />
                  {/* Inner flame */}
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-4 bg-gradient-to-t from-yellow-200 to-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-orange-300/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Loading Progress */}
        <div className="w-64 mx-auto">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Loading Text */}
          <div className="mt-4 text-sm text-gray-500">
            {progress < 30 && loadingData.loadingMessages[0]}
            {progress >= 30 && progress < 60 && loadingData.loadingMessages[1]}
            {progress >= 60 && progress < 90 && loadingData.loadingMessages[2]}
            {progress >= 90 && loadingData.loadingMessages[3]}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fade out overlay */}
      {!isLoading && (
        <div className="absolute inset-0 bg-white animate-pulse" />
      )}
    </div>
  )
}
