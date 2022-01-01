import React from 'react';
import '../css/Levels.css'

const Levels = ({level}) => {

 return (
  <div className='container-levels'>
   <div className={level > 0 ? 'level level-active' : 'level'}></div>
   <div className={level > 1 ? 'level level-active' : 'level'}></div>
   <div className={level > 2 ? 'level level-active' : 'level'}></div>
   <div className={level > 3 ? 'level level-active' : 'level'}></div>
   <div className={level > 4 ? 'level level-active' : 'level'}></div>
  </div>
 )
}

export default Levels
