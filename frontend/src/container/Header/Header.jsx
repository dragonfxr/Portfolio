import React from 'react';
import'./Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const scaleVariants = {
  whileInView : {
    scale: [0,1],
    opacity: [0,1],
    transition:{
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100,0 ], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20 }}>
              <p className="p-text">Hello,I am</p>
              <h1 className='head-text'>Russell Feng</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className="p-text">Web developer</p>
            <p className="p-text">Frontend developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileInView={{ x: [-100,0 ], opacity: [0, 1] }}
        transition={{ duration: 1.5, delaychildren : 0.5}}
        className='app__header-img'>
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ x: [-100,0 ], scale: [0, 1] }}
          transition={{ duration: 2.5, ease: 'easeInOut'}}
          src={images.circle} alt="profile_circle" 
          className='overlay_circle'>
        </motion.img>
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header_circles'
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div className='circle_cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />

          </div>
        ))}
      </motion.div>

      

    </div>
  )
}

export default Header