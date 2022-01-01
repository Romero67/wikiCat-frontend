import {useEffect, useRef} from 'react';

export function useClickOutside(handler, secondHandler = null){
 let domNode = useRef();

 useEffect(() => {
   let maybeHandler = (event) => {
    if (domNode.current && !!domNode.current.contains(event.target)) {
       handler();
     }else{
      if(secondHandler){
       secondHandler();
      }
     }
   };

   document.addEventListener("mousedown", maybeHandler);

   return () => {
     document.removeEventListener("mousedown", maybeHandler);
   };
 });

 return domNode;
}