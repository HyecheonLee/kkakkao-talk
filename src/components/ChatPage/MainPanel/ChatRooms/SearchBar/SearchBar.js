import React from 'react';
import PropTypes from 'prop-types';
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className={"searchBarContainer"}>
      <input placeholder={"채팅방 이름,참여자 검색"}/>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;
