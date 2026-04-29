import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Tv,
  Film,
  Trophy,
  PlaySquare,
  Signal,
  ShieldCheck,
  Headphones,
  Zap,
  Smartphone,
  Tablet,
  Monitor,
  Cast,
  Radio,
  Flame,
  Star,
  Check,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Send,
  MessageCircle,
  Crown,
  Gauge,
  LayoutGrid,
  HeartHandshake,
  Rocket,
  Globe2,
} from "lucide-react"

import IntroOverlay from "./components/IntroOverlay.jsx"
import Particles from "./components/Particles.jsx"
import FloatingButtons from "./components/FloatingButtons.jsx"
import { LINKS } from "./data.js"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  )
}

function Eyebrow({ icon: Icon, children }) {
  return (
    <span className="eyebrow">
      {Icon && <Icon className="h-3.5 w-3.5 text-brand-neon" />}
      {children}
    </span>
  )
}

function SectionTitle({ eyebrow, title, subtitle, icon }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      {eyebrow && (
        <motion.div variants={fadeUp} className="mb-5 flex justify-center">
          <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display text-3xl font-bold leading-tight text-gradient sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-4 text-base text-white/70 md:text-lg">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

/* ----------------------------- NAV ----------------------------- */
function Navbar() {
  const [open, setOpen] = useState(false)
  const items = [
    { label: "Benefícios", href: "#beneficios" },
    { label: "Por que TV MAIS+", href: "#por-que" },
    { label: "Planos", href: "#planos" },
    { label: "Dispositivos", href: "#dispositivos" },
    { label: "FAQ", href: "#faq" },
  ]
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <nav className="glass-strong flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="TV MAIS+"
            className="h-8 w-auto sm:h-9"
            style={{ filter: "drop-shadow(0 0 10px rgba(0,123,255,0.5))" }}
          />
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {items.map((it) => (
            <li key={it.href}>
              <a
                href={it.href}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {it.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-accent !px-5 !py-2 text-sm"
          >
            Assinar agora
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass-strong fixed left-4 right-4 top-20 z-40 rounded-3xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {items.map((it) => (
                <li key={it.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={it.href}
                    className="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/5"
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

/* ----------------------------- HERO ----------------------------- */
function Hero() {
  const { scrollY } = useScroll()
  const yLogo = useTransform(scrollY, [0, 600], [0, -80])
  const yMock = useTransform(scrollY, [0, 600], [0, -40])
  const yGlow = useTransform(scrollY, [0, 600], [0, 60])

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      <Particles count={42} />

      <motion.div
        style={{ y: yGlow }}
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-neon/30 blur-[140px]"
      />
      <motion.div
        style={{ y: yGlow }}
        className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[400px] w-[600px] rounded-full bg-brand-orange/25 blur-[150px]"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Copy */}
        <motion.div
          style={{ y: yLogo }}
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-start lg:col-span-6 lg:pt-10"
        >
          <motion.div variants={fadeUp} transition={{ delay: 2.2 }}>
            <Eyebrow icon={Sparkles}>Streaming premium • Ativação rápida</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ delay: 2.3 }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl"
          >
            <span className="text-gradient">Todo o entretenimento</span>
            <br />
            <span className="text-white">em um só lugar</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ delay: 2.45 }}
            className="mt-6 max-w-xl text-base text-white/75 md:text-lg"
          >
            Canais ao vivo, filmes, séries, esportes e streaming com sinal de
            qualidade e ativação rápida. Experiência premium em qualquer
            dispositivo.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 2.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn-accent">
              <Crown className="h-4 w-4" />
              Assinar agora
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
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ delay: 2.75 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/60"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-brand-black"
                    style={{
                      background: `linear-gradient(135deg, hsl(${i * 60}, 70%, 55%), #061A3A)`,
                    }}
                  />
                ))}
              </div>
              <span>+5.000 famílias assistindo</span>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
              ))}
              <span className="ml-1">4.9/5 em avaliações</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Mock TV */}
        <motion.div
          style={{ y: yMock }}
          initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ delay: 2.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-6"
        >
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand-neon/40 via-transparent to-brand-orange/40 blur-2xl" />
            <div className="glass-strong relative aspect-[16/10] overflow-hidden rounded-[1.7rem] p-3 shadow-card">
              <div className="relative h-full w-full overflow-hidden rounded-[1.3rem] bg-gradient-to-br from-[#0a1f44] via-[#061A3A] to-[#020919]">
                {/* Top bar */}
                <div className="flex items-center justify-between px-5 pt-4">
                  <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="TV MAIS+" className="h-6 w-auto" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                      Início
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand-orange" />
                    <span className="h-2 w-2 rounded-full bg-brand-yellow" />
                    <span className="h-2 w-2 rounded-full bg-brand-neon" />
                  </div>
                </div>

                {/* Hero featured */}
                <div className="relative mx-4 mt-3 h-[55%] overflow-hidden rounded-2xl">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #FF5A00 0%, #061A3A 50%, #007BFF 100%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_50%)]" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <span className="mb-1 inline-flex w-fit items-center gap-1 rounded-full bg-brand-yellow px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand-black">
                      <Flame className="h-3 w-3" /> Em alta
                    </span>
                    <p className="font-display text-lg font-bold leading-tight text-white sm:text-xl">
                      O Melhor da Tela Grande
                    </p>
                    <p className="mt-1 text-[11px] text-white/70">
                      Filmes, séries e esportes ao vivo em qualidade premium.
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-brand-black">
                        ▶ Assistir
                      </span>
                      <span className="rounded-full border border-white/30 px-3 py-1 text-[10px] text-white">
                        + Lista
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tiles */}
                <div className="mt-3 px-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Continue assistindo
                  </p>
                  <div className="mt-2 grid grid-cols-4 gap-2">
                    {[
                      "from-brand-neon/80 to-brand-deep",
                      "from-brand-orange/80 to-brand-deep",
                      "from-brand-yellow/80 to-brand-deep",
                      "from-fuchsia-500/70 to-brand-deep",
                    ].map((g, i) => (
                      <div
                        key={i}
                        className={`relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br ${g}`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                        <div className="absolute bottom-1 left-1.5 text-[8px] font-semibold text-white/90">
                          EP {i + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 3, duration: 0.7 }}
              className="absolute -left-3 top-8 sm:-left-6"
            >
              <div className="glass-strong flex items-center gap-3 rounded-2xl px-3 py-2 shadow-glow">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-yellow to-brand-orange text-brand-black">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-yellow">
                    Teste grátis
                  </p>
                  <p className="text-xs font-semibold">Sem compromisso</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 3.2, duration: 0.7 }}
              className="absolute -right-3 bottom-6 sm:-right-6"
            >
              <div className="glass-strong flex items-center gap-3 rounded-2xl px-3 py-2 shadow-glow">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-neon to-brand-deep text-white">
                  <Signal className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-brand-neon">
                    Sinal estável
                  </p>
                  <p className="text-xs font-semibold">Sem travamentos</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* --------------------------- BENEFITS --------------------------- */
function Benefits() {
  const items = [
    { icon: Tv, title: "Canais ao vivo", desc: "Centenas de canais nacionais e internacionais." },
    { icon: Film, title: "Filmes e séries", desc: "Catálogo recheado de lançamentos e clássicos." },
    { icon: Trophy, title: "Esportes ao vivo", desc: "Os principais campeonatos sem perder lance." },
    { icon: PlaySquare, title: "Streaming completo", desc: "Tudo o que você quer em um só lugar." },
    { icon: Signal, title: "Sinal de qualidade", desc: "Imagem nítida e estável o tempo todo." },
    { icon: Zap, title: "Sem travamentos", desc: "Performance otimizada para sua rede." },
    { icon: Headphones, title: "Suporte premium", desc: "Atendimento humanizado quando precisar." },
    { icon: Rocket, title: "Ativação rápida", desc: "Acesso liberado em poucos minutos." },
  ]

  return (
    <Section id="beneficios">
      <SectionTitle
        eyebrow="Por dentro do TV MAIS+"
        icon={Star}
        title="Tudo que você precisa para assistir mais"
        subtitle="Uma experiência cinematográfica do conforto da sua sala — ou de onde você estiver."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {items.map((it) => (
          <motion.div
            key={it.title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-glow"
          >
            <div
              className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-neon/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ opacity: 0.4 }}
            />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-neon/20 to-brand-deep ring-1 ring-white/10">
              <it.icon className="h-6 w-6 text-brand-neon" />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-white">
              {it.title}
            </h3>
            <p className="mt-1.5 text-sm text-white/65">{it.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* --------------------------- WHY TV MAIS --------------------------- */
function WhyChoose() {
  const items = [
    { icon: Gauge, title: "Alta estabilidade", desc: "Servidores otimizados para entregar transmissão fluida." },
    { icon: LayoutGrid, title: "Interface simples", desc: "Encontre o que quer assistir em segundos." },
    { icon: Globe2, title: "Conteúdo variado", desc: "Para todos os gostos e idades da família." },
    { icon: HeartHandshake, title: "Suporte humanizado", desc: "Atendimento próximo, rápido e empático." },
    { icon: Zap, title: "Liberação imediata", desc: "Você assina e já começa a assistir." },
    { icon: Cast, title: "Múltiplos dispositivos", desc: "Smart TV, celular, tablet, TV Box e mais." },
  ]

  return (
    <Section id="por-que" className="relative">
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-[700px] -translate-x-1/2 rounded-full bg-brand-neon/10 blur-[130px]" />

      <SectionTitle
        eyebrow="Por que escolher"
        icon={ShieldCheck}
        title="Por que escolher a TV MAIS+"
        subtitle="A TV MAIS+ reúne entretenimento, estabilidade e praticidade em uma única solução, com acesso simples, suporte rápido e experiência premium para toda a família."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {items.map((it) => (
          <motion.div
            key={it.title}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.01 }}
            className="glass-strong relative overflow-hidden rounded-3xl p-7"
          >
            <div className="flex items-start gap-4">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-neon to-brand-deep text-white shadow-glow">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <p className="mt-1.5 text-sm text-white/65">{it.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* --------------------------- PLANS --------------------------- */
function Plans() {
  const plans = [
    {
      name: "Plano Básico TV",
      price: "29,90",
      activation: "R$30,00",
      tag: null,
      features: [
        "Canais ao vivo",
        "Séries",
        "Filmes",
        "Streaming",
        "Suporte humanizado",
      ],
      accent: "from-brand-neon to-brand-deep",
      ring: "ring-brand-neon/40",
    },
    {
      name: "Plano Completo TV",
      price: "44,90",
      activation: "R$30,00",
      tag: "MAIS VENDIDO",
      features: [
        "Canais ao vivo",
        "Séries",
        "Filmes",
        "Streaming",
        "Conteúdo adulto",
        "Prioridade no suporte",
      ],
      accent: "from-brand-orange to-brand-yellow",
      ring: "ring-brand-yellow/60",
      featured: true,
    },
    {
      name: "Plano Econômico Smartphones",
      price: "24,90",
      activation: "R$30,00",
      tag: null,
      features: [
        "Canais ao vivo",
        "Séries",
        "Filmes",
        "Streaming",
        "Conteúdo adulto",
        "Otimizado para celular",
      ],
      accent: "from-fuchsia-500 to-brand-deep",
      ring: "ring-fuchsia-400/40",
    },
  ]

  return (
    <Section id="planos">
      <SectionTitle
        eyebrow="Planos"
        icon={Crown}
        title="Escolha o plano ideal para você"
        subtitle="Tudo o que você precisa em entretenimento, com um preço justo e ativação imediata."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {plans.map((p) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: "preserve-3d" }}
            className={`relative overflow-hidden rounded-3xl p-7 ${
              p.featured ? "neon-border" : ""
            }`}
          >
            {/* Background */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl" />
            <div
              className={`absolute -right-12 -top-12 -z-10 h-40 w-40 rounded-full bg-gradient-to-br ${p.accent} opacity-30 blur-3xl`}
            />
            <div
              className={`absolute inset-0 -z-10 rounded-3xl ring-1 ${p.ring}`}
            />

            {p.tag && (
              <div className="absolute right-5 top-5">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-yellow to-brand-orange blur-md opacity-60" />
                  <span className="relative inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-yellow to-brand-orange px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest text-brand-black">
                    <Flame className="h-3 w-3" /> {p.tag}
                  </span>
                </div>
              </div>
            )}

            <div className="mb-4 flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} text-white`}
              >
                <Crown className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
            </div>

            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-base text-white/60">R$</span>
              <span className="font-display text-5xl font-extrabold text-white">
                {p.price}
              </span>
              <span className="text-sm text-white/60">/mês</span>
            </div>
            <p className="text-xs text-white/55">
              + {p.activation} de ativação <span className="text-white/40">(única)</span>
            </p>

            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <ul className="space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-neon/20 text-brand-neon">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={`mt-7 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition ${
                p.featured
                  ? "btn-accent !w-full"
                  : "btn-primary !w-full"
              }`}
            >
              Assinar agora
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>

      <p className="mt-8 text-center text-xs text-white/45">
        * Os planos podem ser combinados. Fale com o atendimento para ofertas personalizadas.
      </p>
    </Section>
  )
}

/* --------------------------- DEVICES --------------------------- */
function Devices() {
  const list = [
    { icon: Tv, label: "Smart TV" },
    { icon: Smartphone, label: "Android" },
    { icon: Radio, label: "TV Box" },
    { icon: Cast, label: "Chromecast" },
    { icon: PlaySquare, label: "Roku" },
    { icon: Flame, label: "Fire TV" },
    { icon: Smartphone, label: "Celular" },
    { icon: Tablet, label: "Tablet" },
  ]

  return (
    <Section id="dispositivos">
      <SectionTitle
        eyebrow="Compatível com"
        icon={Monitor}
        title="Assista onde quiser, quando quiser"
        subtitle="A TV MAIS+ funciona nos seus dispositivos preferidos. Basta conectar e começar."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8"
      >
        {list.map((d) => (
          <motion.div
            key={d.label}
            variants={fadeUp}
            whileHover={{ y: -5, scale: 1.04 }}
            className="glass group flex flex-col items-center justify-center rounded-2xl px-4 py-6 text-center transition hover:shadow-glow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10 transition group-hover:from-brand-neon/30 group-hover:to-brand-deep">
              <d.icon className="h-6 w-6 text-white/85" />
            </div>
            <span className="mt-3 text-xs font-medium text-white/75">{d.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* --------------------------- TESTE GRÁTIS --------------------------- */
function FreeTrialBanner() {
  return (
    <Section className="!py-14">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] p-1"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(120deg, #FFD400, #FF5A00 35%, #007BFF 70%, #061A3A)",
            backgroundSize: "200% 100%",
            animation: "gradientShift 8s ease infinite",
          }}
        />
        <div className="relative grid grid-cols-1 items-center gap-6 rounded-[1.85rem] bg-brand-black/85 px-8 py-12 text-center md:grid-cols-[auto,1fr,auto] md:gap-10 md:px-12 md:text-left">
          <div className="hidden md:flex">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-yellow to-brand-orange text-brand-black shadow-glow-yellow">
              <Sparkles className="h-9 w-9" />
            </div>
          </div>
          <div>
            <p className="font-display text-3xl font-extrabold uppercase tracking-wider text-brand-yellow md:text-4xl">
              Teste grátis
            </p>
            <p className="mt-2 text-base text-white/80 md:text-lg">
              Experimente sem compromisso antes de assinar.
            </p>
          </div>
          <a
            href={LINKS.whatsappTeste}
            target="_blank"
            rel="noreferrer"
            className="btn-accent"
          >
            Quero meu teste grátis agora
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </Section>
  )
}

/* --------------------------- COMO FUNCIONA --------------------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: MessageCircle,
      title: "Chame no WhatsApp ou Telegram",
      desc: "Atendimento humano, rápido e prático para tirar todas as dúvidas.",
    },
    {
      n: "02",
      icon: Send,
      title: "Receba as instruções de acesso",
      desc: "Em poucos minutos você já tem tudo pronto para começar.",
    },
    {
      n: "03",
      icon: PlaySquare,
      title: "Comece a assistir",
      desc: "Conteúdo liberado no seu dispositivo preferido — em minutos.",
    },
  ]

  return (
    <Section id="como-funciona">
      <SectionTitle
        eyebrow="Como funciona"
        icon={Rocket}
        title="3 passos para assistir mais"
        subtitle="Sem burocracia, sem instalações complicadas. Você fala, libera e assiste."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative grid grid-cols-1 gap-6 md:grid-cols-3"
      >
        {/* connector line */}
        <div className="pointer-events-none absolute left-[10%] right-[10%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
        {steps.map((s) => (
          <motion.div
            key={s.n}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="glass-strong relative overflow-hidden rounded-3xl p-7"
          >
            <div className="absolute right-4 top-4 font-display text-5xl font-black text-white/5">
              {s.n}
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-neon to-brand-deep text-white shadow-glow">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-white/65">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* --------------------------- TESTIMONIALS --------------------------- */
function Testimonials() {
  const items = [
    {
      name: "Carla M.",
      role: "Assinante há 8 meses",
      text: "Imagem excelente e atendimento rápido. Recomendo demais.",
    },
    {
      name: "Rodrigo S.",
      role: "Cliente Smart TV",
      text: "Funciona muito bem na Smart TV. Sinal estável o tempo todo.",
    },
    {
      name: "Patrícia L.",
      role: "Família com 3 dispositivos",
      text: "Ativação simples e suporte super prestativo. Vale cada centavo.",
    },
  ]
  return (
    <Section id="depoimentos">
      <SectionTitle
        eyebrow="O que nossos clientes dizem"
        icon={Star}
        title="Quem assina, recomenda."
        subtitle="A satisfação dos nossos clientes é o que nos move todos os dias."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-5 md:grid-cols-3"
      >
        {items.map((t) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="glass relative overflow-hidden rounded-3xl p-7"
          >
            <div className="mb-4 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
              ))}
            </div>
            <p className="text-base leading-relaxed text-white/85">“{t.text}”</p>
            <div className="mt-6 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg,#007BFF,#FF5A00)" }}
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-white/55">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* --------------------------- FAQ --------------------------- */
function FAQItem({ q, a, open, onClick }) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/5"
      >
        <span className="font-display text-base font-semibold text-white sm:text-lg">{q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition ${
            open ? "rotate-180 bg-brand-neon/30" : ""
          }`}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-6 text-sm text-white/70 sm:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
function FAQ() {
  const [open, setOpen] = useState(0)
  const items = [
    {
      q: "Como faço para assinar?",
      a: "É simples: chame nosso atendimento no WhatsApp ou Telegram, escolha seu plano e libere o acesso em minutos.",
    },
    {
      q: "Tem teste grátis?",
      a: "Sim! Você pode experimentar a TV MAIS+ sem compromisso antes de assinar. Solicite no WhatsApp.",
    },
    {
      q: "Funciona em Smart TV?",
      a: "Sim, a TV MAIS+ é compatível com as principais Smart TVs do mercado, além de TV Box, Chromecast, Roku, Fire TV, celular e tablet.",
    },
    {
      q: "Tem suporte?",
      a: "Sim. Nosso suporte é humanizado e atende rapidamente via WhatsApp e Telegram para tirar dúvidas e resolver qualquer situação.",
    },
    {
      q: "Qual o valor da ativação?",
      a: "A ativação é uma taxa única de R$30,00, paga apenas no início, junto com a primeira mensalidade.",
    },
    {
      q: "Posso assistir no celular?",
      a: "Pode! Inclusive temos um plano específico otimizado para smartphones, com toda a programação na palma da sua mão.",
    },
  ]
  return (
    <Section id="faq">
      <SectionTitle
        eyebrow="Perguntas frequentes"
        icon={ShieldCheck}
        title="Tirando suas dúvidas"
        subtitle="Se ficou alguma dúvida, fale com a gente no WhatsApp — respondemos rapidinho."
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto flex max-w-3xl flex-col gap-3"
      >
        {items.map((it, i) => (
          <motion.div key={it.q} variants={fadeUp}>
            <FAQItem
              q={it.q}
              a={it.a}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* --------------------------- FINAL CTA --------------------------- */
function FinalCTA() {
  return (
    <Section className="!py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem]"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-deep via-brand-black to-brand-black" />
        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-brand-neon/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-brand-orange/25 blur-3xl" />
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />

        <div className="relative px-8 py-16 text-center md:px-16 md:py-24">
          <Eyebrow icon={Sparkles}>Última chamada</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-gradient sm:text-4xl md:text-5xl">
            Pronto para assistir mais?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 md:text-lg">
            Fale agora com a TV MAIS+ e libere seu acesso com atendimento rápido.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-accent"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp: {LINKS.phoneDisplay}
            </a>
            <a
              href={LINKS.telegram}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              <Send className="h-4 w-4" />
              Telegram: {LINKS.phoneDisplay}
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

/* --------------------------- FOOTER --------------------------- */
function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 bg-brand-black/80 py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <img
            src="/logo.png"
            alt="TV MAIS+"
            className="h-10 w-auto"
            style={{ filter: "drop-shadow(0 0 12px rgba(0,123,255,0.45))" }}
          />
          <p className="mt-4 max-w-xs text-sm text-white/65">
            O seu novo canal de entretenimento. Streaming premium em todos os
            seus dispositivos.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/80">
            Navegação
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li><a href="#beneficios" className="hover:text-white">Benefícios</a></li>
            <li><a href="#planos" className="hover:text-white">Planos</a></li>
            <li><a href="#dispositivos" className="hover:text-white">Dispositivos</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white/80">
            Contato
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-brand-neon" />
              <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp: {LINKS.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Send className="h-4 w-4 text-brand-neon" />
              <a href={LINKS.telegram} target="_blank" rel="noreferrer" className="hover:text-white">
                Telegram: {LINKS.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-2">
            <a href={LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn-accent !px-4 !py-2 text-xs">
              <MessageCircle className="h-3.5 w-3.5" />
              Assinar
            </a>
            <a href={LINKS.whatsappTeste} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2 text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Teste grátis
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 px-5 pt-6 text-xs text-white/40 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} TV MAIS+ — Todos os direitos reservados.</p>
        <p>Feito com ❤ para quem ama assistir mais.</p>
      </div>
    </footer>
  )
}

/* --------------------------- APP --------------------------- */
export default function App() {
  return (
    <>
      <IntroOverlay />
      <Navbar />
      <main className="relative">
        <Hero />
        <Benefits />
        <WhyChoose />
        <Plans />
        <Devices />
        <FreeTrialBanner />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
