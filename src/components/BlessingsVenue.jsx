import { motion } from 'framer-motion'
import RevealSection from './RevealSection'

export default function BlessingsVenue() {
  return (
    <section className="relative py-20 md:py-28 px-4 md:px-6 bg-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.03) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(62,4,4,0.02) 0%, transparent 50%)',
      }} />

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 justify-center items-stretch max-w-[1150px] mx-auto relative">

        {/* ── Invitation Card ── */}
        <RevealSection delay={0.1} direction="left" className="flex-1 min-w-0 max-w-[540px] mx-auto lg:mx-0">
          <motion.div
            className="relative h-full border-2 border-gold/70 p-8 md:p-12 text-center"
            whileHover={{ borderColor: 'rgba(212,175,55,0.95)', boxShadow: '0 0 30px rgba(97, 81, 29, 0.45)' , textShadow: '0 0 30px rgba(97, 81, 29, 0.45)'}}
            transition={{ duration: 0.5 }}
          >
            {/* Elegant gold ornament instead of crown emoji */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cream px-3">
              <span className="text-gold text-sm font-display tracking-[4px]">✦ ✦ ✦</span>
            </div>

            {/* Corner ornaments */}
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/25" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/25" />
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold/25" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold/25" />

            {/* Header */}
            <p className="text-[0.6rem] md:text-xs tracking-[3px] uppercase text-gold font-display font-bold mb-3">
              A Cordial Invitation From
            </p>

            <h2 className="font-heading italic text-2xl md:text-3xl text-text-dark font-semibold mb-1">
              Smt. Kamla Devi
            </h2>
            <p className="text-xs md:text-sm text-text-dark/60 font-light mb-6">
              W/o Late Sh. Ram Niwas Jain
            </p>

            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold/50" />
              <span className="text-gold text-[0.55rem]">✦</span>
              <div className="w-8 h-px bg-gold/50" />
            </div>

            {/* Groom */}
            <p className="text-[0.65rem] md:text-xs tracking-[3px] uppercase text-gold font-display font-semibold mb-1">
              The Groom
            </p>
            <p className="font-script text-3xl md:text-4xl text-text-dark mb-1">Sudhir</p>
            <p className="text-[0.72rem] md:text-sm text-text-dark/80 font-heading italic mb-5 max-w-[320px] mx-auto font-medium">
              Grand S/o Late Smt. Resham Devi & Late Sh. Pali Ram Jain
            </p>

            <p className="font-heading italic text-lg text-gold/90 mb-4">with</p>

            {/* Bride */}
            <p className="text-[0.65rem] md:text-xs tracking-[3px] uppercase text-gold font-display font-semibold mb-1">
              The Bride
            </p>
            <p className="font-script text-3xl md:text-4xl text-text-dark mb-1">Aastha</p>
            <p className="text-[0.72rem] md:text-sm text-text-dark/80 font-heading italic mb-6 max-w-[320px] mx-auto font-medium">
              D/o Smt. Pushpa Jain & Sh. Radhe Shyam Jain Ji of Rohtak
            </p>

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-6 h-px bg-gold/40" />
              <span className="text-gold text-[0.5rem]">✦</span>
              <div className="w-6 h-px bg-gold/40" />
            </div>

            <p className="text-xs md:text-sm text-text-dark/95 tracking-wide font-light">
              #414, Sector-13, Hisar
            </p>
            <p className="text-xs md:text-sm text-text-dark/95 tracking-wide font-light">
              M. 97292-35442 · 97292-11284
            </p>

            <p className="font-script text-xl md:text-2xl text-gold mt-6">
              With Best Compliments From
            </p>
            <p className="text-xs md:text-sm text-text-dark/55 font-light mt-1">
              All Jain Family, Relatives & Friends
            </p>
          </motion.div>
        </RevealSection>

        {/* ── Venue Card ── */}
        <RevealSection delay={0.2} direction="right" className="flex-1 min-w-0 max-w-[540px] mx-auto lg:mx-0">
          <motion.div
            className="h-full bg-white rounded-2xl p-6 md:p-8 shadow-xl text-center"
            whileHover={{ y: -5, boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[0.6rem] md:text-xs tracking-[3px] uppercase text-gold font-display font-semibold mb-2">
              Venue
            </p>
            <h2 className="font-heading italic text-2xl md:text-3xl text-text-dark font-medium mb-5">
              The Royal Venue
            </h2>

            <div className="w-full h-[220px] md:h-[280px] rounded-xl overflow-hidden mb-5 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.447814674068!2d75.7223!3d29.1492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912330000000001%3A0x0!2zU3ltcGhvbnkgQmFucXVldCBIYWxs!5e0!3m2!1sen!2sin!4v1711718400000"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="Venue Map"
              />
            </div>

            <p className="text-lg md:text-xl text-text-dark font-heading font-semibold mb-1">
              Symphony Banquet Hall
            </p>
            <p className="text-sm md:text-base text-text-dark/55 mb-5 font-light">
              Sector 9-11, Hisar
            </p>

            <motion.button
              onClick={() => window.open('https://maps.google.com/?q=Symphony+Banquet+Hall+Sector+9-11+Hisar', '_blank')}
              className="inline-flex items-center gap-2 bg-maroon-dark text-gold border-none py-3 px-7 md:px-8 rounded-full text-[0.7rem] md:text-xs tracking-[2px] md:tracking-[3px] uppercase cursor-pointer font-body transition-all duration-400"
              whileHover={{ scale: 1.06, y: -3, boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.96 }}
            >
              <i className="fa-solid fa-location-arrow text-sm" /> Get Directions
            </motion.button>
          </motion.div>
        </RevealSection>
      </div>

      <div className="section-divider-gold mt-20 md:mt-28" />
    </section>
  )
}
