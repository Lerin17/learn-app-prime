import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

interface Itextalt2 {
    OriginalText:String
    ReplacementText:String
    isAnimate:Boolean
}

const TextAlt2 = (props:any) => {

    interface ItextValues {
        label:string,
        value:string 
    }

    const [textValuesArray, settextValuesArray] = React.useState<ItextValues[]>([{label:'prevValue1', value:props.textAlt},{label:'prevValue2', value:props.textAlt}]);
    

    const [prevText, setprevText] = React.useState<any>(props.text);

    const [isAnimate, setisAnimate] = React.useState(true);

    React.useEffect(() => {
        console.log('cow ran')
        console.log(props.textAlt)
        
        // setisAnimate(prev => !prev)
        if(isAnimate){
            setisAnimate(false)
            settextValuesArray(prev => prev.map((item:any) => {return item.label == 'prevValue1'? {...item, value:props.textAlt}:item}))
        }else {
            setisAnimate(true)
            settextValuesArray(prev => prev.map((item:any) => {return item.label == 'prevValue2'? {...item, value:props.textAlt}:item}))
        }
        
    }, [props.textAlt]);

    console.log(isAnimate)
    console.log(textValuesArray, 'textValuesArray')

    
    const container = {
        hidden: {
            display:'none'},
        show: {
          opacity: 1,
          display:'flex',
          transition: {
            staggerChildren: 0.6,
          
            duration:0.3,
          }
        }
      }

      const character = {
        hidden: {y:270,
            display:'none'},
        show: {   y:0,
            display:'block' ,
           transition: {
            duration:0.5,
          
           }
       }
      }
      
    const Display = () => {


        const textValueArray1 = textValuesArray[0].value.split('')

        const textValueArray2 = textValuesArray[1].value.split('')

        console.log(textValueArray1)
        const pack = ['4','2']

        const lastvalue = !isAnimate? textValueArray1.length-1:textValueArray2.length-1

        const firstvalue = 0

        return (
            <div className=''>
            <AnimatePresence>
        {!isAnimate && <motion.div 
            className='flex bg-red-500 rounded-full overflow-hidden border-4 border-yellow-800  '
        variants={container}
        transition={{
            duration:0.4
        }}
        exit={{
            y:-200,
        }}

        initial='hidden'
        animate='show'
        >

            {textValueArray1.map((item:string) => {
             const indexValueofItem =  textValueArray1.indexOf (item)

             if(indexValueofItem == 0 || indexValueofItem == lastvalue){
                return (
                    <motion.span
                    className='border-4 border-x-none bg-blue-600'
                    variants={character}
             
               >
                 {item}
               </motion.span>
             )
             }else{
                return (
                    <motion.span
                    className='border-4 border-x-none bg-orange-600'
                    variants={character}
             
               >
                 {item}
               </motion.span>
             )
             }
            })}
             
            </motion.div>}
    </AnimatePresence>

    <AnimatePresence>
    {isAnimate && <motion.div 
    style={{
        // width:300
    }}
    className='flex relative border-4 border-black rounded-full overflow-hidden innershadow noise'
        variants={container}
        transition={{
            duration:0.4
        }}
        exit={{
            y:-200,
        }}

     
        initial='hidden'
        animate='show'
        >



        <div
        style={{
            height:30,
            width:30,
            fontSize:3,
        }}
        className='bg-white rounded-full absolute border top-10 right-10 z-20 border blur-md' > 
            x
        </div>

            
               

{textValueArray2.map((item:string) => {
             const indexValueofItem =  textValueArray2.indexOf (item)

             console.log(lastvalue, 'lasrvalue')

             if(indexValueofItem == 0 || indexValueofItem == lastvalue){
                return (
                    <motion.span
                    style={{
                       
    // border: "2px rgba(255,255,255,0.5)"
                    }}
                    className=' '
                    variants={character}
             
               >


                <div className='flex ' >
                
                
       
                <div className={` ${indexValueofItem == lastvalue?'pr-10':indexValueofItem == 0?'pl-10':''}   z-10 text-amber-900`}>
                {item}
                </div>

                </div>
                
               </motion.span>
             )
             }else{
                return (
                    <motion.span
                    className=' '
                    variants={character}
             
               >
                 {item}
               </motion.span>
             )
             }
            })}
             
            </motion.div>}
    </AnimatePresence>
    </div> 
        )
    }

    // const display = 
    // <div>
    //         <AnimatePresence>
    //     {!isAnimate && <motion.div 
    //     variants={container}
    //     transition={{
    //         duration:0.4
    //     }}
    //     exit={{
    //         y:-200,
    //     }}

    //     initial={{
    //         x:0,
    //         y:0
    //        }}
    //     >

    //         {textValuesArray[0].value.map((item:string) => (
    //                <motion.div
    //                variants={character}
    //             //    initial={{
    //             //       y:200,
    //             //       display:'none'
    //             //   }} 
    //             //   transition={{
    //             //       delay:0.4,
    //             //       duration:0.4
    //             //   }}
    //             //   animate={{
    //             //       y:0,
    //             //       display:'block'
    //             //   }}
    //           >
    //             {item}
    //           </motion.div>
    //         ))}
             
    //         </motion.div>}
    // </AnimatePresence>

    // <AnimatePresence>
    // {isAnimate && <motion.div 
    //     variants={container}
    //     transition={{
    //         duration:0.4
    //     }}
    //     exit={{
    //         y:-200,
    //     }}

    //     initial={{
    //         x:0,
    //         y:0
    //        }}
    //     >

    //         {textValuesArray[1].value.map((item:string) => (
    //                <motion.div
    //                variants={character}
    //             //    initial={{
    //             //       y:200,
    //             //       display:'none'
    //             //   }} 
    //             //   transition={{
    //             //       delay:0.4,
    //             //       duration:0.4
    //             //   }}
    //             //   animate={{
    //             //       y:0,
    //             //       display:'block'
    //             //   }}
    //           >
    //             {item}
    //           </motion.div>
    //         ))}
             
    //         </motion.div>}
    // </AnimatePresence>
    // </div> 


    // const [, set] = useState();

    // const container = {
    //     hidden: {},
    //     show: props.animate? {
    //         opacity: 1,
    //                transition: {
    //                  staggerChildren: 0.5
    //          }
    //     }:{}
    // }

       const jam = <AnimatePresence>
        {
            <motion.div>

            </motion.div>
        }
       </AnimatePresence>

    // const container = {
    //     hidden: { opacity: 0 },
    //     show: {
    //       opacity: 1,
    //       transition: {
    //         staggerChildren: 0.5
    //       }
    //     }
    //   }
      
    //   const item = {
    //     hidden: { opacity: 0 },
    //     show: { opacity: 1 }
    //   }
      
    //   return (
    //     <motion.ol
    //       variants={container}
    //       initial="hidden"
    //       animate="show"
    //     >
    //       <motion.li variants={item} />
    //       <motion.li variants={item} />
    //     </motion.ol>
    //   )

    const charactersArray = props.text.split('')

    const TextAlt2Display = props.animate? charactersArray.map((item:string) => {
        return (
            <motion.div variants={character} >
                {item}
            </motion.div>
        )
    }):charactersArray.map((item:string) => {
        return (
            <motion.div variants={character}>
                {item}
            </motion.div>
        )
    })

  return (
    <motion.div 
    style={{
        height:234,
        overflow:'hidden'
    }}
    className=' flex justify-center '
    variants={container}
    initial='hidden'
    animate='show'
    >
       <Display/>
    </motion.div>
  )
}

export default TextAlt2