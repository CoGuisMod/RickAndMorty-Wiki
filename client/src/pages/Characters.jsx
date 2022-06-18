import React, { useEffect, useState } from "react";
import { getCharacters } from "../api/RickAndMortyAPI";
import ReactPaginate from "react-paginate";
import Hero from "../components/Hero";
import charHero from "../assets/characters-hero.jpg";
import { FaSearch } from "react-icons/fa";
import Card from "../components/Card";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [charName, setCharName] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(charName, page).then(
      (data) => (setCharacters(data.results), setPageCount(data.info.pages))
    );
  }, []);

  useEffect(() => {
    getCharacters(charName, page).then(
      (data) => (setCharacters(data.results), setPageCount(data.info.pages))
    );
  }, [charName, page]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <Hero heroTitle="Rick and Morty Characters" heroImg={charHero} />
      <div className="flex flex-col md:flex-row items-center md:items-start text-black px-4 pt-4">
        <aside className="border rounded-lg p-2 w-full md:w-1/5 mb-4">
          <div className="relative flex items-center ">
            <input
              onChange={(e) => {
                setCharName(e.target.value);
              }}
              type="text"
              className="border rounded-xl w-full pl-2 pr-8 py-1"
            />
            <FaSearch className="absolute right-2" />
          </div>
        </aside>
        <section className="max-w-7xl ml-4">
          <ReactPaginate
            breakLabel="..."
            previousLabel={<FaAngleLeft />}
            previousLinkClassName={"controlButton"}
            nextLabel={<FaAngleRight />}
            nextLinkClassName={"controlButton"}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            containerClassName={"navigationButtons"}
            activeClassName={"navigationActive"}
            disabledClassName={"navigationDisabled"}
            className="flex justify-center items-center gap-2 border rounded mb-4 p-2"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-4">
            {characters.map((character) => (
              <Card character={character} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Characters;
