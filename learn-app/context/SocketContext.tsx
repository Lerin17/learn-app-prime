import React from 'react'
import io from 'socket.io-client'
import Peer from 'simple-peer'
import { setRequestMeta } from 'next/dist/server/request-meta'

const SocketContext = React.createContext <Isocketcontext | null > (null)

import { Isocketcontext } from '../types/context/socketcontext'
import axios from 'axios'




const socket = io('http://localhost:3022', {
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
 

  const myVideo = React.useRef<any>()
  const userVideo = React.useRef<any>()
  const connectionRef = React.useRef<any>()
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

    socket.on('callUser', ({from, name: callerName,  signal}) => {
      setCall({isReceivedCall: true, from, name: callerName, signal})
    })

  }, []);

  React.useEffect(() => {
    socket.emit('allUsers', {})
    
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

    const createPeer = async ({ stream, isConsumer}:any) => {
      // const peer = 
      const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
      'credential': 'muazkh',
       'username': 'webrtc@live.com'}]}
  
       let candidates 
       let offer
    
       const  peerConnection = new RTCPeerConnection(configuration);
      //  setmyPeer(new RTCPeerConnection(configuration))

      
      //Get tracks
      stream.getTracks().forEach((track:any) => {
        peerConnection.addTrack(track, stream)} );
       
      //Negotiation
        offer = await peerConnection.createOffer()
       await peerConnection.setLocalDescription(offer);

     


  if(isConsumer){
       peerConnection.addEventListener('track', 
        (event:any) => {
         const remoteStream = event.streams;
         if(userVideo.current){
           console.log('eeede UserVideo')
           userVideo.current.srcObject = remoteStream[0];
         }  
       });
  }
     

  //ICE CANDIDATES OPTIONAL
        peerConnection.addEventListener('icecandidate', async (event:any) => {
          console.log('maybe')
          if(event.candidate){
            
             candidates = event.candidate
            //  console.log(candidates, 'candidates')
  
            socket.emit('iceCandidateBroadcast', { candidates})   
          }
        })
        
          

      //IMPORTANT

      socket.on('allUsers',  ({canz, candidates}) => {
        console.log(canz, 'toProve')
        console.log(candidates, 'sock')

        const ans =  new RTCSessionDescription(canz)

        peerConnection.setRemoteDescription(ans)

        // if(candidates){
        //   try {
        //     console.log(candidates)
        //     await peerConnection.addIceCandidate(candidates);

        //   } catch (error) {
        //     console.error('Error adding received ice candidate', error)
        //   }
        // }
      })

      const anzs = peerConnection.localDescription
      
      return {offer:anzs}
    }

    

    const CreateClass =  async () => {
      const Class = await createPeer({stream, isConsumer: false})

      console.log(Class)

    // axios.post('http://localhost:3022/broadcast', {})

    //IMPORTANT
    axios({
      method: 'post',
      url: 'http://localhost:3022/api/broadcast',
      data: {
        signalData: Class

      },
      // headers: {'Authorization': 'Bearer ...'}
    }).then((res) => {
            console.log(res)
      socket.emit('sendServerDetails', Me)
    }).catch((e) => {
      console.log(e)
    })

    // axios.post(`http://localhost:3022/api/broadcast`, {
    //     offer: Class,
    //     distance: 'sticks'
    // }).then((res)=>{
    //   console.log(res)
    //   socket.emit('sendServerDetails', Me)
    // }).catch((error)=> {
    //   console.log(error);
    // })

      // try {
      //   const res = await axios.post('http://localhost:3022/broadcast', Class)
      //   // socket.emit('sendServerDetails', Me)

      // } catch (error) {
      //   console.log(error)
      // }
    
    }

    const JoinClass =  async () => {
      const Class = createPeer({stream, isConsumer: true})

      try {
        const res = await axios.post('http://localhost:3022/consumer', Class)

        socket.emit('sendConsumerDetails', Me)
      } catch (error) {
        console.log(error)
      }
    }



  return (
    <SocketContext.Provider value={{leaveCall, answerCall, callUser, myVideo, name,callAccepted, userVideo, stream, setname, callEnded, Me, Call, JoinClass, CreateClass}} >
        {props.children}
    </SocketContext.Provider>
  )
}

export {SocketContext, SocketContextProvider}