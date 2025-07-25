import React from 'react'

function Roadmap() {
  return (
    <section className='road-bg -mt-[6%]' id='road'> 
      <div className='container-wrapper pb-16 pt-[8%]'>
        {/* Roadmap Header */}
        <div className='text-center mb-12'>
       
          <h2 className='text-2xl sm:text-4xl font-bold text-black mb-4 '>
            Our Journey to the Moon!
          </h2>
                      <p className='text-sm sm:text-lg text-black font-semibold max-w-2xl mx-auto'>
              From humble beginnings to Solana&apos;s #1 meme coin - here&apos;s our epic roadmap!
            </p>
        </div>

        {/* Timeline Container */}
        <div className='relative'>
          {/* Central Timeline Line - Hidden on mobile */}
          <div className=' absolute left-1/2 transform -translate-x-1/2 w-2 bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 h-full rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)]'></div>
          
          {/* Timeline Items */}
          <div className='space-y-8 md:space-y-16'>
            {/* Phase 1 */}
            <div className='relative flex flex-col md:flex-row md:items-center'>
              <div className='w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0'>
                <div className='bg-white rounded-2xl p-4 md:p-6 border-4 border-black box-s transform hover:scale-105 transition-transform duration-300 floating'>
                  <div className='flex items-center justify-center md:justify-end mb-3'>
                    <span className='bg-yellow-400 text-black font-bold px-3 md:px-4 py-2 rounded-full border-2 border-black text-xs md:text-sm'>
                      PHASE 1
                    </span>
                  </div>
                  <h3 className='text-lg md:text-xl font-bold text-black mb-3 text-center md:text-right'>Launch & Community Building</h3>
                  <ul className='text-xs md:text-sm text-gray-700 space-y-2'>
                    <li className='flex items-center justify-center md:justify-end'>
                      <span className='mr-2'>🚀</span>
                      Token Launch on Solana
                    </li>
                    <li className='flex items-center justify-center md:justify-end'>
                      <span className='mr-2'>👥</span>
                      Community Building
                    </li>
                    <li className='flex items-center justify-center md:justify-end'>
                      <span className='mr-2'>📱</span>
                      Social Media Presence
                    </li>
                    <li className='flex items-center justify-center md:justify-end'>
                      <span className='mr-2'>🎯</span>
                      Initial Marketing Campaign
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Timeline Node - Mobile: centered, Desktop: left-1/2 */}
              <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-yellow-400 border-4 border-black rounded-full shadow-[3px_3px_0px_rgba(0,0,0,1)] z-10'></div>
              <div className='md:hidden flex justify-center mb-4'>
                <div className='w-6 h-6 bg-yellow-400 border-4 border-black rounded-full shadow-[3px_3px_0px_rgba(0,0,0,1)]'></div>
              </div>
              
              <div className='w-full md:w-1/2 md:pl-8'></div>
            </div>

            {/* Phase 2 */}
            <div className='relative flex flex-col md:flex-row md:items-center'>
              <div className='w-full md:w-1/2 md:pr-8 hidden md:block'></div>
              
              {/* Timeline Node - Mobile: centered, Desktop: left-1/2 */}
              <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-orange-400 border-4 border-black rounded-full shadow-[3px_3px_0px_rgba(0,0,0,1)] z-10'></div>
              <div className='md:hidden flex justify-center mb-4'>
                <div className='w-6 h-6 bg-orange-400 border-4 border-black rounded-full shadow-[3px_3px_0px_rgba(0,0,0,1)]'></div>
              </div>
              
              <div className='w-full md:w-1/2 md:pl-8'>
                <div className='bg-white rounded-2xl p-4 md:p-6 border-4 border-black box-s transform hover:scale-105 transition-transform duration-300 floating' style={{animationDelay: '0.5s'}}>
                  <div className='flex items-center justify-center md:justify-start mb-3'>
                    <span className='bg-orange-400 text-black font-bold px-3 md:px-4 py-2 rounded-full border-2 border-black text-xs md:text-sm'>
                      PHASE 2
                    </span>
                  </div>
                  <h3 className='text-lg md:text-xl font-bold text-black mb-3 text-center md:text-left'>Expansion & Partnerships</h3>
                  <ul className='text-xs md:text-sm text-gray-700 space-y-2'>
                    <li className='flex items-center justify-center md:justify-start'>
                      <span className='mr-2'>🤝</span>
                      Strategic Partnerships
                    </li>
                    <li className='flex items-center justify-center md:justify-start'>
                      <span className='mr-2'>💎</span>
                      CEX Listings
                    </li>
                    <li className='flex items-center justify-center md:justify-start'>
                      <span className='mr-2'>🎮</span>
                      Gaming Integrations
                    </li>
                    <li className='flex items-center justify-center md:justify-start'>
                      <span className='mr-2'>🌐</span>
                      Cross-Chain Bridges
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className='relative flex flex-col md:flex-row md:items-center'>
              <div className='w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0'>
                <div className='bg-white rounded-2xl p-4 md:p-6 border-4 border-black box-s transform hover:scale-105 transition-transform duration-300 floating' style={{animationDelay: '1s'}}>
                  <div className='flex items-center justify-center md:justify-end mb-3'>
                    <span className='bg-red-400 text-black font-bold px-3 md:px-4 py-2 rounded-full border-2 border-black text-xs md:text-sm'>
                      PHASE 3
                    </span>
                  </div>
                  <h3 className='text-lg md:text-xl font-bold text-black mb-3 text-center md:text-right'>Ecosystem Development</h3>
                  <ul className='text-xs md:text-sm text-gray-700 space-y-2'>
                    <li className='flex items-center justify-center md:justify-end'>
                      <span className='mr-2'>🏗️</span>
                      DeFi Platform Launch
                    </li>
                    <li className='flex items-center justify-center md:justify-end'>
                      <span className='mr-2'>🎨</span>
                      NFT Marketplace
                    </li>
                    <li className='flex items-center justify-center md:justify-end'>
                      <span className='mr-2'>⚡</span>
                      Staking & Rewards
                    </li>
                    <li className='flex items-center justify-center md:justify-end'>
                      <span className='mr-2'>🔐</span>
                      DAO Governance
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Timeline Node - Mobile: centered, Desktop: left-1/2 */}
              <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-6 md:h-8 bg-red-400 border-4 border-black rounded-full shadow-[3px_3px_0px_rgba(0,0,0,1)] z-10'></div>
              <div className='md:hidden flex justify-center mb-4'>
                <div className='w-6 h-6 bg-red-400 border-4 border-black rounded-full shadow-[3px_3px_0px_rgba(0,0,0,1)]'></div>
              </div>
              
              <div className='w-full md:w-1/2 md:pl-8'></div>
            </div>

            {/* Phase 4 - Moon Landing */}
            <div className='relative flex flex-col md:flex-row md:items-center'>
              <div className='w-full md:w-1/2 md:pr-8 hidden md:block'></div>
              
              {/* Timeline Node - Mobile: centered, Desktop: left-1/2 */}
              <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 md:w-12 h-8 md:h-12 bg-gradient-to-r from-purple-400 to-pink-400 border-4 border-black rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] z-10 anime2'></div>
              <div className='md:hidden flex justify-center mb-4'>
                <div className='w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 border-4 border-black rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] anime2'></div>
              </div>
              
              <div className='w-full md:w-1/2 md:pl-8'>
                <div className='bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 md:p-6 border-4 border-black box-s transform hover:scale-105 transition-transform duration-300 floating' style={{animationDelay: '1.5s'}}>
                  <div className='flex items-center justify-center md:justify-start mb-3'>
                    <span className='bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold px-3 md:px-4 py-2 rounded-full border-2 border-black text-xs md:text-sm'>
                      🚀 MOON PHASE
                    </span>
                  </div>
                  <h3 className='text-lg md:text-xl font-bold text-black mb-3 text-center md:text-left'>Intergalactic Domination</h3>
                  <ul className='text-xs md:text-sm text-gray-700 space-y-2'>
                    <li className='flex items-center justify-center md:justify-start'>
                      <span className='mr-2'>🌙</span>
                      Moon Landing Achievement
                    </li>
                    <li className='flex items-center justify-center md:justify-start'>
                      <span className='mr-2'>⭐</span>
                      Top 10 Meme Coin
                    </li>
                    <li className='flex items-center justify-center md:justify-start'>
                      <span className='mr-2'>🌍</span>
                      Global Recognition
                    </li>
                    <li className='flex items-center justify-center md:justify-start'>
                      <span className='mr-2'>🎯</span>
                      Web3 Revolution Leader
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-8 md:mt-16'>
          <div className='bg-white rounded-2xl p-4 md:p-8 border-4 border-black box-s max-w-2xl mx-auto'>
            <h3 className='text-lg md:text-2xl font-bold text-black mb-3 md:mb-4'>Ready to Join the Bonk Revolution? 🐕</h3>
            <p className='text-sm md:text-base text-gray-700 mb-4 md:mb-6'>
              Don&apos;t miss out on the most bonked journey in crypto history!
            </p>
            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 justify-center'>
              <a href="https://www.dextools.io/app/en/solana/pair-explorer/3m7oTxgZnsKMQrYQwgEEf1detZk6gcEthJKrqtYf6wxu?t=1711451211650" 
                 className='bg-yellow-400 hover:bg-orange-400 text-black font-bold py-2 md:py-3 px-4 md:px-6 rounded-full border-2 border-black transition-colors duration-300 transform hover:scale-105 text-sm md:text-base'>
                🚀 Buy Now
              </a>
              <a href="#about" 
                 className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-full border-2 border-black transition-colors duration-300 transform hover:scale-105 text-sm md:text-base'>
                📖 Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap