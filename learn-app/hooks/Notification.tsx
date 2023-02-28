import React from 'react'

const useNotification = () => {

    const [notficationState, setnotficationState] = React.useState<any>(null);

    const [notificationMessage, setnotificationMessage] = React.useState<string>('');

    let runReset:any

    

    React.useEffect(() => {
      if(notficationState){
        console.log(  console.log(notficationState,'notiixexexxexexexexexexexxdexzf'))
        runReset = setTimeout(() => {
            setnotficationState(null)
        }, 2000);
      }
      return () => {
        if(runReset){
            clearTimeout(runReset)
        }
        
      }
    }, [notficationState]);

  return (
    {notficationState, notificationMessage, setnotificationMessage, setnotficationState}
  )
}

export default useNotification