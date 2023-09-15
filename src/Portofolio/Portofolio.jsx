import React, { useEffect, useState } from 'react'
import LineSegment from '../LineSegment/LineSegment'
import ImageLayer from '../ImageLayer/ImageLayer'

export default function Portofolio() {
    let [backgroundColor ,setbackgroundColor] = useState("#2C3E50")
    let[iconColor , seticonColor] =useState('#2C3E50')
    
    let [selectedImage, setselectedImage] =useState(false)
    let[ showlayer ,setshowlayer] =useState('')

    let handelImageClick = (src) =>{
      
        setselectedImage(src)
        setshowlayer(true)
    }

    let handelCloseImage = () =>{
        setselectedImage(null)
        setshowlayer(false)
    }
 
  return (
    <>
    

       
    <div className="portofolio text-center py-5">
         
       {   
          showlayer?<ImageLayer selectedImage ={ selectedImage} onClose={handelCloseImage}/> :null
        }   

        <div className="container">
        <h2 className='fs-1 fw-bolder'>PORTFOLIO COMPONENT</h2>

        <LineSegment  backgroundColor ={backgroundColor} color={iconColor}/>

      <div className="row gy-5">

          <div className="col-md-4">
              <div className='imgContainer rounded-3' onClick={ () => handelImageClick(`https://routeegy.github.io/startFramework/assets/images/poert1.png`)}>
             
                 <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='w-100' alt="" />
                 <div className="layer d-flex align-items-center justify-content-center">
                     <i className="fa-solid fa-plus text-white "></i>
                 </div>

          </div>
         
         </div>


         <div className="col-md-4">
              <div className='imgContainer  rounded-3'onClick={ () => handelImageClick(`https://routeegy.github.io/startFramework/assets/images/port2.png`)} >
                 <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='w-100' alt="" />
                 <div className="layer d-flex align-items-center justify-content-center">
                     <i className="fa-solid fa-plus text-white "></i>
                 </div>

          </div>

         </div>

         <div className="col-md-4">
              <div className='imgContainer  rounded-3' onClick={ () => handelImageClick(`https://routeegy.github.io/startFramework/assets/images/port3.png`)} >
                 <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='w-100' alt="" />
                 <div className="layer d-flex align-items-center justify-content-center">
                     <i className="fa-solid fa-plus text-white "></i>
                 </div>

          </div>
         
         </div>

         <div className="col-md-4">
              <div className='imgContainer  rounded-3' onClick={ () => handelImageClick(`https://routeegy.github.io/startFramework/assets/images/poert1.png`)}>
                 <img src="https://routeegy.github.io/startFramework/assets/images/poert1.png" className='w-100' alt="" />
                 <div className="layer d-flex align-items-center justify-content-center">
                     <i className="fa-solid fa-plus text-white "></i>
                 </div>

          </div>
         </div>


         <div className="col-md-4">
              <div className='imgContainer  rounded-3' onClick={ () => handelImageClick(`https://routeegy.github.io/startFramework/assets/images/port2.png`)}>
                 <img src="https://routeegy.github.io/startFramework/assets/images/port2.png" className='w-100' alt="" />
                 <div className="layer d-flex align-items-center justify-content-center">
                     <i className="fa-solid fa-plus text-white "></i>
                 </div>

          </div>

         </div>

         <div className="col-md-4">
              <div className='imgContainer  rounded-3' onClick={ () => handelImageClick(`https://routeegy.github.io/startFramework/assets/images/port3.png`)}>
                 <img src="https://routeegy.github.io/startFramework/assets/images/port3.png" className='w-100' alt="" />
                 <div className="layer d-flex align-items-center justify-content-center">
                     <i className="fa-solid fa-plus text-white "></i>
                 </div>

          </div>
         
         </div>



         
</div>



        </div>
    </div>





    </>
  )
}
