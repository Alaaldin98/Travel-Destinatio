import React from 'react';
import Home from "./components/home/Home";
import data from "./data/db.json"

console.log(data);
export default function App() {
  return (
    <div>
                    <Home data={data} />

      {/* <p>Hello Pizza 🍕 World 👋</p> */}
    </div>
  )
}