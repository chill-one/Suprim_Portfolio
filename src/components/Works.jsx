import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link, schoolProject }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="h-full"  // make the wrapper stretch
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}   // <-- options (plural)
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="flex flex-col h-full">
          {/* Image with consistent aspect & rounded corners */}
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl">
            <img src={image} alt={name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {schoolProject ? (
                <div className="bg-red-600 px-2 h-10 rounded-full flex items-center cursor-default" title="Can only show this project in person!">
                  <span className="text-white text-xs leading-none px-1">School Project</span>
                </div>
              ) : (
                <button
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
                  aria-label="Open GitHub source"
                >
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                </button>
              )}
            </div>
          </div>

          {/* Title + description fill remaining space */}
          <div className="mt-5 flex-1">
            <h3 className="text-white font-black text-[24px]">{name}</h3>
            {/* If you have Tailwind line-clamp plugin: use line-clamp-3.
                If not, use the fallback below (comment/uncomment as needed). */}
            <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
              {description}
            </p>
            {/* Fallback (no plugin):
            <p className="mt-2 text-secondary text-[14px] leading-relaxed max-h-[66px] overflow-hidden">
              {description}
            </p> */}
          </div>

          {/* Tags stay aligned at bottom */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}> 
          <p className={styles.sectionSubText}>
            My Work,</p>
          <h2 className={styles.sectionHeadText} style={{ color: "#C71585" }}
          >PROJECTS..</h2>
    </motion.div>

    <div className='w-full flex'>
      <motion.p
      variants={fadeIn("","",0.1,1)}
      className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Projects below illustrate both my expertise and practice in
        hands-on applications of my expertise. Every project has a short description.
        demo links, however my school project can only be shown in person. A portfolio that showcases
        my ability to handle challenging projects, apply various technologies, and effectively
        oversee project execution.
      </motion.p>
    </div>

    <div className="mt-20 grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, index) => (
        <div className='h-full'>
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        </div>
    ))}
    </div>
      
    </>
  )
}

export default SectionWrapper(Works, "");