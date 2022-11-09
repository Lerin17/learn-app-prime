import React from 'react'

const AssesmentContext = React.createContext<any>(null)

const AssesmentContextProvider = (props:any) => {

    const [isCreateQuestionsOpen, setisCreateQuestionsOpen] = React.useState(false);


  return (
    <AssesmentContext.Provider value={{g:'s'}}>
        {props.children}
    </AssesmentContext.Provider>
  )
}

export {AssesmentContext, AssesmentContextProvider}
