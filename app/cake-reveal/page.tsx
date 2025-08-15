"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FloatingHearts } from "@/components/floating-hearts"
import { AnimatedCake } from "@/components/animated-cake"
import { Button } from "@/components/ui/button"

export default function CakeRevealPage() {
  const router = useRouter()
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [showBlowButton, setShowBlowButton] = useState(false)
  const [candlesBlown, setCandlesBlown] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)

  const handleCakeAppear = () => {
    setTimeout(() => {
      setShowBlowButton(true)
    }, 500)
  }

  const handleBlowCandles = () => {
    setCandlesBlown(true)
    setShowBlowButton(false)
    setTimeout(() => {
      setShowQuestion(true)
    }, 2000) // Wait for smoke animation to complete
  }

  const handleYesClick = () => {
    router.push("/love-letter")
  }

  const handleNoClick = () => {
    const newX = Math.random() * 300 - 150
    const newY = Math.random() * 200 - 100
    setNoButtonPosition({ x: newX, y: newY })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <FloatingHearts />

      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <AnimatedCake candlesBlown={candlesBlown} onCakeAppear={handleCakeAppear} />
        </motion.div>

        {showBlowButton && !candlesBlown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              onClick={handleBlowCandles}
              className="text-lg px-8 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Blow It 💨
            </Button>
          </motion.div>
        )}

        {showQuestion && (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-serif font-bold text-rose-600 mb-12 glow"
            >
              Do you wanna see what I have made?
            </motion.h1>

            <div className="flex gap-6 justify-center items-center relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  onClick={handleYesClick}
                  className="text-lg px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bounce-in"
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
                  className="text-lg px-6 py-3 border-rose-500 text-rose-500 hover:bg-rose-50 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-white/80"
                >
                  No
                </Button>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}
