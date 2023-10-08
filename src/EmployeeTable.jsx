import { TableBody, TableContainer, TableHead, TableRow, TableCell, Table, Paper } from "@mui/material"
import EmployeeRow from "./EmployeeRow"

function EmployeeTable({casualWage, weeksPerYear}) {
  const employeeNames = ['Andres', 'Belle', 'Carl']
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee name</TableCell>
            <TableCell>Hourly wage</TableCell>
            <TableCell>Moday hours</TableCell>
            <TableCell>Tuesday hours</TableCell>
            <TableCell>Wednesday hours</TableCell>
            <TableCell>Thursday hours</TableCell>
            <TableCell>Friday hours</TableCell>
            <TableCell>Saturday hours</TableCell>
            <TableCell>Weeks of paid annual leave</TableCell>
            <TableCell>Weekly hours</TableCell>
            <TableCell>Total cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeNames.map((name => 
            <EmployeeRow key={name} name={name} casualWage={casualWage} weeksPerYear={weeksPerYear}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmployeeTable