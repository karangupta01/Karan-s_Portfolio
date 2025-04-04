import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiExpress, SiGithub, SiMongodb, SiPostman } from 'react-icons/si'
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { DiNodejs } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { FaGitAlt } from 'react-icons/fa';
import { IoLogoDocker } from 'react-icons/io5';

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

function Technologies() {
  return (
    <div className='pb-24' >
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl' >Technologies</motion.h2>
        <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0 , x: -100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4' >
            <motion.div initial='initial' animate='animate' variants={iconVariants(2.5)} >
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(3)} className='p-4' >
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(5)} className='p-4' >
                <SiMongodb className='text-7xl text-green-700'/>
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(2)} className='p-4' >
            <TbBrandJavascript className='text-7xl text-orange-500' />
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(6)} className='p-4' >
                <DiNodejs className='text-7xl text-green-500' />
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(4)} className='p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700' />
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(4)} className='p-4'>
                <SiGithub className='text-7xl text-white-700' />
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(4)} className='p-4'>
                <FaGitAlt className='text-7xl text-orange-800' />
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(4)} className='p-4'>
                <IoLogoDocker className='text-7xl text-sky-700' />
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(4)} className='p-4'>
                <SiExpress className='text-7xl text-white' />
                <p>express.js</p>
            </motion.div>
            <motion.div initial='initial' animate='animate' variants={iconVariants(4)} className='p-4'>
                <SiPostman className='text-7xl text-orange-500' />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies