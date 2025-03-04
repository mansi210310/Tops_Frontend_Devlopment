import React from "react";
import mask from "./Image/Mask group.svg";
import backin1 from "./Image/backin1.svg";
import backin2 from "./Image/backin2.svg";
import backin3 from "./Image/backin3.svg";
import backin4 from "./Image/backin4.svg";
import beans from "./Image/coffee-beans 1.svg";
import badge from "./Image/badge 1.svg";
import cup3 from "./Image/coffee-cup 1.svg";
import best from "./Image/best-price 1.svg";
import blast1 from "./Image/coffee_blast (1).svg"
import blast2 from "./Image/coffee_blast (2).svg"
import back from "./Image/backimage.svg"
import Colum from "./Image/Colum.svg"
import photo from "./Image/Photo.svg"
import bean from './Image/Bean Scene.svg'
import facebook from "./Image/facebook coffee.svg";
import insta from "./Image/instagram coffee.svg";
import youtube from "./Image/youtube coffee.svg";
import twitter from "./Image/tiwter coffee.svg";

const AboutUs = () => {
    const features = [
    { bg: backin1, icon: beans, title: "Supreme Beans", desc: "Beans that provide great taste" },
    { bg: backin2, icon: badge, title: "High Quality", desc: "We provide the highest quality" },
    { bg: backin3, icon: cup3, title: "Extraordinary", desc: "Coffee like you have never tasted" },
    { bg: backin4, icon: best, title: "Affordable Price", desc: "Our coffee prices are easy to afford" },
    ];

    return (
        <div className="">
            {/* Intro Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center m-10 p-2">
                <div className="lg:w-1/2 space-y-6">
                    <h1 className="text-amber-950 font-extrabold text-5xl">Discover the Best Coffee</h1>
                    <p className="text-gray-700 text-lg">
                        Bean Scence is a coffee shop that provides you with quality coffee that helps boost your productivity 
                        and builds your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. 
                        There is no doubt that you will enjoy this coffee more than any other you have ever tasted.
                    </p>
                    <button className="text-black bg-amber-500 py-3 px-6 rounded-full font-bold hover:bg-amber-600 transition">
                        Learn More
                    </button>
                </div>
                <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-10">
                    <img src={mask} alt="Coffee" className="w-96" />
                </div>
            </div>

            <div className="">
                <img src={blast2} alt="" className="absolute left-0 top-[400px]" />
            </div>
            {/* Why We Are Different Section */}
            <div className="mt-27 text-center">
                <h1 className="text-6xl font-bold text-amber-950">Why Are We Different?</h1>
                <p className="text-gray-500 text-2xl mt-4">We don't just make your coffee, we make your day!</p>

                {/* Features Section */}
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                {features.map((feature, index) => (
                    <div key={index} className="relative text-center p-6 bg-amber-50 rounded-lg shadow-md w-64">
                            {/* Background Image */}
                            <img src={feature.bg} alt="Background" className="w-full h-40 object-cover rounded-lg" />
                            {/* Overlay Icon */}
                            <img src={feature.icon} alt="Icon" className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-14 h-14" />
                            {/* Text Content */}
                            <h3 className="mt-7 text-lg font-semibold text-amber-900">{feature.title}</h3>
                            <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
                <p className="text-gray-500 text-3xl">Great ideas start with great coffee. Let’s help you achieve that.</p>
                <h2 className="text-4xl font-bold text-amber-950 mt-2">Get Started Today.</h2>
                <button className="text-black bg-amber-500 mt-4 px-7 py-3 font-bold rounded-full hover:bg-amber-600 transition">
                Join Us
                </button>
            </div>
            <div className="">
                <img src={blast1} alt="Coffee Splash" className="absolute right-0 top-[1110px]" />
            </div>

            <div className="mt-25 text-center relative">
                <h1 className="text-5xl font-bold text-amber-950">
                    Our coffee perfection feedback
                </h1>
                <p className="text-gray-500 text-2xl mt-4">
                    Our customers have amazing things to say about us
                </p>

                <div className="mt-12 flex justify-center relative">
                    {/* Colum */}
                    <img src={Colum} alt="" className="absolute top-[50px] left-1/7" />

                    {/* Words */}
                    <p className="absolute text-2xl top-1/4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 15oos. <br /> when an unknown printer took a galley of type and scrabled it to make a type <br /> speeimen book. It has survived not only five eenturies, but also the leap <br /> into electronic typesetting, remaining essentially unchanged. It was popularised in <br /> the 196os with the release of Letraset.....</p>
                    <h1 className="absolute text-4xl text-amber-950 font-bold top-[350px]">Jonny Thomas</h1>
                    <p className="absolute text-2xl text-gray-500 top-[400px]">Project Manager</p>
                    <img src={photo} alt="" className="absolute top-[460px]" />

                    {/* Left Button */}
                    <button className="absolute left-1/11 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-5 rounded-lg shadow-lg">
                        ←
                    </button>

                    {/* Images */}
                    <div className="flex space-x-4">
                        <img src={back} alt="Feedback 1" />
                        {/* <img src={backy} alt="Feedback 2" /> */}
                    </div>

                    {/* Right Button */}
                    <button className="absolute right-1/11 top-1/2 transform -translate-y-1/2 bg-yellow-400 p-5 rounded-lg shadow-lg">
                        →
                    </button>
                </div>
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

export default AboutUs;
