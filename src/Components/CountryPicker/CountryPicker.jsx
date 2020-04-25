import React, { memo } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

const CountryPicker = ({ countries, onChange }) => {
  const onChangeHandler = (event) => {
    const value = event.target.value
    onChange(value)
  }

  return (
    <Box mb={5}>
      <Grid container justify='center'>
        <FormControl>
          <InputLabel shrink htmlFor='location'>
            Location
          </InputLabel>
          <Select
            native
            onChange={onChangeHandler}
            inputProps={{
              name: 'location',
              id: 'location',
            }}>
            <option value=''>The World</option>
            {countries.map((country) => (
              <option value={country} key={country}>
                {country}
              </option>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Box>
  )
}

export default memo(CountryPicker)
