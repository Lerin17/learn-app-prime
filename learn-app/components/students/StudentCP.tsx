import React from 'react'
import { Button, duration } from '@mui/material'
import {TiPlusOutline} from 'react-icons/ti'
import {BiSearchAlt} from 'react-icons/bi'
import {FaBalanceScale} from 'react-icons/fa'

import CPoptionsGUI from './CPoptionsGUI'
import { Istudentcontext } from '../../types/context/studentcontext'
import { StudentContext } from '../../context/StudentContext'
import {TiArrowLeftOutline} from 'react-icons/ti'
import {HiSearchCircle} from 'react-icons/hi'
import {FaArrowRight} from 'react-icons/fa'
import {motion} from 'framer-motion'

const StudentCP = () => {


    const {currentCPoption,  setcurrentCPOP, largePanelStudent,     setlargePanelStudent, panel1ref, openAssesmentPanel, isAssesmentopen, toggleNewStudentPanel, smallPanelStudent,
        midpanelStudent, isNewStudentOpen} = React.useContext(StudentContext) as Istudentcontext


    const ControlPanelOptionBtn = (props:any) => {
        return (
            <div onClick={()=>setcurrentCPOP(props.text)}>                
            <Button className={`${props.it?'text-4xl font-bold font-header6':'text-lg'} ${props.text == 'Search'?'pb-4':''} flex text-white capitalize font-header6 font-extralight`} >
                <BiSearchAlt/>
                    {props.text == 'Search' && <input
                    placeholder='Search'
                    className='text-white bg-black w-full'  />}
                    
                    {props.text !== 'Search'?props.text:''}
            </Button>
            {props.text == 'Search' &&<Button className='text-white  text-2xl  transition-all ml-10 font-header6 capitalize' > <TiArrowLeftOutline/>Advanced Search </Button>}
            </div>
        )
    }

    const toggleControlPanelOption = () => {
        console.log(largePanelStudent, 'largepanel')
        setlargePanelStudent(prev => ({...prev, ispanel: !prev.ispanel}))
    }

    const parentVariant = {
        move: {
            y: isAssesmentopen? 400:0,
            opacity:isAssesmentopen? '0.5':'',
            // display: 'none',
            transition: {
                duration: 1,
                delayChildren: 0.3
              },
        },
       
        static: {
            
        }
    }

    const childrenVariant = {
        move: {
            // y:  300:0,
            display:isAssesmentopen? 'none':''
        },
        static: {

        }
    }

    // console.log(pan)

  return (
    <div className=' p-1 h-full w-full' >
        <div className='w-full' >

      
        

<motion.div initial="static"
    animate="move" variants={parentVariant} className= '  ' >
    <motion.div className={`flex  justify-between w-full`} variants={childrenVariant} >
    <div className={``}>
        <div  className='  flex flex-col'  >
            <motion.div 
style={{
    // color:'#BFD5ED',
    // backgroundColor:'#BFD5ED'
  }}
             onClick={()=>{
                setcurrentCPOP('New student')
                toggleNewStudentPanel()}} className={`text-black ${ isNewStudentOpen?'':'text-4xl'} cursor-pointer flex items-center`} >
                <span className='text-3xl text-stone-300 hover:text-stone-800 transition-all font-header12 px-4' >Add New Student +</span>
            </motion.div>


            <motion.div 
            style={{
                // color:'#89ABD0'
                // backgroundColor:'#BFD5ED'
              }}
            onClick={()=>openAssesmentPanel()}  className={`text-black ${  isNewStudentOpen?'text-lg':'text-4xl  '} mt-3  cursor-pointer pr-4 font-header8 flex items-center`} >
               <span className='text-3xl text-stone-300 hover:text-stone-800 transition-all font-header12 px-4' > Remove Student</span>
            </motion.div>

            <motion.div  className={`text-black ${ isNewStudentOpen?'text-lg':'text-4xl '} mt-3  cursor-pointer  pr-4 flex items-center font-header8`} >
              <span className='text-base font-header12 text-3xl text-stone-300 hover:text-stone-800 transition-all  px-4' > Courses</span> 
            </motion.div>

        </div>

    </div>

    </motion.div>


    </motion.div>

       
    </div>   
 </div>
  )
}

export default StudentCP