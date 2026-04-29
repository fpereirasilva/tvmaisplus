import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function IntroOverlay() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black"
        >
          <div className="absolute inset-0 bg-hero-radial" />
          <motion.div
            initial={{ scale: 0.6, opacity: 0, filter: "blur(12px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex w-[min(86vw,520px)] flex-col items-center px-4"
          >
            <img
              src="/logo.png"
              alt="TV MAIS+"
              className="h-auto w-full max-w-[min(72vw,420px)] object-contain"
              style={{
                maxHeight: "min(28vh, 200px)",
                filter: "drop-shadow(0 0 30px rgba(0,123,255,0.55))",
              }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}
              className="mt-5 h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand-neon to-transparent sm:mt-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-3 text-[10px] uppercase tracking-[0.32em] text-white/60 sm:mt-4 sm:text-xs sm:tracking-[0.4em]"
            >
              Carregando experiência premium
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
