import React from 'react'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'



const Login = () => {

  const {userData, setuserData} = React.useContext(UserContext) as Iusercontext

  return (
    <div className='flex justify-center font-header12'>
         <div 
         style={{
          height:450
         }}
         className='w-8/12'>
              <div className='flex flex-col'>
              <div className='flex border-b-2 text-7xl' >
                Name
                <div className='w-full'>
                  <input
                  onChange={(e)=>{
                    setuserData(prev => ({...prev, name:e.target.value}))
                  }}
                  className='w-full text-stone-400  bg-transparent border-b-4 pl-4'
                  />
                </div>
              </div>

              <div className='flex text-7xl border-b-2' >
                Password
                <div className='w-full'>
                  <input
                   onChange={(e)=>{
                    setuserData(prev => ({...prev, hashedpassword:e.target.value}))
                  }}
                  className='w-full text-stone-400  bg-transparent border-b-4 pl-4'
                  />
                </div>
              </div>

              <div className='flex text-7xl border-b-2' >
                Email
                <div className='w-full'>
                  <input
                   onChange={(e)=>{
                    setuserData(prev => ({...prev, email:e.target.value}))
                  }}
                  className='w-full text-stone-400 bg-transparent border-b-4 pl-4'
                  />
                </div>
              </div>
              </div>

              {

}
<div>
  {Boolean( userData.name && userData.hashedpassword)  && <div
  onClick={()=>console.log('exe')}
  className='text-3xl pt-3 hover:bg-stone-300 transition-all'>
    Create Account
    </div>}

</div>
        </div>
     
    </div>
  )
}

export default Login