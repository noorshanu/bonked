import React from 'react'

function ChooseHero() {
  return (
    <section className='bg-[#0243b9] pt-[5%] pb-[8%] overflow-x-hidden ' id='col'>
        <div className=' container-wrapper'>

            <div className=' relative flex flex-col sm:flex-row justify-evenly items-center gap-8 py-[6%]'>
                <img src="images/line2.png" alt="" className=' h-auto sm:h-[10px]' />

                <img src="images/choos.png" alt="" />

                <img src="images/line1.png" alt="" className='h-auto sm:h-[10px]' />

            </div>



            <div className=' flex flex-col sm:flex-row justify-evenly gap-4'>
                <img src="images/eth.png" alt="" className=' sm:w-auto w-[200px] h-[200px] sm:h-[370px] mx-auto ' />
                <img src="images/eth.png" alt="" className=' sm:w-auto w-[200px] h-[200px] sm:h-[370px] mx-auto '  />
                <img src="images/eth.png" alt=""  className=' sm:w-auto w-[200px] h-[200px] sm:h-[370px] mx-auto ]' />

            </div>

        </div>
       
    </section>
  )
}

export default ChooseHero