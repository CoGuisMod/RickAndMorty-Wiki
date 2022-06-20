import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import locationsHero from "../assets/locations-hero.jpg";
import { getLocations } from "../api/RickAndMortyAPI";
import { FaAngleLeft, FaAngleRight, FaSearch, FaUserAlt } from "react-icons/fa";
import ReactPaginate from "react-paginate";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [locName, setLocName] = useState("");
  const [locType, setLocType] = useState("");
  const [locDimension, setLocDimension] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getLocations(locName, locType, locDimension, page).then(
      (data) => (setLocations(data.results), setPageCount(data.info.pages))
    );
  }, []);

  useEffect(() => {
    getLocations(locName, locType, locDimension, page).then(
      (data) => (setLocations(data.results), setPageCount(data.info.pages))
    );
  }, [locName, locType, locDimension, page]);

  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };

  return (
    <>
      <Hero heroTitle="Rick and Morty Locations" heroImg={locationsHero} />
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-black mb-8 px-4 pt-4">
        <aside className="border rounded-lg p-2 md:p-4 w-full md:max-w-xs">
          <div className="relative flex items-center">
            <input
              onChange={(e) => {
                setLocName(e.target.value);
                setPageCount(1);
              }}
              type="text"
              className="border rounded-xl w-full pl-2 pr-8 py-1"
            />
            <FaSearch className="absolute right-2" />
          </div>
          <form className="flex flex-col justify-between items-center gap-2 mt-2">
            <div className="flex justify-start items-center gap-2 w-full">
              <label>Type:</label>
              <input
                onChange={(e) => {
                  setLocType(e.target.value);
                  setPageCount(1);
                }}
                type="text"
                className="border rounded-xl w-full pl-2 pr-8 py-1"
              />
            </div>
            <div className="flex justify-start items-center gap-2 w-full">
              <label>Dimension:</label>
              <input
                onChange={(e) => {
                  setLocDimension(e.target.value);
                  setPageCount(1);
                }}
                type="text"
                className="border rounded-xl w-full pl-2 pr-8 py-1"
              />
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
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-4">
            {locations.map((location) => (
              <div className="flex justify-between items-center border rounded-xl text-lg w-full p-4">
                <div className="flex flex-col justify-between items-start gap-2 h-full">
                  <span className="font-bold text-2xl">{location.name}</span>
                  <span className="font-medium">Type: {location.type}</span>
                  <span className="font-medium">
                    Dimension: {location.dimension}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <FaUserAlt />
                  <span className="font-medium text-black/75">
                    {location.residents?.length}
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
