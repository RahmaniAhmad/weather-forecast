"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

//these should be fetched by an api
const citySuggestions = [
  { name: "Shiraz", country: "Iran" },
  { name: "Tehran", country: "Iran" },
  { name: "London", country: "UK" },
  { name: "Paris", country: "France" },
  { name: "Berlin", country: "Germany" },
];

const SearchCity = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentCity = searchParams.get("city");

  const [city, setCity] = useState(currentCity);
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    {
      name: string;
      country: string;
    }[]
  >([]);

  const filterCities = (query: string) => {
    if (!query) {
      setFilteredSuggestions([]);
      return;
    }

    const filtered = citySuggestions.filter((city) =>
      city.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  const handleCityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setCity(query);
    filterCities(query);
  };

  const selectSuggestion = (suggestion: string) => {
    setCity(suggestion);
    setFilteredSuggestions([]);
    router.push(`/${encodeURIComponent(suggestion)}`);
  };

  const hanldeClearLocation = () => {
    router.push("/");
    setCity("");
  };

  const handleSearch = () => {
    if (city) {
      setCity(city);
      setFilteredSuggestions([]);
      router.push(`/${city}`);
    }
  };

  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter city name"
          value={city ?? ""}
          onChange={handleCityInput}
          className="p-2 border border-gray-300 dark:border-gray-700 rounded w-full mb-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900"
        />
        {filteredSuggestions.length > 0 && (
          <ul className="absolute bg-white border dark:bg-gray-800 border-gray-300 rounded w-full mt-1 max-h-40 overflow-y-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => selectSuggestion(suggestion.name)}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer"
              >
                {suggestion.name}, {suggestion.country}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="space-y-2 md:space-y-0 md:flex md:flex-row md:space-x-4">
        <button
          onClick={hanldeClearLocation}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
        >
          Refresh Location
        </button>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchCity;
