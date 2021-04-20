import React,{useEffect} from 'react';

               
const ManageServiceCard = ({deletingservice}) => {

    const handleDeleteService =(id)=>{
        
            fetch('https://stormy-crag-38445.herokuapp.com/deleteservice/' + id, {
        method: 'DELETE',
        })
        .then(res => res.json()) // or res.text()
        .then(res => console.log(res))
        
        console.log(id)
    }
    return (
        <div>
            <p>{deletingservice._id}</p>
            <button onClick={()=>handleDeleteService(deletingservice._id)}>delete</button>
        </div>
    );
};

export default ManageServiceCard;