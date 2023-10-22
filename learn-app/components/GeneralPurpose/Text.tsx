import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext'

import {Iassesmentcontext} from '../../types/context/assesmentcontext'

interface IText {
    size:string
    isAnimate:boolean
    ReplacementText:string
    OriginalText:string
    possibleStringsArray:[]
}

const jack = [{
    be:true,
    text:'exexexexe'
}, {
    be:false,
    text:'exexexe'
},
{
    be:false,
    text:'of courrse'
}]

const textDisplay = jack.map(item => (
    <AnimatePresence>
    {item.be &&
        <motion.div
        exit={{
            y:28,
        }}

        transition={{
            duration:0.4,
        }}

        initial={{
            x:0,
            y:0
           }}

        >
            <motion.div
                        animate={{
                            y:0,
                            display:'block'
                        }}
            
                        initial={{
                            y:-26,
                            display:'none'
                        }}
            
                        transition={{
                            duration:0.4,
                            delay:0.4
                        }}
            >
                   {item.text}
            </motion.div>
         
        </motion.div>
        }
    </AnimatePresence>
))

const TextAlt = (props:any) => {
    
    const textDisplay = props.possibleStringsArray.map((item:any) => (
        <AnimatePresence>
        {item.be &&
            <motion.div
            exit={{
                y:28,
            }}
    
            transition={{
                duration:0.4,
            }}
    
            initial={{
                x:0,
                y:0
               }}
    
            >
                <motion.div
                            animate={{
                                y:0,
                                display:'block'
                            }}
                
                            initial={{
                                y:-26,
                                display:'none'
                            }}
                
                            transition={{
                                duration:0.4,
                                delay:0.4
                            }}
                >
                       {item.text}
                </motion.div>
             
            </motion.div>
            }
        </AnimatePresence>
    ))

    return (
        <div 
        style={{
            height:32
        }}
        >
            {textDisplay}
        </div>
    )
}

const Text = (props:any) => {

    
  return (
    <div 
    style={{
        height:32
        // overflow:'hidden'
    }}
    className=''>
        <AnimatePresence>
        {props.isAnimate &&
            <motion.div
            exit={{
                y:28,
            }}

            transition={{
                duration:0.4,
            }}

            initial={{
                x:0,
                y:0
               }}

            >
                <motion.div
                            animate={{
                                y:0,
                                display:'block'
                            }}
                
                            initial={{
                                y:-26,
                                display:'none'
                            }}
                
                            transition={{
                                duration:0.4,
                                delay:0.4
                            }}
                >
                       Replacement
                </motion.div>
             
            </motion.div>
            }
        </AnimatePresence>


        <AnimatePresence>
            {!props.isAnimate && 
            <motion.div
            exit={{
                y:28,
            }}

            transition={{
                duration:0.4,
            }}

            initial={{
                x:0,
                y:0
               }}
            >
                <motion.div
                            animate={{
                                y:0,
                                display:'block'
                            }}
                
                            initial={{
                                y:-26,
                                display:'none'
                            }}
                
                            transition={{
                                duration:0.4,
                                delay:0.4,
                             
                            }}
                >
                Text
                </motion.div>
            </motion.div>}
        </AnimatePresence>   
    </div>
  )
}

export default Text
