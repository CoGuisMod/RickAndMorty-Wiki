import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import locationsHero from "../assets/locations-hero.jpg";
import { getLocations } from "../api/RickAndMortyAPI";
import { FaSearch } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [locName, setLocName] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getLocations(locName, page).then(
      (data) => (setLocations(data.results), setPageCount(data.info.pages))
    );
  }, []);

  useEffect(() => {
    getLocations(locName, page).then(
      (data) => (setLocations(data.results), setPageCount(data.info.pages))
    );
  }, [locName, page]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <Hero heroTitle="Rick and Morty Locations" heroImg={locationsHero} />
      <div className="flex flex-col md:flex-row items-center md:items-start text-black px-4 pt-4">
        <aside className="border rounded-lg p-2 w-full md:w-1/5 mb-4">
          <div className="relative flex items-center ">
            <input
              onChange={(e) => {
                setLocName(e.target.value);
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
            {locations.map((location) => (
              <div className="border rounded-xl w-full p-4">
                <div className="flex items-baseline gap-4">
                  <span className="font-bold text-2xl">{location.name}</span>
                  <span className="text-black/75">{location.type}</span>
                </div>
                <div className="flex justify-between items-baseline gap-4">
                  <span>Dimension: {location.dimension}</span>
                  <span className="text-black/75">
                    Residents: {location.residents?.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Locations;
