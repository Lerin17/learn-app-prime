// const express = require('express')
// const product = require('../models/product')
const router  = express.Router()
import { v2 as cloudinary } from 'cloudinary'

// const wrtc = require('wrtc')

router.post('/api.cloudinary.com/v1_1/dxjys4qpi/:resource_type/upload', async (req, res) => {

  const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
  'credential': 'muazkh',
   'username': 'webrtc@live.com'}]}

   answer = 'john'

   try {
    cloudinary.uploader.upload(req.body.file, {
      resource_type: req.params.resource_type
    }).then(result => {
      res.json({result})
    })
   } catch (error) {
    console.log(error, 'error')
   }

  
   

  //  const peer = new wrtc.RTCPeerConnection(configuration)


  //  const desc = new wrtc.RTCSessionDescription(req.body.offer)


  //  await peer.setRemoteDescription(desc)

  //    answer = await peer.createAnswer()

  //  await peer.setLocalDescription(answer)

  //  await peer.addIceCandidate(req.body.candidates)
   
  //  peer.ontrack = (e) => handleTrackEvent({e, peer})

  //  peer.addEventListener('icecandidate', async (event) => {
  //      if(event.candidate){
  //        // console.log(event.candidate, 'event candidate 2')

  //       candidates = event.candidate 
  //      }
  //    })

  //  //   if(body){

  //  //   }

  //  res.json({answer, candidates})

  res.json(answer)


} )


module.exports = router