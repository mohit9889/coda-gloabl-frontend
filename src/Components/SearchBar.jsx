import React from 'react';
import "../Styles/Search.css";

import icon from "../Assets/Icons/Icon feather-search.png";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="search-bg">
                <img src={icon} alt=""/>
            </div>
            <input type="text" placeholder="Search your favourite recipe..."/>
        </div>
    );
}

export default SearchBar;
