import React from 'react';
import Home from "./components/home/Home";
import data from "./data/db.json";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import TourDetails from './components/TourDetails/TourDetails'
import './App.css'
console.log(data);
// export default function App() {
//   return (
//     <div>
//                     <Home data={data} />

//       {/* <p>Hello Pizza 🍕 World 👋</p> */}
//     </div>
//   )
// }
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home data={data} />  } />
        <Route path="/city/:id" element={<TourDetails  data={data} />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;