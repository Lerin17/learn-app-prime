import React from 'react'
import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'



const Login = () => {

  const {userData, setuserData, addNewUser, Useremailinput, Usernameinput, Userpasswordinput, setUseremailinput, setUserpasswordinput, setUsernameinput, notficationState} = React.useContext(UserContext) as Iusercontext

  const [hashedPass, sethashedPass] = React.useState<any>('');

  const [truepassword, settruepassword] = React.useState('');

  const hashoptions = ['$', '#','@','!','*', '/', '-', '+']



  


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

  console.log(notficationState,'notiixexexxexexexexexexexxdexzf')

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
         className='w-8/12'>
       
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

           <div className='flex  text-7xl border-b-2' >
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
           </div>
           </div>

             

              {

}
<div>
  {Boolean( Usernameinput && Useremailinput)  && <div
  onClick={()=>addNewUser()}
  className='text-3xl pt-3  hover:bg-stone-300 transition-all'>
    Create Account
    </div>}

</div>
        </div>}
        
     
    </div>
  )
}

export default Login