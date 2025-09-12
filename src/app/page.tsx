"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook } from "lucide-react"
import Image from "next/image"

// Instagram Embed Component
const InstagramEmbed = ({ url, className }: { url: string; className?: string }) => {
  useEffect(() => {
    // Load Instagram embed script
    if (typeof window !== 'undefined' && !window.instgrm) {
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)
    } else if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <div className={className}>
      <blockquote 
        className="instagram-media" 
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: 'calc(100% - 2px)'
        }}
      />
    </div>
  )
}

export default function Page() {
  const [email, setEmail] = useState("")
  const [visibleRight, setVisibleRight] = useState(0)
  const [activeCard, setActiveCard] = useState(0)
  
  // Sample Instagram post URLs - Replace these with your actual candle posts
  const instagramPosts = [
    "https://www.instagram.com/p/DOYuZkrDIjF/?img_index=1",
    "https://www.instagram.com/p/DOV_O_aDPwS/?img_index=1",
    "https://www.instagram.com/p/DOV9I37jDR5/",
    "https://www.instagram.com/p/DOOAH2RDPDZ/?img_index=1",
    "https://www.instagram.com/p/DORI6kLDEet/?img_index=1",
    "https://www.instagram.com/p/DORGdGBjKQg/?img_index=1",
  ]

  // Feature carousel content (right side)
  const featureCards = [
    {
      badge: "Premium Collection",
      title: "Signature Scents",
      desc: "Curated notes for calm, warmth, and balance.",
      chips: ["Vanilla Orchid", "Sandalwood", "Amber Resin"],
      stats: [
        { label: "Burn", value: "45h" },
        { label: "Wax", value: "Soy" },
        { label: "Notes", value: "Warm" },
      ],
      colors: ["bg-amber-300/70", "bg-rose-300/70", "bg-emerald-300/70"],
    },
    {
      badge: "Limited Edition",
      title: "Coastal Breeze",
      desc: "Fresh citrus, sea salt, and driftwood clarity.",
      chips: ["Sea Salt", "Citrus Peel", "Driftwood"],
      stats: [
        { label: "Burn", value: "40h" },
        { label: "Wax", value: "Coconut" },
        { label: "Mood", value: "Fresh" },
      ],
      colors: ["bg-sky-300/70", "bg-cyan-300/70", "bg-indigo-300/70"],
    },
    {
      badge: "Best Seller",
      title: "Evening Ember",
      desc: "Smoked cedar, cacao, and spiced fig comfort.",
      chips: ["Smoked Cedar", "Cacao", "Spiced Fig"],
      stats: [
        { label: "Burn", value: "50h" },
        { label: "Wax", value: "Beeswax" },
        { label: "Mood", value: "Cozy" },
      ],
      colors: ["bg-amber-400/70", "bg-purple-300/70", "bg-fuchsia-300/70"],
    },
  ]

  // Reveal right-side card on load
  useEffect(() => {
    setVisibleRight(0)
    const maxItems = 1
    const interval = setInterval(() => {
      setVisibleRight((prev) => {
        if (prev >= maxItems) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 220)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-sm">
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="ITIPANDAM" width={120} height={60} className="h-8 w-auto" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <a href="https://www.instagram.com/itipandam.lk/" className="text-gray-600 hover:text-gray-900">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 grid lg:grid-cols-2 min-h-[calc(100vh-80px)]" style={{
        backgroundImage: 'url("/banner.jpg")',
        backgroundSize: "fit",
        backgroundPosition: "center",
      }}>
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center px-8 lg:px-16 py-12">
          <div className="max-w-lg">
            <p className="text-amber-600 text-xl font-serif italic mb-4">Coming Soon</p>
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

        <div className="relative flex items-center justify-center p-8 lg:p-16">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-stone-100 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" /> */}

          <div className="relative w-full max-w-lg">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md p-5 overflow-hidden">
              {/* Decorative blurred glow */}
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-200/60 blur-2xl" />
              <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-rose-200/50 blur-2xl" />

              {/* Carousel viewport */}
              <div className={`relative transition-all duration-700 ease-out ${visibleRight >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeCard * 100}%)` }}
                  >
                    {featureCards.map((card, idx) => (
                      <div key={idx} className="min-w-full px-1">
                        <div className="bg-white rounded-xl border border-gray-200 p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[11px] font-medium tracking-wide text-gray-700 bg-white/70 border border-gray-200 rounded-full px-2 py-1">
                              {card.badge}
                            </span>
                            <span className="text-[10px] text-gray-500">{idx === 0 ? 'New' : idx === 1 ? 'Fresh' : 'Cozy'}</span>
                          </div>

                          <h3 className="text-lg font-semibold text-gray-900 leading-snug">{card.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{card.desc}</p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {card.chips.map((chip, i) => (
                              <span key={i} className="text-[11px] px-2 py-1 rounded-full bg-stone-50 text-stone-700 border border-stone-200">{chip}</span>
                            ))}
                          </div>

                          <div className="mt-5 grid grid-cols-3 gap-3">
                            {card.stats.map((s, i) => (
                              <div key={i} className="rounded-xl bg-white border border-gray-200 p-3 text-center">
                                <p className="text-xs text-gray-500">{s.label}</p>
                                <p className="text-sm font-semibold text-gray-900">{s.value}</p>
                              </div>
                            ))}
                          </div>

                          <div className="mt-5 flex items-center justify-between">
                            <div className="flex -space-x-2">
                              {card.colors.map((c, i) => (
                                <span key={i} className={`h-6 w-6 rounded-full ${c} border border-white`} />
                              ))}
                            </div>
                            <button className="text-[12px] px-3 py-1.5 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                              View Collection
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Controls */}
                <div className="mt-3 flex items-center justify-between">
                  <button
                    aria-label="Previous"
                    className="h-8 w-8 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors"
                    onClick={() => setActiveCard((prev) => (prev - 1 + featureCards.length) % featureCards.length)}
                  >
                    ‹
                  </button>
                  <div className="flex items-center gap-2">
                    {featureCards.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 w-5 rounded-full transition-all ${activeCard === i ? 'bg-gray-900' : 'bg-gray-300'}`}
                        onClick={() => setActiveCard(i)}
                      />
                    ))}
                  </div>
                  <button
                    aria-label="Next"
                    className="h-8 w-8 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors"
                    onClick={() => setActiveCard((prev) => (prev + 1) % featureCards.length)}
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Subtle inner sheen */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 via-transparent to-white/40" />
            </div>

            {/* Matching decorative pulses */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-rose-200 rounded-full opacity-60 animate-pulse" />
            <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-blue-200 rounded-full opacity-60 animate-pulse delay-300" />
            <div className="absolute top-1/2 -left-4 w-2 h-2 bg-purple-200 rounded-full opacity-60 animate-pulse delay-700" />
          </div>
        </div>
      </div>

      {/* Instagram Gallery Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-amber-600 text-xl font-serif italic mb-4">Follow Our Journey</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Behind the Scenes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the artistry behind each candle. From hand-pouring to perfect finishing touches, 
              see how we create moments of tranquility for your home.
            </p>
          </div>

          {/* Instagram Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instagramPosts.map((postUrl, index) => (
              <div key={index} className="relative">
                {/* Decorative elements matching your design */}
                {index === 0 && (
                  <div className="absolute -top-3 -left-3 w-4 h-4 bg-rose-200 rounded-full opacity-60 animate-pulse" />
                )}
                {index === 2 && (
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-200 rounded-full opacity-60 animate-pulse delay-300" />
                )}
                {index === 4 && (
                  <div className="absolute top-1/2 -left-3 w-2 h-2 bg-purple-200 rounded-full opacity-60 animate-pulse delay-700" />
                )}
                
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <InstagramEmbed 
                    url={postUrl}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white inline-flex items-center gap-2 bg-transparent"
              onClick={() => window.open('https://www.instagram.com/itipandam.lk/', '_blank')}
            >
              <Instagram size={18} />
              Follow Us on Instagram
              <span className="text-lg">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-stone-50 to-stone-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <p className="text-amber-600 text-xl font-serif italic mb-4">Stay Updated</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Never Miss a New Collection
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Be the first to discover our latest scented candles and exclusive offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-gray-300"
            />
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Add this to your global types (types/global.d.ts)
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process(): void
      }
    }
  }
}