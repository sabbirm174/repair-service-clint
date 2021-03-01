import React , {useEffect, useState} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import PlayerData from "./Component/PlayerData/PlayerData.json"
import Main from "./Component/Main/Main"
import Cart from './Component/Cart/Cart'
import Table from './Component/Table/Table';

function App() {
const [player, setPlayer] = useState([]);
const [selectedPlayer, setSelectedPlayer] = useState([])
useEffect(() => {
setPlayer(PlayerData);
}, [])



const HandleClick=(player)=>{
  const newpl = [...selectedPlayer, player]
  setSelectedPlayer(newpl);
}




return (
        <div>
          <ul>
          {
            //arrObj.map(pl=> <p>{pl.name}</p>)
          }
          </ul>
          <Table selectedPlayer={selectedPlayer}></Table>
            <Cart selectedPlayer={selectedPlayer}></Cart>
            <span className="d-flex flex-wrap align-items-center">
            {
            PlayerData.map(player=> <Main HandleClick={HandleClick} key={player.id} player={player}></Main>)
            }
            </span>
            <span className="">
            {
            PlayerData.map(player=> <li>{player.name}</li>)
            }
            </span>
        </div>
);
}

export default App;