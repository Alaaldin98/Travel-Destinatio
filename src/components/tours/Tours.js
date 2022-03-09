import React from "react";
import {Link} from 'react-router-dom';


function Tours (props) {
    
    return(
        <>
        {
            props.data.data.map( (place , index) => {
                return(
                    <div key={index}>
                    <Link to={`city/${place.id}`}>
                        <h3>{place.name}</h3>
                        </Link>
                        <img src={place.image} alt="" />
                        {/* <p>{place.info}</p> */}
                        {/* <p>{place.price}</p> */}
                    </div>
                )
                
            })
        }
        </>
        
        
    )
};

export default Tours;     
