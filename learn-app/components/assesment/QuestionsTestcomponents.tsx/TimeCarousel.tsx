import React from 'react'
import { motion } from 'framer-motion'

const TimeCarousel = () => {

    const Numbers = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

    const [Number, setNumber] = React.useState(45);
    const [tur, settur] = React.useState(false);


    
    setTimeout(() => {
        settur(true)
    }, 2000);
    

    const Time = (props:any) => {
        return (
            <motion.div

            initial={{
                y:props.number == 45? 0:-100,
                display:props.number == 45? 'block':'none'
            }}
    
            animate={tur?
                {
                y:props.number == 47? 0:100,
                display: props.number == 45?'block':'block'
            }:{}}
    
            transition={{
                delay:props.time,
                ease:'easeInOut',
                type:'tween',
                duration:0.5
                
            }}
            className='textShadow4 '
            style={{
                  transform: 'rotateX(-75deg)'
            }}>
            {props.number }
            
            </motion.div>
        )
    }


    const Digits = [43, 44, 45, 46, 47]

    const Dixs =(props:any) => {

        const Array =[]

        const NoIterate = Number - props.number
       
        // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
            
        // }

        if(Number !== props.number){
            Array.push(Number + 1)
        }
        
        const digits = [33]

        const digitsDisplay = digits.map(item => (
            <motion.div
            animate={{
                y:60,
            }}
            transition={{
                delay:0.5,
                duration:0.5
            }}
            >
                {item}
            </motion.div>
        ))


        return (
            <div>
            {digitsDisplay}
            {tur &&   props.number}
            </div>
        )
    }

    

    const TimeSpaces= () => {
        return (
            <div>

            </div>
        )
    }

    const TimeDials = (props:any) => {
        return (
            <div onClick={()=>setNumber(props.number)} className='mt-1 text-sm hover:scale-125 transition-all cursor-pointer'>
                {props.number}-
            </div>
        )
    }

  const  TimeDialsDisplay = Numbers.map(item => (
    <TimeDials
    number={item}
    />
  )) 

  return (
  
<div className='w-2/12 scale-x-100  flex flex-col justify-center z-20 relative'>

<div className='absolute h-full mr-1 border-l-0 border right-0'>
    
    <div className='flex flex-col  h-full items-center justify-center'>
        {TimeDialsDisplay}  
    </div>
</div>
      

<div className='text-2xl flex justify-center  cursor-pointer font-header9'>
<svg clip-rule="evenodd" className='w-8 fill-current' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 13.789c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291 1.002 1.299 3.044 3.945 4.243 5.498z"/></svg>
</div>



<div 
style={{
    fontSize:60,
    WebkitTextStroke:'2px black'
}}
className='text-7xl text-transparent font-header7 flex flex-col items-center '>
      <div 
    style={{
        perspective:100,
        perspectiveOrigin:'top',
        WebkitTextStroke:'3px silver'
    }}
    className='textShadow4 ' >
        <div
        className='textShadow4 '
        style={{
              transform: 'rotateX(30deg)'
        }}>
        43
        </div>
   
    </div>
    <div 
    style={{
        fontSize: 55,
        perspective:150,
        perspectiveOrigin:'top',
        WebkitTextStroke:'5px silver'
    }}
    className='' >
        <div
        className='textShadow '
        style={{
              transform: 'rotateX(60deg)'
        }}>
        
        44
        </div>
   
    </div>



</div>

<div className='text-sm flex justify-center font-header8'>
<svg clip-rule="evenodd" className='w-8 fill-current text-white' fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/></svg>
</div>

{/* <div 
style={{
    fontSize:200
}}
className='font-header9' >
    )
</div> */}
</div>
  )
}

export default TimeCarousel