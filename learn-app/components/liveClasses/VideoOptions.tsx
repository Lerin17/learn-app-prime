import React from 'react'
import { Button, TextField } from '@mui/material'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import { SocketContext } from '../../context/SocketContext'
import { Isocketcontext } from '../../types/context/socketcontext'
import VideoNotifications from './VideoNotifications'

import {RiSignalTowerFill} from 'react-icons/ri'
import {MdWifiCalling2, MdCallEnd,} from 'react-icons/md'



const VideoOptions = () => {
  const {Me, callAccepted, name, setname, callEnded, leaveCall, CreateClass2 ,JoinClass2, CreateClass, JoinClass} = React.useContext(SocketContext) as Isocketcontext

  const [idToCall, setidToCall] = React.useState('');

  console.log(idToCall, 'idtocall')

  return (
    <div className=''>
      {/* Options */}

      {/* <TextField variant='outlined' size='small' label='Name' value={name} onChange= {(e) => setname(e.target.value)} />
      <CopyToClipboard text={Me}>
        <Button>
          copy your ID
        </Button>
      </CopyToClipboard> */}

      <Button className='text-2xl text-lime-400 p-0 hover:scale-110 transition-all' onClick={()=>CreateClass2()} >
        <RiSignalTowerFill/>
      </Button>

      <Button className='text-2xl text-blue-600 p-0 hover:scale-110 transition-all' onClick={()=>JoinClass2()} >
       <MdWifiCalling2/>
      </Button>

      <Button className='text-2xl opacity-75 text-blue-200 bg-gradient-to-r from-blue-100 via-transparent to-blue-500 rounded-full p-0 hover:scale-110  transition-all'>
        <MdCallEnd/>
      </Button>

      {/* <TextField variant='outlined' size='small' label='ID to Call' value={idToCall} onChange= {(e) => setidToCall(e.target.value)} /> */}
      {/* <CopyToClipboard text={Me}>
        {callAccepted && !callEnded ? (
            <Button onClick={()=>leaveCall()} >
            Hang up
          </Button>
        ): (
          <Button onClick={()=>callUser(idToCall)} >
            Call
        </Button>
        )}
      </CopyToClipboard> */}
      <VideoNotifications/>
    </div>
  )
}

export default VideoOptions