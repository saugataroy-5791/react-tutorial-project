import { createContext, useState } from "react";

export const SearchContext = createContext({
  searchText: null,
});

export const SearchProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <SearchContext.Provider value={{ searchText: searchText, setSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};
