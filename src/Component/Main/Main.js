import React from 'react';
import "./Main.css"
const Main = (props) => {

    const all = props.player
    const {name, salary, grade, img} = all;
    const HandleClick = props.HandleClick;
    
return (
        <div class="cards">
            <img src={img} />
            <div class="containers">
                <h6><b>Name: {name}</b></h6>
                <p>Grade: {grade}</p>
                <p>Salary: ${salary}</p>
                <button className="btn-primary" onClick={()=>HandleClick(all)}>Add</button>
            </div>
        </div>
    );
};

export default Main;