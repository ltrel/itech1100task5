import { TextField, InputAdornment } from "@mui/material"
function NumberInput({ value, onValueChange, prefix }) {
  function handleChange(event) {
    const newVal = event.target.value
    if (!isNaN(newVal) || newVal == '.') {
      onValueChange(newVal)
    }
  }

  function reformat() {
    if (!isNaN(value) && value !== '') {
      onValueChange(parseFloat(value).toString())
    }
    else {
      onValueChange('0')
    }
  }

  return <TextField
    variant='standard'
    value={value}
    onChange={(e) => handleChange(e)}
    InputProps={{
      onBlur: reformat,
      startAdornment: <InputAdornment position="start">{prefix}</InputAdornment>
    }}
  />
}

export default NumberInput