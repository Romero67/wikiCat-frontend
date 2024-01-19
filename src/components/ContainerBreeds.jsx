import React, {useState, useEffect} from 'react';
import {getBreeds, sumCountBreed} from '../helpers/apiCore';
import { Link } from 'react-router-dom';
import '../css/ContainerBreeds.css';

const ContainerBreeds = ({searching, search}) => {
 const [breeds, setBreeds] = useState([]);
 
 useEffect(() => {
  getBreeds().then(data => setBreeds(data));
 }, []);

 const handleClick = (el) => {
  sumCountBreed(el._id, parseInt(el.contador + 1));
  
 }

 const list = () => (
  searching && ( 
   <div className='card container-breeds'>
    <ul className='list-group list-group-flush container-breeds-items'>
     {breeds.map((el, i) => {
      if(el.name.toLowerCase().includes(search.toLowerCase())){
       return (<Link to={`/breed/${el.id}`} className='list-group-item' onClick={() => handleClick(el)} key={i}>{el.name}</Link>)
      }else{
        return ""
      }
     })}
    </ul>
    </div>
  )
 )

 return (
  <div>
   {list()}
  </div>
 )
}

export default ContainerBreeds
