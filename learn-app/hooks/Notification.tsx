import React from 'react'

const useNotification = () => {

    const [notficationState, setnotficationState] = React.useState<any>(null);

    const [notificationMessage, setnotificationMessage] = React.useState<string>('');


    const runReset = setTimeout(() => {
        setnotficationState(null)
    }, 2000);

    React.useEffect(() => {
      if(notficationState){
        runReset()
      }
    }, [notficationState]);

  return (
    {notficationState, notificationMessage, setnotificationMessage, setnotficationState}
  )
}

export default useNotification