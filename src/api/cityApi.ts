const citySuggestions = [
  { name: "Berlin", country: "Germany" },
  { name: "London", country: "UK" },
  { name: "Paris", country: "France" },
  { name: "Shiraz", country: "Iran" },
  { name: "Tehran", country: "Iran" },
];

export const getCitySuggestions = async (query: string) => {
  if (!query) {
    return;
  }

  return citySuggestions.filter((city) =>
    city.name.toLowerCase().startsWith(query.toLowerCase())
  );
};
