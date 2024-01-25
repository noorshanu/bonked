import React from 'react'
import Marquee from "react-fast-marquee";

function BorderSec() {
  return (
    <section className=' overflow-x-hidden'>
        <div className=' relative'>
<img src="images/border.png" alt=""  className=' w-full h-[60px] sm:h-auto '/>
<div className=' absolute top-[35%]'>
<Marquee  className=' '>
    <img src="images/news.png" alt="" className='mx-12 h-[25px] sm:h-auto' />
    <img src="images/ext.png" alt=""  className=' mx-12 h-[25px] sm:h-auto'/>
    <img src="images/warn.png" alt="" className=' mx-12 h-[25px] sm:h-auto' />

    <img src="images/news.png" alt="" className='mx-12 h-[25px] sm:h-auto' />
    <img src="images/ext.png" alt=""  className=' mx-12 h-[25px] sm:h-auto'/>
    <img src="images/warn.png" alt="" className=' mx-12 h-[25px] sm:h-auto' />

    <img src="images/news.png" alt="" className='mx-12 h-[25px] sm:h-auto' />
    <img src="images/ext.png" alt=""  className=' mx-12 h-[25px] sm:h-auto'/>
    <img src="images/warn.png" alt="" className=' mx-12 h-[25px] sm:h-auto' />


    </Marquee>
</div>
        </div>
    </section>
  )
}

export default BorderSec