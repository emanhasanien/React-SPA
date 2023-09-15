import React from 'react'

export default function ImageLayer({selectedImage ,onClose}) {
  
  return (
    <>
   
   <div className="image-layer " onClick={onClose}>
         <div className='Image-box '>
           <img src={selectedImage} alt="" className='w-100'/> 
         </div>
  </div>


    </>
  )
}
