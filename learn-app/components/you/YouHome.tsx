import React from 'react'

import { DuttonLarge } from '../GeneralPurpose/dutton';


import { UserContext } from '../../context/UserContext'
import { Iusercontext } from '../../types/context/usercontext'
import Link from 'next/link';


const YouHome = () => {

    
const {addNewUser, setisLoginPage, setisPackagesPage, setisNetworkPage, userData} = React.useContext(UserContext) as Iusercontext

// let isUserAlreadyHaveAnAccount:any

const [isUserAlreadyHaveAnAccount, setisUserAlreadyHaveAnAccount] = React.useState<any>();

React.useEffect(() => {
 const getValue = localStorage.getItem('userName')
 
 setisUserAlreadyHaveAnAccount(getValue)
 console.log(getValue, "isUserAlreadyHaveAnAccount")

}, []);

  return (
    <div
    style={{
        height:450,
        // backdropFilter: 'blur(10px)'
    }}
    className="flex w-full  justify-center ">
                  <div className="pt-3 xl:text-7xl lg:text-5xl md:text-4xl text-2xl text-white xl:w-8/12 lg:w-9/12 md:w-10/12 w-11/12" >
       {/* <CalendarCom/> */}
<div>
{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 21.193l-.003.807h-19.993l-.004-.833c-.009-2.224.088-3.495 2.647-4.086 2.805-.647 5.573-1.227 4.242-3.682-3.943-7.275-1.123-11.399 3.111-11.399 4.153 0 7.043 3.971 3.11 11.398-1.292 2.44 1.375 3.02 4.242 3.682 2.57.594 2.657 1.873 2.648 4.113zm4-17.193h-7v2h7v-2zm0 4h-7v2h7v-2zm0 4h-7v2h7v-2z"/></svg> */}


</div>
{/* ()=>addNewUser() */}

<Link href={'/you/youraccount'}>
<div className='flex'>
<div>
          <DuttonLarge
  handleClick={()=>{
 console.log('xx')
  }}
  icon={<svg className='fill-current text-amber-800' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>}
  />
          </div>

<div onClick={()=>{
        console.log('damsn')
        setisLoginPage(prev => !prev)}} className="     font-header12  transition-all hover:text-stone-800 text-stone-200 textshadow flex" >
            <div className=''>
              {userData.name?`View ${userData.name}'s Profile`: isUserAlreadyHaveAnAccount?'Login into your account': 'Create Your Unique Profile'}
            
            </div>       
  ,
       </div>

</div>

</Link>



  <Link
  href={'/you/yourpackages'}
  >
        <div className='flex'>
<div  

className=" flex     font-header12 transition-all hover:text-stone-800 text-stone-200 textshadow  lg:pt-3 md:pt-2 pt-1" >
       <DuttonLarge
                // handleClick={()=>console.log('cap a ')}
                handleClick={()=>setisPackagesPage(true)}
                icon={<svg
                    className='fill-current text-amber-800'
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.744 16.683l.349-.199v1.717l-.349.195v-1.713zm3.414-.227l.342-.196v-1.717l-.343.195v1.718zm-1.429.813l.343-.195v-1.717l-.343.195v1.717zm.578-.329l.349-.199v-1.717l-.349.199v1.717zm-1.152.656l.343-.196v-1.717l-.343.196v1.717zm-.821.467l.343-.195v-1.717l-.343.195v1.717zm6.666-11.122v11.507l-9.75 5.552-12.25-6.978v-11.507l9.767-5.515 12.233 6.941zm-12.236-4.643l-2.106 1.19 8.891 5.234-.002.003 2.33-1.256-9.113-5.171zm1.236 10.59l-9-5.218v8.19l9 5.126v-8.098zm3.493-3.056l-8.847-5.208-2.488 1.405 8.86 5.138 2.475-1.335zm5.507-.696l-7 3.773v8.362l7-3.985v-8.15z"/></svg>}
                />
         Tour Your  Packages <div>
            </div>,
       </div>
</div>
  </Link>

     
  <Link
  href={'/you/yournetwork'}
  >
    <div className='flex'>

    <DuttonLarge
                // handleClick={()=>console.log('cap a ')}
                handleClick={()=>console.log('tex')}
                icon={<svg 
                  className='fill-current text-amber-800'
                  width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M16.272 5.451c-.176-.45-.272-.939-.272-1.451 0-2.208 1.792-4 4-4s4 1.792 4 4-1.792 4-4 4c-1.339 0-2.525-.659-3.251-1.67l-7.131 3.751c.246.591.382 1.239.382 1.919 0 .681-.136 1.33-.384 1.922l7.131 3.751c.726-1.013 1.913-1.673 3.253-1.673 2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4c0-.51.096-.999.27-1.447l-7.129-3.751c-.9 1.326-2.419 2.198-4.141 2.198-2.76 0-5-2.24-5-5s2.24-5 5-5c1.723 0 3.243.873 4.143 2.201l7.129-3.75zm3.728 11.549c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3zm-15-9c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm15-7c1.656 0 3 1.344 3 3s-1.344 3-3 3-3-1.344-3-3 1.344-3 3-3z"/></svg>}
                />

    <div 
       onClick={()=>setisNetworkPage(true)}
       className="   font-header12 transition-all text-stone-200 hover:text-stone-800 lg:pt-3 md:pt-2 pt-1 textshadow" >
           Tour Your Network.
       </div> 


    </div>

  </Link>
       
    </div>
    </div>
  )
}

export default YouHome