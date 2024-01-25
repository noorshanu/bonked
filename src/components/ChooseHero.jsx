import React from 'react'

function ChooseHero() {
  return (
    <section className='bg-[#0243b9] pt-[5%] pb-[8%]'>
        <div className=' container-wrapper'>

            <div className=' relative flex justify-evenly items-center gap-8 py-[6%]'>
                <img src="images/line1.png" alt="" />

                <img src="images/choos.png" alt="" />

                <img src="images/line1.png" alt="" />

            </div>



            <div className=' flex justify-evenly gap-4'>
                <img src="images/eth.png" alt="" className=' h-[370px]' />
                <img src="images/eth.png" alt="" className=' h-[370px]'  />
                <img src="images/eth.png" alt=""  className=' h-[370px]' />

            </div>

        </div>
       
    </section>
  )
}

export default ChooseHero