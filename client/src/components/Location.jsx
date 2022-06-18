import React, { useEffect, useState } from "react";
import { getLocation } from "../api/RickAndMortyAPI";

const Location = () => {
  const locId = window.location.pathname.split("/")[2];
  const [location, setLocation] = useState([]);

  useEffect(() => {
    getLocation(locId).then((data) => setLocation(data));
  }, []);

  return (
    <section className="text-black h-screen px-4">
      <div className="max-w-7xl h-full mx-auto pt-20">
        <div className="flex justify-between items-baseline w-full">
          <h1 className="flex justify-start items-baseline gap-4 text-5xl">
            {location.name}{" "}
            <span className="text-black/75 text-xl">{location.type}</span>
          </h1>
          <h2 className="font-bold text-2xl">{location.dimension}</h2>
        </div>
        <div className="mt-4">
          <p className="text-black/75 text-xl">
            {location.residents?.length} residents
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
