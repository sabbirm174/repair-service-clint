import React , {useEffect, useState} from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import PlayerData from "./Component/PlayerData/PlayerData.json"
import Main from "./Component/Main/Main"
import Cart from './Component/Cart/Cart'

function App() {
const [player, setPlayer] = useState([]);
const [selectedPlayer, setSelectedPlayer] = useState([])

useEffect(() => {
setPlayer(PlayerData);
}, [])

const HandleClick=(player)=>{
  const NewSelectedPlayer = [...selectedPlayer, player];
  setSelectedPlayer(NewSelectedPlayer);
  console.log(selectedPlayer)
}

return (
        <div>
            <Cart selectedPlayer={selectedPlayer}></Cart>
            <span className="d-flex flex-wrap align-items-center">
            {
            PlayerData.map(player=> <Main HandleClick={HandleClick} key={player.id} player={player}></Main>)
            }
            </span>
        </div>
);
}

export default App;