"use client"
import { useState, useEffect } from "react"


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

    return (
        <div className="relative flex items-center justify-center p-8 lg:p-16">
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
    )
}
