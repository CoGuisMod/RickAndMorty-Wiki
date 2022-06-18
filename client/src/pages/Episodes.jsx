import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import episodesHero from "../assets/episodes-hero.jpg";
import { getEpisodes } from "../api/RickAndMortyAPI";
import { FaSearch } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [epiName, setEpiName] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getEpisodes(epiName, page).then(
      (data) => (setEpisodes(data.results), setPageCount(data.info.pages))
    );
  }, []);

  useEffect(() => {
    getEpisodes(epiName, page).then(
      (data) => (setEpisodes(data.results), setPageCount(data.info.pages))
    );
  }, [epiName, page]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <Hero heroTitle="Rick and Morty Episodes" heroImg={episodesHero} />
      <div className="flex flex-col md:flex-row items-center md:items-start text-black px-4 pt-4">
        <aside className="border rounded-lg p-2 w-full md:w-1/5 mb-4">
          <div className="relative flex items-center ">
            <input
              onChange={(e) => {
                setEpiName(e.target.value);
              }}
              type="text"
              className="border rounded-xl w-full pl-2 pr-8 py-1"
            />
            <FaSearch className="absolute right-2" />
          </div>
        </aside>
        <section className="w-full max-w-7xl ml-4">
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
          <div className="grid md:grid-cols-2 gap-x-3 gap-y-4">
            {episodes.map((episode) => (
              <div className="border rounded-xl w-full p-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-bold text-2xl">#{episode.id}</span>
                  <h3 className="font-medium text-2xl">{episode.name}</h3>
                  <span className="text-black/75">{episode.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Episodes;
