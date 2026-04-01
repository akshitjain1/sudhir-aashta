import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import songFile from '../assets/song.mp3'

export default function AudioToggle({ isOpen }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      let vol = audio.volume
      const fadeOut = setInterval(() => {
        vol -= 0.05
        if (vol <= 0) {
          clearInterval(fadeOut)
          audio.pause()
          audio.volume = 0.8
        } else {
          audio.volume = vol
        }
      }, 50)
    } else {
      audio.volume = 0
      audio.play().then(() => {
        let vol = 0
        const fadeIn = setInterval(() => {
          vol += 0.03
          if (vol >= 0.7) {
            clearInterval(fadeIn)
            audio.volume = 0.7
          } else {
            audio.volume = vol
          }
        }, 50)
      }).catch(() => {})
    }
    setPlaying(!playing)
  }, [playing])

  useEffect(() => {
    if (isOpen && !hasTriggered && audioRef.current) {
      setHasTriggered(true)
      const audio = audioRef.current
      audio.volume = 0
      audio.play().then(() => {
        setPlaying(true)
        let vol = 0
        const fadeIn = setInterval(() => {
          vol += 0.02
          if (vol >= 0.7) {
            clearInterval(fadeIn)
            audio.volume = 0.7
          } else {
            audio.volume = vol
          }
        }, 80)
      }).catch(() => {})
    }
  }, [isOpen, hasTriggered])

  return (
    <>
      <audio ref={audioRef} loop preload="auto" src={songFile} />

      <AnimatePresence>
        {isOpen && (
          <motion.button
            onClick={toggle}
            className="fixed bottom-5 right-5 md:bottom-6 md:right-6 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center cursor-pointer z-[500] border-none"
            style={{
              background: playing
                ? 'linear-gradient(135deg, #D4AF37, #E8C547)'
                : 'rgba(212,175,55,0.8)',
              boxShadow: playing
                ? '0 4px 25px rgba(212,175,55,0.75), 0 0 20px rgba(212,175,55,0.15)'
                : '0 4px 15px rgba(0,0,0,0.4)',
            }}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 1.5 }}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle music"
          >
            <i className={`fa-solid ${playing ? 'fa-volume-high' : 'fa-volume-xmark'} text-maroon-dark text-sm`} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
