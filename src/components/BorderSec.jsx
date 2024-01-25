import React from 'react'
import Marquee from "react-fast-marquee";

function BorderSec() {
  return (
    <section>
        <div className=' relative'>
<img src="images/border.png" alt=""  className=' w-full '/>
<div className=' absolute top-[35%]'>
<Marquee >
    <img src="images/news.png" alt="" className='mx-12' />
    <img src="images/ext.png" alt=""  className=' mx-12'/>
    <img src="images/warn.png" alt="" className=' mx-12' />

    <img src="images/news.png" alt="" className='mx-12' />
    <img src="images/ext.png" alt=""  className=' mx-12'/>
    <img src="images/warn.png" alt="" className=' mx-12' />

    <img src="images/news.png" alt="" className='mx-12' />
    <img src="images/ext.png" alt=""  className=' mx-12'/>
    <img src="images/warn.png" alt="" className=' mx-12' />


    </Marquee>
</div>
        </div>
    </section>
  )
}

export default BorderSec