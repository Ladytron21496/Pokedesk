import React, { Component } from "react";
import "../search.css";
import { InputGroup, FormControl } from "react-bootstrap";

const SearchBar = props => {
  const handleChange = e => {
    console.log(e.target.value);
    props.change(e.target.value);
  };
  return (
    <input
      onChange={e => handleChange(e)}
      type="text"
      placeholder="search"
      className="search"
    ></input>
  );
};

export default SearchBar;
