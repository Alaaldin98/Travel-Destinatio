import React from "react";
import Tours from "../tours/Tours";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Home(data){
    return (
    <div>
    <Header/>
    <Tours data={data}/>
    <Footer/>
    </div>
    )
};

export default Home;