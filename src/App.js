import "./App.css";
import Home from "./components/Home.js";
import CountryCard from "./components/CountryCard.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React, { useState, useEffect } from "react";
import data from "./data.json";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [filteredCountry, setFilteredCountry] = useState(data);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCountryClick = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  useEffect(() => {
    const filterCountries = () => {
      let filteredData = data;
      if (searchInput.trim() !== "") {
        filteredData = filteredData.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase()),
        );
      }
      if (selectedRegion !== "") {
        filteredData = filteredData.filter(
          (item) => item.region === selectedRegion,
        );
      }
      setFilteredCountry(filteredData);
    };
    filterCountries();
  }, [searchInput, selectedRegion]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setCurrentPage(1);
  };
  const handleCloseDetail = () => {
    setSelectedCountry(null);
  };

  return (
    <main className={darkMode ? "" : "dark"}>
      <div className="App relative h-screen bg-veryLightGray font-nunito xl:px-40 dark:bg-veryDarkBlueDark  dark:text-white">
        <header className="bg-white px-1.5 py-5 text-lg text-darkBlue xm:mx-0 xm:px-4 md:px-10 xl:-mx-40 xl:px-40 dark:bg-darkBlue dark:text-white">
          <div className="flex justify-between ">
            <h1 className="font-semibold">Where in the world?</h1>
            {darkMode && (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex place-content-center items-center space-x-1"
              >
                <FontAwesomeIcon icon={faMoon} />
                <p className="font-medium">Dark Mode</p>
              </button>
            )}
            {!darkMode && (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex place-content-center items-center space-x-1"
              >
                <FontAwesomeIcon icon={faSun} />
                <p className="font-medium">Dark Mode</p>
              </button>
            )}
          </div>
        </header>
        <div>
          {selectedCountry !== null && typeof selectedCountry === "object" ? (
            <CountryCard
              country={selectedCountry}
              onClose={handleCloseDetail}
            />
          ) : (
            <Home
              country={filteredCountry}
              handleCountryClick={handleCountryClick}
              handleInputChange={handleInputChange}
              handleRegionChange={handleRegionChange}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
