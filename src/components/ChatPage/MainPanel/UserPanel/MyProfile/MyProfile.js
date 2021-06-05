import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Profile from "../Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import "./MyProfile.css"
import firebase from "firebase";
import mime from 'mime-types'
import {isLoading, updatePhotoUrl} from "../../../../../redux/actions/user_action";


const MyProfile = props => {
  const user = useSelector(state => state.user.currentUser);
  let [isDropdown, setIsDropdown] = useState(false);
  let dispatch = useDispatch();
  const handleLogout = () => {
    firebase.auth().signOut();
  }
  const inputOpenImageRef = useRef();
  const handleUploadImage = async (e) => {
    const file = e.target.files[0]
    const metadata = {contentType: mime.lookup(file.name)};
    try {
      dispatch(isLoading());
      const uploadTaskImage = await firebase.storage().ref().child(`user_image/${user.uid}`)
        .put(file, metadata);
      let downloadUrl = await uploadTaskImage.ref.getDownloadURL();
      await firebase.auth().currentUser.updateProfile({photoURL: downloadUrl})
      await firebase.database().ref("users").child(user.uid)
        .update({image: downloadUrl})
      dispatch(updatePhotoUrl(downloadUrl));
    } catch (err) {
      alert(err)
    }
  }
  const handleOpenImageRef = e => {
    inputOpenImageRef.current.click()
  }
  if (user === null || user.photoURL == null) {

    return <div>로딩중입니다.</div>
  }
  return (
    <div className={"MyProfileContainer"}>
      <h3>내 기본프로필</h3>
      <div onClick={e => setIsDropdown(!isDropdown)} className={"profile"}>
        {user.isLoading && "변경중입니다."}
        {!user.isLoading && <Profile user={user}/>}
        <div className={"arrowIcon"}>
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 20l10 10 10-10z"/>
            <path d="M0 0h48v48h-48z" fill="none"/>
          </svg>
          <input style={{display: "none"}} type={"file"}
                 accept="image/jpeg, image/png"
                 ref={inputOpenImageRef}
                 onChange={handleUploadImage}
          />
          {isDropdown &&
          <ul className={"dropdown"}>
            <li onClick={handleOpenImageRef}>프로필 사진 변경</li>
            <hr/>
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
