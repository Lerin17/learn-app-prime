const express = require('express')

const app = express()

// const txry = require('./firebaseapp')


// const name:String = 'ss'

// Initialize Firebase
// const fapp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(fapp);
/////

const bodyParser = require('body-parser')
const { off } = require('process')

const server = require('http').createServer(app)

let candidatesFromBroadcast = []

const port = process.env.PORT || 3023

server.listen(port, () => {
    console.log(`connect app at ${port}`)
})



const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

// app.post('/create',   (req, res) => {
//    txry(req, res)

// })

// const start = async () => {
//     try {
//         app.listen(port, console.log(`connect app at ${port}`))
//     } catch (error) {
        
//     }
// }


io.on('connection', (socket) => {
    //used a timeout previously
        socket.emit('me', socket.id)

        // socket.emit('id', (id) => {
        //     console.log(id)
        // })

        socket.on('broadcast-message', ({to, offer})=>{
            console.log(offer, 'offer')
            io.emit('Sbroadcast-message', {to, offer})
        })

        socket.on('broadcast-message-reply', ({to, answer})=>{
            console.log(answer, 'offer')
            io.emit('Sbroadcast-message-reply', {to, answer})
        })

        socket.on('iceCandidateBroadcast', ({candidates}) => {
            console.log(candidates, 'candidatesSentfromBroad')
            io.emit('iceCandidateReceive', {candidates})

            // io.to(to).emit('iceSend', {candidate})
        })

        socket.on('new-ice-candidate-from-broadcaster', ({to, candidate}) => {
            io.emit('Snew-ice-candidate-from-broadcaster', ({to, candidate}))
        })

        socket.on('new-ice-candidate-from-server', ({to, candidate}) => {
            io.emit('Snew-ice-candidate-from-server', ({to, candidate}))
        })
        
        socket.on('SiceCandidateBroadcast', ({candidates}) => {
            console.log(candidates, 'CandidatesSentfromServer')

            // candidatesFromBroadcast.push()

            io.emit('SiceCandidateReceive', {candidates})

            // io.to(to).emit('iceSend', {candidate})
        })

        socket.on('SanswerBroadcast', ({anz}) => {
            io.emit('SanswerReceive', {anz})
        })

        socket.on('offerBroadcast', ({offer}) => {
            io.emit('offerReceive', {offer})
        })
        

        // socket.on('sendConsumerDetails', ({Me}) => {

        // })

})

// start()