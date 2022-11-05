import React from 'react'
import { motion } from 'framer-motion';
import { CourseContext } from '../../../context/CourseContext';

import { Icoursecontext } from '../../../types/context/coursecontext';

const DowCarousel = () => {
    
    const {isTopicPanelOpen, toggleTopicPanel, currentCourseName, currentCodeDesc, currentCourseCode, setcurrentCodeDesc, setcurrentCourseName, setcurrentCourseCode, currentNoWeeks, setcurrentNoWeeks, saveCurrentCourse, setisNewCoursePanelOpen, isDowCarousel,toggleisDowCarousel, setisDowCarousel, addDayOfWeek} = React.useContext(CourseContext) as Icoursecontext

    const [currentCarousel, setcurrentCarousel] = React.useState(5);

    const DaysoftheWeek = [
        'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday',
        'Saturday'
    ]


    const CarouselItems = DaysoftheWeek.map((item,i) => ({
        name:item,
        carouselId:i+1
    }))

    type iCarouselSingleOptionProps = {
        name:string | undefined
    }

    const parentVariant = {
        move: {
            y: 0,
            scale:1,
            // opacity: '0.5',
            // display: 'none',
            transition: {
                duration: 0.5,
                delayChildren: 0.1
              },
        },
       
        static: {
            scale:0.7
            // y: -10,
        }
    }

    const childrenVariant = {
        move:{y:0,
            transition:{type:'tween', duration:0.3}
        },
        static: {
            y:40, opacity:1
        }
    }



    const childrenTopVariant = {
        move:{y:0,
            transition:{type:'tween', duration:0.4}
        },
        static: {
            skewY:0.5
            // y:50, opacity:1
        }
    }

    const parentTopVariant = {
        move: {
            
            // opacity: '0.5',
            // display: 'none',
            transition: {
                duration: 1,
                delayChildren: 0.1
              },
        },
       
        static: {
            // y: -10,
        }
    }

    const parentBottomVariant = {
        move: {
            // y: 0,
            scale:1,
            y:10,
            // opacity: '0.5',
            // display: 'none',
            transition: {
                duration: 1,
                delayChildren: 0.1
              },
        },
       
        static: {
            scale:1.5
            // y: -10,
        }
    }

    const childrenBottomVariant = {
        move:{y:0, opacity:1,
            transition:{type:'tween', duration:0.4,scaleY:1 }
        },
        static: {
            y:20, opacity:0.1
        }
    }

    const CarouselSingleOptionTop = (props:any) => {
        return <div>
                      <motion.div initial='static' animate='move' variants={parentTopVariant} className={`${props.isFocusItem?'font-header7 not-italic scale-150 text-5xl bg-yellow-600 my-2 py-1':" flex italic text-3xl  bg-yellow-500 opacity-700"}`} >
                <motion.div variants={childrenTopVariant} onClick={(e)=>addDayOfWeek(e)} id='dowCarousel'>
                {props.name}
                </motion.div>
            </motion.div>
          
        </div>}

    const CarouselSingleOptionBottom = (props:any) => {
        return <div>
                      <motion.div initial='static' animate='move' variants={parentBottomVariant} className={`${props.isFocusItem?'font-header7 not-italic scale-150 text-5xl bg-yellow-600 my-2 py-1':" flex italic text-3xl  bg-yellow-500 opacity-700"}`} >
                <motion.div variants={childrenBottomVariant} onClick={(e)=>addDayOfWeek(e)} id='dowCarousel'>
                {props.name}
                </motion.div>
            </motion.div>
          
        </div>
    }

    const CarouselSingleOption = (props:any) => {
        return <div>   
            <motion.div initial='static' animate='move' variants={parentVariant} className={`${props.isFocusItem?'font-header7 not-italic scale-150 text-5xl bg-yellow-600 my-2 py-1':" flex italic text-3xl  bg-yellow-500 opacity-700"}`} >
                <motion.div variants={childrenVariant} onClick={(e)=>addDayOfWeek(e)} id='dowCarousel'>
                {props.name}
                </motion.div>
            </motion.div>
          
          
        </div>
    }

    // const current = currentCarousel == 1?true:fals

    const PrimayCarouselItem:string | undefined  = CarouselItems.find((item) => item.carouselId == currentCarousel)?.name

    const beforePrimayCarouselItem:string | undefined = currentCarousel==1? CarouselItems.find((item) =>  item.carouselId == currentCarousel-1)?.name:'Saturday'

    const afterPrimayCarouselItem:string | undefined  = CarouselItems.find((item) => item.carouselId == currentCarousel+1)?.name



    console.log(PrimayCarouselItem, 'primary')

  return (
    <div style={{
        width:200
    }} className='flex flex-col items-center mr-8' id='dowCarousel' >
            <div style={{
                height:150
            }} id='dowCarousel' className='font-header8 italic pr-3 text-4xl  flex flex-col items-center ' >
                <CarouselSingleOptionTop
                isNextitem= {false}
                isFocusItem = {false}
                name={beforePrimayCarouselItem}
                />

                <CarouselSingleOption
                isNextitem= {false}
                isFocusItem = {true}
                name={PrimayCarouselItem}
                />

                <CarouselSingleOptionBottom
                isNextitem= {true}
                isFocusItem = {false}
                name={afterPrimayCarouselItem}
                />
        {/* <motion.div onClick={(e)=>addDayOfWeek(e)} id='dowCarousel'>
            {beforePrimayCarouselItem}
        </motion.div>
        <motion.div onClick={(e)=>addDayOfWeek(e)}  id='dowCarousel' className='font-header7 flex not-italic' >
            {PrimayCarouselItem} 
        </motion.div>
        <motion.div onClick={(e)=>addDayOfWeek(e)}  id='dowCarousel' className='font-header' >       {afterPrimayCarouselItem}
        </motion.div> */}
        </div>

        <div id='dowCarousel' onClick={()=>{
            if(currentCarousel ==8) {
                setcurrentCarousel(1)
            }else{
                setcurrentCarousel(prev => prev+1)
            }
         }} className='text-lg' >down</div>
    </div>
 
  )
}

export default DowCarousel