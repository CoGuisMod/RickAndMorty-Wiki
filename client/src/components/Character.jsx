import React, { useEffect, useState } from "react";
import { getCharacter } from "../api/RickAndMortyAPI";

const Character = () => {
  const charId = window.location.pathname.split("/")[2];
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharacter(charId).then((data) => setCharacter(data));
  }, []);

  console.log(character);
  return (
    <section className="text-black h-screen px-4">
      <div className="max-w-7xl h-full pt-20">
        <div className="flex gap-4">
          <img src={character.image} alt={character.name} />
          <div className="flex justify-start items-start">
            <h1 className="flex justify-start items-baseline gap-4 text-5xl">
              {character.name}{" "}
              <span
                className={`${
                  character.status === "Alive"
                    ? "bg-green-500"
                    : character.status === "Dead"
                    ? "bg-red-500"
                    : "bg-gray-500"
                } text-white text-xl px-2 py-1 rounded-lg`}
              >
                {character.status}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Character;
