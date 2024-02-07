// import {useRouter} from 'next/router'

import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext'
import { UserContext } from '../../context/UserContext'

import { Iassesmentcontext } from '../../types/context/assesmentcontext'
import { DuttonSmall } from './dutton'
import Text from './Text'
import TextAlt from './TextAlt'


import useNotification from '../../hooks/Notification'
import { Iusercontext } from '../../types/context/usercontext'
import { AnimatePresence, motion } from 'framer-motion'
import { CourseContext } from '../../context/CourseContext'
import { Icoursecontext } from '../../types/context/coursecontext'
import { UtilityContext } from '../../context/UtilityContext'
import { Iutilitycontext } from '../../types/context/utilitycontext'
import { useRouter } from 'next/router'

const Mavbar = () => {
  const {isCreateQuestionsOpen, setisCreateQuestionsOpen,    isQuestionHome, setisQuestionHome, setisQuestionList, isQuestionList, setisQuestionsTest, } = React.useContext(AssesmentContext) as Iassesmentcontext

  // const {courseNotification} = React.useContext(CourseContext) as Icoursecontext

  const {notfication} = React.useContext(UtilityContext) as Iutilitycontext

  //IMPORTANT, i hashed out notification from use context imports
  const {isLoginPage, setisLoginPage, setisPackagesPage, setisNetworkPage} = React.useContext(UserContext) as Iusercontext


  const returnHomeAssesment = () => {
    setisCreateQuestionsOpen(false)
    setisQuestionList(false)
    setisQuestionsTest(false)
    setisQuestionHome(true)
  }

  const returnHomeYou = () => {
    setisLoginPage(false)
    setisPackagesPage(false)
    setisNetworkPage(false)
    
  }

  const routerPathName = useRouter().asPath

  // console.log(notfication,'exxexeqqqqqqqqqqqqqqqqqqq')

  // React.useEffect(() => {
    
  // }, []);
  // const routerLocation = Router.pathname

  // console.log(routerLocation, 'routeer')

  return (
  
    
          

        <motion.div
        style={{
          overflow:'hidden'
      }}
        className= {`transition-all  md:w-10/12   w-11/12 xl:w-8/12 lg:w-9/12 w-11/12 lg:text-xl md:text-lg text-xs  z-40`}  >
    
    
    
      {  
      (notfication?.type == 'error-mini' || notfication?.type == 'success-mini') ?
      <motion.div
      animate={{
        x:0
      }}

      // exit={{
      //   x:300
      // }}

      initial={{
        x:300
      }}
      className='relative'>
              <div className='text-white font-header10 text-bold text-xl relative z-10 pl-3 py-2'>
              {notfication?.message}

      </div>

      <div 
      style={{
        opacity:'72%'
      }}
      className={`${notfication.type=='error-mini'?' bg-red-600':' bg-green-600'} absolute text-transparent font-header10 text-xl  py-2 px-1 top-0 w-full`}>
     x
        </div>
       
      </motion.div>:
    <div 
                style={{
                  // overflow:'hidden'
                    // border:'solid 4px #89ABD0',
               
                //   backgroundImage: `url(../image/nylon.png)`,
                //   backgroundSize: 'cover',
                //  background:'radial-gradient(circle, rgba(235,225,225,1) 18%, rgba(215,218,222,1) 26%, rgba(206,210,217,1) 39%, rgba(235,237,241,1) 49%, rgba(204,204,214,0.9876283276982668) 64%, rgba(167,159,159,1) 90%)'
                }}
                className={` flex     justify-between  py-1   font-header10 text-gray-300 bg-transparent  w-full `}>
                  
                  <div className='flex w-full  transition-all   ' >
                  <TextAlt
                  possibleStringsArray={[
                    {isAnimate:Boolean(useRouter().asPath=='/assesment') , text:'Assement'},
                    {isAnimate:useRouter().asPath=='/courses', text:'Courses'},
                    {isAnimate:useRouter().asPath=='/students', text:'Student'},
                    {isAnimate:useRouter().asPath=='/you', text:'You'},
                    {isAnimate:useRouter().asPath=='/liveclasses', text:'Live Classes'},
                    // {isAnimate:Router.pathname=='/', text:'Home'},
                    ,
                  ]}
                  />
                  /
                 <motion.div
                 animate={{
                  // x:30
                 }}
                 className='transition-all'>
                 <TextAlt
                  possibleStringsArray={[
                    {isAnimate:isQuestionHome,
                    text:'Home'},
                    {isAnimate:isCreateQuestionsOpen,
                      text:'CreateQuestions'},
                    {isAnimate:isQuestionList,
                      text:'QuestionList'}
                  ]}
                  />
                  </motion.div> 
                  </div>
          
    
                    {/* <Text
                    isAnimate={isQuestionHome}
                    /> */}
        
                  {/* <div className='' >courses/createCourse</div> */}
    
                  <DuttonSmall
                  icon={<div className='text-gray-300 '> 
                <svg className='fill-current text-gray-300' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
                  </div>}
                  handleClick={ ()=>{
                    
                    if(routerPathName == '/assesment'){
                     
                     returnHomeAssesment()
                    }else if( routerPathName === '/you'){
                     return returnHomeYou()
                    }
                  }}
                  color='gray'
                  />
    
               
                  </div>}

    

                
            
    
               
                </motion.div>


)
}

export default Mavbar