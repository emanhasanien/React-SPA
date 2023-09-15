import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="conactInfo py-5 d-flex jusyify-content-center align-items-center">

        <div className="container text-center">
            <div className="row ">

                <div className="col-md-4">
                    <div>
                        <h3 className='fs-2'>LOCATION</h3>
                        <p className='fs-5 p-2'>2215 John Daniel Drive </p>
                        <p className='fs-5'>Clark, MO 65243</p>
                    </div>
                </div>

                <div className="col-md-4">

                  <div>
                    <h2>AROUND THE WEB</h2>
                  
                  <div className="socialIcons">

                    <span><i class="fa-brands fa-facebook"></i></span>
                    <span> <i class="fa-brands fa-twitter"></i></span>
                    <span><i class="fa-brands fa-linkedin-in"></i></span>
                    <span><i class="fa-solid fa-globe"></i></span>
                    
                  </div>

                  </div>
                </div>

                <div className="col-md-4">
                  <div>

                    <h2>ABOUT FREELANCER</h2>
                    <p className='fs-5'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  </div>
                </div>
                
            </div>
        </div>
      </div>


      <div className="footer">
        <p>Copyright &copy; Your Website 2021</p>
      </div>
    </>
  )
}
