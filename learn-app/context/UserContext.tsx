import React from 'react'
import { Iusercontext, Iuserdata } from '../types/context/usercontext';

import {app, database} from '../firebaseConfig'

import {collection, addDoc, getDoc, setDoc, doc } from 'firebase/firestore'
import { async } from '@firebase/util';
import e from 'express';
import useNotification from '../hooks/Notification';

import uniqid from 'uniqid';
import { type } from 'os';

const UserContext = React.createContext<Iusercontext | null>(null)

const UserContextProvider = (props:any) => {

    const [isUserStudent, setisUserStudent] = React.useState<boolean>(true);

    const {notfication, setnotfication} = useNotification()

    const databaseRef = collection(database, 'Users')

    const [Usernameinput, setUsernameinput] = React.useState('');

    const [Userpasswordinput, setUserpasswordinput] = React.useState('');

    const [Useremailinput, setUseremailinput] = React.useState('');



    const [userData, setuserData] = React.useState<Iuserdata>({
      name:'',
      hashedpassword:'',
      email:'',
      networks:[],
      packages:[],
      id:''
    });

    const [isLoginPage, setisLoginPage] = React.useState<boolean>(true);

    const [isPackagesPage, setisPackagesPage] = React.useState<boolean>(false);

    console.log(notfication,'exxexeqqqqqqqqqqqqqqqqqqq')

   React.useEffect(() => {
    if(userData.name){
      console.log(userData.name, 'exeexexexxewxexexe2xe1e')
      setnotfication({
        type:'success',
        message:'successfully logged in'
      })
    }
   }, [userData]);

    const addNewUser =  () => {
      setDoc(doc(databaseRef, Usernameinput) ,{name:Usernameinput, password:Userpasswordinput,
      email:Useremailinput, id:uniqid()}).then(() => {
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
        id:Data.id
      })

      setnotfication({
        type:'success',
        message:'Lerin, Welcome to Brown'
      })

    }).catch((err) => {
      console.log(err)
    })
    }

 

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
              networks:[],
              packages:[],
              id:Data.id
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


  return (
    <UserContext.Provider value={{
        isUserStudent, setisUserStudent, addNewUser, isLoginPage, setisLoginPage, userData, setuserData, Userpasswordinput, setUserpasswordinput, Useremailinput, setUseremailinput, Usernameinput, setUsernameinput, notfication, logininUser, isPackagesPage, setisPackagesPage
    }} >
        {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}