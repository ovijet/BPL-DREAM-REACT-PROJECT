import React, { useState } from "react";

const AvailablePlayers = ({
  play,
  setCoin,
  coin,
  setSelectedPlayers,
  selecetedPlayer,
}) => {
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

  let hendelClick = () => {
    // setIsSelected(true);
    let newNum = coin - price;

    if (newNum >= 0) {
      setCoin(coin - price);
      setIsSelected(true);
    } else {
      alert("nooooooo");
      return;
    }

    setSelectedPlayers([...selecetedPlayer, play]);
  };

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
              onClick={hendelClick}
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
