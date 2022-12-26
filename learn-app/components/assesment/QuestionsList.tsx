import React from 'react'
import { AssesmentContext } from '../../context/AssesmentContext'
import { Iassesmentcontext } from '../../types/context/assesmentcontext'

import { Iquestion } from '../../types/context/assesmentcontext'

import ReactSelect, {StylesConfig} from 'react-select'
import TextAlt2 from '../GeneralPurpose/TextAlt2'

const QuestionsList = () => {
    const {isCreateQuestionsOpen, setisCreateQuestionsOpen, QuestionsArray, TagsOptions} = React.useContext(AssesmentContext) as Iassesmentcontext

   const [TagsArrayPool, setTagsArrayPool] = React.useState([]);
   
   const [textTest, settextTest] = React.useState('11');

//    const [textAltValue, settextAltValue] = React.useState();



   const [FilteredQuestionsArray, setFilteredQuestionsArray] = React.useState<Iquestion[]>([]);

//    React.useEffect(() => {
//     if(FilteredQuestionsArray.length == 10){
//         setTimeout(() => {
//              setFilteredQuestionsArray(new Array(12))
//     }, 2000);
//     }
//    }, [FilteredQuestionsArray]);
 



//    setTimeout(() => {
//     console.log('rcrc')
//         setFilteredQuestionsArray(new Array(12))
// }, 2000);

    const QuestionComponent = (props:Iquestion) => {
        return (<div className='border-y px-2' >
            {props.question}
        </div>)
    }

    let AvailableQuestionsArray = []

    React.useEffect(() => {
        console.log(QuestionsArray)
        const filteredQuestions = TagsArrayPool.length? QuestionsArray.filter(item => {
        if(item.tags.length && Array.from(new Set([...TagsArrayPool, ...item.tags])).length == TagsArrayPool.length){
            return item
        }
        }):QuestionsArray
        console.log('jammm and the such')
        console.log(filteredQuestions,'filterdQuestions')

        //hashed out
        setFilteredQuestionsArray(filteredQuestions)


        // Array.from(new Set(PlayerOne.concat(PlayerTwo)) ).length
    }, [TagsArrayPool]);

    const QuestionsDisplay = FilteredQuestionsArray? FilteredQuestionsArray.map(item => (
        <QuestionComponent
        question={item.question}
        answers={item.answers}
        id={item.id}
        tags={item.tags}
        correctanswer={item.correctanswer}
        />
    )):<div>
        No question Created yet
    </div>

    const handleSelectChange = (e:any) => {
        const getTagsArray = e.map((item:any) => (item.value))

        setTagsArrayPool(getTagsArray)
    }

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]

  const selectStyles:StylesConfig = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' , border:'none'})

  }
  return (
    <div>
        <div className='border bg-white w-full' >
        <ReactSelect
  className='text-base focus:border-none z-30 block'
   options={TagsOptions}
   isMulti
//    onChange={}
   onChange={(e:any)=>{
    handleSelectChange(e)
   }}
   styles={
    selectStyles
    // display:'absolute'
   }
  />
        </div>
            <div
            style={{
                height:500
            }}
            className='flex justify-between'>
                <div 
                style={{
                    // backgroundColor:'#69140E'
                }}
                className='bg-amber-900 rounded  font-header7 w-5/12' >
                    <div 
                    style={{
                        fontSize:200,
                        WebkitTextStroke:'2px gray',
                    }}
                    className='text-8xl text-transparent font-header7 text-center mt-4' >
                        <TextAlt2                  
                        // OriginalText='22'
                        textAlt= {String(FilteredQuestionsArray.length + 10)}
                        text={textTest}
                        animate={TagsArrayPool.length}
                        />
                    </div>
                    <div className='text-stone-300 flex justify-center font-header7'>
                    Available Questions
                    </div>

                    <div className='p-2  bg-amber-600'>
                        Finished Questions
                    </div>
                    <div className='p-2 bg-amber-700'>
                        Finished Questions
                    </div>
                    <div className='p-2  bg-amber-800'>
                        Finished Questions
                    </div>
             
                </div>
                <div className='w-7/12 bg-amber-900' >
                    <div>
                        <input
                        className='w-full'
                        placeholder='Search on QuestionUnits...'
                        />
                    </div>
                    {QuestionsDisplay}
                </div>
            </div>
    </div>
  )
}

export default QuestionsList