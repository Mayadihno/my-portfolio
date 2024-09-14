import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Portfolio from "../Porfolio/Portfolio";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Resume />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
