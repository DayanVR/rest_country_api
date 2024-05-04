import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import data from "../data.json";

const formatLanguages = (languages) => {
  if (languages.length === 1) {
    return languages[0].name;
  } else {
    return languages.map((lang) => lang.name).join(", ");
  }
};

const findCountryByCode = (code) => {
  return data.find((country) => country.alpha3Code === code);
};

const CountryCard = ({ country, onClose }) => {
  const formattedLanguages = formatLanguages(country.languages);

  const borderCountries = country?.borders
    ? country.borders.map((borderCode) => {
        const borderCountry = findCountryByCode(borderCode);
        return borderCountry ? borderCountry.name : null;
      })
    : [];

  return (
    <section className="h-fit bg-veryLightGray  p-5 pb-10 text-left text-veryDarkBlueLight xl:-mx-40 xl:px-40 dark:bg-veryDarkBlueDark">
      <button
        className="my-2 rounded-sm bg-white px-6 py-1 xl:mb-10 xl:mt-6 2xl:px-10 2xl:py-3 dark:bg-darkBlue dark:text-white"
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="pr-2" />
        Back
      </button>
      <div className="space-y-6 text-veryDarkBlueLight xl:flex xl:flex-auto xl:space-x-20 dark:bg-veryDarkBlueDark dark:text-white ">
        <div className="xl:h-[275px] xl:w-[350px] xl:flex-1 xl:self-center 2xl:h-[500px] 2xl:w-[850px] 2xl:flex-none">
          <img
            src={country.flag}
            alt={country.name}
            className="max-xl:my-5 sm:mx-auto md:size-4/6 lg:size-3/6 xl:size-full"
          />
        </div>
        <div className="h-fit xl:flex-1 [&_strong]:font-medium">
          <h2 className="text-2xl font-semibold xl:mb-6 2xl:mb-10">
            {country.name}
          </h2>
          <div className="xl:flex xl:space-x-10 2xl:space-x-40 [&>div]:space-y-2 [&>div]:max-xl:my-8 [&>div]:2xl:space-y-4 [&_strong]:font-bold">
            <div>
              <p>
                <strong>Native Name: </strong>
                {country.nativeName}
              </p>
              {country?.population && (
                <>
                  <p>
                    <strong>Population: </strong>
                    {Intl.NumberFormat("en-US").format(country.population)}
                  </p>
                </>
              )}
              {country?.region && (
                <>
                  <p>
                    <strong>Region: </strong>
                    {country.region}
                  </p>
                </>
              )}
              {country?.subregion && (
                <>
                  <p>
                    <strong>Sub Region: </strong>
                    {country.subregion}
                  </p>
                </>
              )}
              {country?.capital && (
                <>
                  <p>
                    <strong>Capital: </strong>
                    {country.capital}
                  </p>
                </>
              )}
            </div>
            <div className="flex-1">
              <p>
                <strong>Top Level Domain: </strong>
                {country.topLevelDomain}
              </p>
              <p>
                <strong>Currencies: </strong>
                {country.currencies[0].name}
              </p>
              <p>
                <strong>Languages: </strong>
                {formattedLanguages}
              </p>
            </div>
          </div>
          {borderCountries.length > 0 && (
            <div className="flex flex-row flex-wrap md:space-x-4 xl:mt-8">
              <h2 className="my-2 py-2 font-bold">Border Countries: </h2>
              {borderCountries.map((border, index) => (
                <p
                  key={index}
                  className="my-2 rounded-sm bg-white px-8 py-2 max-md:mx-3 dark:bg-darkBlue"
                >
                  {border}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryCard;
