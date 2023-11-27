import React from "react";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../profileCard/ProfileCard";
import "./profileSide.css";
import FollowersCard from "../FollowersCard/FollowersCard";

const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
