import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./component/banner/Banner";
import Navbar from "./component/Navbar/Navbar";
import Players from "./component/players-data/Players";

let playerData = async () => {
  let res = await fetch("./data.json");
  return res.json();
};

function App() {
  let [coin, setCoin] = useState(50000);
  let playersData = playerData();
  console.log(playersData);
  return (
    <>
      {/* <h1 className="text-center text-3xl">ovijit</h1> */}
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>

      <Suspense fallback="ovi.......">
        <Players
          key={playerData.id}
          playersData={playersData}
          setCoin={setCoin}
          coin={coin}
        ></Players>
      </Suspense>
    </>
  );
}

export default App;
