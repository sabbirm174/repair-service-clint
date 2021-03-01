import React from 'react';
import "./Main.css" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Main = (props) => {

    const all = props.player
    const {name, salary, grade, img} = all;
    const HandleClick = props.HandleClick;
    
return (
        <div className="cards">
            <img src={img} />
            <div className="containers">
                <h6><b>Name: {name}</b></h6>
                <p>Grade: {grade}</p>
                <p>Salary: ${salary}</p>
                <button className="btn-primary" onClick={()=>HandleClick(all)}>Add <FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Main;
