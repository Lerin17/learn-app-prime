// import * as express from "express";

// const PORT = process.env.PORT || 4000

// const app = express()

// const server = app.listen(PORT, () => {
//     console.log(`listrning on ${PORT}`)
// })

console.log('hello worl')

import { constants } from "buffer";
import { Socket } from "dgram";
// import { Socket } from "dgram";
import  express from "express";
import { off } from "process";
import {io} from 'socket.io-client'
const app = express()

let senderStream:any
// let peer:any
let candidates:any = []
let answer:any
let peer:any
let canz:any
let num:any
let candid:any = []


const server = require('http').createServer(app)
const cors = require('cors')
const wrtc = require('wrtc')
const bodyParser = require('body-parser')

// import express from 'express'

const socket = io('http://localhost:3023')

// const io = require('socket.io')(server, {
//     cors: {
//         origin: '*',
//         methods: ['GET', "POST"],
//     }
// })
const PORT = process.env.PORT || 3022;

server.listen(PORT, ()=> {
    console.log('App listening at loclh')
})




    socket.on('me', id => {
        console.log(id)
    })

   //ADD ICE
   socket.on('iceCandidateReceive', async ({candidates}) => {
    // console.log(candidates, 'candx')
    // console.log(peer, 'what is peer if candidate')
    // candid.push(candidates)
    if(candidates.candidate && peer){
        // candid.push(candidates)
        // console.log(candidates, 'candidatesGotthrough')
        await peer.addIceCandidate(candidates);
    }

  
   })

//    socket.on('offerReceive', async ({offer}) => {
//         if(offer && peer){
//                 const desc = new wrtc.RTCSessionDescription(offer)

//              await peer.setRemoteDescription(desc)
//         }

//    })

     // socket.on('offerBroadcastReceive', async ({anz}) => {
    //     if(anz && peer){
            
    //     }
    // })

    // if(peer){
    //     candid.map(async (item:any) => {
    //         await peer.addIceCandidate(item);
    //     })
    





app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))



app.get('/', (req, res) => {
return res.send('server is listening')
})


// app.use('/', TeacherRouter)

app.post('/consumer', async ({body}, res) => {
    const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
    'credential': 'muazkh',
     'username': 'webrtc@live.com'}]}

    const peer = new wrtc.RTCPeerConnection(configuration)

    const desc = new wrtc.RTCSessionDescription(body.offer)

    await peer.setRemoteDescription(desc)

    
    senderStream.getTracks().forEach((track:any) => {
        console.log('addedx')
        peer.addTrack(track, senderStream)} );


     answer = await peer.createAnswer()

    await peer.setLocalDescription(answer)

    await peer.addIceCandidate(body.candidates)

    peer.addEventListener('icecandidate', async (event:any) => {
        if(event.candidate){
          // console.log(event.candidate, 'event candidate 2')

        const cand = event.candidate

         candidates.push(cand)

        //   socket.emit('iceCandidate', {to:Call.from, candidate})  
        }
      })

    const payload = {
        sdp: peer.localDescription
    }



    res.json(payload)
})

// console.log(peer, 'perxxw')

// console.log(answer, 'answerpunk')

//REAL ONE

app.post('/api/broadcast', async (req, res) => {
    const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
    'credential': 'muazkh',
     'username': 'webrtc@live.com'}]}

    //  console.log(req.body)


     peer = new wrtc.RTCPeerConnection(configuration)

     
   peer.ontrack = (e:any) => {
    console.log(e.streams)
    console.log(e.streams)
    console.log('please')
   }

   peer.addEventListener('track', (e:any)=>{
    console.log(e.streams[0])
   })

     console.log(peer.signalingState)
    //  const dc = peer.creatjjjjeDataChannel("my channel")
     

    const desc = new wrtc.RTCSessionDescription(req.body.signalData.offer)

    await peer.setRemoteDescription(desc)

   const  answer = await peer.createAnswer()

   console.log(peer.signalingState, 'get answer')

     peer.setLocalDescription(answer).then(() => {
             //WAS USING ANZ PREVIOUSLY AS SENT ANSWER
     const anz = peer.localDescription
     //SEND ANSWER
     
          socket.emit('SanswerBroadcast', {anz})
     }).then(() => {
            //SEND ICE OUT?
    peer.addEventListener('icecandidate', async (event:any) => {
        // console.log('cow wanexe')
        if(event.candidate){
       candidates = event.candidate 

       socket.emit('SiceCandidateBroadcast', {candidates})

    //    console.log(candidates)
    //    console.log('cow wan')
        }
      })

     })



    // setInterval(()=>{
    // console.log(peer, 'peer currently')
    // }, 3000)

//GET REMOTE TRACKS
//     peer.addEventListener('track', 
//     (event:any) => {
//      const remoteStream = event.streams;
//      console.log(remoteStream)
//    });




 

    canz = peer.localDescription
    // res.json('sticks')

    // res.json({anz, candidates})

    res.json({messages: 'what'})

})

// app.post('/broadcast', async ({body}, res) => {
//     const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
//     'credential': 'muazkh',
//      'username': 'webrtc@live.com'}]}

//     const peer = new wrtc.RTCPeerConnection(configuration)

//     peer.ontrack = (e:any) => handleTrackEvent({e, peer})



//     const desc = new wrtc.RTCSessionDescription(body.sdp)

//     await peer.setRemoteDescription(desc)

//     const answer = await peer.createAnswer()

//     await peer.setLocalDescription(answer)

//     const payload = {
//         sdp: peer.localDescription
//     }

//     res.json(payload)
// })

function handleTrackEvent({e, peer}:any){
    senderStream = e.streams[0]
    console.log(senderStream, 'dam')
}



// io.on('connection', (socket:any) => {
//     socket.emit('me', socket.id)

//     socket.on('disconnect', () => {
//         socket.broadcast.emit('callended')
//     });

//     socket.on('callUser', ({userToCall, signalData, from, name}:any) => {
//         // console.log('supa bounce')
//         io.to(userToCall).emit('callUser', {signal: signalData, from, name})
//     })

//     socket.on('answerCall', ({to, answer}:any) => {
//         io.to(to).emit('callAccepted', {answer})
//     })

//     socket.on('iceCandidate', ({to, candidate}:any) => {
//         console.log(candidate, 'candidate')
//         io.to(to).emit('iceSend', {candidate})
//     })

//     socket.on('iceCandidateBroadcast', async ({candidates}:any) => {
      
//         // console.log(candidates, 'candidatesalll')

//         if(candidates.candidate){
//             candid.push(candidates)
//         }
//         // console.log(peer, 'what is peer')

//         if(peer){
//             // console.log(candidates, 'cannnnnxxxe')
//             console.log(candid, 'candid')

//             candid.map(async (candidates:any) =>  {await  peer.addIceCandidate(candidates)})

                 
//         }

//     })

//     socket.on('newCandidate', ({candidates}:any) => {
//         // console.log(senderStream, 'senderStream')
//         console.log(candidates)
//         // console.log(peer, 'peernaple')
//         // await peer.addIceCandidate(candidates)
//     })

//     socket.on('join room', ({id}:any)=> {
//         const userID = socket.id
//         io.to(id).emit('allUsers', {userID})
//     })

// //    socket.on('sendServerDetails', (Me:any) => {
// //     io.to(Me).emit('allUsers', {canz, candidates})
// //    })

//    socket.on('sendConsumerDetails', (Me:any)=> {
//     // console.log(canz, 'canx')
//     io.to(Me.emit('allUsers'), {canz, candidates})
//    })
  
// })

// app.post('/api/data', (req, res) => {
// console.log(req.body);

// return res.send(200)
// })

// app.listen(3022, ()=> {
//     console.log('App listening at localhost')
// })