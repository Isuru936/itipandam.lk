"use client"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Flame, Clock, Leaf } from "lucide-react"

import { featureCards } from "@/data"

export function FeatureCarousel() {
    const [visibleRight, setVisibleRight] = useState(0)
    const [activeCard, setActiveCard] = useState(0)

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

    const paginate = (newDirection: number) => {
        setActiveCard((prev) => (prev + newDirection + featureCards.length) % featureCards.length)
    }

    return (
        <div className="relative flex items-center justify-center p-8 lg:p-16">
            <div className="relative w-full max-w-lg">
                <div className="relative mx-auto w-full max-w-xs sm:max-w-sm rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md p-5 overflow-hidden">
                    {/* Decorative blurred glow */}
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-200/60 blur-2xl" />
                    <div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-rose-200/50 blur-2xl" />

                    {/* Carousel viewport */}
                    <div className={`relative transition-all duration-700 ease-out ${visibleRight >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                        <div className="overflow-hidden rounded-xl">
                            <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeCard * 100}%)` }}>
                                {featureCards.map((card, idx) => (
                                    <div key={idx} className="min-w-full px-1">
                                        <Card className="bg-white border-gray-200 shadow-sm">
                                            <CardContent className="p-4">
                                                <div className="flex items-center justify-between mb-3">
                                                    <Badge variant="secondary" className="text-xs">
                                                        {card.badge}
                                                    </Badge>
                                                    <span className="text-[10px] text-gray-500">
                                                        {card.status}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                                                    {card.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-4">
                                                    {card.desc}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {card.chips.map((chip, i) => (
                                                        <Badge key={i} variant="outline" className="text-[11px]">
                                                            {chip}
                                                        </Badge>
                                                    ))}
                                                </div>

                                                <div className="grid grid-cols-3 gap-3 mb-4">
                                                    {card.stats.map((stat, i) => {
                                                        const IconComponent = stat.icon === "Clock" ? Clock : stat.icon === "Leaf" ? Leaf : Flame
                                                        return (
                                                            <div key={i} className="rounded-xl bg-gray-50 border border-gray-200 p-3 text-center">
                                                                <IconComponent className="h-4 w-4 mx-auto mb-1 text-gray-600" />
                                                                <p className="text-xs text-gray-500">{stat.label}</p>
                                                                <p className="text-sm font-semibold text-gray-900">{stat.value}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex -space-x-2">
                                                        {card.colors.map((color, i) => (
                                                            <span key={i} className={`h-6 w-6 rounded-full ${color} border border-white`} />
                                                        ))}
                                                    </div>
                                                    <Button size="sm" variant="outline" className="text-xs">
                                                        View Collection
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="mt-4 flex items-center justify-between">
                            <button
                                className="h-8 w-8 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center"
                                onClick={() => paginate(-1)}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </button>
                            
                            <div className="flex items-center gap-2">
                                {featureCards.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`h-2 w-6 rounded-full transition-all ${
                                            activeCard === i ? 'bg-gray-900' : 'bg-gray-300'
                                        }`}
                                        onClick={() => setActiveCard(i)}
                                    />
                                ))}
                            </div>
                            
                            <button
                                className="h-8 w-8 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center"
                                onClick={() => paginate(1)}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Subtle inner sheen */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-black/5 via-transparent to-white/40" />
                </div>

                {/* Decorative pulses */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-rose-200 rounded-full opacity-60" />
                <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-blue-200 rounded-full opacity-60" />
                <div className="absolute top-1/2 -left-4 w-2 h-2 bg-purple-200 rounded-full opacity-60" />
            </div>
        </div>
    )
}