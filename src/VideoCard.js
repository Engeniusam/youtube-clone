import "./VideoCard.css";
import { Avatar } from "@mui/material";
import React from "react";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__Info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views}
            &#8226;
            {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
