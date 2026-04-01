import { motion } from 'framer-motion'

export default function Curtain({ onOpen }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999]"
      style={{ background: '#060101' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      {/* ── Left Curtain Panel ── */}
      <motion.div
        className="curtain-panel left-0 w-1/2 z-[1]"
        exit={{ x: '-100%' }}
        transition={{ duration: 2.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Top gather — bunched fabric at the rod */}
        <div className="curtain-top-gather" />

        {/* Drape fold highlights — simulate 3D curtain pleats */}
        <div className="curtain-fold-1" style={{ left: '15%' }} />
        <div className="curtain-fold-2" style={{ left: '40%' }} />
        <div className="curtain-fold-3" style={{ left: '65%' }} />
        <div className="curtain-fold-1" style={{ left: '80%', opacity: 0.6 }} />

        {/* Edge shadow where both panels meet */}
        <div className="curtain-edge-shadow-left" />

        {/* Subtle light stripe for silk sheen */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.03) 45%, transparent 52%)' }} />
      </motion.div>

      {/* ── Gold Ornate Seam ── */}
      <motion.div
        className="absolute left-1/2 top-0 -translate-x-1/2 z-[3] flex flex-col items-center"
        style={{ width: '8px', height: '100%' }}
        exit={{ opacity: 0, scaleY: 0 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.15 }}
      >
        {/* Main gold bar */}
        <div className="w-full h-full" style={{
          background: 'linear-gradient(180deg, #a08020 0%, #D4AF37 20%, #f0d060 50%, #D4AF37 80%, #a08020 100%)',
          boxShadow: '0 0 50px rgba(212,175,55,0.5), 0 0 100px rgba(212,175,55,0.15), -3px 0 15px rgba(212,175,55,0.1), 3px 0 15px rgba(212,175,55,0.1)',
        }} />
      </motion.div>

      {/* ── Right Curtain Panel ── */}
      <motion.div
        className="curtain-panel right-0 w-1/2 z-[1]"
        exit={{ x: '100%' }}
        transition={{ duration: 2.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="curtain-top-gather" />

        {/* Mirror fold highlights */}
        <div className="curtain-fold-1" style={{ right: '15%', left: 'auto' }} />
        <div className="curtain-fold-2" style={{ right: '40%', left: 'auto' }} />
        <div className="curtain-fold-3" style={{ right: '65%', left: 'auto' }} />
        <div className="curtain-fold-1" style={{ right: '80%', left: 'auto', opacity: 0.6 }} />

        <div className="curtain-edge-shadow-right" />

        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(250deg, transparent 30%, rgba(255,255,255,0.03) 45%, transparent 52%)' }} />
      </motion.div>

      {/* ── Center Content Card ── */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-[92%] max-w-[500px]"
        exit={{ opacity: 0, scale: 0.88, y: 40 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className="relative px-8 py-14 md:px-14 md:py-18 border border-gold/25 backdrop-blur-xl overflow-hidden"
             style={{ background: 'rgba(14, 2, 2, 0.55)' }}>

          <div className="absolute inset-0 pointer-events-none"
               style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(212,175,55,0.05) 0%, transparent 65%)' }} />

          {/* Ornamental line */}
          <div className="w-14 h-px bg-gold/30 mx-auto mb-5" />

          {/* Sanskrit */}
          <motion.p
            className="text-gold/40 text-[0.6rem] md:text-[0.65rem] tracking-wider mb-4 font-heading italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
          >
            ॥ श्री गणेशाय नमः ॥
          </motion.p>

          <motion.span
            className="font-script text-gold block mb-2 text-4xl md:text-5xl lg:text-6xl"
            style={{ textShadow: '0 2px 25px rgba(212,175,55,0.35)' }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          >
            You Are Invited
          </motion.span>

          <motion.h1
            className="text-white font-display text-xl md:text-2xl tracking-[5px] md:tracking-[7px] mb-2 font-normal uppercase"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
          >
            Sudhir & Aastha
          </motion.h1>

          <motion.p
            className="text-text-warm/40 text-[0.6rem] md:text-[0.65rem] tracking-[3px] uppercase mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            Tuesday · 21 April 2026
          </motion.p>

          <motion.button
            onClick={onOpen}
            className="glow-pulse inline-block w-full max-w-[280px] py-4 bg-transparent border border-gold/50 text-gold font-body text-[0.65rem] md:text-[0.7rem] font-normal tracking-[5px] uppercase cursor-pointer transition-all duration-600 hover:bg-gold hover:text-maroon-dark hover:tracking-[7px] hover:border-gold"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Open Invitation
          </motion.button>

          <motion.p
            className="text-white/20 text-[0.55rem] tracking-[2px] mt-6 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
          >
            Tap to begin the celebration
          </motion.p>

          <div className="w-14 h-px bg-gold/30 mx-auto mt-6" />
        </div>
      </motion.div>
    </motion.div>
  )
}
