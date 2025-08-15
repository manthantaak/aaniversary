"use client"

import React from "react"
import { QRCodeSVG } from "qrcode.react"
import { Flower2 } from "lucide-react"

type ValentineQrProps = {
  // Use an absolute URL after deployment, or a relative path during dev.
  // Example deployed: "https://yourdomain.com/welcome"
  // Example local dev: "/welcome"
  value?: string
}

export default function ValentineQr({ value = "/welcome" }: ValentineQrProps) {
  // Keep props and markup stable across SSR/CSR.
  // QRCodeSVG is deterministic with a fixed value and options.

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 p-4 relative overflow-hidden">
      {/* Decorative Flowers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {/* Top Left */}
        <div className="absolute -top-4 -left-4 rotate-45 text-pink-300/50">
          <Flower2 size={64} />
        </div>
        <div className="absolute top-12 left-12 -rotate-12 text-red-300/50">
          <Flower2 size={48} />
        </div>

        {/* Top Right */}
        <div className="absolute -top-4 -right-4 -rotate-45 text-pink-300/50">
          <Flower2 size={64} />
        </div>
        <div className="absolute top-16 right-16 rotate-12 text-red-300/50">
          <Flower2 size={48} />
        </div>

        {/* Bottom Left */}
        <div className="absolute -bottom-4 -left-4 -rotate-45 text-pink-300/50">
          <Flower2 size={64} />
        </div>
        <div className="absolute bottom-16 left-20 rotate-45 text-red-300/50">
          <Flower2 size={48} />
        </div>

        {/* Bottom Right */}
        <div className="absolute -bottom-4 -right-4 rotate-45 text-pink-300/50">
          <Flower2 size={64} />
        </div>
        <div className="absolute bottom-20 right-16 -rotate-12 text-red-300/50">
          <Flower2 size={48} />
        </div>

        {/* Center accents */}
        <div className="absolute top-1/2 left-4 -translate-y-1/2 text-pink-300/30">
          <Flower2 size={40} />
        </div>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 text-pink-300/30">
          <Flower2 size={40} />
        </div>
      </div>

      {/* QR Code block */}
      <div className="w-full max-w-[256px] aspect-square p-4 bg-white rounded-2xl shadow-lg overflow-hidden relative z-10">
        <QRCodeSVG
          value={value}
          size={256}
          level="H"
          includeMargin
          fgColor="#ff1493"
          className="w-full h-full"
          style={{ outline: "none" }}
        />
      </div>
    </div>
  )
}
