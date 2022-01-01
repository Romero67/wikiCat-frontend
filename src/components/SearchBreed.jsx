import React, {useState} from 'react';
import ContainerBreeds from './ContainerBreeds';
import { useClickOutside } from '../hooks/useClickOutside';
import '../css/SearchBreed.css'

const SearchBreed = ({setModalActive}) => {
 const [search, setSearch] = useState('');
 const [searching, setSearching] = useState(false);

 let domNode = useClickOutside(() => {
  setSearching(true)
  setModalActive(true)
}, () => {
 setSearching(false)
 setModalActive(false)
});

 const handleChange = (e) => {
  setSearch(e.target.value)
 }


 return (
  <div ref={domNode} className='search-breed'>
   <input className='search-input' type="text" value={search} onChange={handleChange} placeholder='Enter your breed'/>
   <ContainerBreeds searching={searching} search={search}/>
  </div>
 )
}

export default SearchBreed
