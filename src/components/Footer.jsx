import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section className=" block sm:hidden  bg-[#ffad2d] pb-10 sm:mb-0 sm:bg-transparent " id="contact">
      <div className=" container-wrapper relative sm:bg-transparent ">
        <img src="images/foot-img.png" alt="" className=" h-full hidden sm:block" />

        <div className=" relative sm:absolute top-10 sm:top-32  px-[8%] mx-auto left-0 right-0 ">
          <div className=" flex justify-between items-center flex-col sm:flex-row">
            <div>
            

            <p className="text-center text-black">Copyright 2025 Bonked. All Rights Reserved.</p>
            </div>

 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
