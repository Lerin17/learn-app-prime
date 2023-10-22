import React from 'react'
import { AssesmentContext } from '../../../context/AssesmentContext'
import { Iassesmentcontext } from '../../../types/context/assesmentcontext'



const TimeQuickSelect = () => {

    
    const {currentTestQuestionsTimeInput, setcurrentTestQuestionTimeInput} = React.useContext(AssesmentContext) as Iassesmentcontext

  return (
    <div className='flex w-full items-center  flex-col h-full bg-orange-900 border-r text-xl'>
    <div
    style={{
        backgroundColor:'#3e2723'
    }}
    className='flex flex-col font-header7  items-center justify-center'>
    <div className='py-1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 14c0 5.523-4.478 10-10 10s-10-4.477-10-10 4.478-10 10-10 10 4.477 10 10zm-2 0c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8 8-3.589 8-8zm-6-11.819v-2.181h-4v2.181c1.408-.238 2.562-.243 4 0zm6.679 3.554l1.321-1.321-1.414-1.414-1.407 1.407c.536.402 1.038.844 1.5 1.328zm-8.679 2.265v6h6c0-3.309-2.691-6-6-6z"/></svg>
    </div>
    <div className='text-sm text-center'>
        Quick select
        </div>
    </div>
 
    <div className='h-full flex text-xl font-header7 flex-col w-full'>
     
        <div
        style={{
            height:'15%',
            backgroundColor:'#4e342e'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:2, minutes:0, seconds:0})}
        className='border-y w-full   transition-all cursor-pointer hover:text-black flex justify-center items-center text-center '>
            2hrs
        </div>

        <div
        style={{
            height:'15%',
            backgroundColor:'#5d4037'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:1, minutes:30, seconds:0})}
        className='border-y w-full  transition-all cursor-pointer hover:text-black flex justify-center items-center text-center '>
            1hr30m
        </div>

        <div 
         style={{
            height:'10%',
            backgroundColor:'#6d4c41'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:1, minutes:0, seconds:0})}
        className='border-b w-full   transition-all cursor-pointer hover:text-black flex justify-center items-center text-center '>
            1hr
        </div>

        <div
        style={{
            height:'10%',
            backgroundColor:'#795548'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:0, minutes:45, seconds:0})}
        className='border-b flex justify-center items-center cursor-pointer hover:text-black transition-all w-full text-center'>
            45m
        </div>

        <div 
        style={{
            height:'10%',
            backgroundColor:'#8d6e63'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:0, minutes:30, seconds:0})}
        className='border-b h-12 flex justify-center items-center cursor-pointer hover:text-black transition-all w-full text-center'>
            30m
        </div>

        <div 
        style={{
            height:'5%',
            backgroundColor:'#5d4037'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:0, minutes:10, seconds:0})}
        className='border-b h-8 flex justify-center items-center cursor-pointer hover:text-black transition-all w-full text-center'>
            10m
        </div>

        <div 
        style={{
            height:'5%',
            backgroundColor:'#a1887f'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:0, minutes:5, seconds:0})}
        className='border-b h-8 flex justify-center items-center cursor-pointer hover:text-black transition-all w-full text-center'>
            5m
        </div>

        {/* <div 
        style={{
            height:'5%'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:0, minutes:1, seconds:0})}
        className='border-b h-8 flex justify-center items-center cursor-pointer hover:text-black transition-all w-full text-center'>
            1m
        </div>

        <div 
        style={{
            height:'5%'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:0, minutes:0, seconds:30})}
        className='border-b h-8 flex justify-center items-center cursor-pointer hover:text-black transition-all w-full text-center'>
            30s
        </div>

        <div 
        style={{
            height:'5%'
        }}
        onClick={()=>setcurrentTestQuestionTimeInput({hours:0, minutes:0, seconds:15})}
        className='border-b h-8 flex justify-center items-center cursor-pointer hover:text-black  transition-all w-full text-center'>
            15s
        </div> */}
    </div>

</div>

  )
}

export default TimeQuickSelect