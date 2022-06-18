import React from "react";
import Hero from "../components/Hero";
import homeHero from "../assets/home-hero.jpg";

const Home = () => {
  return (
    <>
      <Hero heroTitle="Rick and Morty Wiki" heroImg={homeHero} />
    </>
  );
};

export default Home;
