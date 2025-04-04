import React from 'react'
import {HERO_CONTENT} from '../constants'
import { color, motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'

const containerVariants = {
  hidden: {opacity: 0, x:-100},
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5
    }
  }
}

const childVariants = {
  hidden: {opacity:0, x:-100},
  visible: {opacity:1, x:0, transition: {duration: 0.5}}
}

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ['Software Developer', 'Full-Stack Developer', 'Backend Developer', 'Software Engineer'],
    loop: {},
    typeSpeed: 50
  })
  
  return (
    <div className='pb-4 lg:mb-36' >
        <div className='flex flex-wrap lg:flex-row-reverse' >
            <div className='w-full lg:w-1/2' >
             {/* <div className='flex justify-center lg:p-8' >  
                <motion.img src={profilePic} alt="Karan Gupta" className='border border-stone-900 rounded-3xl' width={500} height={500} 
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}  
                transition={{duration:1, delay:1.5}}
                />
             </div> */}
            </div>
            <div className='w-full lg:w-1/2' >
             <motion.div 
                initial='hidden'
                animate='visible'
                variants={containerVariants}
                className='flex flex-col items-center lg:items-start mt-10' >
                
                <motion.h2 
                 variants={childVariants}
                 className='pb-2 text-4xl tracking-tighterlg:text-8xl' >Karan Gupta
                </motion.h2>
                
                <motion.span
                 variants={childVariants}
                 className='bg-gradient-to-r from-stone-200 to-stone-400 bg-clip-text text-3xl tracking-tight text-transparent' >
                 {typeEffect} 
                </motion.span>
               
                <motion.p
                variants={childVariants}
                className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tight' >
                    {HERO_CONTENT}
                </motion.p>
                
                <motion.a 
                  variants={childVariants}
                  href="/Karan_Gupta_Resume.pdf"
                  target='_blank'
                  rel='noopener noreferrer'
                  download
                  className='bg-white rounded-full p-4 text-sm text-black mb-10'
                >
                Download Resume
                </motion.a>
             </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero