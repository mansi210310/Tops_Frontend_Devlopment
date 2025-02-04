import React from "react";
import "./About.css";

const About = () => {
return (
    <div className="about-container">
        <div className="about-box">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
            Welcome to our company! We are dedicated to delivering high-quality
            products and services to our customers.
        </p>
        <div className="about-section">
            <h2 className="about-subtitle">Our Mission</h2>
            <p className="about-text">
            To provide innovative solutions that improve the lives of our users.
            </p>
        </div>
        <div className="about-section">
            <h2 className="about-subtitle">Our Team</h2>
            <p className="about-text">
                We are a passionate team of developers, designers, and strategists.
            </p>
        </div>
        </div>
    </div>
);
};

export default About;
