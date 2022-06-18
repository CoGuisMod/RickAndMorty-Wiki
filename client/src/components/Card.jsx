import React from "react";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
  console.log(character);
  return (
    <div className="border rounded-xl">
      <div className="relative">
        <img
          src={character.image}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <span
          className={`absolute right-2 top-2 ${
            character.status === "Alive"
              ? "bg-green-500"
              : character.status === "Dead"
              ? "bg-red-500"
              : "bg-gray-500"
          } text-white px-2 py-1 rounded-lg`}
        >
          {character.status}
        </span>
      </div>
      <div className="flex justify-between items-baseline p-4">
        <Link
          to={`/characters/${character.id}`}
          className="font-bold text-xl hover:text-cyan-600"
        >
          {character.name}
        </Link>
        <span>{character.species}</span>
      </div>
    </div>
  );
};

export default Card;
