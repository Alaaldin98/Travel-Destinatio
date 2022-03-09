
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';


export default function TourDetails({data}){
  let {id}= useParams();

  let place = data.filter(place =>place.id === id);
//   const [seeMore, setSeeMore]= useState(false);  
 

  return(
    <>
    <Header/>
    <article><div>
        <h1>{place[0].name}</h1>
        <p>
        {place[0].info}
        </p>
        <img src= {place[0].image} alt="" />    
        <p>Price= ${place[0].price} </p>
   
      </div>
    </article>
    <Footer/>
    </>
   
  )
};
