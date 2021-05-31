import React from 'react';
import PropTypes from 'prop-types';
import Friend from "./Friend/Friend";
import "./UserPanel.css"
import SearchBar from "./SearchBar/SearchBar";
import Header from "./Header/Header";
import MyProfile from "./MyProfile/MyProfile";

const UserPanel = props => {
  return (

    <div className={"userPanelContainer"}>
      <Header/>
      <SearchBar/>
      <hr/>
      <MyProfile/>
      <hr/>
      <Friend/>
    </div>

  );
};

UserPanel.propTypes = {};

export default UserPanel;
