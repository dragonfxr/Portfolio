import React, { useState, useEffect }from 'react';
import'./About.scss';
import { motion } from 'framer-motion'
import { images } from '../../constants'

const about = [
  {title: 'Web Development', description: 'My name is Russell.', imgUrl: images.about01},
  {title: 'Responsive Design', description: 'My name is Russell.', imgUrl: images.about02},
  {title: 'UI/UX', description: 'My name is Russell.', imgUrl: images.about03},
  {title: 'Flask', description: 'My name is Russell.', imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span>good design</span>
        <br />
        means
        <span>business</span>
      </h2>

      <div className='app__profiles'>
        {about.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}} 
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title+index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10 }}>{about.description}</p>

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About