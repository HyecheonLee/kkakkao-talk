import React from 'react';
import "./Profile.css"

const Profile = ({user}) => {
  return (
    <div className={"profileContainer"}>
      <div className={"photo"}>
        <img src={user.photoURL}/>
      </div>
      <div className={"info"}>
        <div style={{color: "white"}}>{user.email}</div>
        <div>긍정긍정</div>
      </div>
    </div>
  );
};

export default Profile;
