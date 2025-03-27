import React from 'react'
import logo from '../assets/PortfolioLogo.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6' >
        <div className='flex flex-shrink-0 items-center' >
            <a href="/" aria-label='Home'>
             <img src={logo} className='mx-2' width={50} height={33} alt='logo' />
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl' >
            <a href="https://www.linkedin.com/in/karan-gupta-3aa117248" target='_blank' rel='noopener noreferrer' aria-label='Linkedin'>
             <FaLinkedin />
            </a>
            <a href="https://github.com/karangupta01" target='_blank' rel='noopener noreferrer' aria-label='Github'>
             <FaGithub />
            </a>
            
        </div>
    </nav>
  )
}

export default Navbar