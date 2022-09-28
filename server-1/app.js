const express = require('express')

const app = express()

const bodyParser = require('body-parser')
const server = require('http').createServer(app)

const port = process.env.PORT || 3023


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

server.listen(port, () => {
    console.log(`connect app at ${port}`)
})

io.on('connection', (socket) => {
    setTimeout(() => {
        socket.emit('me', socket.id)
    }, 200);


})

// start()