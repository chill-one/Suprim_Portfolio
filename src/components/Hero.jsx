import React from 'react'

import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5`}> 
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#780DA7]'/>
          <div className='w-1 sm:h-80 h-40
          violet-gradient'></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            <span className='text-[#FFFEEC]'>Hi, I'm</span> <span 
          className="text-[#915eff]">Suprim</span></h1>

          <br/><p className="font-pacifico text-white-100">
          " I am a college student majoring in Computer Science, with deep interested in<br/> <span className='text-bold text-[#915eff]'>full stack development</span> and 
          <span className='text-bold text-[#A88AED]'> software engineering</span>,
           <br className='sm:block hidden'/> with a strong inclination towards <span className='text-bold text-[#CBD83B]'>problem-solving</span> and 
           <span className='text-bold text-[#CBD83B]'> artificial intelligence</span>. "
          </p>
        </div>
      </div>

      <ComputersCanvas/>

      <div className='absolute xs:bottom-10
      bottom-32 w-full flex justify-center
      items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px]
          rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y : [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat:Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>
      </div>
      </section>
  )
}

export default Hero