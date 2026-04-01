import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import RevealSection from './RevealSection'

function CountdownTimer() {
  const weddingDate = new Date('2026-04-21T19:00:00+05:30').getTime()
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const tick = () => {
      const now = Date.now()
      const diff = Math.max(0, weddingDate - now)
      setTimeLeft({
        days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [weddingDate])

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  return (
    <div className="flex justify-center gap-3 md:gap-5 mb-10">
      {units.map(({ label, value }) => (
        <motion.div
          key={label}
          className="relative text-center min-w-[65px] md:min-w-[80px]"
          whileHover={{ scale: 1.08, y: -3 }}
          transition={{ duration: 0.3 }}
        >
          <div className="border border-gold/25 rounded-lg py-3 md:py-4 px-2 md:px-3"
               style={{ background: 'linear-gradient(145deg, rgba(62,4,4,0.5), rgba(14,2,2,0.8))' }}>
            <motion.span
              className="font-display text-gold text-2xl md:text-3xl lg:text-4xl font-semibold block"
              key={value}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {String(value).padStart(2, '0')}
            </motion.span>
          </div>
          <span className="text-[0.55rem] md:text-[0.6rem] tracking-[2px] uppercase text-text-warm/40 mt-2 block font-light">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

export default function Footer() {
  const handleShare = () => {
    const shareData = {
      title: 'Sudhir & Aastha Wedding',
      text: 'You are cordially invited to the wedding of Sudhir & Aastha on 21st April 2026 at Symphony Banquet Hall, Hisar.',
      url: window.location.href,
    }
    if (navigator.share) {
      navigator.share(shareData).catch(() => {})
    } else {
      navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`)
        .then(() => alert('Invitation link copied!'))
        .catch(() => {})
    }
  }

  return (
    <footer className="relative py-20 md:py-32 px-6 bg-maroon-dark text-center overflow-hidden">
      {/* Ambient radial glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
           style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
           style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.02) 0%, transparent 65%)' }} />

      <div className="section-divider-gold mb-14 md:mb-20" />

      {/* Countdown Section */}
      <RevealSection direction="scale">
        <p className="text-[0.6rem] md:text-xs tracking-[4px] uppercase text-gold/50 font-display font-medium mb-2">
          Save The Date
        </p>
        <h2 className="font-heading italic text-2xl md:text-3xl text-gold/80 font-light mb-8">
          Counting Down To Forever
        </h2>
        <CountdownTimer />
      </RevealSection>

      <div className="flex items-center justify-center gap-3 my-8 text-gold/15">
        <div className="w-12 h-px bg-gold/15" />
        <span className="text-[0.5rem] text-gold/25">✦</span>
        <div className="w-12 h-px bg-gold/15" />
      </div>

      {/* Sanskrit Shloka */}
      <RevealSection delay={0.1}>
        <p className="text-gold/40 text-[0.8rem] md:text-[0.9rem] font-heading italic tracking-wider mb-6">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ:
          <br />
          निर्विघ्नं कुरुमेदेवः सर्वकार्येषु सर्वदा
        </p>
      </RevealSection>

      {/* Names */}
      <RevealSection delay={0.15} direction="scale">
        <motion.p
          className="font-script text-5xl md:text-6xl lg:text-7xl text-gold mb-3 text-glow"
          style={{ textShadow: '0 4px 40px rgba(212,175,55,0.25)' }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
        >
          Sudhir & Aastha
        </motion.p>

        <p className="font-display text-[0.6rem] md:text-[0.7rem] tracking-[3px] md:tracking-[5px] uppercase text-text-warm/50 mb-2">
          #SudhirWedsAastha
        </p>

        <p className="font-heading italic text-sm md:text-base text-text-warm/55 mt-2 mb-8">
          Tuesday, 21 April 2026 · Symphony Banquet Hall, Hisar
        </p>
      </RevealSection>

      {/* Share Invitation */}
      <RevealSection delay={0.2}>
        <motion.button
          onClick={handleShare}
          className="inline-flex items-center gap-3 border border-gold/30 text-gold py-3 px-8 md:px-10 rounded-full text-[0.65rem] md:text-xs tracking-[3px] uppercase cursor-pointer font-body bg-transparent transition-all duration-500 hover:bg-gold hover:text-maroon-dark hover:border-gold"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <i className="fa-solid fa-share-nodes text-sm" />
          Share This Invitation
        </motion.button>
      </RevealSection>

      {/* Closing ornament */}
      <div className="flex items-center justify-center gap-3 mt-14 text-gold/15">
        <div className="w-6 h-px bg-gold/15" />
        <span className="text-[0.45rem]">✦</span>
        <div className="w-6 h-px bg-gold/15" />
      </div>

      <RevealSection delay={0.25}>
        <p className="mt-6 text-[0.55rem] md:text-[0.6rem] text-text-warm/25 tracking-[2px]">
          With love, the Jain Family · Hisar 2026
        </p>
      </RevealSection>
    </footer>
  )
}
