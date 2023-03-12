import React from "react";

export default function DetailBox(props) {
  return (
    <>
      <div className="detail-box">
        <i className="fa-solid fa-location-dot"></i>
        <p className="detail-info">{props?.location || `Probably a nomad`}</p>
      </div>
      <div className="detail-box">
        <i className="fa-solid fa-link"></i>
        <a href={props?.blog} target="_blank">
          {props?.twitter_username || `Not Available`}
        </a>
      </div>
      <div className="detail-box">
        <i className="fa-solid fa-envelope"></i>
        <p className="detail-info">{props?.email || `Not Available`}</p>
      </div>
      <div className="detail-box">
        <i className="fa-solid fa-building"></i>
        <p className="detail-info">{props?.company || `Not Available`}</p>
      </div>
    </>
  );
}
