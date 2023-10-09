import { MenuItem, Select, Stack, Typography } from "@mui/material"
import { useState } from "react"
import NumberInput from "./NumberInput"
import { DatePicker } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { currencyFormatter, myParseFloat } from "./util"

function judgeBook(quality, publicationDate, coverType) {
  const today = dayjs()
  const yearsDiff = today.diff(publicationDate, 'year')

  switch (quality) {
    case 'terrible':
      return 'Reject'
    case 'poor':
      return 'Low'
    case 'good':
      if (yearsDiff > 15) {
        return 'Low'
      } else {
        return coverType === 'hardcover' ? 'High' : 'Medium'
      }
  }
}

function PriceCalculator () {
  const [lowString, setLowString] = useState(18.52)
  const [medString, setMedString] = useState(26.22)
  const [highString, setHighString] = useState(43.30)

  const [quality, setQuality] = useState('good')
  const [date, setDate] = useState(dayjs('2017-01-01'))
  const [coverType, setCoverType] = useState('hardcover')

  const outcome = judgeBook(quality, date, coverType)
  const offerPrice = (() => {
    switch (outcome) {
      case 'Reject':
        return 0
      case 'Low':
        return myParseFloat(lowString)
      case 'Medium':
        return myParseFloat(medString)
      case 'High':
        return myParseFloat(highString)
  }})()

  return (
    <Stack spacing={3}>
      <Typography variant='h4'>Task 2. Price Automation</Typography>
      <Stack>
        <Typography variant='h5'>Price values</Typography>
        <Stack direction='row' spacing={2}>
          <Stack>
            <Typography variant='body1'>Low:</Typography>
            <NumberInput value={lowString} onValueChange={setLowString} prefix={"$"}/>
          </Stack>
          <Stack>
            <Typography variant='body1'>Medium:</Typography>
            <NumberInput value={medString} onValueChange={setMedString} prefix={"$"}/>
          </Stack>
          <Stack>
            <Typography variant='body1'>High:</Typography>
            <NumberInput value={highString} onValueChange={setHighString} prefix={"$"}/>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant='h5'>Book details</Typography>
        <Stack direction='row' spacing={2}>
          <Stack>
            <Typography variant='body1'>Quality:</Typography>
            <Select sx={{minWidth: '215px'}} variant='standard' value={quality} onChange={(e) => setQuality(e.target.value)}>
              <MenuItem value='terrible'>Terrible</MenuItem>
              <MenuItem value='poor'>Poor</MenuItem>
              <MenuItem value='good'>Good</MenuItem>
            </Select>
          </Stack>
          <Stack>
            <Typography variant='body1'>Cover type:</Typography>
            <Select sx={{minWidth: '215px'}} variant='standard' value={coverType} onChange={(e) => setCoverType(e.target.value)}>
              <MenuItem value='paperback'>Papberback</MenuItem>
              <MenuItem value='hardcover'>Hardcover</MenuItem>
            </Select>
          </Stack>
          <Stack>
            <Typography variant='body1'>Date published:</Typography>
            <DatePicker sx={{
              '& .MuiInputBase-root': {
                height: '2rem',
                width: '215px'
              }
            }} value={date} onChange={setDate}/>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant='h5'>Results</Typography>
        <Typography variant='body1'>Outcome: {outcome}</Typography>
        <Typography variant='body1'>Price to offer: {currencyFormatter.format(offerPrice)}</Typography>
      </Stack>
    </Stack>
  )
}

export default PriceCalculator