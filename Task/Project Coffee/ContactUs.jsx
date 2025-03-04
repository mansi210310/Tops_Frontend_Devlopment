import { useState } from "react";
import './ContactUs.css'
import bean from './Image/Bean Scene.svg'
import facebook from "./Image/facebook coffee.svg";
import insta from "./Image/instagram coffee.svg";
import youtube from "./Image/youtube coffee.svg";
import twitter from "./Image/tiwter coffee.svg";
import back from "./Image/BackHome.svg.jpg"

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};

        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        else if (!formData.email.endsWith("@gmail.com"))
        tempErrors.email = "Invalid email, use @gmail.com";

        if (!formData.message) tempErrors.message = "Message is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
        console.log("Form Submitted:", formData);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="pt-1 ">
            {/* Form Section */}
            <div className="back">
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
                    <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-medium">Name:</label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <p className="text-red-500">{errors.name}</p>}
                </div>
                <div>
                    <label className="block font-medium">Email:</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div>
                    <label className="block font-medium">Message:</label>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    {errors.message && <p className="text-red-500">{errors.message}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-amber-500 text-black font-bold py-2 rounded-lg hover:bg-amber-500"
                >
                    Send Message
                </button>
                </form>
            </div>
            </div>
            

            {/* Full-Width Footer Section */}
            <div className="w-full bg-yellow-900 footer-bg-image flex justify-around py-[200px] px-10 mt-10">
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

export default ContactUs;
