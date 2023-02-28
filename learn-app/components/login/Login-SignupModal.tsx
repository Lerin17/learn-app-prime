import React from 'react'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'
import { DuttonAlt } from '../GeneralPurpose/dutton'




const Login = () => {

  const {userData, setuserData, addNewUser, Useremailinput, Usernameinput, Userpasswordinput, setUseremailinput, setUserpasswordinput, setUsernameinput, notficationState} = React.useContext(UserContext) as Iusercontext

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
    


  



  // console.log(z)


  }



  return (
    
    <div className='flex justify-center font-header12'>
 
      {notficationState ==  'success' || notficationState == 'error'?
          <div className='w-8/12 pt-4 text-7xl text-green-200 px-2'>
            <div>
              Lerin17,
            </div>
            <div className=' text-6xl leading-tight'>
            you have successfully logged in.
            </div>
            
          </div>: 
          <div 
         style={{
          height:450
         }}
         className='w-8/12 '>
               <div className='flex items-end'>
                <div 
                onClick={()=>setisLoginModal(true)}
                className={`${isLoginModal?'text-3xl':'text-2xl'}  transition-all  `} >
                [Login]
                </div>
                  <div className={` ${!isLoginModal?'':''}  px-1`}>
                    /
                  </div>
                  <div>
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
          {userData.name?
          <div>
            <div className='text-7xl'>
            Name: Lerin
            </div>
         
            <div>
              Packages
            </div>
          </div> : 
          <div className='flex flex-col'>
          <div className='flex border-b-2 text-7xl' >
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

          <div className='flex text-7xl border-b-2' >
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
            
            {!isLoginModal && <div className='flex  text-7xl border-b-2' >
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
        }
       
           

             

              {

}
<div>
  {userData.name?<div>
      Log Out
      </div>:<div
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
      
    </div>}

    {/* <div className='text-2xl'>
      Login
    </div> */}
 

</div>
        </div>
        
        }
        
     
    </div>
  )
}

export default Login