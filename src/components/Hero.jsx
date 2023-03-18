import { motion } from 'framer-motion';
import { styles } from '../styles';
import { CamerasCanvas } from './canvas';

const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen max-autob`}>
      <video src='/src/assets/771_MDM.mp4' type="video/mp4" autoPlay loop muted playsInline poster='src/assets/herovid/vid_poster.png' width="320" height="240"
      class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden object-cover">
      </video>

      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#E91E63]' />
          <div className='w-1 sm:h-80 h-40
           bg-pink-500' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}><span className='text-[#ff3d7d]'>ITULIVE MEDIA </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Un service innovant pour vos besoins <br
            className='sm:block hidden'
          />  dans la communication et la production cinématographique professionnel.
          </p>
        </div>
      </div>
     
      {/* <CamerasCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;