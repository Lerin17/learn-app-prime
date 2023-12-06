import { useRouter } from 'next/router'
import React from 'react'

import YourNetwork from '../../../components/you/YourNetwork'
import { UserContext } from '../../../context/UserContext'
import { Iusercontext } from '../../../types/context/usercontext'



const Link = () => {

    // const {subscribeToUrlLink, setsubscribeToUrlLink} = React.useContext(UserContext) as Iusercontext

    const path = useRouter().asPath

    const splitPath = path.split('/')

    console.log(splitPath, 'splitPath')

    
    const Link = `${splitPath[splitPath.length - 1]}` 

    console.log(Link, 'splitLink')

    const [subscribeUrlLink, setsubscribeUrlLink] = React.useState(Link);

    const [isClearLink, setisClearLink] = React.useState(false);

    const clearsubscribetoLink = () => {
      // setsubscribeToUrlLink('')
      setisClearLink(true)
    }

    console.log(isClearLink, 'isClearLink')
    
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