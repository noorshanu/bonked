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
            <p className=" max-w-4xl mx-auto text-center mt-[2%] mb-[3%] text-xs sm:text-xl font-bold">
              Bonked is a limited edition series of [number] NFTs, each one
              meticulously designed to capture the essence of [theme/concept].
              Whether you're a seasoned NFT enthu- siast or a newcomer to the
              world of digital art, this collection offers a captivating
            </p>

            <div className=" flex flex-col sm:flex-row items-center justify-between gap-4 px-12">
              <div>
                <img src="images/cardbg.png" alt="" className=" sm:h-auto h-[170px]" />
              </div>
              <div>
                <img src="images/cardbg.png" alt="" className=" sm:h-auto h-[170px]" />
              </div>
              <div>
                <img src="images/cardbg.png" alt=""  className=" sm:h-auto h-[170px]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
