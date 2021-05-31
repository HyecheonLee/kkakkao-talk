import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import "./ChatRoom.css"
const ChatRoom = props => {
  return (
    <div className={"chatRoomContainer"}>
      <Header/>
      <SearchBar/>
      <hr/>
    </div>
  );
};

ChatRoom.propTypes = {

};

export default ChatRoom;
