import React from 'react'
import io from 'socket.io-client'
import Peer from 'simple-peer'
import { setRequestMeta } from 'next/dist/server/request-meta'

const SocketContext = React.createContext <Isocketcontext | null > (null)

import { Isocketcontext } from '../types/context/socketcontext'
import axios from 'axios'
import { containerClasses } from '@mui/system'
import { UserContext } from './UserContext'
import { Iusercontext } from '../types/context/usercontext'



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

 
  const {userData} = React.useContext(UserContext) as Iusercontext

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

    
    // if(!userData.name){
    // socket.disconnect()
    // }else{
    //   socket.on('me', (id) => {
    //     console.log(id, 'myid4')
    //     setMe(id)})
    // }


   

    // socket.on('callUser', ({from, name: callerName,  signal}) => {
    //   setCall({isReceivedCall: true, from, name: callerName, signal})
    // })

  }, []);


  // socket.on('connect', () => {
  //   console.log()
  // })

  
  socket.on('me', id => {
    console.log(id, 'myid2')
    // socket.emit('id', id)
})
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
  console.log('leave cqll')
 }

 

  

    const createPeer2 = async({stream, isConsumer, offer}:any)  => {
      
      //CREATE PEER
      const configuration = {'iceServers': [{'urls': 'turn:numb.viagenie.ca',
      'credential': 'muazkh',
       'username': 'webrtc@live.com'}]}

       
       
       const peerConnection = new RTCPeerConnection(configuration);

       const desc  = new RTCSessionDescription(offer);

       await peerConnection.setRemoteDescription(desc)

       console.log(offer, 'offer')

       stream.getTracks().forEach((track:any) => {
        console.log('added', stream)
        peerConnection.addTrack(track, stream)});

       if(isConsumer){  
        peerConnection.addEventListener('track', 
        (event:any) => {
         const remoteStream = event.streams;
         console.log('received track from broadcaster')
         // console.log(userVideo)
         // console.log(remoteStream, 'remotestream')
         if(userVideo.current){
           console.log('remotestream')
           console.log(remoteStream)
           userVideo.current.srcObject = remoteStream[0];
         }  
       });
  
      }else{
        // stream.getTracks().forEach((track:any) => {
        //   console.log('added', stream)
        //   peerConnection.addTrack(track, stream)});
    
      }

      peerConnection.addEventListener('connectionstatechange', event => {
        console.log('peer', peerConnection.connectionState)
      })

      const answer = await peerConnection.createAnswer()

      await peerConnection.setLocalDescription(answer)

      socket.emit('broadcast-answer', answer)

      //  const  offer = await peerConnection.createOffer()
      //  await peerConnection.setLocalDescription(offer);

        // socket.on('message-server', async ({candidate}) => {
        //   if(candidate){
        //         try {
        //           console.log(candidate)
        //           await peer.addIceCandidate(candidate);
  
        //         } catch (error) {
        //           console.error('Error adding received ice candidate', error)
        //         }
        //       }
        //   // seticeCandidates(candidate)
        // })
        //Broadcast message
    //     socket.emit('broadcast-message', {to: 555, offer}) 

    //     //Receive answer

    //     socket.on('Sbroadcast-message-reply', async ({to, answer}) => {

    //       console.log('received answer')

    //       const remoteDesc = new RTCSessionDescription(answer);
    //         await peerConnection.setRemoteDescription(remoteDesc);
    //     })

    //     socket.on('Snew-ice-candidate-from-server', async ({to, candidate}) => {
    //       console.log('broadcaster received ice candidates')
    //       if (candidate) {
    //         try {
    //             await peerConnection.addIceCandidate(candidate);
    //         } catch (e) {
    //             console.error('Error adding received ice candidate', e);
    //         }
    //     }
    //     })

     
       
    //    peerConnection.addEventListener('icecandidate', event => {
    //     console.log(event, 'icecandidate')
    //     if (event.candidate) {

    //       socket.emit('new-ice-candidate-from-broadcaster', {to:555, candidate:event.candidate})
    //         // signalingChannel.send({'new-ice-candidate': event.candidate});
    //     }
    // });




  // const remoteVideo = document.querySelector('#remoteVideo');



//   peerConnection.addEventListener('track', async (event) => {
//     const [remoteStream] = event.streams;
//     // remoteVideo.srcObject = remoteStream;
// });

      //  socket.on('broadcast-message', () => {

      //  })
    }


    const CreateClass2 = () => {
          //IMPORTANT
    axios({
      method: 'post',
      url: `http://localhost:3022/api/broadcast/${classSessionID}`,
      data: {
        signalData: {}
      },
      // headers: {'Authorization': 'Bearer ...'}
    }).then((res) => {

      if(res){
        const offer = res.data.offer
        
        createPeer2({stream, isConsumer:false, offer})
      }else{

      }

      console.log(res, 'response')
      // socket.emit('sendServerDetails', Me)
    }).catch((e) => {
      console.log(e)
    })

   
    }

const CreateClassAlt = () => {
      //IMPORTANT
axios({
  method: 'post',
  url: `http://localhost:3022/api/broadcast/${classSessionID}`,
  data: {
    signalData: {}
  },
  // headers: {'Authorization': 'Bearer ...'}
}).then((res) => {

  if(res){
    const offer = res.data.offer
    
    createPeer2({stream, isConsumer:false, offer})
  }else{

  }

  console.log(res, 'response')
  // socket.emit('sendServerDetails', Me)
}).catch((e) => {
  console.log(e)
})


}


    const JoinClass2 = () => {
      createPeer2({stream, isConsumer:true})
    }

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
   
 


      // const anzs = offer
      
      return {offer}

    }
    /////en

    const CreateClass =  async () => {
      const Class = await createPeer({stream, isConsumer: false})

      console.log(Class)

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
    <SocketContext.Provider value={{leaveCall,  myVideo, name,callAccepted, userVideo, stream, setname, callEnded, Me, Call, JoinClass, CreateClass,CreateClass2, JoinClass2 }} >
        {props.children}
    </SocketContext.Provider>
  )
}

export {SocketContext, SocketContextProvider}