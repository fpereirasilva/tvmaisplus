import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Sparkles, ArrowRight, MessageCircle } from "lucide-react"
import { LINKS } from "../data.js"

export default function VideoShowcase() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            v.play().catch(() => {})
            setPlaying(true)
          } else {
            v.pause()
            setPlaying(false)
          }
        })
      },
      { threshold: 0.4 }
    )
    obs.observe(v)
    return () => obs.disconnect()
  }, [])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section id="showcase" className="section">
      <div className="absolute left-1/2 top-12 -z-10 h-72 w-[700px] -translate-x-1/2 rounded-full bg-brand-neon/15 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mb-10 max-w-3xl text-center"
      >
        <span className="eyebrow">
          <Sparkles className="h-3.5 w-3.5 text-brand-neon" />
          Veja em ação
        </span>
        <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-gradient sm:text-4xl md:text-5xl">
          A TV MAIS+ em movimento
        </h2>
        <p className="mt-4 text-base text-white/70 md:text-lg">
          Veja a qualidade da transmissão, a interface e a experiência premium
          que entregamos para a sua casa ou negócio.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-neon/30 via-transparent to-brand-orange/30 blur-2xl" />

        <div className="relative overflow-hidden rounded-[1.7rem] p-1 neon-border">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-brand-black">
            {!ready && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-brand-deep via-brand-black to-brand-black">
                <div className="flex flex-col items-center gap-3 text-white/70">
                  <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-brand-neon" />
                  <span className="text-xs uppercase tracking-[0.3em]">Carregando</span>
                </div>
              </div>
            )}
            <video
              ref={videoRef}
              src="/tvmaisplus-showcase.mp4"
              poster="/logo.png"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onCanPlay={() => setReady(true)}
              className="block aspect-video w-full object-cover"
            />

            {/* Subtle vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />

            {/* Top brand */}
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-orange" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/85">
                Ao vivo
              </span>
            </div>

            {/* Bottom controls */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  aria-label={muted ? "Ativar som" : "Silenciar"}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>
              <a
                href={LINKS.whatsappTeste}
                target="_blank"
                rel="noreferrer"
                className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/20 sm:inline-flex"
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-yellow" />
                Quero teste grátis
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn-accent">
            <MessageCircle className="h-4 w-4" />
            Quero assinar agora
          </a>
          <a
            href={LINKS.whatsappTeste}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <Sparkles className="h-4 w-4" />
            Fazer teste grátis
          </a>
        </div>
      </motion.div>
    </section>
  )
}
