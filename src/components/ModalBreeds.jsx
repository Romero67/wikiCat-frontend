import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/ModalBreeds.css'
import { getBreeds, sumCountBreed } from '../helpers/apiCore';

const ModalBreeds = ({setModalActive}) => {
 const [breeds, setBreeds] = useState([]);
 const [search, setSearch] = useState('');

 
 useEffect(() => {
  getBreeds().then(data => setBreeds(data));
 }, []);

 const handleClick = (el) => {
  sumCountBreed(el._id, parseInt(el.contador + 1));
 }

 const handleChange = (e) => {
  setSearch(e.target.value)
 }

 const handleClockExit = () => {
  setModalActive(false);
 }

 const list = () => (
  (
   <div className='container container-modal'>
    <div className="row">
     <div className="col exit-modal">
      <div className='container-exit' onClick={handleClockExit}>
       <p><b>x</b></p>
      </div>
     </div>
    </div>
    <div className="row mb-2 mt-2 container-input-modal">
     <div className="col">
      <input type="text" onChange={handleChange}/>
     </div>
    </div>
    <div className="modal-list list-group-flush">
     {breeds.map((el, i) => {
       if(el.name.toLowerCase().includes(search.toLowerCase())){
        return (<Link to={`/breed/${el.id}`} className='list-group-item' onClick={() => handleClick(el)} key={i}>{el.name}</Link>)
       }
      })}
    </div>
   </div>
  )
 )

 return (
  <div>
   {list()}
  </div>
 )
}

export default ModalBreeds
