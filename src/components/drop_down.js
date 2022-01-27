import React, { useState } from "react";
import "./drop_down.css";

export default function Dropdown(props) {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {props.selected}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {props.options.map((option) => (
            <div
              onClick={(e) => {
                props.setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}