import React, {useState, useEffect} from 'react';
import { getBreeds } from '../helpers/apiCore';
import Footer from './Footer';
import Top10Info from './Top10Info';

const Top10 = () => {

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
  <div className='container mt-5'>
   <h2>Top 10 most searched breeds</h2>
   {estaOrdenado && breeds.map((el, i) => {
      if(i<10){
       return (
        <Top10Info key={i} num={i+1} id={el.id}/>
        )
      }
     })}

    <Footer />
  </div>
 )
}

export default Top10
