import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBreedById } from "../helpers/apiCore";
import '../css/Top10Info.css'

const Top10Info = ({ num, id }) => {
  const url_img_api = "https://cdn2.thecatapi.com/images/"
  const [info, setInfo] = useState(null);
  console.log("aqui infooo",info)
  useEffect(() => {
    getBreedById(id).then((data) => setInfo(data));
  }, [id]);

  return <div className="row mt-4 mb-4 top-10-container">
    <div className="col-sm-3 ">
    {info && <img src={info && url_img_api + info.reference_image_id + ".jpg"} alt={info && info.name}></img> }
    </div>
    <div  className="col-sm-9">
     {info && (<Link className="text-link" to={`/breed/${info.id}`}><h2 className="top-10-titles">{num}. {info.name}</h2></Link>)}
     {info && (<p className="top-10-p">{info.description}</p>)}
    </div>
   </div>;
};

export default Top10Info;
