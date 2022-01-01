import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBreedById } from "../helpers/apiCore";
import '../css/Top10Info.css'

const Top10Info = ({ num, id }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getBreedById(id).then((data) => setInfo(data));
  }, []);

  return <div className="row mt-4 mb-4 top-10-container">
    <div className="col-sm-3 ">
     {info && <img src={info[0].url}></img> }
    </div>
    <div  className="col-sm-9">
     {info && (<Link className="text-link" to={`/breed/${info[0].breeds[0].id}`}><h2 className="top-10-titles">{num}. {info[0].breeds[0].name}</h2></Link>)}
     {info && (<p className="top-10-p">{info[0].breeds[0].description}</p>)}
    </div>
   </div>;
};

export default Top10Info;
