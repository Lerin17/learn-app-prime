import React from 'react'
import { Select, MenuItem } from '@mui/material'

const ParentCourse = () => {

  
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

  return (
    <div>

      <Select
      size='small'
      >
      {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              // style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
      </Select>
      {/* <div>ddd</div>
      <div>ddd</div> */}
    </div>
  )
}

export default ParentCourse