import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <SearchContext.Provider value={{ 
            searchQuery, 
            setSearchQuery, 
            isSearchFocused, 
            setIsSearchFocused 
        }}>
            {children}
        </SearchContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within a SearchProvider") ;
    }
    return context;
}
