import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { getBreedById, getImagesBreed } from '../helpers/apiCore';
import ShowImage from './ShowImage';
import '../css/InfoBreed.css'
import Features from './Features';
import Footer from './Footer';

const InfoBreed = () => {
 const [info, setInfo] = useState(null);
 const [images, setImages] = useState([]);

 const { id } = useParams();
 console.log("idddd:",id)
 console.log("info:",info)
 useEffect(() => {
  getBreedById(id).then(data => setInfo(data[0]));
 }, [id])

 useEffect(() => {
  getImagesBreed(id).then(data => setImages(data));
 }, [id])

 return (
  <div className='container mt-5'>
   <div className="row">
    {info && <>
    <div className="col-sm-4 image-info">
     <ShowImage idImg={info.id}/>
    </div>
    <div className="col-sm-8">
     <h2>{info && info.breeds[0].name}</h2>
     <p>{info && info.breeds[0].description}</p>
     <p><b>Temperament: </b>{info && info.breeds[0].temperament}</p>
     <p><b>Origin: </b>{info && info.breeds[0].origin}</p>
     <p><b>Life Span: </b>{info && info.breeds[0].life_span}</p>
     <div className="row">

      <Features feature={'Adaptability'} lvl={info && info.breeds[0].adaptability}/>
      <Features feature={'Affection Level'} lvl={info && info.breeds[0].affection_level}/>
      <Features feature={'Child Friendly'} lvl={info && info.breeds[0].child_friendly}/>
      <Features feature={'Grooming'} lvl={info && info.breeds[0].grooming}/>
      <Features feature={'Intelligence'} lvl={info && info.breeds[0].intelligence}/>
      <Features feature={'Health Issues'} lvl={info && info.breeds[0].health_issues}/>
      <Features feature={'Social Needs'} lvl={info && info.breeds[0].social_needs}/>
      <Features feature={'Stranger Friendly'} lvl={info && info.breeds[0].stranger_friendly}/>

     </div>
    </div> 
    </>}
   </div>
     <h3>Other Photos</h3>
   <div className="row">
     {images && images.map((el, i) => {
      return(
       <div className="col mt-4 galery" key={i}>
        <ShowImage idImg={el.id}/>
       </div>
      )
     })}
   </div>

     <Footer/>
  </div>
 )
}

export default InfoBreed
