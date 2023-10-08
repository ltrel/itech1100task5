import { Typography, Stack, TextField, InputAdornment, Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import EmployeeRow from "./EmployeeRow"
import EmployeeTable from "./EmployeeTable"

function OperatingCosts() {
  return (
    <Stack spacing={3}>
      <Typography variant='h4'>Task 1. Operating Costs</Typography>
      <Stack>
        <Typography variant='h5'>Fixed Costs</Typography>
        <Stack direction="row" spacing={2}>
          <Stack>
            <Typography variant='body1'>Rent and insurance (annual):</Typography>
            <TextField variant="standard" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
          </Stack>
          <Stack>
            <Typography variant='body1'>Utilities (monthly): </Typography>
            <TextField variant="standard" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant='h5'>Labour costs</Typography>
        <Typography variant='body1'>Casual Replacement Wage: </Typography>
        <Box>
          <TextField variant="standard" InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
        </Box>
      </Stack>
      <EmployeeTable/>
    </Stack>
  )
}

export default OperatingCosts