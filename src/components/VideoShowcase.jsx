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
        className="relative mx-auto flex w-full max-w-[380px] flex-col items-center sm:max-w-[420px]"
      >
        <div className="absolute -inset-8 -z-10 rounded-[2.4rem] bg-gradient-to-tr from-brand-neon/35 via-transparent to-brand-orange/35 blur-3xl" />

        {/* Phone-style frame with neon border */}
        <div className="relative w-full overflow-hidden rounded-[2rem] p-[2px] neon-border">
          <div className="relative overflow-hidden rounded-[1.85rem] bg-brand-black shadow-card">
            <div className="relative aspect-[9/16] w-full bg-gradient-to-br from-brand-deep via-brand-black to-brand-black">
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
                className="absolute inset-0 h-full w-full object-contain"
              />

              {/* Subtle vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

              {/* Top brand */}
              <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-orange" />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/85">
                  Ao vivo
                </span>
              </div>

              {/* Bottom controls */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={togglePlay}
                    aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
                  >
                    {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Ativar som" : "Silenciar"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25"
                  >
                    {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
                  </button>
                </div>
                <a
                  href={LINKS.whatsappTeste}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-md transition hover:bg-white/25"
                >
                  <Sparkles className="h-3 w-3 text-brand-yellow" />
                  Teste grátis
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating side badges (desktop only) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="pointer-events-none absolute left-0 top-12 hidden -translate-x-[calc(100%+20px)] lg:block"
        >
          <div className="glass-strong flex items-center gap-3 rounded-2xl px-3 py-2 shadow-glow">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-neon to-brand-deep text-white">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-brand-neon">
                Imagem premium
              </p>
              <p className="text-xs font-semibold">Qualidade real</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="pointer-events-none absolute right-0 bottom-24 hidden translate-x-[calc(100%+20px)] lg:block"
        >
          <div className="glass-strong flex items-center gap-3 rounded-2xl px-3 py-2 shadow-glow-orange">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow text-brand-black">
              <Play className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-brand-yellow">
                Sem travamentos
              </p>
              <p className="text-xs font-semibold">Streaming fluido</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
