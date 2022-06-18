import React from "react";

const Hero = ({ heroTitle, heroImg }) => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt={heroTitle}
        className="w-full h-screen object-cover object-right "
      />
      <div className="absolute left-0 top-0 w-full h-full">
        <div className="flex justify-center pt-40">
          <h1 className=" font-kalam font-bold text-7xl text-shadow">
            {heroTitle}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
