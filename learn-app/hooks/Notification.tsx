import React from 'react'

const useNotification = () => {

    const [notfication, setnotfication] = React.useState<Tnotification>(null);

    type Tnotification = {
      type:'success',
      message:string
    } | {type:'error',
      message:string} | {
      type:'Xerror',
      message:string
    } | {
      type:'Xsuccess',
      message:string
    }| null



    let runReset:any

    

    React.useEffect(() => {
      if(notfication){
        console.log(  console.log(notfication,'notiixexexxexexexexexexexxdexzf'))
        runReset = setTimeout(() => {
            setnotfication(null)
        }, 2000);
      }
      return () => {
        if(runReset){
            clearTimeout(runReset)
        }
        
      }
    }, [notfication]);

  return (
    {notfication, setnotfication}
  )
}

export default useNotification