"use client"

import type React from "react"
import { Navbar } from "@/components/shared/navbar"
import { Hero } from "@/components/coming-soon/Hero"
import { FeatureCarousel } from "@/components/coming-soon/FeatureCarousel"
import { InstagramGallery } from "@/components/coming-soon/InstagramGallery"
import { Newsletter } from "@/components/coming-soon/Newsletter"

export default function Page() {

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <Navbar />
      <div className="relative z-10 grid lg:grid-cols-2 min-h-[calc(100vh-80px)]" style={{
        backgroundImage: 'url("/banner.jpg")',
        backgroundSize: "fit",
        backgroundPosition: "center",
      }}>
        <Hero />        
        <FeatureCarousel />
      </div>

      <InstagramGallery />

      <Newsletter />
    </div>
  )
}