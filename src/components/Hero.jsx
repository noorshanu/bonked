import React, { useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [copied, setCopied] = useState(false);
  const fullAddress = "BSFjg8wpS8ZNvn4jwARw6XhxnGqE7z2EwD1Thh";
  const shortAddress = "BSFj8...1Thh";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const heroImageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const copyButtonVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#ffbe2d",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <section className="hero-main relative overflow-x-hidden bg-[#ffbe2d]">
      <motion.div 
        className="container-wrapper pt-[25%] sm:pt-[10%]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.img 
            src="images/hero-txt.png" 
            alt="" 
            className="mx-auto h-auto sm:h-[200px] w-auto my-[1.5%]"
            variants={floatingVariants}
            animate="animate"
          />
          
          {/* Token Address with Copy Functionality */}
          <motion.div 
            className="flex items-center justify-center my-4 gap-2 px-4"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-white rounded-full px-4 py-2 border-2 border-black shadow-lg flex items-center gap-2 cursor-pointer group"
              whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={copyToClipboard}
            >
              <span className="text-sm sm:text-lg font-bold text-black">
                <span className="hidden sm:inline">{fullAddress}</span>
                <span className="sm:hidden">{shortAddress}</span>
              </span>
              <motion.div
                variants={copyButtonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 hover:bg-green-400 transition-colors duration-200"
              >
                {copied ? (
                  <motion.svg 
                    className="w-4 h-4 text-green-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                ) : (
                  <motion.svg 
                    className="w-4 h-4 text-gray-600 group-hover:text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </motion.svg>
                )}
              </motion.div>
            </motion.div>
            
            {/* Copy Success Message */}
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
              >
                Copied! ✅
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.img 
        src="images/hero.png" 
        alt="" 
        className="mx-auto h-auto sm:h-[350px]"
        variants={heroImageVariants}
        initial="hidden"
        animate="visible"
      />

      <motion.a 
        href="https://www.dextools.io/app/en/solana/pair-explorer/3m7oTxgZnsKMQrYQwgEEf1detZk6gcEthJKrqtYf6wxu?t=1711451211650" 
        className="mx-auto absolute left-0 right-0 top-[80%] sm:top-[70%] text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000] hover:text-[#fff] w-[200px] text-center font-bold uppercase"
        variants={buttonVariants}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        whileHover="hover"
        whileTap="tap"
      >
        DexTools
      </motion.a>

      {/* Floating particles effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;
