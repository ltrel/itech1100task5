import { Container, Typography, Stack, Divider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import OperatingCosts from './OperatingCosts'
import PriceCalculator from './PriceCalculator'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth='lg'>
        <Stack spacing={3}>
          <Typography variant="h3">Leo Treloar - ITECH 1100 Assignment 2 - Bonus Task</Typography>
          <OperatingCosts />
          <Divider />
          <PriceCalculator />
        </Stack>
      </Container>
    </LocalizationProvider>
  )
}

export default App
