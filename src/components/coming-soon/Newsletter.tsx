"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")

  return (
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
  )
}
