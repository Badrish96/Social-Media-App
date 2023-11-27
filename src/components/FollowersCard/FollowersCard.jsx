import React from "react";
import "./followersCard.css";

import { Followers } from "../../Data/Followers";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Who is Following you</h3>
      {Followers.map((followers, id) => {
        return (
          <div className="followers">
            <div>
              <img
                src={followers.img}
                alt="FollowerImage"
                className="followerImg"
              />
              <div className="name">
                <span>{followers.name}</span>
                <span>@{followers.username}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
