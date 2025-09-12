"use client"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InstagramEmbed } from "./InstagramEmbed"

const instagramPosts = [
    "https://www.instagram.com/p/DOYuZkrDIjF/?img_index=1",
    "https://www.instagram.com/p/DOV_O_aDPwS/?img_index=1",
    "https://www.instagram.com/p/DOV9I37jDR5/",
    "https://www.instagram.com/p/DOOAH2RDPDZ/?img_index=1",
    "https://www.instagram.com/p/DORI6kLDEet/?img_index=1",
    "https://www.instagram.com/p/DORGdGBjKQg/?img_index=1",
]


export function InstagramGallery() {
    return (
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
    )
}
