import React from "react";
import { DuttonLarge } from "../components/GeneralPurpose/dutton";

import { CalendarCom } from "../components/Home/CalenderCom";


import { UserContext } from "../context/UserContext";
import { Iusercontext } from "../types/context/usercontext";

import Login from "../components/login/Login-SignupModal";
import YouHome from "../components/you/YouHome";


function Aboot() {

const {addNewUser, isLoginPage} = React.useContext(UserContext) as Iusercontext

    return (
      <div>
        {isLoginPage?<YouHome/>:<Login/>}
      </div>
      
    )
}

export default Aboot