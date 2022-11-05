import { Button } from '@mui/material'
import React from 'react'

import { CourseContext } from '../../context/CourseContext'
import { Icoursecontext, Icourseobject } from '../../types/context/coursecontext'
import { motion, AnimatePresence, animate } from 'framer-motion'

import {TiPlus} from 'react-icons/ti'
import {CgMathPlus} from 'react-icons/cg'

const CourseList = () => {
    const {CoursesArray, coursesArray, toggleNewCoursePanel, courseListSelectedCourse, setcourseListSelectedCourse, setisNewCoursePanelOpen, isCourseList, setisCourseList, setisCreateCourseGroupOpen, isCreateCourseGroupOpen} = React.useContext(CourseContext) as Icoursecontext

    const MultiCourseArray = coursesArray.map((item, i)=> {
        return {
            courseName:item.courseName,
        courseDesc:item.courseDesc,
        courseCode:item.courseCode,
        NoWeek:item.NoWeeks,
        courseId:item.courseId,
        isVisible:true,
        isAnimate:false
        }
    })

 interface IMultiCourseArray  {
        courseName: string
        courseDesc: string
        courseCode: string
        NoWeek: string
        id: number
        isVisible: boolean
    }[]

    const [is, setis] = React.useState(true);
    const [CourseArray, setCourseArray] = React.useState(MultiCourseArray);

    
    React.useEffect(() => {
        setCourseArray(MultiCourseArray)
    }, [coursesArray]);
    // const [isSinglei, setisSinglei] = useState();

    setTimeout(()=>{
        setis(false)
    }, 4000)

    // const parentVariant = {
    //     move: {
    //         y: isAssesmentopen? 400:0,
    //         opacity:isAssesmentopen? '0.5':'',
    //         // display: 'none',
    //         transition: {
    //             duration: 1,
    //             delayChildren: 0.3
    //           },
    //     },
       
    //     static: {
            
    //     }
    // }

    // const childrenVariant = {
    //     move: {
    //         // y:  300:0,
    //         display:isAssesmentopen? 'none':''
    //     },
    //     static: {

    //     }
    // }

    const openSingleCourse = (num:any) => {
        console.log(num, 'num')
       const selectedCourse = coursesArray.find(item => item.courseId === num)
        setcourseListSelectedCourse(selectedCourse)
        setCourseArray(prev => prev.map(item => item.courseId == num?{...item, isAnimate:true, isVisible:false}:{...item, isVisible:false}))
        setisCourseList(false)
        // setisNewCoursePanelOpen(true)
    }

    React.useEffect(() => {
        if(courseListSelectedCourse === null){
            setCourseArray(prev => prev.map(item => ({...item, isAnimate: false, isVisible:true})))
        }
    }, [courseListSelectedCourse]);


    


    const SingleCourse = (props:any) => {
        const mainName = props.courseCode.substring(0, 3)

        const numberCode = props.courseCode.substring(4, 7)

        console.log(props.id, 'dd')

        const isVisible = props.isVisible

        // let isVis = CourseArray.find(item => item.id == props.id)?.isVisible

        console.log(isVisible)


        return (
       <AnimatePresence>
    
               (
                 
                    <motion.div  className='mt-4 w-5/6 '
                      onClick={()=>{
                       
                        openSingleCourse(props.courseId)}}
                      key={props.courseId}
                      initial={{x:20, y:20}} 
                      animate={props.isAnimate? {x:0, y:0, scale:1 }:{x:20}} 
                      exit={{scale:2, y:300}}
                      transition={{duration:0.5, type:'tween'}} 
                 
                      >

          
                      
                   
                   <div style={{
              
                    //  background: 'rgb(139,69,19)',
                     background: 'linear-gradient(90deg, rgba(218,94,18,1) 2%, rgba(180,83,9,1) 31%, rgba(146,64,14,1) 67%, rgba(120,53,15,1) 86%)'
                   }}
                   className={`${props.isAnimate?'w-fit  font-header9 z-10 px-1 ':"bg-amber-700  border-amber-900 border-dashed py-2  "} flex text-orange-900 mt-2 justify-between  cursor-pointer relative`} >
                        <div  className='flex flex-row  w-5/6 text-gray-300' >
                            <div className='flex uppercase absolute top-0 -mt-4' >
                            <div style={{
                                //   color:'brown',
                                  WebkitTextStroke: '2px saddlebrown',
                        }} className='text-6xl font-header9 '>
                            {mainName}
                            </div>
                              
                            <div className='text-xl text-gray-400 font-bold' >
                                101
                                {numberCode}
                            </div>
                            </div>

                            <div className=' self-end px-2 pt-4 mt-4 text-white uppercase text-lg font-bold' >
                                mathematics and studides
                                mathematics and studides
                            </div>
                        </div>
                    
      
                    
                   
                        
                        <div className='mr-10   align-center text-gray-300  ' >
                            <div>
                             next class is on tuesday
                              </div> 
                              <div>at 4:00</div>
                        </div>
                            
                     
                     
                          
                      <div className='text-white px-2 flex flex-col' >
                            <div className='text-3xl font-header8 italic' >
                            {props.NoWeeks}
                            </div>
                        
                          <div>
                          weeks
                          </div>
           
                      </div>
                   </div>
               
                        </motion.div>
           
                
               )
       </AnimatePresence>
        )
    }


  

    const MultiCourseDisplay = CourseArray.map((item,i) => (<SingleCourse
        courseName={item.courseName}
        courseDesc={item.courseDesc}
        courseCode={item.courseCode}
        NoWeeks={item.NoWeek}
        id={i}
        isVisible={item.isVisible}
        isAnimate={item.isAnimate}
    />))

    console.log(MultiCourseDisplay, 'multi')

    console.log(CourseArray, 'rougue')

    console.log(isCreateCourseGroupOpen, 'damn and true')

    const CourseListDisplay = () => {

        console.log(coursesArray, 'jaws')


        if( coursesArray.length === 0){
            return <div className={`${isCreateCourseGroupOpen?'hidden':'mt-6'}`} >
                {/* <div className='text-lg' >Course list</div> */}
                <div className='text-5xl ' >
                    No Courses Created Yet,
                    <div className='flex pt-2 cursor-pointer' >
                        Create Course Group 
                        <div  onClick={()=>setisCreateCourseGroupOpen(true)} className=' hover:scale-110 transition-all' >
                        <button className='text-5xl text-black flex items-center  justify-center'>
                            
                            [<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>]
                            </button></div>
                    </div>

                    <div className='flex pt-2 cursor-pointer' >
                        Create Course 
                        <div  onClick={()=>toggleNewCoursePanel()} className=' hover:scale-110 transition-all' >
                        <button className='text-5xl text-black flex items-center '>[
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
                        ]</button></div>
                    </div>                                  
                </div>
              
            </div>
        }else{
            return <div style={{
                height:500,
                overflow:'auto'
             }} className='' >
                Courses Available
                <AnimatePresence>
                 {CourseArray.map((item,i) => (<SingleCourse
        courseName={item.courseName}
        courseDesc={item.courseDesc}
        courseCode={item.courseCode}
        NoWeeks={item.NoWeek}
        courseId={item.courseId}
        isVisible={item.isVisible}
        isAnimate={item.isAnimate}
    />))}
                </AnimatePresence>
         
            </div>
        }
    }

    const cow = ['dd', 'fam', 'dd']

  return (
    <div style={{
        // height:500,
        // overflow:'auto'
    }} >
        {/* <AnimatePresence>
        <CourseListDisplay/>
        </AnimatePresence>
        */}
        <AnimatePresence>
            {isCourseList && (
                 <motion.div
                 className=''
                 
                 initial={{y:200}}
                 animate={{y:0}}
                 transition={{type:"spring", stiffness:100}}
                 exit={{ opacity:0.1, y:400, display:'none'}}
                 >
                 <CourseListDisplay/>
             </motion.div>
            )}
           
        </AnimatePresence>
    </div>
  )
}

export default CourseList