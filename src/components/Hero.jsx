import React from "react";

function Hero() {
  return (
    <section className="hero-main relative overflow-x-hidden bg-[#ffbe2d] ">
  
      <div className=" container-wrapper pt-[25%] sm:pt-[10%] ">
        <div>
          <img src="images/hero-txt.png" alt="" className=" mx-auto h-auto sm:h-[200px] w-auto my-[1.5%]" />

         
        </div>
      </div>
      <img src="images/hero.png" alt="" className=" mx-auto h-auto sm:h-[350px]" />
     <a href="/">DexTools</a>
    </section>
  );
}

export default Hero;
