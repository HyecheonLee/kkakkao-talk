import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Profile from "../Profile/Profile";
import {useSelector} from "react-redux";
import "./MyProfile.css"
import firebase from "firebase";


const MyProfile = props => {
  const user = useSelector(state => state.user.currentUser);
  let [isDropdown, setIsDropdown] = useState(false);
  const handleLogout = () => {
    firebase.auth().signOut();
  }
  if (user === null || user.photoURL == null) {

    return <div>로딩중입니다.</div>
  }
  return (
    <div className={"MyProfileContainer"}>
      <h3>내 기본프로필</h3>
      <div onClick={e => setIsDropdown(!isDropdown)} className={"profile"}>
        <Profile user={user}/>
        <div className={"arrowIcon"}>
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 20l10 10 10-10z"/>
            <path d="M0 0h48v48h-48z" fill="none"/>
          </svg>
          {isDropdown &&
          <ul className={"dropdown"}>
            <li onClick={handleLogout}>로그아웃</li>
          </ul>
          }
        </div>
      </div>
    </div>
  );
};

MyProfile.propTypes = {};

export default MyProfile;
