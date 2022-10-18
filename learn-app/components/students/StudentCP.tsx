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
import {motion} from 'framer-motion'

const StudentCP = () => {


    const {currentCPoption,  setcurrentCPOP, panel1Student, setpanel1Student, panel1ref} = React.useContext(StudentContext) as Istudentcontext


    const ControlPanelOptionBtn = (props:any) => {
        return (
            <div onClick={()=>setcurrentCPOP(props.text)}>                
            <Button className={`${props.it?'text-7ewxl font-bold font-header6':'text-lg'} ${props.text == 'Search'?'pb-4':''} flex text-white capitalize font-header6 font-extralight`} >
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
        setpanel1Student(prev => ({...prev, ispanel: !prev.ispanel}))
    }

    // console.log(pan)

  return (
    <div className=' p-1 h-full ' >
        <div className='flex items-end w-full bg-amber-800 border-b border-amber-700' >
        <input placeholder='Search' className='text-6xl w-full  text-white bg-amber-800' />
        <div className='self-bottom text-white text-4xl' >
            <HiSearchCircle/>
        </div>
        </div>

<div className= 'flex   justify-between' >
    <div className={`bg-amber-800  ${panel1Student.ispanel?'w-3/12':''}`}>
        <div className='  flex flex-col'  >
            <motion.div animate={panel1Student.ispanel && { x: -10}} transition={{type:'tween', duration: 0.5}} onClick={()=>{
                setcurrentCPOP('New student')
                toggleControlPanelOption()}} className={`text-white ${panel1Student.ispanel?'text-lg':'text-6xl font-bold'}  uppercase cursor-pointer `} >
                New Student +
            </motion.div>


            <motion.div  animate={ panel1Student.ispanel && { x: -10}} transition={{type:'tween', duration: 0.6}} className={`text-white ${panel1Student.ispanel?'text-lg':'text-6xl font-bold'}  uppercase cursor-pointer `} >
                Messages
            </motion.div>

            <motion.div transition={{type:'tween', duration: 0.7}} animate={ panel1Student.ispanel && { x: -10}} initial={ panel1Student.ispanel && { x: 20}}  className={`text-white ${panel1Student.ispanel?'text-lg':'text-6xl font-bold'}  uppercase cursor-pointer  `} >
                Courses
            </motion.div>

        </div>

    </div>

    <div style={{
        height: '350px'
        }}  className='flex flex-col  w-full bg-gradient-to-r from-gray-100 to-gray-300 relative h-full ' >


        <div   style={{
                        boxShadow: `10px 10px 20px 0px rgba(0,0,0,0.57) inset}`,
        }} className='absolute top-0 w-full z-0 h-full innershadow border-r-4 border-slate-700' >
        {/* New Student */}
        <CPoptionsGUI/>
        </div>

        
        <motion.div ref={panel1ref} className='absolute top-0 w-full z-10 h-1/6  bg-amber-800' animate={panel1Student.ispanel && {x: panel1Student.panelX, scaleX: 0}} 
        transition={{type:'tween', duration: 2}}
        initial={{scaleX: 1}}>
        <div className='h-full  w-full text-black' >
            {/* New student */}
        </div>
       
        </motion.div> 

        <motion.div style={{
            top: '16.7%'
        }} className='absolute  w-full z-10 h-2/6  bg-amber-800' animate={panel1Student.ispanel && {x: panel1Student.panelX, scaleX: 0}} 
        transition={{type:'tween', duration: 2}}
        initial={{scaleX: 1}}>
        <div className='h-full  w-full text-black' >
            {/* New studentd */}
        </div>
       
        </motion.div>  

        
        <motion.div style={{
            // top: '150'
        }} className='absolute w-full z-10 h-3/6  bg-amber-800 bottom-0 ' animate={panel1Student.ispanel && {x: panel1Student.panelX, scaleX: 0}} 
        transition={{type:'tween', duration: 2}}
        initial={{scaleX: 1}}>
        <div className='  w-full  h-full text-black' >
            {/* Bald */}
        </div>
       
        </motion.div>  
    </div>

</div>

       
               
    </div>
  )
}

export default StudentCP