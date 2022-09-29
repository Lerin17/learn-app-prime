const express = require('express')

const app = express()

const bodyParser = require('body-parser')
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

// const start = async () => {
//     try {
//         app.listen(port, console.log(`connect app at ${port}`))
//     } catch (error) {
        
//     }
// }


io.on('connection', (socket) => {
    //used a timeout previously
        socket.emit('me', socket.id)

        socket.on('iceCandidateBroadcast', ({candidates}) => {
            console.log(candidates, 'candidatesSentfromBroad')
            io.emit('iceCandidateReceive', {candidates})

            // io.to(to).emit('iceSend', {candidate})
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