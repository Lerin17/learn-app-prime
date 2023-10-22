import React from 'react'

const CreateTopic = (props:any) => {

    const Topiclists = () => {
       const noWeeks = props.weeks

        const ar = new Array(10)

        const Topics = ['','','','', '','','','','','','',''].map((item)=> {
            return (
                <div className='flex' >
                <div>week1</div>
                <input/>
            </div>
            )
            
            })

        return <div>{Topics}</div>
    }

    console.log(Topiclists)

  return (
    <div style={{
        height: 250
    }}  >
        <div className='flex flex-wrap w-1/3'>
            <Topiclists/>
        </div>
    </div>
  )
}

export default CreateTopic