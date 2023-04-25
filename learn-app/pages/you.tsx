import React from "react";
import { DuttonLarge } from "../components/GeneralPurpose/dutton";

import { CalendarCom } from "../components/Home/CalenderCom";



import { UserContext } from "../context/UserContext";
import { Iusercontext } from "../types/context/usercontext";

import { AnimatePresence, motion, usePresence } from "framer-motion";

import Login from "../components/login/Login-SignupModal";
import YouHome from "../components/you/YouHome";
import AnimationContainer from "../components/GeneralPurpose/AnimationContainer";
import YourPackeges from "../components/you/YourPackeges";
import YourNetwork from "../components/you/YourNetwork";
import { useRouter } from "next/router";
import { UtilityContext } from "../context/UtilityContext";
import { Iutilitycontext } from "../types/context/utilitycontext";



// import { Icoursecontext } from "../types/context/coursecontext";
// import { CourseContext } from "../context/CourseContext";


function Aboot() {

const {addNewUser, isLoginPage, isPackagesPage, isNetworkPage} = React.useContext(UserContext) as Iusercontext

const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext

    return (
  
        
       <AnimationContainer
          key={routerLocation}
          Component={<YouHome/>}
          condition={Boolean(routerLocation == '/you') }
          /> 
          
        

     
      
    )
}

export default Aboot