import React from 'react'
import { Iusercontext, Iuserdata, TchannelDetails } from '../types/context/usercontext';
import { Tpackage,  } from '../types/context/usercontext';
import {app, database} from '../firebaseConfig'

import {collection, addDoc, getDoc, setDoc, doc , updateDoc, arrayUnion} from 'firebase/firestore'
import { async } from '@firebase/util';
import e from 'express';
import useNotification from '../hooks/Notification';

import { IcourseGroupObject, Icourseobject } from '../types/context/coursecontext';

import uniqid from 'uniqid';
import { type } from 'os';
import { UtilityContext } from './UtilityContext';
import { Iutilitycontext } from '../types/context/utilitycontext';
import { resolve } from 'node:path/win32';
import { IsaveCurrentCourseArg } from '../types/context/coursecontext';
const UserContext = React.createContext<Iusercontext | null>(null)

const UserContextProvider = (props:any) => {

  const {routerLocation, setnotfication, notfication} = React.useContext(UtilityContext) as Iutilitycontext

  console.log(routerLocation, 'roorrrrrrr')

    const [isUserStudent, setisUserStudent] = React.useState<boolean>(true);

    // const {notfication, setnotfication} = useNotification()

    const databaseRef = collection(database, 'Users')

    const [Usernameinput, setUsernameinput] = React.useState('');

    const [Userpasswordinput, setUserpasswordinput] = React.useState('');

    const [Useremailinput, setUseremailinput] = React.useState('');

    const [isUserAdminInput, setisUserAdminInput] = React.useState(false);

    const [subscribeLinkInput, setsubscribeLinkInput] = React.useState<string>('');

    const [channelDetails, setchannelDetails] = React.useState<null | TchannelDetails>(null);

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
      yourSubscriptions:[],
      allCourses:[],
      allCourseGroups:[]
    });

    const [userID, setuserID] = React.useState<string>();

    const [isLoginPage, setisLoginPage] = React.useState<boolean>(false);

    const [isPackagesPage, setisPackagesPage] = React.useState<boolean>(false);

    const [isNetworkPage, setisNetworkPage] = React.useState<boolean>(false);

    const [isCreatePackage, setisCreatePackage] = React.useState<boolean>(true);

    const [isSubscriberList, setisSubscriberList] = React.useState<boolean>(false);

    const path = routerLocation

    // const splitPath = path.split('/')
    
    // const link = splitPath[splitPath.length - 1]

    // const [subscribeToUrlLink, setsubscribeToUrlLink] = React.useState<string>(link);

    const [isWaiting, setisWaiting] = React.useState<boolean>(false);


   React.useEffect(() => {
    if(userData.name && !userID){
      console.log(userData.name, 'exeexexexxewxexexe2xe1e')
      setnotfication({
        type:'success',
        message:'successfully logged in'
      })

      setuserID(userData.name)
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

  // Usernameinput functions as the ID, should change it

    const addNewUser =  () => {

      const isAdmin = false

      setDoc(doc(databaseRef, Usernameinput) ,{name:Usernameinput, password:Userpasswordinput,
      email:Useremailinput, id:uniqid(), networks:[], packages:[], subscribers:[], yourSubscriptions:[], isAdmin}).then(() => {
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
        yourSubscriptions:[],
        allCourses:Data.allCourses,
        allCourseGroups:Data.allCourseGroups,
        isAdmin:Data.isAdmin?false:true
        
      })

      setnotfication({
        type:'success',
        message:`${Data.name}, Welcome to Brown`
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
              yourSubscriptions:Data.yourSubscriptions,
              allCourses:Data.allCourses,
              allCourseGroups:Data.allCourseGroups
            })

if(Data.name){
  
  // Store data in localStorage
  localStorage.setItem('userName', Data.name);

// Retrieve data from localStorage
// let value = localStorage.getItem('key');
// console.log(value); // Outputs: value

// Remove data from localStorage
// localStorage.removeItem('key');

// // Clear all data from localStorage
// localStorage.clear();

}


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

    // const userDatax = userData

    // const {name, hashedpassword, ...userDatax} = userDatax

    
    const subscriberObject = {
      name:userData.name,
      id:userData.id,
      email:userData.email
    }

    const yourSubscriptionsObject = {
      name:channelDetails?.name,
      packageSubscribedTo: [channelDetails?.SearchedPackage],
    }

    

    

    try {


      if(userData.name){
         await updateDoc(packageOwnerDocRef, {subscribers: arrayUnion({subscriberObject})})

         await updateDoc(packageSubscriberDocRef, {yourSubscriptions: arrayUnion(yourSubscriptionsObject)})
      }else{
        setnotfication({
          type:"error-mini",
          message:'please Login '
        })
      }

     
    } catch (error) {
      
    }
   }


  //  const subscribedToNetwork = async () => {
  //   if(channelDetails){
  //      const docRef = doc(database, 'Users', channelDetails.name)

  //      const docSnap = await getDoc(docRef)

  //      if(docSnap.exists()){
  //       const userRef = doc(database, 'Users', userData.name)

  //       await updateDoc(userRef, {
  //         packages: arrayUnion(currentUserPackage)
  //       })
        
  //      }
  //   }
  //  }


   const searchForNetwork = async (isClearLink:boolean) => {
    // setsubscribeToLinkInput('')
    if(!isClearLink){
     setsubscribeLinkInput('')

     setisWaiting(true)

     const userName = subscribeLinkInput.split('-')[0]
     const packageid = subscribeLinkInput.split('-')[1]

     const docRef = doc(database, 'Users', userName)

     if(!packageid){

      try {
        const docSnap = await getDoc(docRef)

        if(docSnap.exists()){
          const Data:any = docSnap.data()

          console.log(Data)
        
          setnotfication({
            type:'success-mini',
            message:'User found'
          })

          // console.log(Data.packages)

          // const searchedPackage = Data.packages.find((item:any) => item.name == packageid)

          // if(!searchedPackage){
          //   setnotfication({
          //     type:'error-mini',
          //     message:'Package does not exist'
          //   })
          // }

          setchannelDetails({name: Data.name, allPackages:Data.packages, SearchedPackage:null , data:Data})
          setisWaiting(false)
        }

      } catch (error) {
        
      }
      
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

          setchannelDetails({name: Data.name, SearchedPackage: searchedPackage, data:Data, allPackages:Data.packages})
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

   interface Istate {
    coursesArray:Icourseobject[]
    courseGroupArray:IcourseGroupObject[]
  }


  //  const updateUserCourseData = async (state:Istate) => {
  //   if(userData.name){
  //     console.log(userData, 'userdata')
  //       try {
  //         const userRef = doc(database, 'Users', userData.name)

  //         // await updateDoc(userRef, {
  //         //   allCourses: arrayUnion(CourseObj)
  //         // })

  //         await updateDoc(userRef, {
  //           "allCourses":state.coursesArray,
  //           "allCourseGroups":state.courseGroupArray
  //         }).then(() =>{

  //           setuserData(prev => ({
  //             ...prev,
  //             allCourses:state.coursesArray,
  //             allCourseGroups:state.courseGroupArray
  //           }))

  //         })

  //         console.log(state.coursesArray, 'stateCourse')

       

  //         setnotfication({
  //           type:'success-mini',
  //           message:'package saved successfully'
  //         })
  //       } catch (error) {
  //         console.log(error, 'error')
  //         setnotfication({
  //           type:'error-mini',
  //           message:'error saving package'
  //         })
  //       }
  //   }else{
  //     setnotfication({
  //       type:'error-mini',
  //       message:'Please Login'
  //     })
  //   }
  //  }

  interface IupdateUserCourseDataArg {
    DataObj:IsaveCurrentCourseArg ,
    type:'CourseUpdate' | 'CourseGroupUpdate'
  }
  
  const updateUserCourseData = async ({DataObj, type}:IupdateUserCourseDataArg) => {
    if(userData.name){
      console.log(userData, 'userdata')
        try {
          const userRef = doc(database, 'Users', userData.name)

          // await updateDoc(userRef, {
          //   allCourses: arrayUnion(CourseObj)
          // })

          if(type === 'CourseUpdate'){
            await updateDoc(userRef, {
              allCourses:arrayUnion(DataObj),
            }).then(async () =>{
  
              const docSnap = await getDoc(userRef)

              if(docSnap.exists()){
                const Data:any = docSnap.data()

                setuserData(prev => ({
                ...prev,
                allCourses:Data.coursesArray,
                allCourseGroups:Data.courseGroupArray
              }))
              }
              // setuserData(prev => ({
              //   ...prev,
              //   allCourses:state.coursesArray,
              //   allCourseGroups:state.courseGroupArray
              // }))
  
            })
          }else if(type === 'CourseGroupUpdate'){
            await updateDoc(userRef, {
              allCourseGroups:arrayUnion(DataObj),
            }).then(async () =>{
  
              const docSnap = await getDoc(userRef)

              if(docSnap.exists()){
                const Data:any = docSnap.data()

                setuserData(prev => ({
                ...prev,
                allCourses:Data.coursesArray,
                allCourseGroups:Data.courseGroupArray
              }))
              }
            })
          }
      

          // console.log(state.coursesArray, 'stateCourse')

       

          setnotfication({
            type:'success-mini',
            message:'package saved successfully'
          })
        } catch (error) {
          console.log(error, 'error')
          setnotfication({
            type:'error-mini',
            message:'error saving package'
          })
        }
    }else{
      setnotfication({
        type:'error-mini',
        message:'Please Login'
      })
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

      
    // await  setDoc(doc(databaseRef, Usernameinput) ,{name:Usernameinput, password:Userpasswordinput,
    //     email:Useremailinput, id:uniqid(), networks:[], packages:[], subscribers:[], yourSubscriptions:[]})
      
        


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
        isUserStudent, setisUserStudent, addNewUser, isLoginPage, setisLoginPage, userData, setuserData, Userpasswordinput, setUserpasswordinput, Useremailinput, setUseremailinput, Usernameinput, setUsernameinput,  logininUser, isPackagesPage, setisPackagesPage, isCreatePackage, setisCreatePackage,userPackagesArray, setuserPackagesArray,currentUserPackage, setcurrentUserPackage, saveUserPackage, clearUserPackage,isNetworkPage, setisNetworkPage,isSubscriberList, setisSubscriberList, copyUserLink,subscribeLinkInput, setsubscribeLinkInput,searchForNetwork, channelDetails, setchannelDetails, isWaiting, updateUserCourseData,  isUserAdminInput,
        setisUserAdminInput
    }} >
        {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}