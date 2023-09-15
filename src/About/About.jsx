import React from 'react'
import LineSegment from '../LineSegment/LineSegment'

export default function About() {
  return (
    <>
 
    <div className="about d-flex align-items-center justify-content-center text-center">


    <div className="container">
    
    <h2 className='text-white fs-1 fw-bolder'>ABOUT COMPONENT</h2>

    <LineSegment/>

      <div className="container">
      <div className="row text-white">
        
        <div className="col-md-6">
            <div>
                <p className='p-2 fs-5 text-start '>Freelancer is a free bootstrap theme created by Route. 
                    The download includes the complete source files including HTML, CSS, 
                    and JavaScript as well as optional SASS stylesheets for easy customization.

                </p>
            </div>
        </div>

        <div className="col-md-6">
            <div>
                <p className='p-2 text-start fs-5'>Freelancer is a free bootstrap theme created by Route. 
                    The download includes the complete source files including HTML, CSS, 
                    and JavaScript as well as optional SASS stylesheets for easy customization.

                </p>
            </div>
        </div>
      </div>
    </div>

    </div>
    </div>

    </>
  )
}
