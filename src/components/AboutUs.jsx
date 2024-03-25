import React from "react";

function AboutUs() {
  return (
    <section className="bg-[#0243b9] -mt-0 sm:pt-0 pt-3 sm:-mt-2" id="about">
      <div className=" container-wrapper">
        <div className="relative">
          <img src="images/about-bg.png" alt="" className=" pt-[5%] hidden sm:block" />
 
          <img src="images/mob.png" alt="" className=" block sm:hidden h-[750px]" />

          <div className=" absolute left-0 right-0 top-8 sm:top-[18%]">
            <img
              src="images/about.png"
              alt=""
              className="mx-auto text-center h-[30px] sm:h-[60px]"
            />
            <h1 className="text-lg sm:text-2xl font-bold text-center my-4">
            Bonked: The Heartbeat of Solana's Meme Community
            </h1>
            <p className=" max-w-4xl mx-auto text-center mt-[2%] mb-[3%] text-xs sm:text-xl font-bold">
            Bonked is more than just a digital currency; it's a revolution in the Solana ecosystem. Aimed at becoming the premier community coin of Web3, Bonked is setting new standards for integration and utility across 
            </p>

            <div className=" flex flex-col sm:flex-row items-center justify-center gap-4 px-12">
              <div>
                <img src="images/img2.jpeg" alt="" className=" h-auto sm:h-[250px] box-s rounded-3xl border-4 border-black" />
              </div>
              <div>
                <img src="images/img3.jpeg" alt="" className="  h-auto sm:h-[250px] box-s rounded-3xl border-4 border-black" />
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
