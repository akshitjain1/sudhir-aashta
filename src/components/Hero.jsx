import { motion } from 'framer-motion'
import heroBg from '../assets/images/hero_bg.png'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.6 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1.6, ease: [0.25, 1, 0.5, 1] },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 1.8, ease: [0.25, 1, 0.5, 1] },
  },
}

export default function Hero({ isOpen }) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Slow zoom BG */}
      <motion.div
        className="absolute inset-[-12%] w-[124%] h-[124%]"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial={{ scale: 1.2 }}
        animate={isOpen ? { scale: 1 } : {}}
        transition={{ duration: 20, ease: [0.05, 0.5, 0, 1] }}
      />

      {/* Cinematic overlay stack */}
      <div className="absolute inset-0 z-[1]" style={{
        background: `
          radial-gradient(ellipse at 20% 55%, rgba(62, 4, 4, 0.49) 0%, rgba(14, 2, 2, 1) 100%),
          linear-gradient(0deg, #0e0202 0%, transparent 90%),
          linear-gradient(180deg, rgba(14,2,2,0.5) 0%, transparent 88%)
        `,
      }} />
      <div className="absolute inset-0 z-[1]" style={{
        background: 'radial-gradient(circle, transparent 35%, rgba(14,2,2,0.65) 100%)',
      }} />

      <div className="corner-accent-tl" />
      <div className="corner-accent-br" />

      {/* Content */}
      <motion.div
        className="relative z-[3] max-w-[850px] px-6 md:px-10"
        variants={container}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
      >
        {/* Ganesh Shloka */}
        <motion.p
          variants={fadeUp}
          className="text-gold/55 text-[1rem] md:text-[1rem] tracking-wider font-heading italic mb-3"
        >
          ॥ श्री गणेशाय नमः ॥
        </motion.p>

        {/* Om */}
        <motion.div variants={scaleIn} className="text-gold text-3xl md:text-4xl mb-4 text-glow">
          ॐ
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-[0.6rem] md:text-xs tracking-[4px] md:tracking-[6px] text-gold/70 font-display uppercase mb-2"
        >
          Smt. Kamla Devi invites you
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-text-warm/60 font-heading italic text-xs md:text-sm mb-1 font-light"
        >
          to the auspicious wedding ceremony of her loving son
        </motion.p>

        {/* NAMES — The centerpiece */}
        <motion.h1
          variants={fadeUp}
          className="font-script text-gold text-[3.2rem] sm:text-6xl md:text-[6rem] lg:text-[7rem] leading-[0.95] my-4 md:my-7 text-glow cursor-default"
          style={{ textShadow: '0 4px 50px rgba(212,175,55,0.3), 0 2px 6px rgba(0,0,0,0.5)' }}
          whileHover={{ scale: 1.03, textShadow: '0 4px 60px rgba(212,175,55,0.45), 0 2px 8px rgba(0,0,0,0.5)' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Sudhir & Aastha
        </motion.h1>

        {/* Ornamental divider */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-4 text-gold/30">
          <div className="w-10 md:w-20 h-px bg-gold/25" />
          <span className="text-gold/50 text-xs md:text-sm">✦</span>
          <div className="w-10 md:w-20 h-px bg-gold/25" />
        </motion.div>

        {/* Date */}
        <motion.div
          variants={fadeUp}
          className="inline-block border-y border-gold/25 py-3 md:py-4 px-8 md:px-14 text-gold font-display font-medium text-sm md:text-lg tracking-[4px] md:tracking-[6px] mb-4 cursor-default"
          whileHover={{ borderColor: 'rgba(212,175,55,0.5)', boxShadow: '0 0 30px rgba(212,175,55,0.1)', scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          21 APRIL 2026
        </motion.div>

        {/* Venue */}
        <motion.p
          variants={fadeUp}
          className="text-[0.6rem] md:text-xs tracking-[2px] md:tracking-[4px] text-text-warm/45 uppercase font-light cursor-default"
          whileHover={{ color: 'rgba(212,175,55,0.6)', letterSpacing: '6px' }}
          transition={{ duration: 0.4 }}
        >
          Symphony Banquet Hall · Sector 9-11 · Hisar
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          variants={fadeUp}
          className="mt-10 md:mt-14 flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
          whileHover={{ scale: 1.15 }}
        >
          <span className="text-[0.5rem] tracking-[3px] uppercase text-text-warm/25 mb-2">Scroll</span>
          <motion.div
            className="text-gold/35"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <i className="fa-solid fa-chevron-down text-xs" />
          </motion.div>
          <motion.div
            className="text-gold/20"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.15 }}
          >
            <i className="fa-solid fa-chevron-down text-xs" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
