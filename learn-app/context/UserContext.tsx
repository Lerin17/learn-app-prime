import React from 'react'
import { Iusercontext, Iuserdata } from '../types/context/usercontext';

import {app, database} from '../firebaseConfig'

import {collection, addDoc, getDoc, setDoc, doc } from 'firebase/firestore'
import { async } from '@firebase/util';
import e from 'express';
import useNotification from '../hooks/Notification';


const UserContext = React.createContext<Iusercontext | null>(null)

const UserContextProvider = (props:any) => {

    const [isUserStudent, setisUserStudent] = React.useState<boolean>(true);

    const {notficationState, notificationMessage, setnotficationState, setnotificationMessage} = useNotification()

    const databaseRef = collection(database, 'Users')

    const [Usernameinput, setUsernameinput] = React.useState('');

    const [Userpasswordinput, setUserpasswordinput] = React.useState('');

    const [Useremailinput, setUseremailinput] = React.useState('');



    const [userData, setuserData] = React.useState<Iuserdata>({
      name:'',
      hashedpassword:'',
      email:'',
      networks:[],
      packages:[]
    });

    const [isLoginPage, setisLoginPage] = React.useState<boolean>(true);

    console.log(notficationState,'exxexeqqqqqqqqqqqqqqqqqqq')

   React.useEffect(() => {
    if(userData.name){
      console.log(userData.name, 'exeexexexxewxexexe2xe1e')
      setnotficationState('success')
      setnotificationMessage(`${userData.name} successfully logged in`)
    }
   }, [userData]);

    const addNewUser =  () => {
      setDoc(doc(databaseRef, Usernameinput) ,{name:Usernameinput, password:Userpasswordinput,
      email:Useremailinput}).then(() => {
      alert('Data Sent')
    }).then(async ()=>{
      const getx = await getDoc(doc(database, 'Users', Usernameinput))

      console.log(getx.data())
const Data:any = getx.data()
      setuserData({
        hashedpassword:Data.password,
        name:Data.name,
        email:Data.email,
        networks:[],
        packages:[]

      })

    }).catch((err) => {
      console.log(err)
    })
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
        isUserStudent, setisUserStudent, addNewUser, isLoginPage, setisLoginPage, userData, setuserData, Userpasswordinput, setUserpasswordinput, Useremailinput, setUseremailinput, Usernameinput, setUsernameinput, notficationState
    }} >
        {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}