import { Typography, Stack, Box } from "@mui/material"
import EmployeeTable from "./EmployeeTable"
import { useState } from "react"
import NumberInput from "./NumberInput"
import { myParseFloat, currencyFormatter } from "./util"

const initialEmployeeData = [
  {
    name: 'Andres',
    wage: 0,
    hours: [3.5,3.5,3.5,0,0,0],
    weeksLeave: 0
  },
  {
    name: 'Belle',
    wage: 0,
    hours: [0,0,0,3.5,3.5,3.5],
    weeksLeave: 0
  },
  {
    name: 'Carl',
    wage: 25,
    hours: [5,5,5,5,5,0],
    weeksLeave: 4
  }
]

function OperatingCosts() {
  const [annualString, setAnnualString] = useState(2950)
  const [monthlyString, setMonthlyString] = useState(210)
  const [casualString, setCasualString] = useState(37)
  const [monthsPerYearString, setMonthsPerYearString] = useState(12)
  const [weeksPerYearString, setWeeksPerYearString] = useState(52)

  const [labourTotal, setLabourTotal] = useState(0)
  const fixedTotal = myParseFloat(annualString) + myParseFloat(monthlyString) * myParseFloat(monthsPerYearString)
  const grandTotal = fixedTotal + labourTotal

  return (
    <Stack spacing={3}>
      <Typography variant='h4'>Task 1. Operating Costs</Typography>
      <Stack>
        <Typography variant='h5'>Fixed Costs</Typography>
        <Stack direction="row" spacing={2}>
          <Stack>
            <Typography variant='body1'>Rent and insurance (annual):</Typography>
            <NumberInput value={annualString} onValueChange={setAnnualString} prefix={"$"}/>
          </Stack>
          <Stack>
            <Typography variant='body1'>Utilities (monthly): </Typography>
            <NumberInput value={monthlyString} onValueChange={setMonthlyString} prefix={"$"}/>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant='h5'>Labour costs</Typography>
        <Typography variant='body1'>Casual replacement wage: </Typography>
        <Box>
          <NumberInput value={casualString} onValueChange={setCasualString} prefix={"$"}/>
        </Box>
      </Stack>
      <EmployeeTable
        casualWage={myParseFloat(casualString)}
        weeksPerYear={myParseFloat(weeksPerYearString)}
        onTotalChange={setLabourTotal}
        initialData={initialEmployeeData}
      />
      <Stack>
        <Typography variant='h5'>Misc. Parameters</Typography>
        <Stack direction="row" spacing={2}>
          <Stack>
            <Typography variant='body1'>Months per year:</Typography>
            <NumberInput value={monthsPerYearString} onValueChange={setMonthsPerYearString}/>
          </Stack>
          <Stack>
            <Typography variant='body1'>Weeks per year:</Typography>
            <NumberInput value={weeksPerYearString} onValueChange={setWeeksPerYearString}/>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="h5">Results</Typography>
        <Typography variant="body1">Total annual fixed costs: {currencyFormatter.format(fixedTotal)}</Typography>
        <Typography variant="body1">Total annual labour costs: {currencyFormatter.format(labourTotal)}</Typography>
        <Typography variant="body1">Grand total annual costs: {currencyFormatter.format(grandTotal)}</Typography>
      </Stack>
    </Stack>
  )
}

export default OperatingCosts