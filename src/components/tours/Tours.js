import React from "react";


function Tours (props) {
    
    return(
        <>
        {
            props.data.data.map( (place , index) => {
                return(
                    <div key={index}>
                        <h3>{place.name}</h3>
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
