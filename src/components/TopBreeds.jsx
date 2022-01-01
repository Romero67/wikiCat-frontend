import React, {useState, useEffect} from 'react';
import {getBreeds} from '../helpers/apiCore';
import ShowImage from './ShowImage';
import '../css/TopBreeds.css'
import { Link } from 'react-router-dom';

const TopBreeds = () => {

 const [breeds, setBreeds] = useState([]);
 const [estaOrdenado, setEstaOrdenado] = useState(false);

 useEffect(() => {
  getBreeds().then(data => setBreeds(data));
 }, []);

 useEffect(() => {
  if(breeds.length > 0){
   const ordenado = breeds.sort((x,y) => x.contador > y.contador ? -1: 1)
   setBreeds(ordenado);
   setEstaOrdenado(true)
  }
 }, [breeds]);


 return (
  <div className='container container-top'>
   <div className="row m-2">
    <h4 className='title-top'>Most Searched Breeds</h4>
    <div className="title-sub"></div>
   </div>
   <div className="row m-2">
    <div className="col-sm-6">
     <h2 className='text-top'>66+ Breeds For you to discover</h2>
    </div>
    <div className="col-sm-6 more">
     <Link className='text-link' to={'/top10'}><p>SEE MORE...</p></Link>
    </div>
   </div>
   <div className="row justify-content-center mb-5 mt-3">
     {estaOrdenado && breeds.map((el, i) => {
      if(i<4){
       return (
        <Link to={`/breed/${el.id}`} className="col col-img text-link" key={el._id}>
          <ShowImage idImg={el.img_id}/>
          <h4>{el.name}</h4>
        </Link>
        )
      }
     })}
   </div>
  </div>
 )
}

export default TopBreeds