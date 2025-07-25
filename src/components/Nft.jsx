import React from 'react'
import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee";

function Nft() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
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
    <section className='road-bg  overflow-hidden py-12'>
        <div className='relative max-w-full'>
          {/* Background Effects */}
  
          
          {/* Section Header */}
          <motion.div 
            className="text-center "
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-6xl font-bold text-black mb-4">
              NFT Collection 🎨
            </h2>
            {/* <p className="text-lg sm:text-xl text-black max-w-2xl mx-auto px-4">
              Discover our exclusive Bonked NFT collection - unique digital art on Solana blockchain! 🚀
            </p> */}
          </motion.div>

          {/* NFT Marquee */}
          <motion.div 
            className='relative z-10'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Marquee 
              className='py-8 overflow-hidden'
              speed={30}
              gradient={true}
              gradientColor={[17, 24, 39]}
              gradientWidth={150}
              pauseOnHover={true}
            >
              {/* First Row - Larger Images */}
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="mx-3 sm:mx-4 inline-block"
              >
                <motion.div 
                  className="relative group cursor-pointer"
                  variants={floatingVariants}
                  animate="animate"
                >
                  <motion.img 
                    src="images/img1.jpeg" 
                    alt="Bonked NFT 1" 
                    className='h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] object-cover rounded-2xl border-4 border-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300'
                    variants={pulseVariants}
                    animate="animate"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">Bonked #001</h3>
                      <p className="text-sm text-purple-200">Rare Edition</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="mx-3 sm:mx-4 inline-block"
              >
                <motion.div 
                  className="relative group cursor-pointer"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "0.5s" }}
                >
                  <motion.img 
                    src="images/img2.jpeg" 
                    alt="Bonked NFT 2" 
                    className='h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] object-cover rounded-2xl border-4 border-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300'
                    variants={pulseVariants}
                    animate="animate"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">Bonked #002</h3>
                      <p className="text-sm text-blue-200">Epic Edition</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="mx-3 sm:mx-4 inline-block"
              >
                <motion.div 
                  className="relative group cursor-pointer"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "1s" }}
                >
                  <motion.img 
                    src="images/img3.jpeg" 
                    alt="Bonked NFT 3" 
                    className='h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] object-cover rounded-2xl border-4 border-white shadow-2xl hover:shadow-pink-500/50 transition-all duration-300'
                    variants={pulseVariants}
                    animate="animate"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">Bonked #003</h3>
                      <p className="text-sm text-pink-200">Legendary</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="mx-3 sm:mx-4 inline-block"
              >
                <motion.div 
                  className="relative group cursor-pointer"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "1.5s" }}
                >
                  <motion.img 
                    src="images/img4.jpeg" 
                    alt="Bonked NFT 4" 
                    className='h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] object-cover rounded-2xl border-4 border-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300'
                    variants={pulseVariants}
                    animate="animate"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">Bonked #004</h3>
                      <p className="text-sm text-green-200">Mythic</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="mx-3 sm:mx-4 inline-block"
              >
                <motion.div 
                  className="relative group cursor-pointer"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "2s" }}
                >
                  <motion.img 
                    src="images/img1.png" 
                    alt="Bonked NFT 5" 
                    className='h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] object-cover rounded-2xl border-4 border-white shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300'
                    variants={pulseVariants}
                    animate="animate"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">Bonked #005</h3>
                      <p className="text-sm text-yellow-200">Ultra Rare</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="mx-3 sm:mx-4 inline-block"
              >
                <motion.div 
                  className="relative group cursor-pointer"
                  variants={floatingVariants}
                  animate="animate"
                  style={{ animationDelay: "1.5s" }}
                >
                  <motion.img 
                    src="images/img4.jpeg" 
                    alt="Bonked NFT 4" 
                    className='h-[280px] w-[280px] sm:h-[300px] sm:w-[300px] object-cover rounded-2xl border-4 border-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300'
                    variants={pulseVariants}
                    animate="animate"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">Bonked #004</h3>
                      <p className="text-sm text-green-200">Mythic</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </Marquee>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎨 Mint Your NFT Now
            </motion.button>
          </motion.div>

          {/* Floating particles */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {["✨", "💎", "🎨", <img key="img1" src="/images/solana-sol-logo.png" alt="Decorative NFT" className=' h-[20px] w-[20px]' />, <img key="img1" src="/images/solana-sol-logo.png" alt="Decorative NFT" className=' h-[20px] w-[20px]' />, <img key="img1" src="/images/solana-sol-logo.png" alt="Decorative NFT" className=' h-[20px] w-[20px]' />].map((emoji, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute text-2xl sm:text-3xl"
                style={{
                  left: `${10 + (i * 15)}%`,
                  top: `${20 + (i % 3 * 30)}%`,
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
          </motion.div>
        </div>
    </section>
  )
}

export default Nft