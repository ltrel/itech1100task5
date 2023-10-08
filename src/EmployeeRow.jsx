import { TableRow, TableCell } from "@mui/material"
import { useState } from "react"
import NumberInput from "./NumberInput"
import { defaultFormatter, currencyFormatter } from "./util"

function EmployeeRow({name, casualWage, weeksPerYear}) {
  const [wageString, setWageString] = useState(0)
  const [hourFieldStrings, setHourFieldStrings] = useState([0,0,0,0,0,0])
  const [weeksLeaveString, setWeeksLeaveString] = useState(0)

  const wageNum = wageString === '' ? 0 : parseFloat(wageString)
  const weeksLeaveNum = weeksLeaveString === '' ? 0 : parseFloat(weeksLeaveString)
  const weeklyHours = hourFieldStrings.reduce((acc, x) => {
    if (x === '') {
      return acc
    }
    return acc + parseFloat(x)
  }, 0)
  const totalCost = wageNum * weeklyHours * weeksPerYear + casualWage * weeklyHours * weeksLeaveNum

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>
        <NumberInput value={wageString} onValueChange={setWageString} prefix="$"/>
      </TableCell>
      {hourFieldStrings.map((x, i) => {
        return (
          <TableCell key={i}>
            <NumberInput value={x} onValueChange={(newVal) => setHourFieldStrings(hourFieldStrings.with(i, newVal))}/>
          </TableCell>
        )
      })}
      <TableCell>
        <NumberInput value={weeksLeaveString} onValueChange={setWeeksLeaveString}/>
      </TableCell>
      <TableCell>{defaultFormatter.format(weeklyHours)}</TableCell>
      <TableCell>{currencyFormatter.format(totalCost)}</TableCell>
    </TableRow>
  )
}
export default EmployeeRow