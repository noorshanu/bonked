import React from "react";

function Hero() {
  return (
    <section className="hero-main relative">
      <div className=" container-wrapper pt-[25%] sm:pt-[10%]">
        <div>
          <img src="images/hero-txt.png" alt="" className=" mx-auto h-auto sm:h-[200px] w-auto my-[1.5%]" />

         
        </div>
      </div>
      <img src="images/hero.png" alt="" className=" mx-auto h-auto sm:h-[350px]" />
      <img src="images/hero-btn.png" alt="" className=" mx-auto absolute left-0 right-0 top-[80%] sm:top-[70%] h-[30px] sm:h-[80px] " />
    </section>
  );
}

export default Hero;
