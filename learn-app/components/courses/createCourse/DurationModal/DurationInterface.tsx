import React from 'react'

const DurationInterface = (props:any) => {
  return (
    <div className='py-2 text-lg w-full flex '>
        <div className={` mx-1 px-1 flex`}>

        <div className={`${props.isSelectInitialDate?'bg-amber-800 text-white':''}`}>
        {`${props.DurationStart}`}
        </div>
       
            </div>  
            
            for 

            
            <div className={`${props.isSelectRangeDurationModal?'bg-amber-800':''} px-1 mx-1`}>
                  {'s'?<input
                  type='number'
                  className='w-8'
                  />:props.Duration.NoWeeks} 
                    </div>
                     weeks and 
                <div className={`${props.isSelectRangeDurationModal?'bg-amber-800':''} px-1 mx-1 `}>
                {'w'?<input
                className='w-8'
                />:props.Duration.NoDays}
                 </div>
                days
    </div>
  )
}

export default DurationInterface