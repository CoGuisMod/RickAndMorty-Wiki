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
  const [charStatus, setCharStatus] = useState("");
  const [charGender, setCharGender] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCharacters(charName, charStatus, charGender, page).then(
      (data) => (setCharacters(data.results), setPageCount(data.info.pages))
    );
  }, []);

  useEffect(() => {
    getCharacters(charName, charStatus, charGender, page).then(
      (data) => (setCharacters(data.results), setPageCount(data.info.pages))
    );
  }, [charName, charStatus, charGender, page]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <Hero heroTitle="Rick and Morty Characters" heroImg={charHero} />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-black mb-8 px-4 pt-4">
        <aside className="border rounded-lg p-2 md:p-4 w-full md:max-w-xs">
          <div className="relative flex items-center">
            <input
              onChange={(e) => {
                setCharName(e.target.value);
                setPageCount(1);
              }}
              type="text"
              className="border rounded-xl w-full pl-2 pr-8 py-1"
            />
            <FaSearch className="absolute right-2" />
          </div>
          <form className="flex justify-between items-center mt-2">
            <div>
              <label>Status:</label>
              <select
                onChange={(e) => {
                  setCharStatus(e.target.value);
                }}
                className="cursor-pointer p-1"
              >
                <option value="">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
            <div>
              <label>Gender:</label>
              <select
                onChange={(e) => {
                  setCharGender(e.target.value);
                }}
                className="cursor-pointer p-1"
              >
                <option value="">All</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="genderless">Genderless</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
          </form>
        </aside>
        <section className="w-full max-w-7xl">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4">
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
