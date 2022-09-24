const express = require('express')
// const product = require('../models/product')
const router  = express.Router()

const wrtc = require('wrtc')

router.post('/api/broadcast', async (req, res) => {

  const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
  'credential': 'muazkh',
   'username': 'webrtc@live.com'}]}

   answer = 'john'

   try {
    console.log(req.body, 'on gang')
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