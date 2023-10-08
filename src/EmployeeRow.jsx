import { TableRow, TableCell, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"

function EmployeeRow({name}) {
  const [hourFields, setHourFields] = useState([0,0,0,0,0,0,0])
  const [wage, setWage] = useState(0)

  function handleHoursChange(event, index) {
    if (isNaN(event.target.value) && event.target.value !== '.') {
      return
    }
    const newArray = [...hourFields]
    newArray[index] = event.target.value
    setHourFields(newArray)
  }

  function handleWageChange(event) {
    if (isNaN(event.target.value) && event.target.value !== '.') {
      return
    }
    setWage(event.target.value)
  }

  const totalHours = hourFields.reduce((acc, x) => acc + parseFloat(x), 0)

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>
        <TextField
          variant='standard'
          value={wage} onChange={handleWageChange}
          InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}
        />
      </TableCell>
      {hourFields.map((x, i) => {
        return (
          <TableCell key={i}>
            <TextField
              variant='standard'
              value={x}
              onChange={(e) => handleHoursChange(e, i)}
              InputProps={{onBlur: () => setHourFields(hourFields.with(i, 0))}}
            />
          </TableCell>
        )
      })}
      <TableCell>{totalHours.toString()}</TableCell>
      <TableCell>test2</TableCell>
    </TableRow>
  )
}
export default EmployeeRow