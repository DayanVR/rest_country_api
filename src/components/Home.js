import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home({ country, handleCountryClick, handleInputChange, handleRegionChange }) {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const handleClick = (selectedCountry) => {
    handleCountryClick(selectedCountry);
  };

  return (
    <>
      <div className="bg-veryLightGray py-6 text-home last:items-start max-md:px-3 md:mx-0 md:flex md:py-10 xl:-mx-40 dark:bg-veryDarkBlueDark">
        <form className="mx-2 flex flex-1 items-center bg-inherit bg-white p-4 text-darkGray md:mx-10 xl:mx-40 2xl:mr-[30%] dark:bg-darkBlue">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="size-6 bg-inherit text-darkGray dark:text-white"
          />
          <input
            onChange={handleInputChange}
            type="text"
            className="size-full border-4 border-none pl-4 outline-none dark:bg-darkBlue dark:text-white dark:placeholder:text-white"
            placeholder="Search for a country..."
          />
        </form>
        <div className="custom-select mx-2 flex w-60 bg-white p-2 pr-6 max-md:mt-8 md:mx-10 xl:mx-40 dark:bg-darkBlue">
          <select
            onChange={handleRegionChange}
            className="float-start w-full cursor-pointer border-none py-3 pl-4 outline-none dark:bg-darkBlue "
          >
            <option value="">Filter by Region</option>
            {regions.map((region, index) => (
              <option key={index} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
      </div>
      <section className="-mx-1 h-fit bg-veryLightGray pb-20 pt-1 md:mx-0 xl:-mx-40 dark:bg-veryDarkBlueDark ">
        <div className="mx-6 grid gap-x-20 gap-y-10 text-detail md:mx-10 md:mt-14 md:grid-cols-2 xl:mx-40 xl:grid-cols-3 2xl:grid-cols-4">
          {country.map((country, index) => (
            <div
              onClick={() => handleClick(country)}
              key={index}
              className="flex h-full w-full cursor-pointer flex-col rounded-lg bg-white pb-4 text-left text-veryDarkBlueLight dark:bg-darkBlue dark:text-white"
            >
              <img
                src={country.flag}
                className="rounded-t-lg xl:h-3/6"
                alt=""
              />
              <article className="mx-6">
                <h2 className="my-5 text-2xl font-semibold text-veryDarkBlueLight dark:text-white ">
                  {country.name}
                </h2>
                <h3 className="inline font-medium">Population: </h3>
                <p className="inline font-regular ">
                  {" "}
                  {Intl.NumberFormat("en-US").format(country.population)}
                </p>
                <br />

                <h3 className="inline font-medium ">Region: </h3>
                <p className="inline font-regular ">{country.region}</p>
                <br />

                <h3 className="inline font-medium">Capital: </h3>
                <p className="inline font-regular">{country.capital}</p>
                <br />
              </article>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
