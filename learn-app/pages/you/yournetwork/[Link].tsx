import { useRouter } from 'next/router'
import React from 'react'

import YourNetwork from '../../../components/you/YourNetwork'
import { UserContext } from '../../../context/UserContext'
import { Iusercontext } from '../../../types/context/usercontext'



const Link = () => {

    const {subscribeToUrlLink, setsubscribeToUrlLink} = React.useContext(UserContext) as Iusercontext

    const path = useRouter().asPath

    const splitPath = path.split('/')

    const Link = `${splitPath[splitPath.length - 1]}-${splitPath[splitPath.length - 2]}` 

    

    const [subscribeUrlLink, setsubscribeUrlLink] = React.useState(Link);

    const [isClearLink, setisClearLink] = React.useState(false);

    const clearsubscribetoLink = () => {
      setsubscribeToUrlLink('')
      setisClearLink(true)
    }
    
  return (
    <div className='text-stone-300'>
        <YourNetwork
        link={subscribeUrlLink}
        clearsubscribetoLink = {clearsubscribetoLink}
        isClearLink ={isClearLink}
        />
    </div>
  )
}

export default Link