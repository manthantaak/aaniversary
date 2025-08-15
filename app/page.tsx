"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { FloatingHearts } from "@/components/floating-hearts";
import { Button } from "@/components/ui/button";
import ValentineQr from "@/components/ValentineQr";

export default function ScannerPage() {
  const router = useRouter();
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  // Stable array for QR pattern to avoid hydration mismatch
  const [pattern, setPattern] = useState<boolean[]>([]);

  useEffect(() => {
    // Generate once on client-side
    const generatedPattern = Array.from({ length: 64 }, () => Math.random() > 0.5);
    setPattern(generatedPattern);
  }, []);

  const handleScan = () => {
    setIsScanning(true);

    // Simulate scanning process
    setTimeout(() => {
      setScanComplete(true);
      setTimeout(() => {
        router.push("/welcome");
      }, 1000);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />

      <div className="z-10 mb-12">
        <ValentineQr /> {/* QR Code Component shown first */}
      </div>

      <div className="text-center z-10 max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-rose-600 mb-4 glow">
            💕 Anniversary Surprise 💕
          </h1>
          <p className="text-base sm:text-lg text-rose-500 font-handwriting mb-8">
            Scan the QR code to unlock your special surprise!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          {/* QR Code Scanner Area */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto mb-8 bg-white rounded-3xl shadow-2xl border-4 border-pink-200 overflow-hidden">
            {/* Animated scanning overlay */}
            <AnimatePresence>
              {isScanning && (
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 300 }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent z-10"
                />
              )}
            </AnimatePresence>

            {/* QR Code Pattern */}
            <div className="absolute inset-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl flex items-center justify-center">
              {scanComplete ? (
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl">
                  💖
                </motion.div>
              ) : (
                <div className="grid grid-cols-8 gap-1 w-full h-full p-4">
                  {pattern.map((isActive, i) => (
                    <motion.div
                      key={i}
                      className={`rounded-sm ${isActive ? "bg-rose-600" : "bg-transparent"}`}
                      animate={
                        isScanning
                          ? {
                              backgroundColor: [
                                isActive ? "#e11d48" : "transparent",
                                isActive ? "#be185d" : "transparent",
                                isActive ? "#e11d48" : "transparent",
                              ],
                            }
                          : {}
                      }
                      transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Corner markers */}
            <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-rose-500 rounded-tl-lg" />
            <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-rose-500 rounded-tr-lg" />
            <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-rose-500 rounded-bl-lg" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-rose-500 rounded-br-lg" />
          </div>

          {/* Scan Button */}
          <Button
            onClick={handleScan}
            disabled={isScanning || scanComplete}
            className="text-lg sm:text-xl px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 shimmer heartbeat disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {scanComplete ? "✨ Unlocked!" : isScanning ? "Scanning..." : "💖 Scan Now"}
          </Button>

          {isScanning && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-rose-500 font-handwriting mt-4 text-sm sm:text-base"
            >
              Reading your love... 💕
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
