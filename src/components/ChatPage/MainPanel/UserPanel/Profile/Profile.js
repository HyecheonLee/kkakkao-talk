import React from 'react';
import "./Profile.css"

const Profile = ({user}) => {
  return (
    <div className={"profileContainer"}>
      <div className={"photo"}>
        {user && <img src={user.photoURL}/>}
      </div>
      <div className={"info"}>
        {user && <div style={{color: "white"}}>{user.email}</div>}
        <div>긍정긍정</div>
      </div>
    </div>
  );
};

export default Profile;
