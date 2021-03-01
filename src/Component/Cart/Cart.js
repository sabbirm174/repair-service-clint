import React from 'react';
import ReactDOM from 'react-dom';
const Cart = (props) => {
    const cart = props.selectedPlayer;

    const totalBudget = cart.reduce((sum, player)=> sum + player.salary,0)
    const totalPlayerName = cart.reduce((sum, player)=> sum + player.name,[])
    let li = React.createElement("li",{id:"hed"},totalPlayerName );
    return (
        <div className="text-center">
           <p>Selected Player: {totalPlayerName  }<br/></p> 
           <p>Total Budget: ${totalBudget}</p>
           <p>Total Selected Player: {cart.length}</p> 
        </div>
    );
};

export default Cart;