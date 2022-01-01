const {API} = require('../config');

export const getBreeds = () =>{
 return fetch(`${API}/cat/breeds`,{
  method: 'GET',
  headers: {
   'Content-Type': 'application/json'
  }
 }).then(res => {return res.json()});
}

export const sumCountBreed = (id, contador) => {
 const obj = {id, contador};
 return fetch(`${API}/cat/sumCount`,{
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify(obj)
 }).then(res => {return res.json()});
}

export const getImgBreed = (img_id) => {
 return fetch(`${API}/cat/breedImg`,{
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify({img_id})
 }).then(res => {return res.json()});
}

export const getBreedById = (id) => {
 return fetch(`${API}/cat/breedId`,{
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify({id})
 }).then(res => {return res.json()});
}

export const getImagesBreed = (id) => {
 return fetch(`${API}/cat/imagesBreed`,{
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: JSON.stringify({id})
 }).then(res => {return res.json()});
}