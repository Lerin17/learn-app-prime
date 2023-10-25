import React from 'react'
import { Isocketcontext } from '../../types/context/socketcontext'

import { SocketContext } from '../../context/SocketContext'
import { Paper } from '@mui/material'
import ClassChat from './ClassChat'
import VideoOptions from './VideoOptions'

import {GrMicrophone} from 'react-icons/gr'
import {MdBackHand} from 'react-icons/md'
// import lin


 const VideoPlayer = () => {
    const {myVideo, userVideo, name, callAccepted,  callEnded, stream,  Call} = React.useContext(SocketContext) as Isocketcontext

    console.log(callAccepted)

if(userVideo.current){
    console.log(userVideo, 'userVideoRaw')
    console.log(userVideo.current.srcObject, 'userVideo')
    // if(userVideo.current.srcObject){
    //     //   userVideo.current.load();
    //     userVideo.current.play();
    // }
   
}

  
  return (
    
   
    <div style={{
        height: '620px'
    }} className=' ' >
        <div className='flex flex-col lg:flex-row justify-center items-center h-full ' >
        {stream && (
            
            <Paper className='lg:mr-8  lg:w-4/6 w-5/6 bg-black h-full flex flex-col items-center justify-center relative ' >
            <video className='relative' style={{
                width: '100%',
                height: '100%',
                borderRadius: '3px'
            }}
            playsInline muted ref={myVideo} autoPlay 
            />

<video className='bg-black border-2 border-red-500' style={{
                   width: '600px',
                   height: '100%'
               }}
               playsInline  ref={userVideo} autoPlay 
               />

            {/* <div className='absolute z-20 top-4 lg:right-20 right-8   border w-72 h-48' >
            <Paper>
               <video className='bg-black' style={{
                   width: '600px',
                   height: '100%'
               }}
               playsInline  ref={userVideo} autoPlay 
               />
           </Paper> 
            </div> */}

        <div style={{
          transform: "translate(-50%, -50%)"
        }} className='absolute z-20 bottom-4 left-1/2' >
          <VideoOptions/>
        </div>
        </Paper> 
        )}

        <div style={{
            // background: 'linear-gradient(90deg, rgba(13,13,21,1) 35%, rgba(239,239,239,1) 86%)'
        }} className='h-full flex flex-row lg:flex lg:flex-col md:flex md:flex-row lg:w-2/6 w-full ' >
      <div className=' h-1/2 w-full grid  '>
        <div className='' >
            {/* <div className='' >
                 stand
            </div> */}

            <div className='flex'>
                <div className='flex flex-col  px-2' >

                <div className='text-3xl flex px-1  underline '>
                    Microphone #1
                    <GrMicrophone/>
                </div>

                <div className='text-3xl flex px-1  underline '>
                    Microphone #2
                    <GrMicrophone/>
                </div>

                <div className='text-3xl flex px-1  underline '>
                    Microphone #3
                    <GrMicrophone/>
                </div>


                <div className='text-3xl hover:border-r-4 hover:border-b-4 hover:transition-all  underline flex px-1'>
                    Microphone #4
                    <GrMicrophone/>
                </div>
                </div>

                <div className='text-7xl flex items-center justify-center px-8 border'>
                    < MdBackHand/>
                </div>
            </div>

            </div>
           
            </div>
            
       
             <Paper className='bg-black  border-2 h-1/2 w-full hidden lg:block lg:border-2  md:block  lg:mt-2'>
                <div className='' >
                    <ClassChat/>
                </div>
           </Paper> 
        </div>

  
        </div>

         
    </div>
  )
}

export default VideoPlayer