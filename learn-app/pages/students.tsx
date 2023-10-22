import React from 'react'
import StudentLibary from '../components/students/StudentLibary'


import {TiPlusOutline} from 'react-icons/ti'
import {BiSearchAlt} from 'react-icons/bi'
import { Button } from '@mui/material'
import StudentCP from '../components/students/StudentCP'
import { StudentContext } from '../context/StudentContext'
import chroma from 'chroma-js'

import { Istudentcontext } from '../types/context/studentcontext'
import { HiSearchCircle } from 'react-icons/hi'
import { DuttonSmall } from '../components/GeneralPurpose/dutton'
import NewStudentpanel from '../components/students/NewStudentpanel'
import ReactSelect, {StylesConfig} from 'react-select'
import AnimationContainer from '../components/GeneralPurpose/AnimationContainer'
import { UtilityContext } from '../context/UtilityContext'

import { Iutilitycontext } from '../types/context/utilitycontext'

import StudentsHome from '../components/students/StudentsHome'

const students = () => {

    const {openAssesmentPanel, isAssesmentopen,   isNewStudentOpen} = React.useContext(StudentContext) as Istudentcontext

    
const {routerLocation} = React.useContext(UtilityContext) as Iutilitycontext

    const colourStyles: StylesConfig = {
        control: (baseStyles, state) => ({ ...baseStyles, backgroundColor: 'white', borderRadius:'0px', 
        borderColor: state.isFocused ? '' : 'gray',
        borderWidth:"2px"
    
    }),

        
      
      };

      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

  return (
  <AnimationContainer
  key={routerLocation}
  Component={<StudentsHome/>}
  condition={true}
  />
  )
}

export default students