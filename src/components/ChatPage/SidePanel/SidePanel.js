import React from 'react';
import PropTypes from 'prop-types';
import "./SidePanel.css"

const SidePanel = ({activePanel, setActivePanel}) => {
  const onClickHandler = (panelName) => {
    setActivePanel(panelName)
  }
  return (
    <div className="sidePanelContainer">
      <div className={`userIconContainer ${activePanel === 'user' && "active"}`}
           onClick={e => onClickHandler('user')}>
        <svg viewBox="0 0 1792 1792"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1600 1405q0 120-73 189.5t-194 69.5h-874q-121 0-194-69.5t-73-189.5q0-53 3.5-103.5t14-109 26.5-108.5 43-97.5 62-81 85.5-53.5 111.5-20q9 0 42 21.5t74.5 48 108 48 133.5 21.5 133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z"/>
        </svg>
      </div>
      <div className={`messageIconContainer ${activePanel === 'chatRoom' && "active"}`}
           onClick={e => onClickHandler('chatRoom')}>
        <svg fill="none" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      </div>
    </div>
  );
};

SidePanel.propTypes = {
  activePanel: PropTypes.string.isRequired,
  setActivePanel: PropTypes.func.isRequired
};

export default SidePanel;
