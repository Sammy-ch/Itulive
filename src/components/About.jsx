import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-tilt';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 *
        index, 0.75)}
      className="w-full white-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className=" bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain pb-5" />
        
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
        
    </motion.div>
  </Tilt>
  
);

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >A propos de nous</h2>
      </motion.div>

      <motion.p
        variants={
          fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        ITULIVE  Pictures  (Innovation To Uplift Lives) est une maison de production audiovisuelle et cinématographique créée en 2010. Avec comme slogan : « Live your dreams », ITULIVE est un plateforme ou tout jeune, plein de créativité et de talent, peut avoir la chance de réaliser ses rêves à travers différentes projets de création.
        ITULIVE offre  différentes services  commerciales à ses clients.  A savoir la création de leur spot publicitaires, documentaire, film de commande, etc.
        <br />
        Nous croyons dans notre travail que le fait de créer une image et de la véhiculer contribue au développement d'une entreprise, une marque.
        <br />
        <br />
        Les différentes services que nous offrons :
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
      <p className={`mt-10 text-[17px]`}>
      Nous développons des projets innovants, nous créons des histoires uniques avec des sujets qui ouvrent de belles perspectives. Nous concevons chaque film, chaque projet, comme une plongée dans un univers inspirant que nous retraçons par des choix originaux de narration et de mise en scène. A cet égard, l'innovation technique est pour nous le moyen privilégié d'élargir et d'enrichir le champ de la création.
      </p>
      
    </>
  );
};

export default SectionWrapper(About, "about");