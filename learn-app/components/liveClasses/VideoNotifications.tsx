React
import React from 'react'
import { SocketContext } from '../../context/SocketContext'
import { Isocketcontext } from '../../types/context/socketcontext'

const VideoNotifications = () => {
const {answerCall, Call, callAccepted} = React.useContext(SocketContext) as Isocketcontext
    // console.log(Call)
    console.log(callAccepted)

  return (
    <div>{
        Call.isReceivedCall && !callAccepted && (
            <div>
                <div> {Call.name} is calling</div>
                <div>
                    <button onClick={()=>answerCall()} >
                        Answer
                    </button>
                </div>
            </div>
        )
        }
        </div>
  )
}

export default VideoNotifications