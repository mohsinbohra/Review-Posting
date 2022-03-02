import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <SearchIcon className="search-icons" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="Search here.."
      />
    </div>
  );
};

export default Search;
