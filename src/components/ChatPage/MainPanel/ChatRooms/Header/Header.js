import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <div className={"header"}>
      <span>채팅</span>
      <div className={"friendPlusIcon"}>

        <svg data-name="add comment" height="60" id="add_comment" viewBox="0 0 60 60"
             width="60"
             xmlns="http://www.w3.org/2000/svg">
          <path className="cls-1"
                d="M257.875,246a12,12,0,1,1-12,12A12,12,0,0,1,257.875,246ZM252,260h4v4a2,2,0,0,0,4,0v-4h4a2,2,0,0,0,0-4h-4v-4a2,2,0,0,0-4,0v4h-4A2,2,0,0,0,252,260Z"
                id="add" transform="translate(-210 -210.031)"/>
          <path className="cls-2"
                d="M268.109,243.107A18,18,0,0,0,240,258c0,0.388.034,0.768,0.058,1.151l-0.058,0c-1.16,0-4.375-.536-5.358-0.166a5.046,5.046,0,0,0-.847.546c-0.912.91-8.24,10.53-13.295,10.49-0.31,0-2.485.251-2.5-2,0.006-1.352,1.122-1.8,2.433-6.909a20.624,20.624,0,0,0,.532-6.341,2.958,2.958,0,0,0-1.059-1.948c-6.082-4.495-9.906-11-9.906-18.236,0-13.568,13.431-24.566,30-24.566s30,11,30,24.566A20.571,20.571,0,0,1,268.109,243.107Z"
                id="comment" transform="translate(-210 -210.031)"/>
        </svg>
      </div>
    </div>
  );
};

export default Header;
