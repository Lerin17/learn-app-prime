import React from 'react'

const StudentLibary = () => {

const StudentArray = new Array(20).fill('x')

const StudentLibaryDisplay = StudentArray.map(item => <div style={{
    height: '100px',
    width: '100px'
}} className='text-white border-2 border-black rounded-xl border-r-none bg-gradient-to-b from-black via-black to-gray-800 bg-gradient-to-r rhombus ' >
    *
</div>)

  return (
    <div className='flex flex-wrap  ' >
        {StudentLibaryDisplay}
    </div>
  )
}

export default StudentLibary