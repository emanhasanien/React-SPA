import React, { useState } from 'react'
import LineSegment from '../LineSegment/LineSegment'



export default function Contact() {

  let [backgroundColor ,setbackgroundColor] = useState("#2C3E50")
  let[iconColor , seticonColor] =useState('#2C3E50')

const [userName ,setuserName] = useState('')
const [userAge ,setuserAge] =useState('')
const [userEmail ,setuserEmail] =useState('')
const [userPassword ,setuserPassword] =useState('')

const [showUserNameLabel , setshowUserNameLabel] = useState(false)
const [showUserAgeLabel , setshowUserAgeLabel] = useState(false)
const [showUserEmailLabel , setshowUserEmailLabel] = useState(false)
const [showuserPasswordLabel , setshowuserPasswordLabel] = useState(false)


let handleChangeOnUserName = (e)=> {

  if(e.target.value != ''){
    setuserName(e.target.userName)
    setshowUserNameLabel(e.target.userName !='')
  }
  
}

let handleChangeOnUserAge = (e)=> {
  setuserAge(e.target.userAge)
  setshowUserAgeLabel(e.target.userAge !='')
  
}

let handleChangeOnUserEmail = (e)=> {
  setuserEmail(e.target.userEmail)
  setshowUserEmailLabel(e.target.userEmail !='')
  
}

let handleChangeOnUserPassword = (e)=> {
  setuserPassword(e.target.userEmail)
  setshowuserPasswordLabel(e.target.userEmail !='')
  
}


  return (
    <>

    <div className="contact  py-5">
        <div className="container">
           
        <h2 className='fs-1 fw-bolder  text-center'>CONATCT SECTION</h2>

        <LineSegment backgroundColor ={backgroundColor} color={iconColor}/>

        <form  className='w-50 mx-auto'>
           <div>

           { showUserNameLabel && <label  htmlFor="userName"  className='position-relative top-0 top'>userName:</label> }
            <input
             id='userName' 
             type="text"
             value={userName}
             onChange={handleChangeOnUserName}
              className='form-control py-3 '
               placeholder='userName' />
             
              
           </div>


           <div>
            
           { showUserAgeLabel && <label  htmlFor="userAge"  className='position-relative top-0 top'>userAge:</label> }
            <input
             id='userAge' 
             type="text"
             value={userAge}
             onChange={handleChangeOnUserAge}
              className='form-control py-3  my-4'
               placeholder='userAge' />
             
              
           </div>

           <div>
            
           { showUserEmailLabel && <label  htmlFor="userEmail"  className='position-relative top-0 top'>userEmail:</label> }
            <input
             id='userEmail' 
             type="text"
             value={userEmail}
             onChange={handleChangeOnUserEmail}
              className='form-control py-3  my-4'
               placeholder='userEmail' />
             
              
           </div>


           <div>
            
            { showuserPasswordLabel && <label  htmlFor="userPassword"  className='position-relative top-0 top'>userPassword:</label> }
             <input
              id='userPassword' 
              type="text"
              value={userPassword}
              onChange={handleChangeOnUserPassword}
               className='form-control py-3  my-4'
                placeholder='userPassword' />
              
               
            </div>

         <button className='btn px-4 py-2'>Submit</button>

        </form>

        </div>
    </div>

   

    </>
  )
}

