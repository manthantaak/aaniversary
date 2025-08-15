"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { FloatingHearts } from "@/components/floating-hearts"
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/cake-question")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />

      <div className="text-center z-10 max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-rose-600 mb-6 sm:mb-8 glow leading-tight"
        >
          Happy Anniversary,
          <br />
          Cutie Pie ❤️
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            onClick={handleClick}
            className="text-lg sm:text-xl px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shimmer heartbeat"
          >
            Click Here
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
