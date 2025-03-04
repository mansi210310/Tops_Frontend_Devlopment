import React from "react";
import { useNavigate } from "react-router-dom";
import back from './Image/BackGroundimage.svg';
import cupfirst from './Image/cupfirst.svg';
import cuptwo from './Image/cuptwo.svg';
import cupthree from './Image/cupthree.svg';
import cupfour from './Image/cupfour.svg';
import bean from './Image/Bean Scene.svg'
import facebook from "./Image/facebook coffee.svg";
import insta from "./Image/instagram coffee.svg";
import youtube from "./Image/youtube coffee.svg";
import twitter from "./Image/tiwter coffee.svg";

const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { id: "cappuccino", name: "Cappuccino", image: cupfirst, price: 8.50 },
    { id: "chai", name: "Chai Latte", image: cuptwo, price: 7.00 },
    { id: "macchiato", name: "Macchiato", image: cupthree, price: 9.00 },
    { id: "espresso", name: "Espresso", image: cupfour, price: 5.50 },
  ];

  return (
    <div className="text-center mt-10">
      <h1 className="text-6xl font-bold text-amber-950">Enjoy a new blend of coffee style</h1>
      <p className="text-gray-500 text-2xl mt-4">
        Explore all flavours of coffee with us. There is always a new cup worth experiencing
      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {
          menuItems.map((item) => (
            <div key={item.id} className="relative text-center">
              <img src={back} alt="Background" />
              <img src={item.image} alt={item.name} className="absolute top-0 left-1/2 transform -translate-x-1/2" />
              <div className="absolute top-62 w-full">
                <p className="text-2xl font-bold text-amber-900">{item.name}</p>
                <p className="font-extrabold text-gray-500">Coffee 50% | Milk 50%</p>
                <p className="font-extrabold text-gray-500">${item.price.toFixed(2)}</p>
                <button
                  onClick={() => navigate(`/order/${item.id}`, { state: item })}
                  className="mt-3 bg-amber-400 px-7 py-3 font-bold rounded-full hover:bg-amber-600"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))
        }
      </div>

      {/* Full-Width Footer Section */}
      <div className="w-full bg-yellow-900 footer-bg-image flex justify-around py-[200px] px-10 mt-18">
        <div className="html">
          <img src={bean} alt="" className="h-13" />
          <p className="py-6 text-white">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's <br />
              standard dummy text ever since the 1500s, when an <br />
              unknown printer took a galley of type and scrambled it to <br />
              make a type specimen book.
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
        <div className="flex gap-14">
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
              <p>beanscene@gmail.com</p>
              <p>www.beanscene.com</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;