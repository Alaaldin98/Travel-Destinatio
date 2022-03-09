import React from "react";
// import {useState} from 'react';
import Tours from "../tours/Tours";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function Home(data){
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [greeting, setGreeting] = useState("Please Log In");

    return (
    <div >
    <Header/>
    <Tours data={data}/>
    <Footer/>
    </div>
    )
};

export default Home;