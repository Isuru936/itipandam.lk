"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Sparkles } from "lucide-react"
import toast from "react-hot-toast"
import { newsletterData } from "@/data"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success(newsletterData.successMessage, {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#10B981",
        color: "#fff",
      },
    })
    
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <section className="bg-gradient-to-br from-stone-50 to-stone-100 py-16">
      <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-amber-500" />
          <p className="text-amber-600 text-xl font-serif italic">{newsletterData.badge}</p>
        </div>
        
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
          {newsletterData.title}
        </h2>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          {newsletterData.description}
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="email"
              placeholder={newsletterData.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-gray-300 pl-10 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              required
            />
          </div>
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 disabled:opacity-50"
          >
            {isSubmitting ? newsletterData.submittingText : newsletterData.buttonText}
          </Button>
        </form>
      </div>
    </section>
  )
}
