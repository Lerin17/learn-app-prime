import React from 'react'
import { Iusercontext, Iuserdata, TsubscriberDetails } from '../types/context/usercontext';
import { Tpackage,  } from '../types/context/usercontext';
import {app, database} from '../firebaseConfig'

import {collection, addDoc, getDoc, setDoc, doc , updateDoc, arrayUnion} from 'firebase/firestore'
import { async } from '@firebase/util';
import e from 'express';
import useNotification from '../hooks/Notification';



import uniqid from 'uniqid';
import { type } from 'os';
import { UtilityContext } from './UtilityContext';
import { Iutilitycontext } from '../types/context/utilitycontext';
import { resolve } from 'node:path/win32';

const UserContext = React.createContext<Iusercontext | null>(null)

const UserContextProvider = (props:any) => {

  const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext

  console.log(routerLocation, 'roorrrrrrr')

    const [isUserStudent, setisUserStudent] = React.useState<boolean>(true);

    const {notfication, setnotfication} = useNotification()

    const databaseRef = collection(database, 'Users')

    const [Usernameinput, setUsernameinput] = React.useState('');

    const [Userpasswordinput, setUserpasswordinput] = React.useState('');

    const [Useremailinput, setUseremailinput] = React.useState('');

    const [subscribeLinkInput, setsubscribeLinkInput] = React.useState<string>('');

    const [subscriberDetails, setsubscriberDetails] = React.useState<null | TsubscriberDetails>(null);

    const [currentUserPackage, setcurrentUserPackage] = React.useState<Tpackage>( {
      name:'',
      description:'',
      courses:[],
      id:uniqid()
    });

    const [userPackagesArray, setuserPackagesArray] = React.useState<Tpackage[]>([]);




    const [userData, setuserData] = React.useState<Iuserdata>({
      name:'',
      hashedpassword:'',
      email:'',
      networks:[],
      packages:[],
      id:'',
      subscribers:[],
      yourSubscriptions:[]
    });

    const [isLoginPage, setisLoginPage] = React.useState<boolean>(false);

    const [isPackagesPage, setisPackagesPage] = React.useState<boolean>(false);

    const [isNetworkPage, setisNetworkPage] = React.useState<boolean>(false);

    const [isCreatePackage, setisCreatePackage] = React.useState<boolean>(true);

    const [isSubscriberList, setisSubscriberList] = React.useState<boolean>(false);

    const path = routerLocation

    const splitPath = path.split('/')
    
    const link = splitPath[splitPath.length - 1]

    const [subscribeToUrlLink, setsubscribeToUrlLink] = React.useState<string>(link);

    const [isWaiting, setisWaiting] = React.useState<boolean>(false);


   React.useEffect(() => {
    if(userData.name){
      console.log(userData.name, 'exeexexexxewxexexe2xe1e')
      setnotfication({
        type:'success',
        message:'successfully logged in'
      })
    }
   }, [userData]);

  //  React.useEffect(() => {
  //   if(userData.packages.length){
  //     setnotfication({
  //       type:'success-mini',
  //       message:'Packages successfully saved'
  //     })
  //   }
  //  }, [userData]);

    const addNewUser =  () => {
      setDoc(doc(databaseRef, Usernameinput) ,{name:Usernameinput, password:Userpasswordinput,
      email:Useremailinput, id:uniqid(), networks:[], packages:[], subscribers:[], yourSubscriptions:[]}).then(() => {
      alert('Data Sent')
    }).then(async ()=>{
      const getdata = await getDoc(doc(database, 'Users', Usernameinput))

      // console.log(getdata.data())
const Data:any = getdata.data()
      setuserData({
        hashedpassword:Data.password,
        name:Data.name,
        email:Data.email,
        networks:[],
        packages:[],
        id:Data.id,
        subscribers:[],
        yourSubscriptions:[]
      })

      setnotfication({
        type:'success',
        message:'Lerin, Welcome to Brown'
      })

    }).catch((err) => {
      console.log(err)
    })
    }

    // setTimeout(() => {
    //   setisCreatePackage(false)
    // }, 3000);

 

    const logininUser = async () => {
      const docRef = doc(database, 'Users', Usernameinput)
      try {
        const docSnap = await getDoc(docRef)
        
        if(docSnap.exists()){      
    const Data:any = docSnap.data()

          console.log(docSnap.data(), 'datatatatata')
          if(Data.password === Userpasswordinput){
            setuserData({
              hashedpassword:Data.password,
              name:Data.name,
              email:Data.email,
              networks:Data.networks,
              packages:Data.packages,
              id:Data.id,
              subscribers: Data.subscribers,
              yourSubscriptions:Data.yourSubscriptions
            })

            setnotfication({
              type:'success',
              message:'successfully logged in'
            })
          }else{
            setnotfication({
              type:'error',
              message:'Error logging in'
            })
          }
        }else{
          console.log('No such doc')
        }
        
      } catch (error) {
        alert('error')
        console.log(error, 'error')
      }
      

      
    }

    const updateUser = async () => {

      try {
        const res = await setDoc(doc(database, 'Users', 'pack'), {
          name:'pack',
          isStudent:isUserStudent,age:26
                })

          
      } catch (error) {
        console.log(error)
      }
  


    }

   const clearUserPackage = () => {
    setcurrentUserPackage({
      name:'',
      description:'',
      courses:[],
      id:uniqid()
    })
   }

   const copyUserLink = () => {
    setnotfication({
      type:'success-mini',
      message:'Link successfully copied'
    })
   }

   ///FIX UP FOR SUBSCRIBE AFTER SEARCH
   const subscribex = async (packageOwnerID:any, packageSubscriberID:any) => {

    const packageOwnerDocRef = doc(database, 'Users', packageOwnerID)

    const packageSubscriberDocRef = doc(database, 'Users', packageSubscriberID)

    try {

      if(userData.name){
         await updateDoc(packageOwnerDocRef, {subscribers: arrayUnion('')})

         await updateDoc(packageSubscriberDocRef, {yourSubscriptions: arrayUnion('')})
      }else{
        setnotfication({
          type:"error-mini",
          message:'please Login '
        })
      }

     
    } catch (error) {
      
    }
   }


   const subscribedToNetwork = async () => {
    if(subscriberDetails){
       const docRef = doc(database, 'Users', subscriberDetails.name)

       const docSnap = await getDoc(docRef)

       if(docSnap.exists()){
        const userRef = doc(database, 'Users', userData.name)

        await updateDoc(userRef, {
          packages: arrayUnion(currentUserPackage)
        })
        
       }
    }
   }


   const searchForNetwork = async (isClearLink:boolean) => {
    // setsubscribeToLinkInput('')
    if(!isClearLink){
     setsubscribeLinkInput('')

     setisWaiting(true)

     const userName = subscribeLinkInput.split('-')[0]
     const packageid = subscribeLinkInput.split('-')[1]

     const docRef = doc(database, 'Users', userName)

     if(!packageid){
      
     }else if(userName && packageid){
      try {
        const docSnap = await getDoc(docRef)


        if(docSnap.exists()){
          const Data:any = docSnap.data()

          console.log(Data)
        
          setnotfication({
            type:'success-mini',
            message:'User found'
          })

          console.log(Data.packages)

          const searchedPackage = Data.packages.find((item:any) => item.name == packageid)

          if(!searchedPackage){
            setnotfication({
              type:'error-mini',
              message:'Package does not exist'
            })
          }

          setsubscriberDetails({name: Data.name, SearchedPackage: searchedPackage})
          setisWaiting(false)
        }
      } catch (error) {
        setnotfication({
          type:'error-mini',
          message:'Error subscriing to network'
        })
      }

     }else{

     }
    

     
    }else{
      console.log('what happens when Url Link is used')
    }
   }




    const saveUserPackage = async () => {
      if(currentUserPackage.name === ''){
        console.log('damnnnn', notfication)
        console.log(currentUserPackage)
        setnotfication({
          type:'error-mini',
          message:'Please fill out input'
        })
      }else{
        if(userData.name){

          try {
          // const j = await 

          // const x = await database.collection()
        
        //   await updateDoc(frankDocRef, {
        //     "age": 13,
        //     "favorites.color": "Red"
        // })

      //   await updateDoc(washingtonRef, {
      //     regions: arrayUnion("greater_virginia")
      // });

      const userRef = doc(database, 'Users', userData.name)

      await updateDoc(userRef, {
        packages: arrayUnion(currentUserPackage)
      })
      
        


            setuserData(prev => ({
              ...prev,
              packages: [...prev.packages, currentUserPackage]
            }))

            setnotfication({
              type:'success-mini',
              message:'package saved successfully'
            })
          } catch (error) {
            console.log(error)

            setnotfication({
              type:'error-mini',
              message:'error saving package'
            })
            
          }

          // const savePackagePromise = new Promise<void>((resolve, reject) => {
          //   setDoc(doc (database, 'Users', 'pack'), {
          //     name:'pack2',
          //     age:45
          //   })

            
          // }).then( async (resolvexPromise) => {

          //    const docRef = doc(database, 'Users', 'pack2')

          //     const docSnap = await getDoc(docRef)

          //     if(docSnap.exists()){
          //       return docSnap.data()
          //     }
              
          // })

        
        }else{
          setnotfication({
            type:'error-mini',
            message:'Please Login'
          })
        }
      
    
        setuserPackagesArray(prev => [currentUserPackage, ...prev])
        clearUserPackage()
      }
    }

    // React.useEffect(() => {
    //   if(userData.name){
    //     setuserPackagesArray
    //   }
    // }, [userData]);

    // React.useEffect(() => {
    //   if(userPackagesArray.length =)
    // }, []);


  return (
    <UserContext.Provider value={{
        isUserStudent, setisUserStudent, addNewUser, isLoginPage, setisLoginPage, userData, setuserData, Userpasswordinput, setUserpasswordinput, Useremailinput, setUseremailinput, Usernameinput, setUsernameinput, notfication, logininUser, isPackagesPage, setisPackagesPage, isCreatePackage, setisCreatePackage,userPackagesArray, setuserPackagesArray,currentUserPackage, setcurrentUserPackage, saveUserPackage, clearUserPackage,isNetworkPage, setisNetworkPage,isSubscriberList, setisSubscriberList, copyUserLink,subscribeLinkInput, setsubscribeLinkInput,searchForNetwork, subscribeToUrlLink, setsubscribeToUrlLink, subscriberDetails, isWaiting
    }} >
        {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}