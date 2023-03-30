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


function Aboot() {

const {addNewUser, isLoginPage, isPackagesPage} = React.useContext(UserContext) as Iusercontext

    return (
      <div>
        

        
        <AnimatePresence>
          {Boolean(!isLoginPage && !isPackagesPage)  && <AnimationContainer
          Component={<YouHome/>}
          condition={Boolean(!isLoginPage && !isPackagesPage) }
          /> }
          
        </AnimatePresence>


        <AnimatePresence>
          {isPackagesPage && <AnimationContainer
          Component={<YourPackeges/>}
          condition={isPackagesPage}
          /> }
          
        </AnimatePresence>
        {/* <AnimatePresence>
          {!isLoginPage && 
          <motion.div>
                <YouHome/>
          </motion.div>
        
          }
        </AnimatePresence> */}

        <AnimatePresence>
          {isLoginPage && <AnimationContainer
          Component={<Login/>}
          condition={isLoginPage}
          /> }
          
        </AnimatePresence>
        {/* {!isLoginPage?<YouHome/>:<Login/>} */}
      </div>
      
    )
}

export default Aboot