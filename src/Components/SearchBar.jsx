import React from 'react';
import "../Styles/Search.css";

import icon from "../Assets/Icons/Icon feather-search.png";

const SearchBar = (props) => {
    const { searchedRecipe, handleSearch } = props;

    return (
        <div className="search-bar">
            <div className="search-bg">
                <img src={icon} alt=""/>
            </div>
            <input type="text" value={searchedRecipe} onChange={handleSearch} placeholder="Search your favourite recipe..."/>
        </div>
    );
}

export default SearchBar;
