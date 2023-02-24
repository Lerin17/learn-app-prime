import React from 'react'
import { Iusercontext, Iuserdata } from '../types/context/usercontext';

import {app, database} from '../firebaseConfig'

import {collection, addDoc, getDoc, setDoc, doc } from 'firebase/firestore'
import { async } from '@firebase/util';
import e from 'express';



const UserContext = React.createContext<Iusercontext | null>(null)

const UserContextProvider = (props:any) => {

    const [isUserStudent, setisUserStudent] = React.useState<boolean>(true);

    const databaseRef = collection(database, 'Users')

    const [userData, setuserData] = React.useState<Iuserdata>({
      name:'',
      hashedpassword:'',
      email:'',
      networks:[],
      packages:[]
    });

    const [isLoginPage, setisLoginPage] = React.useState<boolean>(true);

    const addNewUser =  () => {
      setDoc(doc(databaseRef, userData.name) ,{name:userData.name,
      email:userData.email,
      password:userData.hashedpassword
    }).then(() => {
      alert('Data Sent')
    }).then(async ()=>{
      const getx = await getDoc(doc(database, 'Users', 'sax'))

      console.log(getx)

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
        isUserStudent, setisUserStudent, addNewUser, isLoginPage, setisLoginPage, userData, setuserData
    }} >
        {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}