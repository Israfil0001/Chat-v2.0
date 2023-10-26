import React from "react";
import "./style.css"
function MessageCard({ url, ...props }) {
  return (
    <div className="message-card">
      <div className="circle">
        <div
          className="circle-img"
          style={{ backgroundImage: `url("${url}")` }}
        ></div>
      </div>
      <div className="card-text">
        <span>Алина Отдел кадров</span>
      </div>
    </div>
  );
}

export default MessageCard;