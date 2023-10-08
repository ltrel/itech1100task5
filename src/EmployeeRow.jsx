import { TableRow, TableCell } from "@mui/material"
import { useEffect, useState } from "react"
import NumberInput from "./NumberInput"
import { defaultFormatter, currencyFormatter, myParseFloat } from "./util"

function EmployeeRow({ casualWage, weeksPerYear, onTotalChange, initialData }) {
  const [wageString, setWageString] = useState(initialData.wage)
  const [hourFieldStrings, setHourFieldStrings] = useState(initialData.hours)
  const [weeksLeaveString, setWeeksLeaveString] = useState(initialData.weeksLeave)

  const wageNum = myParseFloat(wageString)
  const weeksLeaveNum = myParseFloat(weeksLeaveString)
  const weeklyHours = hourFieldStrings.reduce((acc, x) => {
    if (x === '') {
      return acc
    }
    return acc + parseFloat(x)
  }, 0)
  const totalCost = wageNum * weeklyHours * weeksPerYear + casualWage * weeklyHours * weeksLeaveNum

  useEffect(() => {
    onTotalChange(totalCost)
  }, [wageString, hourFieldStrings, weeksLeaveString])

  return (
    <TableRow>
      <TableCell>{initialData.name}</TableCell>
      <TableCell>
        <NumberInput value={wageString} onValueChange={setWageString} prefix="$" />
      </TableCell>
      {hourFieldStrings.map((x, i) => {
        return (
          <TableCell key={i}>
            <NumberInput value={x} onValueChange={(newVal) => setHourFieldStrings(hourFieldStrings.with(i, newVal))} />
          </TableCell>
        )
      })}
      <TableCell>
        <NumberInput value={weeksLeaveString} onValueChange={setWeeksLeaveString} />
      </TableCell>
      <TableCell>{defaultFormatter.format(weeklyHours)}</TableCell>
      <TableCell>{currencyFormatter.format(totalCost)}</TableCell>
    </TableRow>
  )
}
export default EmployeeRow