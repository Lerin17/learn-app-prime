import React from 'react'
import { Button, TextField } from '@mui/material'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import { SocketContext } from '../../context/SocketContext'
import { Isocketcontext } from '../../types/context/socketcontext'
import VideoNotifications from './VideoNotifications'

const VideoOptions = () => {
  const {Me, callAccepted, name, setname, callEnded, leaveCall, callUser, JoinClass, CreateClass} = React.useContext(SocketContext) as Isocketcontext

  const [idToCall, setidToCall] = React.useState('');

  console.log(idToCall, 'idtocall')

  return (
    <div className='bg-white w-1/2'>Options

      <TextField variant='outlined' size='small' label='Name' value={name} onChange= {(e) => setname(e.target.value)} />
      <CopyToClipboard text={Me}>
        <Button>
          copy your ID
        </Button>
      </CopyToClipboard>

      <Button onClick={()=>CreateClass()} >
        CrCL
      </Button>

      <Button onClick={()=>JoinClass()} >
        JoCL
      </Button>

      <TextField variant='outlined' size='small' label='ID to Call' value={idToCall} onChange= {(e) => setidToCall(e.target.value)} />
      <CopyToClipboard text={Me}>
        {callAccepted && !callEnded ? (
            <Button onClick={()=>leaveCall()} >
            Hang up
          </Button>
        ): (
          <Button onClick={()=>callUser(idToCall)} >
            Call
        </Button>
        )}
      </CopyToClipboard>
      <VideoNotifications/>
    </div>
  )
}

export default VideoOptions