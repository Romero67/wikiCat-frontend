import React, {useState, useEffect} from 'react';
import { getImgBreed } from '../helpers/apiCore'; 
import '../css/ShowImage.css'

const ShowImage = ({idImg}) => {
 const [breed, setBreed] = useState(false);

 useEffect(() => {
  getImgBreed(idImg).then(data => setBreed(data));
 }, [])

 return (
  <>
   {breed &&
     <img src={breed.url} alt="" />
   }
  </>
 )
}

export default ShowImage
