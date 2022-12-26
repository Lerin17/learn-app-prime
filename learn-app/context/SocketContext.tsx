import React from 'react'
import io from 'socket.io-client'
import Peer from 'simple-peer'
import { setRequestMeta } from 'next/dist/server/request-meta'

const SocketContext = React.createContext <Isocketcontext | null > (null)

import { Isocketcontext } from '../types/context/socketcontext'
import axios from 'axios'
import { containerClasses } from '@mui/system'



//OLD SOCKET CONNECT
// const socket = io('http://localhost:3022', {
//   // withCredentials: true
// })

//NEW SOCKET CONNECT
const socket = io('http://localhost:3023', {
  // withCredentials: true
})


 const SocketContextProvider = (props:any) => {

  const [stream, setstream] = React.useState<any>(null);
  const [Me, setMe] = React.useState('');
  const [Call, setCall] = React.useState<any>({isReceivedCall: false});
  const [iceCandidates, seticeCandidates] = React.useState<any>();
  const [callAccepted, setcallAccepted] = React.useState<boolean>(false);
  const [callEnded, setcallEnded] = React.useState<boolean>(false);
  const [name, setname] = React.useState('');

  const [Peers, setPeers] = React.useState<any>([]);
  const [PeersID, setPeersID] = React.useState<any>();
  const [myPeer, setmyPeer] = React.useState<any>();
  const [first, setfirst] = React.useState(1);


  const myVideo = React.useRef<any>()
  const userVideo = React.useRef<any>()
  const connectionRef = React.useRef<any>()

  const [classSessionID, setclassSessionID] = React.useState(555);
  // let peerConnection:any

  // const [peer, setpeer] = React.useState<any>();


  // const [userToCallID, setuserToCallID] = React.useState();

  React.useEffect(() => {
    const callx = () => {
      setTimeout(() => {
        navigator.mediaDevices.getUserMedia({video: true, audio: {'echoCancellation': true}}).then((currentStream) => {
          setstream(currentStream)
    
          if(myVideo.current){
            // console.log(currentStream, 'currentStream')
            myVideo.current.srcObject = currentStream
          }
          
        })
    
      }, 30);
    }

    setTimeout(() => {
      callx()
    }, 30);
    
  
    socket.on('me', (id) => setMe(id))

    // socket.on('callUser', ({from, name: callerName,  signal}) => {
    //   setCall({isReceivedCall: true, from, name: callerName, signal})
    // })

  }, []);

  React.useEffect(() => {
    // socket.emit('allUsers', {})
    
  }, [Me]);

  // React.useEffect(() => {
  //   // socket.on('userJoined', (payload:any) => {
  //   //   const id = payload.userID
  //   //   const peer = addxPeer({id, Me, stream})

  //   //   setPeers((prev:any) => [...prev, peer])
  //   // })

  
  // }, []);


 const leaveCall = () => {
  console.log('leave cll')
 }

 

  const  callUser = async (id:any) => {
    const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
    'credential': 'muazkh',
     'username': 'webrtc@live.com'}]}

    const peer = new RTCPeerConnection(configuration)
    const userToCallID = id


        stream.getTracks().forEach((track:any) => {
          // console.log('addedx')
          peer.addTrack(track, stream)} );

          
        peer.addEventListener('track', 
        (event:any) => {
         const remoteStream = event.streams;
         if(userVideo.current){
           console.log('eeede UserVideo')
           userVideo.current.srcObject = remoteStream[0];
         }
         
     });

        peer.addEventListener('icecandidate', async (event:any) => {
          if(event.candidate){
            
            const candidate = event.candidate

            socket.emit('iceCandidate', {to: userToCallID, candidate})   
          }
        })
        
        
        socket.on('iceSend', async ({candidate}) => {
          if(candidate){
                try {
                  console.log(candidate)
                  await peer.addIceCandidate(candidate);
  
                } catch (error) {
                  console.error('Error adding received ice candidate', error)
                }
              }
          // seticeCandidates(candidate)
        })

        socket.on('callAccepted', async ({answer, candidate})=>{
          peer.setRemoteDescription(new RTCSessionDescription(answer))
          setcallAccepted(true)
        })

              
        const offer = await peer.createOffer()
      await peer.setLocalDescription(offer);

      socket.emit('callUser', {
        userToCall: userToCallID, signalData: offer, from: Me, name
      })       
    // setpeer( new RTCPeerConnection(configuration))
    
    // setuserToCallID(id)   
    }

  // const addxPeer = ({userID, Me, stream}:any) => {
  //   createPeer({userID, Me, stream})
  // }

  // const addPeer = () => {
  //   socket.emit('join room', {id:Me})

  //   socket.on('allUsers', ({users}) => {
  //     const peers = []
  //     console.log(users)

  //     const eachUserID = users

  //     users.forEach((userID:any) => {
  //       const peer = createPeer({eachUserID, Me, stream })
  //       setPeersID((prev:any) => [...prev, peer])
  //       // peersid.push(users)
  //     })

  //   })
  // }

 

    const answerCall = async () => {
      const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
     'credential': 'muazkh',
      'username': 'webrtc@live.com'}]}

        try {
        const  peerConnection = new RTCPeerConnection(configuration);

        peerConnection.setRemoteDescription(new RTCSessionDescription(Call.signal))

    
      
        stream.getTracks().forEach((track:any) => {
          // console.log('addedxrec')
          peerConnection.addTrack(track, stream)} );



            peerConnection.ontrack = (event:any) => {   
              const remoteStream = event.streams;
              if(userVideo.current){
                console.log('received remoteStream')
                userVideo.current.srcObject = remoteStream[0];
              }
            }

        const answer = await peerConnection.createAnswer();
        peerConnection.setLocalDescription(answer)

        socket.emit('answerCall', {to:Call.from ,answer})

 
        peerConnection.addEventListener('icecandidate', async (event:any) => {
          if(event.candidate){
            // console.log(event.candidate, 'event candidate 2')

            const candidate = event.candidate

            socket.emit('iceCandidate', {to:Call.from, candidate})  
          }
        })

        socket.on('iceSend', async ({candidate}) => {
          console.log('ice nOt real')
          console.log(candidate, 'iceCandates')
          if(candidate){
            console.log('ice real')
                try {
                  await peerConnection.addIceCandidate(candidate);
                } catch (error) {
                  console.error('Error adding received ice candidate', error)
                }
              }
        })

    

        peerConnection.addEventListener('connectionstatechange', event => {
          if (peerConnection.connectionState === 'connected') {
            console.log('its our block now')
              // Peers connected!
          }
      });

        } catch (error) {
          console.log(error)
        }

    }

   

    // const CreateClass = () => {
    //   const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
    //   'credential': 'muazkh',
    //    'username': 'webrtc@live.com'}]}

    //   //  const peer = new RTCPeerConnection(configuration)

    //   setmyPeer(new RTCPeerConnection(configuration))

    // }

  


    // React.useEffect(() => {
    //   const broadcast = async () => {

    //     const dc = myPeer.createDataChannel("my channel")


    //     const Offer = await myPeer.createOffer()

    //     myPeer.setLocalDescription(Offer)

    //     console.log(myPeer, 'myPeer')
 
    //     stream.getTracks().forEach((track:any) => myPeer.addTrack(track, stream));

    
   

    //     axios({
    //       method: 'post',
    //       url: 'http://localhost:3022/api/broadcast',
    //       data: {
    //         offer: Offer
    //       }
    //     }).then(async (res) => {

    //       console.log(res.data.anz)
    //       const desc = new RTCSessionDescription(res.data.anz)

    //       await myPeer.setRemoteDescription(desc)
    //     }).then(() => {
    //       console.log(myPeer, 'mpxxw')

    //       myPeer.onicecandidate = (e:any) => {
    //         if(e.candidate){
    //           const candidates = e.candidate
    //           console.log(e.candidate)
    //           socket.emit('newCandidate', {candidates})
    //         }
         
    //       }

    //     //   myPeer.addEventListener('icecandidate',  (event:any) => {         
    //     //     // console.log(event.candidate, 'event candidate 2')
    //     //     // console.log(event.candidate)
    //     //     console.log('cso')
    //     //   const candidates = event.candidate  
    //     //   console.log(candidates)
    //     //     socket.emit('newCandidate', {candidates}) 
    //     // })
     
    //     })

    //     setfirst(prev => prev + 1)

    //   }

    //   if(myPeer){
    //     broadcast()
    //   }
      
    // }, [myPeer]);

    const createPeer = async ({ stream, isConsumer}:any) => {
      // const peer = 
      const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
      'credential': 'muazkh',
       'username': 'webrtc@live.com'}]}
  
      //  let candidates 
      //  let offer

      console.log('run once run again')
    
       const peerConnection = new RTCPeerConnection(configuration);
      //  setmyPeer(new RTCPeerConnection(configuration))

      console.log(peerConnection.signalingState, 'initial')

      // console.log(stream,'streamobject')
      
      //SEND TRACK
      stream.getTracks().forEach((track:any) => {
        console.log('added')
        peerConnection.addTrack(track, stream)} );

    //GET STREAM   
  if(isConsumer){
    peerConnection.addEventListener('track', 
     (event:any) => {
      const remoteStream = event.streams;
      if(userVideo.current){
        console.log('eeede UserVideo')
        console.log(remoteStream)
        userVideo.current.srcObject = remoteStream[0];
      }  
    });
}

      
  //ICE CANDIDATES SEND

    peerConnection.addEventListener('icecandidate', async (event:any) => {
      // console.log('maybe')
      if(event.candidate){
        
       const  candidates = event.candidate
         console.log(candidates, 'candidates')

         
          socket.emit('iceCandidateBroadcast', {candidates})   
      }
    })



       
      //Negotiation
      socket.on('SanswerReceive', async ({anz}) => {
        if(anz){
     

        // console.log(ans, 'ansReceived')
        if(peerConnection.signalingState === 'have-local-offer'){
          console.log('cowwabunga')
         
          console.log('one') 
          console.log(peerConnection.localDescription)
          const ans =  new RTCSessionDescription(anz)
           peerConnection.setRemoteDescription(ans).then(() => {
            socket.on('SiceCandidateReceive', async ({candidates}) => {
              console.log('two')
              // console.log(candidates, 'candidatesReceived')
              if(candidates){
                try {
                  await peerConnection.addIceCandidate(candidates);
                } catch (error) {
                  if(error){
                    console.log(candidates, 'candidates received')
                  }
                 
                  console.log(error, 'candidatesAddError')
                }
              }
            })
           })

      
        }else{
          console.log('not it')
        }
      
        }
   
      })

             //ADD ICE CANDIDATE

   


      
        const  offer = await peerConnection.createOffer()
        await peerConnection.setLocalDescription(offer);

        console.log(peerConnection.signalingState, 'AFterOffer')
     
        console.log(peerConnection, 'peerConnctionAfterOffer')
        // socket.emit('offerBroadcast', {offer})
   
 


      const anzs = offer
      
      return {offer:anzs}

    }
    /////en

    const CreateClass =  async () => {
      const Class = await createPeer({stream, isConsumer: false})

      console.log(Class)

    // axios.post('http://localhost:3022/broadcast', {})

    //IMPORTANT
    axios({
      method: 'post',
      url: `http://localhost:3022/api/broadcast/${classSessionID}`,
      data: {
        signalData: Class
      },
      // headers: {'Authorization': 'Bearer ...'}
    }).then((res) => {
      console.log(res)
      // socket.emit('sendServerDetails', Me)
    }).catch((e) => {
      console.log(e)
    })
      
    }

    const JoinClass =  async () => {
      const Class = await createPeer({stream, isConsumer: true})

    //IMPORTANT
    axios({
      method: 'post',
      url: `http://localhost:3022/api/consumer/${classSessionID}`,
      data: {
        signalData: Class
      },
      // headers: {'Authorization': 'Bearer ...'}
    }).then((res) => {
      console.log(res)
      // socket.emit('sendServerDetails', Me)
    }).catch((e) => {
      console.log(e)
    })

      // try {
      //   const res = await axios.post('http://localhost:3022/api/consumer', Class)

      //   socket.emit('sendConsumerDetails', Me)
      // } catch (error) {
      //   console.log(error)
      // }
    }



  return (
    <SocketContext.Provider value={{leaveCall, answerCall, callUser, myVideo, name,callAccepted, userVideo, stream, setname, callEnded, Me, Call, JoinClass, CreateClass}} >
        {props.children}
    </SocketContext.Provider>
  )
}

export {SocketContext, SocketContextProvider}