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
            className="relative flex flex-col items-center"
          >
            <img
              src="/logo.png"
              alt="TV MAIS+"
              className="h-28 w-auto md:h-40"
              style={{ filter: "drop-shadow(0 0 30px rgba(0,123,255,0.55))" }}
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60%" }}
              transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}
              className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand-neon to-transparent"
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-4 text-xs uppercase tracking-[0.4em] text-white/60"
            >
              Carregando experiência premium
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
