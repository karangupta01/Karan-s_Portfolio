import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className='border-t border-stone-900 pb-20'>
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 1, y: -100}}
        transition={{duration: 0.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 1, x: 100}}
            transition={{duration: 1}}
            className='my-4'>
                {CONTACT.text}
            </motion.p>
            <motion.p
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 1, x: -100}}
            transition={{duration: 1}}
            className='my-4'>
                {CONTACT.address}
            </motion.p>
            <a href="mailto:karangupta1017@gmail.com" className='border-b'>
                {CONTACT.email}
            </a>
            <p className='my-8 text-center text-gray-400'>&copy; Created With ♥️ || KARAN GUPTA</p>
        </div>
    </div>
  )
}

export default Contact