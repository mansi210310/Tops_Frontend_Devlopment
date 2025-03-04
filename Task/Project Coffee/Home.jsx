import React from "react";
import "./Home.css";
import rect from "./Image/Rectangle 14.svg"
import rect1 from "./Image/Rectangle 16.svg"
import cup from "./Image/cup.svg"
import cbean from "./Image/coffee_bean.svg"
import back from "./Image/backgroundsub.svg"
import backsub from "./Image/backsub.svg"
import bean from "./Image/Bean Scene.svg";
import facebook from "./Image/facebook coffee.svg";
import insta from "./Image/instagram coffee.svg";
import youtube from "./Image/youtube coffee.svg";
import twitter from "./Image/tiwter coffee.svg";
import plet from './Image/pngwing 1.svg'
import png from './Image/pngwing 2.svg'

const Home = () => {
  return (
    <div className="main">
      <div className="contanier">
        <div className="p-11">
          <h1 className="text-white text-[18px] my-8 tracking-wide">We've got your morning converd with</h1>
          {/* <img src={coffee} alt="" /> */}
          <h1 className="text-white text-9xl font-serif italic my-7">
            Coffee
          </h1>
          <p className="text-white tracking-widest text-[14px]">It is best to start your day with a cup of coffee. Discover <br /> the best flavours coffee you will ever have. We Provide <br /> the best for our customers.</p>
          <button className="text-black bg-amber-500 py-2.5  px-4 rounded-full my-9 font-bold">
            Order Now
          </button>
        </div>

        <div className="relative w-full h-[550px]  flex items-center px-10">
            {/* Background image */}
            <img src={rect} alt="Background" className="absolute inset-0 w-full h-full object-cover " />

            {/* Overlay image (rect1) */}
            <img
              src={rect1}
              alt="Overlay"
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
            />

            {/* Overlay image (coffee beans) */}
            <img
              src={cbean}
              alt="Coffee Beans"
              className="absolute bottom-0 right-0 w-[40%] h-auto"
            />

            {/* Left Side - Text Content */}
            <div className="relative w-1/2 text-white mt-18">
              <h1 className="text-white text-5xl font-bold leading-tight">
                Get a chance to have an <br /> Amazing morning
              </h1>
              <p className="text-2xl text-gray-300 mt-3">
                We are giving you a one-time opportunity to <br />
                experience a better life with coffee.
              </p>
              <button className="mt-4 px-6 py-2 bg-amber-500 text-black rounded-full font-bold">
                Order Now
              </button>
            </div>

            {/* Right Side - Coffee Cup Image */}
            <img
              src={cup}
              alt="Coffee Cup"
              className="absolute bottom-12 right-1/7 w-[250px] h-auto"
            />
        </div>

        <div className="relative w-full h-[400px] flex items-center justify-center">
          {/* Background Image */}
          <img src={back} alt="Background" className="w-full h-full object-cover" />

          {/* Overlay Image */}
          <img 
            src={backsub} 
            alt="Overlay" 
            className="absolute inset-0 w-full h-full opacity-90 object-cover" 
          />

          {/* Text Content */}
          <div className="absolute text-center text-white flex flex-col items-center">
            <h1 className="text-5xl font-bold">Subscribe to get the Latest News</h1>
            <p className="text-2xl mt-4">
              Don't miss out on our latest news, updates, tips, and special offers
            </p>

            {/* Input Box */}
            <div className="flex items-center bg-white rounded-lg overflow-hidden w-140 mt-4">
              <input 
                type="email" 
                placeholder="Enter your mail" 
                className="p-4 flex-1 text-gray-700 outline-none"
              />
              <button className="bg-yellow-500 text-black px-5 py-4 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div>
          <img src={plet} alt="" className="absolute top-[220vh]" />
          <img src={png} alt="" className="absolute right-0  top-[220vh]" />
        </div>
        
        <div className="bg-yellow-900 footer-bg-image flex justify-around py-[200px]">
          {/* <img src={fotter} alt="" /> */}
          <div className="html">
            <img src={bean} alt="" className="h-13" />
            <p className="py-6 text-white">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry.Lorem Ipsum has been the industry's <br />{" "}
              standard dummy text ever since the 1500s, when an <br /> unknown
              printer took a galley of type and scrambled it to <br /> make a
              type specimen book.
            </p>
            <div className="flex gap-5">
              <button className="cursor-pointer">
                <img src={facebook} alt="" className="h-[50px]" />
              </button>
              <button className="cursor-pointer">
                <img src={insta} alt="" className="h-[50px]" />
              </button>
              <button className="cursor-pointer">
                <img src={youtube} alt="" className="h-[50px]" />
              </button>
              <button className="cursor-pointer">
                <img src={twitter} alt="" className="h-[50px]" />
              </button>
            </div>
          </div>
          <div className="flex gap-14 ">
            <div className="flex flex-col gap-10">
              <h1 className="text-white font-bold text-3xl">About</h1>
              <div className="flex flex-col gap-3 text-white">
                <p>Menu</p>
                <p>Features</p>
                <p>News & Blogs</p>
                <p>Help & Supports</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-white font-bold text-3xl">Company</h1>
              <div className="flex flex-col gap-3 text-white">
                <p>How we work</p>
                <p>Terms of service</p>
                <p>Pricing</p>
                <p>FAQ</p>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-white font-bold text-3xl">Contact Us</h1>
              <div className="flex flex-col gap-3 text-white">
                <p>
                  Akshya Nagar 1st Block 1st Cross, <br />
                  Rammurthy nagar, Bangalore-560016
                </p>
                <p>+1 202-918-2132</p>
                <p>beanscene@gamil.com</p>
                <p>www.beanscene.com</p>
              </div>
            </div>
          </div>
          {/* <img src={group} alt="" />  */}
        </div>
      </div>
    </div>
  );
};

export default Home;
