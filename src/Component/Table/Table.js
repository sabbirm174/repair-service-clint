import React from 'react';





const Table = (props) => {
    const cart = props.selectedPlayer;
    //const name = carts.reduce((sum,player)=>sum + player.neme,[]);
    //const totalPlayerName = cart.reduce((sum, player)=> sum + player.name,[])
    let totalpl = 0;
    for(let i=0; i<cart.length;i++){
        const pl =cart[i].name;
        totalpl = pl+totalpl; 
        
    }
    console.log(totalpl)
    
return (
        <div>
            
        </div>
);
};

export default Table;