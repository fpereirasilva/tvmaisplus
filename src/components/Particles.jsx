import { useMemo } from "react"

const COLORS = ["#007BFF", "#FF5A00", "#FFD400", "#ffffff"]

export default function Particles({ count = 36 }) {
  const dots = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 4 + 2
      const left = Math.random() * 100
      const top = Math.random() * 100 + 100
      const duration = Math.random() * 18 + 12
      const delay = Math.random() * -20
      const tx = (Math.random() - 0.5) * 80
      const color = COLORS[i % COLORS.length]
      return {
        id: i,
        size,
        left,
        top,
        duration,
        delay,
        tx,
        color,
      }
    })
  }, [count])

  return (
    <div className="particles">
      {dots.map((d) => (
        <span
          key={d.id}
          className="particle"
          style={{
            width: `${d.size}px`,
            height: `${d.size}px`,
            left: `${d.left}%`,
            top: `${d.top}%`,
            background: d.color,
            boxShadow: `0 0 ${d.size * 4}px ${d.color}`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            "--tx": `${d.tx}px`,
            "--ty": "-120vh",
          }}
        />
      ))}
    </div>
  )
}
