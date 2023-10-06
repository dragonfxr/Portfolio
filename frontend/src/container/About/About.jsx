import React, { useState, useEffect } from 'react';
import'./About.scss';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    //client.fetch 在这段代码中是与Sanity客户端库特定的方法。当你使用Sanity客户端库时，.fetch 方法用于执行GROQ（Sanity的查询语言）查询来从Sanity数据库中检索数据。

    client.fetch(query)
      .then((data) => {
        setAbouts(data);
      })
  }, [])
  

  return (
    <>
      <h2 className='head-text'>I know that <span>good development</span><br /> means <span> good business</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}} 
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profiles-item'
            key={about.title+index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10 }}>{about.description}</p>

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);