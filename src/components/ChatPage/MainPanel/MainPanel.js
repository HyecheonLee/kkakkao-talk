import React from 'react';
import PropTypes from 'prop-types';
import UserPanel from "./UserPanel/UserPanel";
import ChatRoom from "./ChatRooms/ChatRoom";
import "./MainPanel.css";

const MainPanel = ({activePanel}) => {
  return (
    <div className={"mainContainer"}>
      {activePanel === 'user' && <UserPanel/>}
      {activePanel === 'chatRoom' && <ChatRoom/>}
    </div>
  );
};

MainPanel.propTypes = {
  activePanel: PropTypes.string.isRequired
};

export default MainPanel;
