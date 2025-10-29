import React from 'react'

import SectionWrapper from '../hoc/SectionWrapper';

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({index, title , icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className="w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card">
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
          items-center flex-col"
        >
            <img src={icon} alt={title}className='w-16 h-16 object-contain' />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction</p>
        <h2 className={styles.sectionHeadText} style={{ color: "#915eff" }}
        >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px] font-publico'>
        I'am currently on a journey to master both back-end and front-end development which are the two critical aspects of any website or application.
        I make use of libraries such as <b>React</b> and <b>Bootstrap</b> for the front-end when creating dynamic and interactive user-facing interfaces.
        I also use <b>Api's</b> and <b>database</b> along with <b>Python</b>, <b>Java</b> for the back-end in developing efficent algorithms and programs for Applications.
        The contrasts in my skills enable me to create comprehensive software solutions.
        My current goal is to learn new skills and further develop them so, I can grow as a <b>Software Enginner</b>.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index}
          {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")