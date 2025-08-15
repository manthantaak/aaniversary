import type React from "react"
import type { Metadata } from "next"
import { Dancing_Script, Kalam } from "next/font/google"
import "./globals.css"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dancing-script",
})

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-kalam",
})

export const metadata: Metadata = {
  title: "Happy Anniversary, Cutie Pie ❤️",
  description: "A romantic anniversary gift website",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${kalam.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
