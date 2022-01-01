import React, {useState} from 'react';
import SearchBreed from './SearchBreed';
import TopBreeds from './TopBreeds';
import '../css/Home.css'
import ShowImage from './ShowImage';
import Footer from './Footer';
import ModalBreeds from './ModalBreeds';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

export const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const {width} = useWindowDimensions();

 return (
  width < 576 && modalActive ? <ModalBreeds setModalActive={setModalActive}/> :
  <div>
    <div className='container main'>
      <div className='row header'>
        <div className='col-sm-8 head'>
        <h1>Cat Wiki</h1>
        <h3>Get to know more about your cat breed</h3>
        <SearchBreed setModalActive={setModalActive}/>
        
      </div>
    </div>

    <div className="row">
      <TopBreeds />
    </div>

    <div className="row mb-3 container-imagenes">
      <div className="col-sm-4 container-info">
      <div className='title-sub title-info'></div>
      <h2>Why you should have a cat?</h2>
      <p>Having a cat around you can actually trigger the release of calming chemicals in your body wich lower your stress and anxiety leves</p>
      <p><b>READ MORE...</b></p>
      </div>
      <div className="col-sm-8 container-img">
      <div className='container-img-left'>
        <div className='img1'>
        <ShowImage idImg={'HOrX5gwLS'}/>
        </div>
        <div className='img2'>
        <ShowImage idImg={'1RqOULq3C'}/>
        </div>
      </div>
      <div>
      <div className='img3'>
        <ShowImage idImg={'e6v'}/>
        </div>
      </div>
      </div>
    </div>

     <Footer />

    </div>
  </div>
 )
}

export default Home