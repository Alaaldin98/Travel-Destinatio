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
                        <img src={place.image} alt="" />
                    </Link>
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
