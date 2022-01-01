import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home'
import InfoBreed from './components/InfoBreed';
import Top10 from './components/Top10';


const MyRoutes = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path='/breed/:id' element={<InfoBreed />} />
    <Route path='/top10' element={<Top10 />} />
    <Route exact path='/' element={<Home />} />
   </Routes>
  </BrowserRouter>
 )
}

export default MyRoutes
