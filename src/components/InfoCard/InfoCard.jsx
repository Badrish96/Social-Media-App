import React, { useState } from "react";
import "./infoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModel from "../ProfileModel/ProfileModel";
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModel
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Multan</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Google</span>
      </div>
      <button className="button logout-btn">Logout</button>
    </div>
  );
};

export default InfoCard;
