import React from "react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
function Footer() {
  return (
    <section className=" mt-[-2%] overflow-hidden" id="contact">
      <div className=" container-wrapper relative">
        <img src="images/foot-img.png" alt="" className=" h-full" />

        <div className=" absolute top-32  px-[8%] mx-auto left-0 right-0">
          <div className=" flex justify-between items-center">
            <div>
              <img src="images/foot.png" alt="" className=" h-[110px] my-8" />

              <div className=" flex items-center gap-4 text-white mb-6 ml-5">
                <a href="/" className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]">
                  <BsTwitterX />
                </a>
                <a href="/" className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]">
                  <BsInstagram />
                </a>

                <a href="/" className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]">
                  <BsFacebook />
                </a>

              
                <a href="/" className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]">
                  <FaTelegram />
                </a>
              </div>

              <img src="images/bon.png" alt="" className=" ml-2 my-4" />
            </div>
               
            <div className=" mt-[5%]">
            <h1 className=" text-3xl font-bold mb-4">Don't miss our updates!</h1>
              <div className="flex items-center justify-between gap-8 bg-white border-[#000] border-2 rounded-lg px-2 py-2 ">
                <input type="text" />
                <button className=" text-xl bg-black text-white p-2 rounded-md"><IoSend /></button>
              </div>

              <div className=" pt-[15%] flex items-center gap-6 ">
                <a href="/" className=" font-mono font-bold text-black text-xl">About </a>
                <a href="/">home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
