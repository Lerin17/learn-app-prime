import React from 'react'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'
import { DuttonAlt } from '../GeneralPurpose/dutton'
import ProfilePage from './Login/ProfilePage'




const Login = () => {

  const {userData, setuserData, addNewUser, Useremailinput, Usernameinput, Userpasswordinput, setUseremailinput, setUserpasswordinput, setUsernameinput, notfication,  logininUser} = React.useContext(UserContext) as Iusercontext

  const [hashedPass, sethashedPass] = React.useState<any>('');

  const [truepassword, settruepassword] = React.useState('');

  const hashoptions = ['$', '#','@','!','*', '/', '-', '+']

  const [isLoginModal, setisLoginModal] = React.useState(true);


  const [isCheckLogininputs, setisCheckLogininputs] = React.useState(false);
  


  const gethashedpass = (e:any) => {
    const randomNumber = ()=> Math.floor(Math.random() * 6)
    const hashvalue = () => hashoptions[randomNumber()]

 const x =  e.target.value


// setTimeout(() => {
//   console.log(truepassword, 'trueone')
// }, 2000);

 const y:string[] = x.split('')



  console.log(x, 'event')
    console.log(y)

    if(!truepassword){
      settruepassword(y[y.length -1])
    }else{
      settruepassword(prev => (prev + y[y.length-1]))
    }
    
    console.log(truepassword)
  
    const last = y[y.length-1]
    
    const lastx = hashvalue()

    const z = y.map((item:string) => {
      if(y.indexOf(item)){
        console.log(y.indexOf(item))
      }
      return (
        hashvalue()
      )
    })
  
  
   

    if(!hashedPass.length){
      sethashedPass(z)
    }else{
      let newvalue = [...hashedPass, lastx]
      newvalue = newvalue.slice(0, y.length+1)
      const jack = newvalue.join('')
      sethashedPass(jack)
    }
    
  }



  return (
     
    <div className='flex justify-center font-header12'>
  
          <div 
         style={{
          height:450
         }}
         className='lg:w-8/12 md:w-10/12   w-11/12 '>
            {userData.name?<div>
              <ProfilePage
              userData = {userData}
              />
            </div>:
  <div>

  <div className='flex items-center'>
      <div className={`${isLoginModal?'border-b-4':''}`} >
        <DuttonAlt
        icon={'Login'}
        handleClick={()=>setisLoginModal(true)}
        />
      </div>

        <div className='text-2xl px-1'>
          or
        </div>
        <div className={`${!isLoginModal?'border-b-4':''}`} >
          <DuttonAlt
          handleClick={()=>setisLoginModal(false)}
          icon={'Create an account'}
          />
        </div>
      {/* <div
      onClick={()=>setisLoginModal(false)}
      className={`${!isLoginModal?'text-3xl':'text-2xl'}  transition-all  flex hover:bg-stone-200`} >
        <span  className='text-stone-200' >
          [
        </span>
        <span className='hover:text-stone-800'>
        Create an account
        </span>
        <span  className='text-stone-200'>
          ]
        </span>

      </div> */}

  </div>

<div className='flex flex-col'>
<div className='flex border-b-2 lg:text-7xl md:text-4xl xs:text-xl' >
  Name
  <div className='w-full'>
    <input
    value={Usernameinput}
    onChange={(e)=>{
     setUsernameinput(e.target.value)
    }}
    className='w-full text-stone-400  bg-transparent focus:border-none focus:text-stone-800 transition-all border-b-4 pl-4'
    />
  </div>
</div>

<div className='flex lg:text-7xl md:text-4xl xs:text-xl border-b-2' >
  Password
  <div className='w-full'>
    <input
    type={'password'}
    value={Userpasswordinput}
     onChange={(e)=>{
      // gethashedpass(e)
      setUserpasswordinput(e.target.value)
    }}
    className='w-full focus:border-none focus:text-stone-800 text-stone-400  bg-transparent transition-all  border-b-4 pl-4'
    />
  </div>
</div>
  
  {!isLoginModal && <div className='flex  text-7xl border-b-2'>
  Email
  <div className='w-full'>
    <input
      value={Useremailinput}
     onChange={(e)=>{
      setUseremailinput(e.target.value)
    }}
    className='w-full focus:border-none focus:text-stone-800 transition-all text-stone-400 bg-transparent border-b-4 pl-4'
    />
  </div>
</div>}

</div>
  </div>
            }
          
            
        
       
           

             

              {

}
<div>
{!userData.name && 
 <DuttonAlt
 icon={'Submit'}
 handleClick={isLoginModal?     
   ()=>logininUser():()=>addNewUser()
}
 />
}
 
  {/* {userData.name?
  <div>
      Log Out
      </div>:
      <div
 onMouseEnter={()=>setisCheckLogininputs(true)}
 onMouseLeave={()=>setisCheckLogininputs(false)}
  onClick={()=>addNewUser()}
  className={`text-3xl   ${!Userpasswordinput? 'hover:bg-red-700 hover:text-gray-300':'bg-amber-900 hover:bg-stone-300 '}transition-all   `}>
    {isCheckLogininputs?<div className='border py-2'>
      {!Userpasswordinput ? <div className=' text-white transition-all'>
        Please enter missing inputs
      </div>:<div>
          Submit
        </div>}
    </div>:
    <div className='py-2' >
      Submit
      </div>}
      
    </div>} */}

    {/* <div className='text-2xl'>
      Login
    </div> */}
 

</div>
        </div>
        
        
        
     
    </div>
  )
}

export default Login