"use client"

import { motion } from "framer-motion"

interface AnimatedCakeProps {
  candlesBlown?: boolean
  onCakeAppear?: () => void
}

export function AnimatedCake({ candlesBlown = false, onCakeAppear }: AnimatedCakeProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      onAnimationComplete={onCakeAppear}
    >
      <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
        {/* Cake Base Shadow */}
        <ellipse cx="100" cy="160" rx="60" ry="15" fill="#8B4513" className="opacity-80" />

        {/* Cake Layers */}
        <rect x="40" y="120" width="120" height="40" rx="5" fill="#DEB887" stroke="#CD853F" strokeWidth="2" />
        <rect x="45" y="90" width="110" height="35" rx="5" fill="#F5DEB3" stroke="#DEB887" strokeWidth="2" />
        <rect x="50" y="65" width="100" height="30" rx="5" fill="#FFE4E1" stroke="#F5DEB3" strokeWidth="2" />

        {/* Frosting */}
        <path
          d="M50 65 Q60 55 70 65 Q80 55 90 65 Q100 55 110 65 Q120 55 130 65 Q140 55 150 65 L150 70 L50 70 Z"
          fill="#FF69B4"
          className="opacity-80"
        />

        {/* Candles - Improved appearance */}
        <rect x="80" y="40" width="6" height="25" fill="#FFD700" stroke="#FFA500" strokeWidth="1" rx="1" />
        <rect x="95" y="38" width="6" height="27" fill="#FFD700" stroke="#FFA500" strokeWidth="1" rx="1" />
        <rect x="110" y="40" width="6" height="25" fill="#FFD700" stroke="#FFA500" strokeWidth="1" rx="1" />

        {/* Candle wicks */}
        <rect x="82" y="38" width="2" height="4" fill="#2C1810" />
        <rect x="97" y="36" width="2" height="4" fill="#2C1810" />
        <rect x="112" y="38" width="2" height="4" fill="#2C1810" />

        {/* Flames - Only show if candles not blown */}
        {!candlesBlown && (
          <>
            <motion.ellipse
              cx="83"
              cy="35"
              rx="3"
              ry="7"
              fill="#FF4500"
              animate={{
                scaleY: [1, 1.2, 0.9, 1.1, 1],
                opacity: [0.8, 1, 0.7, 0.9, 0.8],
              }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.ellipse
              cx="98"
              cy="33"
              rx="3"
              ry="7"
              fill="#FF4500"
              animate={{
                scaleY: [1.1, 0.9, 1.2, 1, 1.1],
                opacity: [0.9, 0.7, 1, 0.8, 0.9],
              }}
              transition={{
                duration: 0.9,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.2,
              }}
            />
            <motion.ellipse
              cx="113"
              cy="35"
              rx="3"
              ry="7"
              fill="#FF4500"
              animate={{
                scaleY: [0.9, 1.1, 1, 1.2, 0.9],
                opacity: [0.7, 0.9, 0.8, 1, 0.7],
              }}
              transition={{
                duration: 0.7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />

            {/* Inner flame glow */}
            <ellipse cx="83" cy="37" rx="1.5" ry="4" fill="#FFD700" className="opacity-60" />
            <ellipse cx="98" cy="35" rx="1.5" ry="4" fill="#FFD700" className="opacity-60" />
            <ellipse cx="113" cy="37" rx="1.5" ry="4" fill="#FFD700" className="opacity-60" />
          </>
        )}

        {/* Smoke effect when candles are blown */}
        {candlesBlown && (
          <>
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <motion.path
                d="M83 35 Q85 30 82 25 Q80 20 85 15"
                stroke="#B0B0B0"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.path
                d="M98 33 Q100 28 97 23 Q95 18 100 13"
                stroke="#B0B0B0"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              />
              <motion.path
                d="M113 35 Q115 30 112 25 Q110 20 115 15"
                stroke="#B0B0B0"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
              />
            </motion.g>
          </>
        )}

        {/* Decorative Hearts */}
        <text x="65" y="110" fontSize="12" fill="#FF1493">
          ❤️
        </text>
        <text x="120" y="110" fontSize="12" fill="#FF1493">
          ❤️
        </text>
        <text x="92" y="85" fontSize="10" fill="#FF69B4">
          💕
        </text>
      </svg>
    </motion.div>
  )
}
