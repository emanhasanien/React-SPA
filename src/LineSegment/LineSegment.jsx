import React from 'react'

export default function LineSegment({backgroundColor,color}) {
  
  
  return (
    <>
   
   <div className="lineContainer d-flex align-items-center justify-content-center mb-3 ">
    
            <div className="line me-3" style={{backgroundColor}} ></div>
            <i className="fa-solid fa-star fs-3" style={{color}} ></i>
            <div className="line ms-3" style={{backgroundColor}}></div>
   </div>
    </>
  )
}
