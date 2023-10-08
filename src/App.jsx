import { Container, Typography } from '@mui/material'
import OperatingCosts from './OperatingCosts'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth='lg'>
      <Typography variant="h3">Leo Treloar - ITECH 1100 Assignment 2 - Bonus Task</Typography>
      <OperatingCosts />
    </Container>
  )
}

export default App
