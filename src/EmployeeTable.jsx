import { TableBody, TableContainer, TableHead, TableRow, TableCell, Table, Paper, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import EmployeeRow from "./EmployeeRow"

function EmployeeTable({ casualWage, weeksPerYear, onTotalChange, initialData }) {
  const [employeeTotals, setEmployeeTotals] = useState([0, 0, 0])

  useEffect(() => {
    onTotalChange(employeeTotals.reduce((acc, x) => acc + x))
  }, [employeeTotals])

  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table size="small">
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
            {initialData.map((employeeData, index) =>
              <EmployeeRow
                key={index}
                casualWage={casualWage}
                weeksPerYear={weeksPerYear}
                onTotalChange={(x) => setEmployeeTotals(employeeTotals.with(index, x))}
                initialData={employeeData}
              />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  )
}

export default EmployeeTable