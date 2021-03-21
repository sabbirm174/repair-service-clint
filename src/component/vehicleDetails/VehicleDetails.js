import React, {useContext, useRef, useState} from 'react';
import { useParams } from 'react-router-dom';
import Data from './../Data/Data';
import "./vehicledetails.css"
import { MyContext } from './../../App';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale } from '@fortawesome/free-solid-svg-icons'


export const VehicleDetails = (props) => {
    const mapRef = useRef();
   const [show, setShow] = useState(true)
    const [center, setCenter] = useState({lat: 13.084622, lng:80.248357})
    const ZOOM_LEVEL = 9;
    const {name}=useParams()
    const {vehicle} = Data;
    const vehicles = vehicle.find(singlevehicle => singlevehicle.name == name);
    const [search,setSearch] = useContext(MyContext)
    
    // from search
    const handleOnBlur = (e) =>{
        const newSearch = {...search};
        newSearch[e.target.name] = e.target.value;
        setSearch(newSearch);
        console.log(search);
        e.preventDefault()
    }

    // display show hide
    
    
    return (
        <div>
            
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3 firstrout">
                        
                        { show ? 
                        <div className="form-wrapper">
                            <form action="" >
                                <h6>Pick From</h6>
                                <input type="text" required name='from' onBlur={handleOnBlur}/><br/>
                                <h6>Pick To</h6>
                                <input type="text" required name='to' onBlur={handleOnBlur}/><br/>
                                <button className="btn btn-primary" onClick={()=> setShow(false)}>Search</button>
                            </form>
                        </div>
                        :
                        <div id="hidden" >
                            <div className="destination">
                                <p>{search.from}</p>
                                <p>to</p>
                                <p>{search.to}</p>
                            </div>
                            
                            <div className='d-flex destination-description align-items-center justify-content-between'>
                                <img src={vehicles.img} alt=""/> {vehicles.name} <FontAwesomeIcon icon={faMale} /><span>{vehicles.sit}</span> <span>{vehicles.price}</span>
                            </div>
                            <div className='d-flex destination-description align-items-center justify-content-between'>
                                <img src={vehicles.img} alt=""/> {vehicles.name} <FontAwesomeIcon icon={faMale} /><span>{vehicles.sit}</span> <span>{vehicles.price}</span>
                            </div>
                            <div className='d-flex destination-description align-items-center justify-content-between'>
                                <img src={vehicles.img} alt=""/> {vehicles.name} <FontAwesomeIcon icon={faMale} /><span>{vehicles.sit}</span> <span>{vehicles.price}</span>
                            </div>
                        </div>
                        }

                    </div>
                    <div className="col-md-9 map">
                        <MapContainer
                            className="markercluster-map"
                            center={[51.0, 19.0]}
                            zoom={4}
                            maxZoom={18}
                         >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};



