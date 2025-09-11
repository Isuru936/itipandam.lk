import Image from "next/image"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border/30 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-4">
            <Image
              src="/logo.jpg"
              alt="ITIPANDAM Logo"
              width={200}
              height={200}
              className="h-16 w-auto mx-auto"
              priority
            />
          </div>
          <p className="text-muted-foreground text-lg font-light tracking-wide">{"Bringing warmth to your home"}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Message */}
          <div className="mb-12 space-y-6">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-foreground text-balance">
              {"Coming Soon"}
            </h1>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-semibold text-primary text-balance">
              {"We're getting this fired up!"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              {
                "Our artisan scented candles are being crafted with love and care. Stay tuned as we get ready to fire up your senses with premium fragrances that transform any space into a sanctuary."
              }
            </p>
          </div>

          {/* Bottom Message */}
          <div className="mt-16">
            <p className="text-muted-foreground text-lg italic font-[family-name:var(--font-playfair)]">
              {"Items will be available soon. Make sure you don't miss out."}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">{"© 2024 ITIPANDAM. All rights reserved."}</p>
        </div>
      </footer>
    </div>
  )
}
