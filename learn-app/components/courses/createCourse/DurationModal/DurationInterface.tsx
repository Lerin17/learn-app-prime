import React from 'react'
import AnimationTextBox from '../../../GeneralPurpose/AnimationTextBox'

const DurationInterface = (props:any) => {

  const InfoBoard = () => {

    if(props.isSelectDurationStart){
      return <div className='flex items-center'>
        <AnimationTextBox
        text='Please, select the initial date for the course from the calender.'
        animationtype='notice'
        />
        
      </div>
    }else {
      return <div>
        from the 4th of jan to 5th of march, mon, tues, weds, thurs
      </div>
    }
 
  }

  return (
    <div className='mt-2'>
      <div className='bg-amber-800 px-1'>
        <InfoBoard/>
      </div>

        <div className='py-2 font-header12  text-lg w-full flex items-center'>
            <div className={` mr-1 flex`}>

            <div className={`${props.isSelectDurationStart?'bg-amber-800 text-black text-4xl border-b-2':'text-xl'} px-1`}>
            {`${props.DurationStart.text}`}
            </div>
          
                </div>

                
                
                for 

                
                <div className={`${props.isSelectRangeDurationModal?'bg-amber-800 border-b-2':''} px-1 mx-1`}>
                      {props.isSelectRangeDurationModal?<input
                      onChange={(e) => props.updateDuration({NoWeeks:e.target.value, NoDays: props.Duration.NoDays})}
                      value={props.Duration.NoWeeks}
                      type='number'
                      placeholder='0'
                      className='w-8 xl:text-4xl  text-black bg-transparent text-center'
                      />:props.Duration.NoWeeks} 
                        </div>
                        weeks and 
                    <div className={`${props.isSelectRangeDurationModal?'bg-amber-800 border-b-2':''} px-1 mx-1 `}>
                    {props.isSelectRangeDurationModal?<input
                    onChange={(e) => props.updateDuration({NoDays:e.target.value, NoWeeks: props.Duration.NoWeeks})}
                    value={props.Duration.NoDays}
                    type='number'
                    placeholder='0'
                    className='w-8 xl:text-4xl text-black bg-transparent text-center'
                    />:props.Duration.NoDays}
                    </div>
                    days
        </div>
    </div>
  
  )
}

export default DurationInterface