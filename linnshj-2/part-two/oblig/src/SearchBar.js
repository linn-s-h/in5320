import { useState } from "react";

function SearchBar({ onSearch }) {
    const [term, setTerm] = useState("");

    const handleInputChange = (e) => {
        setTerm(e.target.value);
    };

    const handleSearchClick = () => {
        onSearch(term);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onSearch(term);
        }
    };

    return (
        <div className="SearchBar">
            <input 
                type="text"
                value={term}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Search country..."
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default SearchBar;