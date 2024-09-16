"use client";
import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Porfolio/Portfolio";
import Contact from "../Contact/Contact";
import { Element } from "react-scroll";
import Footer from "../Footer/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Element name="home">
        <Banner />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="work">
        <Resume />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
