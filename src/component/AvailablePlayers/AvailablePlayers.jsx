import React, { useState } from "react";

const AvailablePlayers = ({ play, setCoin }) => {
  // console.log(coin());
  let {
    playerName,
    playerCountry,
    playerType,
    rating,
    battingStyle,
    bowlingStyle,
    price,
    playerImg,
  } = play;

  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={playerImg} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{playerName}</h2>
        <div className="justify-between flex">
          <p>{playerCountry} </p>
          <button className="btn">{playerType} </button>
        </div>
        <div className="divider"></div>
        <p className="font-bold">{rating}</p>
        <div className="card-actions flex justify-between">
          <div>
            <p className="font-bold">{battingStyle}</p>
            <p className="font-bold">{price}</p>
          </div>
          <div>
            <p className="mb-2 font-semibold">{bowlingStyle}</p>
            <button
              className="btn"
              onClick={() => {
                setIsSelected(true);
                setCoin(5)
              }}
              disabled={isSelected ? true : false}
            >
              {isSelected === true ? "selected" : "choose player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
