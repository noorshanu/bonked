import React from "react";

function Hero() {
  return (
    <section className="hero-main relative">
      <div className=" container-wrapper pt-[10%]">
        <div>
          <img src="images/hero-txt.png" alt="" className=" mx-auto h-[200px] w-auto my-[1.5%]" />

         
        </div>
      </div>
      <img src="images/hero.png" alt="" className=" mx-auto h-[350px]" />
      <img src="images/hero-btn.png" alt="" className=" mx-auto absolute left-0 right-0 top-[70%] h-[80px] " />
    </section>
  );
}

export default Hero;
