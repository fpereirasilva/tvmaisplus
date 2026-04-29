import { motion } from "framer-motion"
import { MessageCircle, Send } from "lucide-react"
import { LINKS } from "../data.js"

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <motion.a
        href={LINKS.telegram}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no Telegram"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-glow"
        style={{
          background: "linear-gradient(135deg, #007BFF, #061A3A)",
        }}
      >
        <Send className="h-6 w-6" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-xs opacity-0 backdrop-blur-md transition group-hover:opacity-100">
          Telegram
        </span>
      </motion.a>

      <motion.a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full text-white"
        style={{
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow: "0 10px 30px -5px rgba(37,211,102,0.6)",
        }}
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: "0 0 0 0 rgba(37,211,102,0.7)",
            animation: "pulseRing 2s ease-out infinite",
          }}
        />
        <MessageCircle className="h-7 w-7" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-white/10 px-3 py-1 text-xs opacity-0 backdrop-blur-md transition group-hover:opacity-100">
          WhatsApp
        </span>
      </motion.a>

      <style>{`
        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
          70% { box-shadow: 0 0 0 22px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </div>
  )
}
