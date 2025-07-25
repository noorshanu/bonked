import React from 'react'
import { motion } from 'framer-motion'

function ChooseHero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };



  const lineVariants = {
    hidden: { 
      opacity: 0, 
      scaleX: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      rotateY: 180
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      textShadow: "0 0 30px rgba(255,255,255,0.8)",
      transition: { duration: 0.2 }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotate: -45,
      y: 100
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };



  return (
    <section className='bg-[#0243b9] pt-[5%] pb-[8%] overflow-x-hidden' id='col'>
        <div className='container-wrapper'>
            <motion.div 
              className='relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[6%]'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
                <motion.img 
                  src="images/line2.png" 
                  alt="" 
                  className='h-auto sm:h-[10px]'
                  variants={lineVariants}
                />

                <motion.h1 
                  className='text-xl sm:text-6xl font-bold text-white'
                  variants={titleVariants}
                  whileHover="hover"
                >
                  Features 🚀
                </motion.h1>

                <motion.img 
                  src="images/line1.png" 
                  alt="" 
                  className='h-auto sm:h-[10px]'
                  variants={lineVariants}
                />
            </motion.div>

            <motion.div 
              className='flex flex-col sm:flex-row justify-evenly gap-4'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img 
                    src="images/img1.jpeg" 
                    alt="" 
                    className='sm:w-auto w-[200px] h-[200px] sm:h-[370px] mx-auto box-s rounded-3xl border-4 border-black'
                    variants={floatingVariants}
                    animate="animate"
                  />
                </motion.div>
                
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img 
                    src="images/img3.jpeg" 
                    alt="" 
                    className='sm:w-auto w-[200px] h-[200px] sm:h-[370px] mx-auto box-s rounded-3xl border-4 border-black'
                    //variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "0.5s" }}
                  />
                </motion.div>
                
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.img 
                    src="images/img4.jpeg" 
                    alt="" 
                    className='sm:w-auto w-[200px] h-[200px] sm:h-[370px] mx-auto box-s rounded-3xl border-4 border-black'
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                  />
                </motion.div>
            </motion.div>

            {/* Fun floating elements */}
            {/* <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              {["⚡", "💎", "🎮", "🚀", "⭐", "🔥"].map((emoji, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xl sm:text-3xl"
                  style={{
                    left: `${10 + (i * 15)}%`,
                    top: `${20 + (i % 3 * 25)}%`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </motion.div> */}
        </div>
    </section>
  )
}

export default ChooseHero