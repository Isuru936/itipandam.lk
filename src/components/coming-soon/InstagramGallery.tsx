"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Sparkles } from "lucide-react"
import { InstagramEmbed } from "./InstagramEmbed"

import { instagramPosts, instagramGalleryData, socialLinks } from "@/data"

export function InstagramGallery() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <p className="text-amber-600 text-xl font-serif italic">{instagramGalleryData.badge}</p>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {instagramGalleryData.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            {instagramGalleryData.description}
          </p>
        </div>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramPosts.map((postUrl, index) => (
            <div key={index} className="relative">
              {/* Decorative elements matching your design */}
              {index === 0 && (
                <div className="absolute -top-3 -left-3 w-4 h-4 bg-rose-200 rounded-full opacity-60" />
              )}
              {index === 2 && (
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-200 rounded-full opacity-60" />
              )}
              {index === 4 && (
                <div className="absolute top-1/2 -left-3 w-2 h-2 bg-purple-200 rounded-full opacity-60" />
              )}
              
              <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <InstagramEmbed 
                    url={postUrl}
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white inline-flex items-center gap-2 bg-transparent"
            onClick={() => window.open(socialLinks.instagram, '_blank')}
          >
            <Instagram size={18} />
            {instagramGalleryData.ctaText}
            <span className="text-lg">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}