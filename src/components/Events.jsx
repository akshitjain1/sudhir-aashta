import { motion } from 'framer-motion'
import RevealSection from './RevealSection'

const EVENTS = [
  {
    title: 'Ladies Sangeet',
    date: 'Monday, 20th April 2026',
    time: '7:00 PM',
    venue: '',
    icon: 'fa-music',
    tagline: '"Dance, sing &\ncelebrate together."',
    side: 'left',
  },
  {
    title: 'Departure of Barat',
    date: 'Tuesday, 21st April 2026',
    time: '7:00 PM',
    venue: 'Symphony Banquet Hall, Sector 9-11, Hisar',
    icon: 'fa-horse',
    tagline: '"The grand\nroyal procession."',
    side: 'right',
    featured: true,
  },
  {
    title: 'Wedding Dinner',
    date: 'Tuesday, 21st April 2026',
    time: '8:00 PM',
    venue: 'Symphony Banquet Hall, Sector 9-11, Hisar',
    icon: 'fa-utensils',
    tagline: '"A feast of\nlove & joy."',
    side: 'left',
  },
]

function EventCard({ event, index }) {
  const isLeft = event.side === 'left'

  return (
    <RevealSection
      delay={index * 0.15}
      direction={isLeft ? 'left' : 'right'}
      className={`relative py-7 md:py-9 ${
        isLeft
          ? 'md:w-1/2 md:pr-[80px] md:text-right'
          : 'md:w-1/2 md:pl-[80px] md:ml-auto md:text-left'
      } w-full pl-[60px] md:pl-0 text-left`}
    >
      {/* Timeline Dot */}
      <motion.div
        className={`timeline-dot-inner absolute w-5 h-5 bg-maroon-dark border-2 ${
          event.featured ? 'border-gold-bright w-6 h-6' : 'border-gold'
        } rounded-full z-[5] top-1/2 -translate-y-1/2 ${
          isLeft ? 'right-auto left-[12px] md:left-auto md:right-[-10px]' : 'left-[12px] md:left-[-10px]'
        }`}
        style={{ boxShadow: `0 0 ${event.featured ? '25px' : '12px'} rgba(212,175,55,${event.featured ? '0.45' : '0.15'})` }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
      />

      {/* Card */}
      <motion.div
        className={`group relative overflow-hidden rounded-xl border cursor-default ${
          event.featured ? 'border-gold/50' : 'border-gold/15'
        }`}
        style={{
          background: event.featured
            ? 'linear-gradient(145deg, #5a1212 0%, #3a0808 50%, #1a0303 100%)'
            : 'linear-gradient(145deg, #4a0e0e 0%, #280606 50%, #1a0303 100%)',
          boxShadow: event.featured
            ? '0 12px 45px rgba(0,0,0,0.6), 0 0 30px rgba(212,175,55,0.08)'
            : '0 8px 35px rgba(0,0,0,0.5)',
        }}
        whileHover={{
          y: -10,
          boxShadow: '0 30px 70px rgba(0,0,0,0.6), 0 0 60px rgba(212,175,55,0.18)',
          borderColor: 'rgba(212,175,55,0.4)',
        }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        {/* Top gold accent — widens on hover */}
        <motion.div
          className={`h-[3px] ${
            event.featured
              ? 'bg-gradient-to-r from-transparent via-gold-bright to-transparent'
              : 'bg-gradient-to-r from-transparent via-gold to-transparent'
          }`}
          whileHover={{ scaleX: 1.1 }}
        />

        {/* Hover glow overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
             style={{ background: 'radial-gradient(circle at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 60%)' }} />

        <div className={`p-6 md:p-8 flex gap-5 md:gap-6 items-center ${
          isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
        } flex-row`}>

          {/* Details */}
          <div className="flex-1 relative z-[1]">
            <motion.h3
              className="font-heading italic text-xl md:text-2xl text-gold mb-2 font-medium"
              whileHover={{ letterSpacing: '0.5px' }}
              transition={{ duration: 0.3 }}
            >
              {event.title}
            </motion.h3>
            <p className="text-xs md:text-sm text-text-warm font-normal mb-0.5">{event.date}</p>
            <p className="text-sm md:text-base text-gold/90 font-display font-medium tracking-wider mb-1.5">{event.time}</p>
            {event.venue && (
              <p className="text-[0.65rem] md:text-xs text-text-warm/35">{event.venue}</p>
            )}
          </div>

          {/* Tagline box */}
          <motion.div
            className={`shrink-0 rounded-xl p-4 md:p-5 min-w-[110px] md:min-w-[150px] text-center relative z-[1] ${
              event.featured
                ? 'bg-gradient-to-br from-gold via-gold-bright to-gold'
                : 'bg-gold'
            } text-maroon-dark`}
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <i className={`fa-solid ${event.icon} text-xl md:text-2xl block mb-2`} />
            <p className="font-heading italic text-[0.72rem] md:text-sm font-medium leading-snug whitespace-pre-line">
              {event.tagline}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </RevealSection>
  )
}

export default function Events() {
  return (
    <section className="py-24 md:py-36 px-4 md:px-6 bg-maroon-dark relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.025) 0%, transparent 65%)' }} />

      <RevealSection className="text-center">
        <p className="text-gold/75 text-[1rem] md:text-[1rem] tracking-wider font-heading italic mb-5">
          मंगलम भगवान विष्णुः मंगलम गरूड़ध्वजः।
          <br />
          मंगलम पुण्डरीकाक्षः मंगलाय तनो हरिः।।
        </p>

        <h2 className="font-script text-gold text-4xl md:text-5xl lg:text-6xl mb-2"
            style={{ textShadow: '0 2px 20px rgba(212,175,55,0.2)' }}>
          Golden Moments
        </h2>
        <p className="text-[0.6rem] md:text-xs tracking-[4px] uppercase text-gold/70 font-display font-normal mt-3">
          The Wedding Programme
        </p>
        <div className="flex items-center justify-center gap-3 mt-4 text-gold/30">
          <div className="w-10 md:w-20 h-px bg-gold/25" />
          <span className="text-gold/40 text-[0.55rem]">✦</span>
          <div className="w-10 md:w-20 h-px bg-gold/25" />
        </div>
      </RevealSection>

      <div className="timeline-line relative max-w-[1100px] mx-auto mt-14 md:mt-[70px]">
        {EVENTS.map((event, i) => (
          <EventCard key={event.title} event={event} index={i} />
        ))}
      </div>

      {/* Venue badge at bottom of timeline */}
      <RevealSection delay={0.3} direction="scale" className="text-center mt-16">
        <motion.div
          className="inline-flex items-center gap-3 border border-gold/20 rounded-full py-3 px-6 md:px-8"
          style={{ background: 'linear-gradient(135deg, rgba(62,4,4,0.4), rgba(14,2,2,0.6))' }}
          whileHover={{ borderColor: 'rgba(212,175,55,0.4)', scale: 1.03, y: -2 }}
          transition={{ duration: 0.4 }}
        >
          <i className="fa-solid fa-location-dot text-gold/60 text-sm" />
          <span className="text-text-warm/60 text-[0.65rem] md:text-xs tracking-wider font-light">
            Events at <span className="text-gold/80 font-medium">Symphony Banquet Hall</span>, Sector 9-11, Hisar
          </span>
        </motion.div>
      </RevealSection>
    </section>
  )
}
