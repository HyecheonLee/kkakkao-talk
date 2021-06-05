import React, {useState} from 'react';
import SidePanel from "./SidePanel/SidePanel";
import MainPanel from "./MainPanel/MainPanel";
import "./ChatPage.css";
import {useSelector} from "react-redux";

const ChatPage = () => {
  let [activePanel, setActivePanel] = useState("user");
  return (
    <div className={"chatPage"}>
      <div className="sidePanel">
        <SidePanel activePanel={activePanel} setActivePanel={setActivePanel}/>
      </div>
      <div className={"mainPanel"}>
        <MainPanel activePanel={activePanel}/>
      </div>
    </div>
  );
};

export default ChatPage;
