import React from 'react'
import { Iusercontext } from '../types/context/usercontext';

const UserContext = React.createContext<Iusercontext | null>(null)

const UserContextProvider = (props:any) => {

    const [isUserStudent, setisUserStudent] = React.useState<boolean>(true);


  return (
    <UserContext.Provider value={{
        isUserStudent, setisUserStudent
    }} >
        {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider}