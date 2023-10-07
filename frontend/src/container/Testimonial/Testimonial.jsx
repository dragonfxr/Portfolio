import React, { useEffect, useState }from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
// It's always good to seperate external and internal imports.
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client} from '../../client';
import'./Testimonial.scss';


const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <div>Testimonial</div>
  )
}

export default Testimonial;