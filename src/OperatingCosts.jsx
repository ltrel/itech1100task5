import { Typography, Stack, TextField, InputAdornment, Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import EmployeeRow from "./EmployeeRow"
import EmployeeTable from "./EmployeeTable"
import { useState } from "react"
import NumberInput from "./NumberInput"
import { myParseFloat } from "./util"

function OperatingCosts() {
  const [annualString, setAnnualString] = useState(0)
  const [monthlyString, setMonthlyString] = useState(0)
  const [casualString, setCasualString] = useState(37)
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
        <Typography variant='body1'>Casual Replacement Wage: </Typography>
        <Box>
          <NumberInput value={casualString} onValueChange={setCasualString} prefix={"$"}/>
        </Box>
      </Stack>
      <EmployeeTable casualWage={myParseFloat(casualString)} weeksPerYear={52}/>
    </Stack>
  )
}

export default OperatingCosts