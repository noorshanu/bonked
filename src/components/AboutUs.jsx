import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
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

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: -100
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bounceVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="bg-[#0243b9] -mt-0 sm:pt-0 pt-3 sm:-mt-2" id="about">
      <div className="container-wrapper">
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img 
            src="images/about-bg.png" 
            alt="" 
            className="pt-[5%] hidden sm:block"
            variants={floatingVariants}
            animate="animate"
          />
 
          <motion.img 
            src="images/mob.png" 
            alt="" 
            className="block sm:hidden h-[750px]"
            variants={floatingVariants}
            animate="animate"
          />

          <div className="absolute left-0 right-0 top-8 sm:top-[18%]">
            <motion.img
              src="images/about.png"
              alt=""
              className="mx-auto text-center h-[30px] sm:h-[60px]"
             // variants={bounceVariants}
              animate="animate"
            />
            
            <motion.h1 
              className="text-lg sm:text-2xl font-bold text-center my-4 text-black"
              variants={titleVariants}
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(255,255,255,0.8)",
                transition: { duration: 0.2 }
              }}
            >
              Bonked: The Heartbeat of Solana&apos;s Meme Community 🐕💓
            </motion.h1>
            
            <motion.p 
              className="max-w-4xl mx-auto text-center mt-[2%] mb-[3%] text-xs sm:text-xl font-bold text-black"
              variants={textVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Bonked is more than just a digital currency; it&apos;s a revolution in the Solana ecosystem! 🚀 
              Aimed at becoming the premier community coin of Web3, Bonked is setting new standards for integration and utility across the blockchain universe! ⚡
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4 px-12"
              variants={containerVariants}
            >
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <motion.img 
                  src="images/img2.jpeg" 
                  alt="" 
                  className="h-auto sm:h-[250px] box-s rounded-3xl border-4 border-black"
                  variants={pulseVariants}
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
                  className="h-auto sm:h-[250px] box-s rounded-3xl border-4 border-black"
                  variants={pulseVariants}
                  animate="animate"
                  style={{ animationDelay: "0.5s" }}
                />
              </motion.div>
            </motion.div>

            {/* Fun floating emojis */}
            {/* <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              {["🚀", "⚡", "💎", "🎮", "🌙", "⭐"].map((emoji, i) => (
                <motion.div
                  key={i}
                  className="absolute text-2xl sm:text-4xl"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${30 + (i % 2 * 20)}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                >
                  {emoji}
                </motion.div>
              ))}
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
