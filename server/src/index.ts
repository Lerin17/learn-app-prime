// import * as express from "express";

// const PORT = process.env.PORT || 4000

// const app = express()

// const server = app.listen(PORT, () => {
//     console.log(`listrning on ${PORT}`)
// })

console.log('hello worl')

import  express from "express";
const app = express()

// app.use((req,res, next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Content-Type,"
//     );
//     next();
// })
// import TeacherRouter from '../routes/teacher'

// const TeacherRouter = require('../routes/teacher')

const server = require('http').createServer(app)
const cors = require('cors')
const wrtc = require('wrtc')
const bodyParser = require('body-parser')
// import express from 'express'



const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', "POST"],
        // credentials: true
    }
})


// app.all('/',(req,res, next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Content-Type,"
//     );
//     next();
// })

app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

const PORT = process.env.PORT || 3022;

app.get('/', (req, res) => {
return res.send('server is listening')
})

let senderStream:any
let peer:any
let candidates:any
let answer:any

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

         candidates = event.candidate

        //   socket.emit('iceCandidate', {to:Call.from, candidate})  
        }
      })

    const payload = {
        sdp: peer.localDescription
    }

    res.json(payload)
})

// console.log(answer, 'answerpunk')

//REAL ONE

app.post('/api/broadcast', async (req, res) => {
    const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
    'credential': 'muazkh',
     'username': 'webrtc@live.com'}]}

     console.log(req.body)
    //  console.log(req, 'that Nigga')

    const peer = new wrtc.RTCPeerConnection(configuration)


    const desc = new wrtc.RTCSessionDescription(req.body.signalData.offer)


    await peer.setRemoteDescription(desc)

      answer = await peer.createAnswer()

    await peer.setLocalDescription(answer)

    

    // await peer.addIceCandidate(req.body.signalData.candidates)
    
    peer.ontrack = (e:any) => handleTrackEvent({e, peer})

    // peer.addEventListener('icecandidate', async (event:any) => {
    //     if(event.candidate){
    //       // console.log(event.candidate, 'event candidate 2')

    //      candidates = event.candidate 
    //     }
    //   })

     
    // res.json('sticks')

    res.json({answer, candidates})

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
}

server.listen(PORT, ()=> {
        console.log('App listening at loclh')
    })

io.on('connection', (socket:any) => {
    socket.emit('me', socket.id)

    socket.on('disconnect', () => {
        socket.broadcast.emit('callended')
    });

    socket.on('callUser', ({userToCall, signalData, from, name}:any) => {
        // console.log('supa bounce')
        io.to(userToCall).emit('callUser', {signal: signalData, from, name})
    })

    socket.on('answerCall', ({to, answer}:any) => {
        io.to(to).emit('callAccepted', {answer})
    })

    socket.on('iceCandidate', ({to, candidate}:any) => {
        console.log(candidate, 'candidate')
        io.to(to).emit('iceSend', {candidate})
    })

    socket.on('iceCandidateBroadcast', ({candidates}:any) => {

    })

    socket.on('join room', ({id}:any)=> {
        const userID = socket.id
        io.to(id).emit('allUsers', {userID})
    })

   socket.on('sendServerDetails', (Me:any) => {
    io.to(Me).emit('allUsers', {answer, candidates})
   })

   socket.on('sendConsumerDetails', (Me:any)=> {
    io.to(Me.emit('allUsers'), {answer, candidates})
   })
  
})

// app.post('/api/data', (req, res) => {
// console.log(req.body);

// return res.send(200)
// })

// app.listen(3022, ()=> {
//     console.log('App listening at localhost')
// })