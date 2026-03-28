import React, { use, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayer from "../selecetedPlayer/SelectedPlayer";

const Players = ({ playersData, setCoin,coin }) => {
  let data = use(playersData);
  // console.log(data);

  const [selectType, setSelectType] = useState("available");
  // console.log(selectType,'sweeeeeee');
  let [selecetedPlayer,setSelectedPlayers]=useState([])
  return (
    <div>
      <div className="flex justify-between mt-5 container mx-auto">
        {selectType === "available" ? (
          <h2 className="text-2xl font-bold">Available Players:</h2>
        ) : (
          <h2 className="text-2xl font-bold">Selected Players:(2/6)</h2>
        )}

        <div className="gap-5">
          <button
            onClick={() => setSelectType("available")}
            className={`btn text-black border-none ${selectType === "available" ? "bg-[#e7fe29]" : "bg-white"} btn-neutral rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectType("selected")}
            className={`btn text-black border-none ${selectType === "selected" ? "bg-[#c6de0c]" : "bg-white"} btn-neutral rounded-r-none`}
          >
            selected(0)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 container mx-auto gap-5 mt-10">
        {/* {data.map((play) => (
             <AvailablePlayers play={play}></AvailablePlayers>
          ))} */}

        {selectType === "available" ? (
          data.map((play) => (
            <AvailablePlayers
              key={play.id}
              play={play}
              setCoin={setCoin} coin={coin}
              setSelectedPlayers={setSelectedPlayers}
              selecetedPlayer={selecetedPlayer}
            ></AvailablePlayers>
          ))
        ) : (
          <SelectedPlayer selecetedPlayer={selecetedPlayer}></SelectedPlayer>
        )}
      </div>
    </div>
  );
};

export default Players;
