import { useState } from "react";
import { getCitySuggestions } from "@/api/cityApi";

export const useCitySuggestions = () => {
  const [suggestions, setSuggestions] = useState<
    { name: string; country: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const searchCities = async (query: string) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    try {
      const results = await getCitySuggestions(query);
      setSuggestions(results || []);
    } catch (error) {
      console.error("Error fetching city suggestions", error);
    } finally {
      setLoading(false);
    }
  };

  return { searchCities, suggestions, loading };
};
