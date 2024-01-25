import React from "react";

function AboutUs() {
  return (
    <section className="bg-[#0243b9] -mt-0 sm:-mt-2">
      <div className=" container-wrapper">
        <div className="relative">
          <img src="images/about-bg.png" alt="" className=" pt-[5%]" />

          <div className=" absolute left-0 right-0 top-[18%]">
            <img
              src="images/about.png"
              alt=""
              className="mx-auto text-center h-[60px]"
            />
            <p className=" max-w-4xl mx-auto text-center mt-[2%] mb-[3%] text-xl font-bold">
              Bonked is a limited edition series of [number] NFTs, each one
              meticulously designed to capture the essence of [theme/concept].
              Whether you're a seasoned NFT enthu- siast or a newcomer to the
              world of digital art, this collection offers a captivating
            </p>

            <div className=" flex flex-col sm:flex-row items-center justify-between gap-4 px-12">
              <div>
                <img src="images/cardbg.png" alt="" />
              </div>
              <div>
                <img src="images/cardbg.png" alt="" />
              </div>
              <div>
                <img src="images/cardbg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
