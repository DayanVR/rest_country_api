import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Pages } from "./Pagination";
import { useEffect, useState } from "react";

function Home({
  country,
  handleCountryClick,
  handleInputChange,
  handleRegionChange,
  currentPage,
  setCurrentPage,
}) {
  const [visibleCountries, setVisibleCountries] = useState([]);

  const pageSize = 12;

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleClick = (selectedCountry) => {
    handleCountryClick(selectedCountry);
  };

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setVisibleCountries(country.slice(start, end));
  }, [country, currentPage]);

  return (
    <>
      <section className="bg-veryLightGray py-6 text-home last:items-start max-md:px-3 md:mx-0 md:flex md:py-10 xl:-mx-40 dark:bg-veryDarkBlueDark">
        <form className="mx-2 flex flex-1 items-center bg-inherit bg-white p-4 text-darkGray md:mx-10 xl:mx-40 2xl:mr-[30%] dark:bg-darkBlue">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="size-6 bg-inherit text-darkGray dark:text-white"
          />
          <input
            onChange={handleInputChange}
            type="text"
            className="size-full border-none pl-4 focus:outline-none dark:bg-darkBlue dark:text-white dark:placeholder:text-white"
            placeholder="Search for a country..."
          />
        </form>
        <div className="mx-2 flex bg-white p-2 max-md:mt-8 md:mx-10 md:w-60 xl:mx-40 dark:bg-darkBlue">
          <select
            onChange={handleRegionChange}
            className="float-start w-full border-none py-3 pl-4 outline-none dark:bg-darkBlue "
          >
            <option value="">Filter by Region</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </section>
      <section>
        <Pages
          totalPages={Math.ceil(country.length / pageSize)}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
      <section className="-mx-1 h-fit bg-veryLightGray pb-20 pt-1 md:mx-0 xl:-mx-40 dark:bg-veryDarkBlueDark ">
        <div className="mx-6 grid gap-x-20 gap-y-10 text-detail md:mx-10 md:grid-cols-2 xl:mx-40 xl:grid-cols-3 2xl:grid-cols-4">
          {visibleCountries.map((country, index) => (
            <div
              onClick={() => handleClick(country)}
              key={index}
              className="flex h-full w-full cursor-pointer flex-col text-pretty rounded-lg bg-white pb-4 text-left text-veryDarkBlueLight transition-transform md:hover:scale-105 lg:mx-auto lg:w-[350px] lg:duration-200 xl:w-[300px] 2xl:w-full dark:bg-darkBlue dark:text-white"
            >
              <div className="relative h-40 w-full lg:h-52 ">
                <img
                  src={country.flag}
                  className="size-full rounded-t-lg object-cover"
                  alt=""
                />
              </div>
              <article className="mx-6">
                <h2 className="my-5 text-2xl font-semibold text-veryDarkBlueLight dark:text-white ">
                  {country.name}
                </h2>
                {country?.population && (
                  <>
                    <h3 className="inline font-medium">Population: </h3>
                    <p className="inline font-regular ">
                      {" "}
                      {Intl.NumberFormat("en-US").format(country.population)}
                    </p>
                    <br />
                  </>
                )}

                {country?.region && (
                  <>
                    <h3 className="inline font-medium ">Region: </h3>
                    <p className="inline font-regular ">{country.region}</p>
                    <br />
                  </>
                )}

                {country?.capital && (
                  <>
                    <h3 className="inline font-medium">Capital: </h3>
                    <p className="inline font-regular">{country.capital}</p>
                    <br />
                  </>
                )}
              </article>
            </div>
          ))}
        </div>
        <Pages
          totalPages={Math.ceil(country.length / pageSize)}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </>
  );
}

export default Home;
