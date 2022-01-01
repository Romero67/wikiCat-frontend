import React from 'react';
import '../css/Footer.css'

const Footer = () => {
 return (
  <div className="row justify-content-between align-items-center footer">
    <div className='col logo-footer'>
     <p>Logo</p>
    </div>
    <div className='col info-footer'>
     <p>&copy; created by Mariano Romero -devChallenge.io 2021</p>
    </div>
   </div>
 )
}

export default Footer
