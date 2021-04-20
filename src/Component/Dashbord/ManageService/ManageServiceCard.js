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
            <tbody>
    <tr>
      <td>{deletingservice.title}</td>
      <td>{deletingservice._id}</td>
      <td><button onClick={()=>handleDeleteService(deletingservice._id)}>Delete</button></td>
    </tr>
  </tbody> 
            
    );
};

export default ManageServiceCard;