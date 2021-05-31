import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className={"header"}>
      <span>친구</span>
      <div className={"friendPlusIcon"}>
        <svg baseProfile="tiny" height="24px" id="Layer_1" version="1.2"
             viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9,14c1.381,0,2.631-0.56,3.536-1.465C13.44,11.631,14,10.381,14,9s-0.56-2.631-1.464-3.535C11.631,4.56,10.381,4,9,4  S6.369,4.56,5.464,5.465C4.56,6.369,4,7.619,4,9s0.56,2.631,1.464,3.535C6.369,13.44,7.619,14,9,14z"/>
          <path
            d="M9,21c3.518,0,6-1,6-2c0-2-2.354-4-6-4c-3.75,0-6,2-6,4C3,20,5.25,21,9,21z"/>
          <path
            d="M21,12h-2v-2c0-0.553-0.447-1-1-1s-1,0.447-1,1v2h-2c-0.553,0-1,0.447-1,1s0.447,1,1,1h2v2c0,0.553,0.447,1,1,1s1-0.447,1-1  v-2h2c0.553,0,1-0.447,1-1S21.553,12,21,12z"/>
        </svg>
      </div>
    </div>
  );
};

export default Header;
