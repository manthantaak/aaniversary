"use client"

import { useEffect, useState } from "react"

interface Heart {
  id: number
  left: number
  delay: number
  size: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: Heart[] = []
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          size: Math.random() * 20 + 15,
        })
      }
      setHearts(newHearts)
    }

    generateHearts()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-primary/30 float-up"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}
