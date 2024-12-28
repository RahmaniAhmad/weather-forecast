"use client";

import { useCitySuggestions } from "@/hooks/useCitySuggestions";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchCity = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const { suggestions, loading, searchCities } = useCitySuggestions();

  const cityFromUrl = pathname?.split("/").pop() || "";

  useEffect(() => {
    if (cityFromUrl) {
      setInputQuery(cityFromUrl);
      searchCities(cityFromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityFromUrl]);

  useEffect(() => {
    searchCities(inputQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputQuery]);

  const handleCityInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputQuery(query);
    setShowSuggestions(query.length > 0);
  };

  const handleSelectSuggestion = (suggestion: string) => {
    setInputQuery(suggestion);
    setShowSuggestions(false);
    router.push(`/${encodeURIComponent(suggestion)}`);
  };

  const hanldeClearLocation = () => {
    setInputQuery("");
    setShowSuggestions(false);
    router.push("/");
  };

  const handleSearch = () => {
    if (inputQuery) {
      router.push(`/${encodeURIComponent(inputQuery)}`);
    }
  };

  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-800 rounded">
      <div className="relative">
        <input
          type="text"
          placeholder="Enter city name"
          value={inputQuery}
          onChange={handleCityInput}
          className="p-2 border border-gray-300 dark:border-gray-700 rounded w-full mb-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900"
        />
        {showSuggestions && (
          <ul className="absolute bg-white border dark:bg-gray-800 border-gray-300 rounded w-full mt-1 max-h-40 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSelectSuggestion(suggestion.name)}
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
          disabled={loading}
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full md:w-auto"
        >
          {loading ? "Searching...." : "Search"}
        </button>
      </div>
    </div>
  );
};

export default SearchCity;
