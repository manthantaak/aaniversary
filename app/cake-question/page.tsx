"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FloatingHearts } from "@/components/floating-hearts"
import { Button } from "@/components/ui/button"

export default function CakeQuestionPage() {
  const router = useRouter()
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })

  const handleYesClick = () => {
    router.push("/cake-reveal")
  }

  const handleNoClick = () => {
    const maxX = window.innerWidth < 640 ? 100 : 150
    const maxY = window.innerWidth < 640 ? 80 : 100
    const newX = Math.random() * (maxX * 2) - maxX
    const newY = Math.random() * (maxY * 2) - maxY
    setNoButtonPosition({ x: newX, y: newY })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex items-center justify-center relative overflow-hidden px-4"
    >
      <FloatingHearts />

      <div className="text-center z-10 max-w-2xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-rose-600 mb-8 sm:mb-12 glow leading-tight"
        >
          I have made a cake for you...
          <br />
          <span className="block mt-2">do you wanna see? 🍰</span>
        </motion.h1>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center relative min-h-[80px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              onClick={handleYesClick}
              className="text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[120px]"
            >
              Yes
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }}
            className="transition-transform duration-300 ease-out"
          >
            <Button
              onClick={handleNoClick}
              variant="outline"
              className="text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 border-rose-500 text-rose-500 hover:bg-rose-50 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80 w-full sm:w-auto min-w-[120px]"
            >
              No
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
