import React, { useContext } from 'react'
import { DuttonAlt } from '../../GeneralPurpose/dutton'
import { UserContext } from '../../../context/UserContext'
import { Iusercontext,  Tpackage} from '../../../types/context/usercontext'

// import { } from '../../../types/context/usercontext'

const ChannelDetails = (props:any) => {

    const {subscriberDetails, setsubscriberDetails} = useContext(UserContext) as Iusercontext

    console.log(subscriberDetails, 'subscriber')


const SinglePackage = (packageObj:Tpackage) => {

    const ChannelDetails = {
        packageObj
    }

    return (<div onClick={() => {
        if(setsubscriberDetails){
            // const channelName = subscriberDetails?.name
            setsubscriberDetails({
                name:subscriberDetails?.name,
                SearchedPackage:packageObj,
                data:subscriberDetails?.data,
                allPackages:null
            })
        }
      
    }}>
                     {packageObj.name}
                     {packageObj.description}
    </div>)
}

if(subscriberDetails){
    if(subscriberDetails.SearchedPackage){
        return (
    
            <div                  
            className='flex lg:h-72 h-52 r  w-full'>
              <div 
                style={{
                  mixBlendMode:'difference'
                }} 
              className='w-3/12  flex flex-col h-full  items-end  lg:mr-0 md:mr-2 '>
        
               
              
              <div      
              className='lg:h-80 flex items-center justify-center lg:w-56  md:h-56  rhombus '>
                 <svg
                  
                 className='lg:h-72 lg:w-52 md:w-32 md:h-52  h-32 w-16  text-stone-800 hover:text-amber-900 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
          </div>
        
              
              
            
              </div>
             
              <div className='text-3xl h-full w-8/12'>
        
                <div
                style={{
                  // height: 
                }}
                className='flex  relative  flex-col lg:text-2xl md:text-lg text-xs  h-full bg-amber-900'>
        
                <div className='w-full  border-y lg:text-lg md:text-lg text-xs '>
                {subscriberDetails?.name} Package
                </div>
        
                <div className='p-2'>
                <div>
                Name {subscriberDetails?.name}
                </div>
           
        
                <div>
                Duration {subscriberDetails.SearchedPackage.description}
                </div>
        
                <div>
                  Description: {subscriberDetails.SearchedPackage.description}
                </div> 
                </div>
                  
              
        
                <div className='absolute bottom-0 left-0 '>
                <DuttonAlt
                icon={' Subscribe'}
                handleClick={()=>console.log('exex')}
                />
                </div>
                
                </div>
              </div>
            </div>
          )
    }else if(subscriberDetails.allPackages && !subscriberDetails.SearchedPackage){
        return <div>
            <div                  
            className='flex lg:h-72 h-52 r  w-full'>
              <div 
                style={{
                  mixBlendMode:'difference'
                }} 
              className='w-3/12  flex flex-col h-full  items-end  lg:mr-0 md:mr-2 '>
        
               
              
              <div      
              className='lg:h-80 flex items-center justify-center lg:w-56  md:h-56  rhombus '>
                 <svg
                  
                 className='lg:h-72 lg:w-52 md:w-32 md:h-52  h-32 w-16  text-stone-800 hover:text-amber-900 fill-current' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg>
          </div>
        
              
              
            
              </div>
             
              <div className='text-3xl h-full w-8/12'>
        
                <div
                style={{
                  // height: 
                }}
                className='flex  relative  flex-col lg:text-2xl md:text-lg text-xs  h-full bg-amber-900'>
        
                <div className='w-full  border-y lg:text-lg md:text-lg text-xs '>
                {subscriberDetails?.name} Package
                </div>
        
                <div className='p-2'>
                <div>
                Name {subscriberDetails?.name}
                </div>
           
        
                {subscriberDetails.allPackages.map(item => (
                <div>
                    <SinglePackage
                    {...item}
                    />
                </div>
            ))}
                </div>
                
                </div>
              </div>
            </div>
            
        </div>
    
    }else{
        return <div>
        Not going to be returned
    </div>
    }
}else {
    return <div>
            Not going to be returned
        </div>
}

  
}

export default ChannelDetails