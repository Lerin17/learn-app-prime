import React from 'react'
import { Isocketcontext } from '../../types/context/socketcontext'

import { SocketContext } from '../../context/SocketContext'
import { Paper } from '@mui/material'


 const VideoPlayer = () => {
    const {myVideo, userVideo, name, callAccepted,  callEnded, stream, callUser, Call} = React.useContext(SocketContext) as Isocketcontext

    console.log(callAccepted)

if(userVideo.current){
    console.log(userVideo.current.srcObject, 'userVideo')
    // if(userVideo.current.srcObject){
    //     //   userVideo.current.load();
    //     userVideo.current.play();
    // }
   
}

  
  return (
    
   
    <div className='flex justify-center' >
        {stream && (
            <Paper className='mr-8' >
            <video style={{
                width: '600px',
                height: '500px'
            }}
            playsInline muted ref={myVideo} autoPlay 
            />
        </Paper> 
        )}
        
       
               <Paper>
               <video style={{
                   width: '600px',
                   height: '500px'
               }}
               playsInline  ref={userVideo} autoPlay 
               />
           </Paper>   
         
    </div>
  )
}

export default VideoPlayer
