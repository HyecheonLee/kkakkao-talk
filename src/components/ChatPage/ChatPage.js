import React, {useState} from 'react';
import SidePanel from "./SidePanel/SidePanel";
import MainPanel from "./MainPanel/MainPanel";
import "./ChatPage.css";
import {useSelector} from "react-redux";

const ChatPage = () => {
  let [activePanel, setActivePanel] = useState("user");
  let user = useSelector(state => state.user);
  if (user.isLoading || user.currentUser === null) {
    return (
      <div>로딩중입니다.</div>
    )
  }
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
