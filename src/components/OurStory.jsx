import { motion } from 'framer-motion'
import RevealSection from './RevealSection'
import sudhirImg from '../assets/images/sudhir.png'
import aasthaImg from '../assets/images/aastha.png'

function PersonCard({ image, name, subtitle, quote, delay = 0 }) {
  return (
    <RevealSection delay={delay} direction="scale" className="flex flex-col items-center flex-1 max-w-[280px]">
      <motion.div
        className="relative mb-5 group cursor-default"
        whileHover={{ scale: 1.06, rotate: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <img
          src={image}
          alt={name}
          className="w-[150px] h-[150px] md:w-[190px] md:h-[190px] rounded-full object-cover border-[3px] border-text-dark/30 shadow-xl transition-all duration-700 group-hover:border-gold/60 group-hover:shadow-2xl"
        />
        {/* Gold ring on hover */}
        <div className="absolute inset-0 rounded-full border border-transparent transition-all duration-700 scale-[1.12] group-hover:border-gold/20 group-hover:scale-[1.18]" />
      </motion.div>

      <motion.span
        className="font-script text-3xl md:text-[2.5rem] text-text-dark mb-1"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.span>

      <p className="text-[0.7rem] md:text-xs text-text-dark/70 tracking-[3px] uppercase mb-2 font-display font-medium">
        {subtitle}
      </p>
      <p className="text-[0.75rem] md:text-[0.85rem] italic text-text-dark/55 leading-relaxed max-w-[230px] text-center font-heading font-medium">
        {quote}
      </p>
    </RevealSection>
  )
}

export default function OurStory() {
  return (
    <section className="relative py-24 md:py-36 px-6 bg-cream text-text-dark text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.04) 0%, transparent 50%)',
      }} />

      {/* Section Heading */}
      <RevealSection>
        <p className="text-[0.7rem] md:text-xs tracking-[4px] uppercase text-gold font-display font-semibold mb-3">
          The Couple
        </p>
        <h2 className="font-heading italic text-4xl md:text-5xl text-text-dark font-medium">Our Story</h2>
        <div className="flex items-center justify-center gap-3 mt-4 text-gold/50">
          <div className="w-10 h-px bg-gold/50" />
          <span className="text-gold text-[0.6rem]">✦</span>
          <div className="w-10 h-px bg-gold/50" />
        </div>
      </RevealSection>

      {/* Couple Portraits */}
      <div className="flex justify-center items-start gap-6 md:gap-16 mt-14 md:mt-20 mx-auto max-w-[800px]">
        <PersonCard
          image={sudhirImg}
          name="Sudhir"
          subtitle="The Groom"
          quote="Grand S/o Late Smt. Resham Devi & Late Sh. Pali Ram Jain"
          delay={0.1}
        />

        {/* Elegant ornamental divider instead of emoji */}
        <RevealSection delay={0.25} className="self-center mt-10 md:mt-16">
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-px h-6 bg-gold/30" />
            <span className="text-gold text-xl font-display font-light" style={{
              textShadow: '0 0 15px rgba(212,175,55,0.3)',
            }}>✦</span>
            <div className="w-px h-6 bg-gold/30" />
          </motion.div>
        </RevealSection>

        <PersonCard
          image={aasthaImg}
          name="Aastha"
          subtitle="The Bride"
          quote="D/o Smt. Pushpa Jain & Sh. Radhe Shyam Jain Ji of Rohtak"
          delay={0.35}
        />
      </div>

      {/* Emotional Text */}
      <RevealSection delay={0.2} className="max-w-[700px] mx-auto mt-16 md:mt-20">
        <p className="text-base md:text-lg leading-[2.2] text-text-dark/60 font-heading italic font-light">
          Two souls, one heart — united in love and blessed by family.
          As we begin this beautiful journey together, we invite you to be part of our story.
        </p>
      </RevealSection>

      <div className="section-divider-gold mt-24 md:mt-36" />
    </section>
  )
}
