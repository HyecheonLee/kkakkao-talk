import React from 'react';
import {useSelector} from "react-redux";
import "./Friend.css"
import Profile from "../Profile/Profile";

const Friend = () => {
  const user = useSelector(state => state.user.currentUser);

  return (
    <div className={"friendContainer"}>
      <h3>친구</h3>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
      <Profile user={user}/>
    </div>
  );
};

export default Friend;
