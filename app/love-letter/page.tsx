"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FloatingHearts } from "@/components/floating-hearts"
import { Button } from "@/components/ui/button"
import confetti from "canvas-confetti"

const loveLetterText = [
  "My Dearest Love,",
  "",
  "Two years ago, you walked into my life and changed everything.",
  "Every day with you feels like a beautiful dream I never want to wake up from.",
  "",
  "You are my sunshine on cloudy days, my comfort in difficult times,",
  "and my greatest joy in all the happy moments we share.",
  "",
  "Thank you for being my partner, my best friend, and my everything.",
  "Here's to many more years of love, laughter, and adventures together.",
  "",
  "Happy 2nd Anniversary, my beautiful cutie pie! ❤️",
  "",
  "Forever yours,",
]

export default function LoveLetterPage() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < loveLetterText.length) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 800)

    return () => clearInterval(timer)
  }, [])

  const handleConfetti = () => {
    const duration = 3000
    const end = Date.now() + duration

    const colors = ["#e63946", "#f1a7a1", "#ff6b9d", "#ffc0cb"]

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex items-center justify-center relative overflow-hidden p-4"
    >
      <FloatingHearts />

      <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl shadow-2xl border border-rose-200 relative"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fillRule="evenodd"%3E%3Cg fill="%23f1a7a1" fillOpacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        >
          <div className="font-serif text-rose-700 space-y-3 sm:space-y-4">
            {loveLetterText.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: index < visibleLines ? 1 : 0,
                  y: index < visibleLines ? 0 : 20,
                }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`${
                  index === 0 || index === loveLetterText.length - 1
                    ? "text-lg sm:text-xl md:text-2xl font-bold"
                    : "text-sm sm:text-base md:text-lg"
                } ${line === "" ? "h-2 sm:h-4" : ""} leading-relaxed`}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleLines >= loveLetterText.length ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 sm:mt-8 text-center"
          >
            <Button
              onClick={handleConfetti}
              className="text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shimmer w-full sm:w-auto"
            >
              From Your Love with ❤️
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visibleLines >= loveLetterText.length ? 1 : 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-500 rounded-full heartbeat flex items-center justify-center">
              <span className="text-white text-xs sm:text-sm">❤️</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
