import React from "react";

const Hero = ({ heroTitle, heroImg }) => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt={heroTitle}
        className="w-full h-screen object-cover object-right "
      />
      <div className="absolute left-0 top-0 w-full h-full bg-black/25 px-4 pt-32 md:pt-40">
        <div className="flex justify-center">
          <h1 className=" font-kalam font-bold text-6xl md:text-7xl text-shadow">
            {heroTitle}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
